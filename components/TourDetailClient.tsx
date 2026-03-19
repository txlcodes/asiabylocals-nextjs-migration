'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Star,
  Share2,
  Calendar,
  Users,
  Globe,
  CheckCircle2,
  Clock,
  MapPin,
  User,
  ChevronLeft,
  ChevronRight,
  X,
  Info,
  Bus,
  Loader2,
  Mail,
  Phone,
  MessageCircle,
  CheckCircle,
  ShieldCheck,
  Zap,
  HelpCircle,
  FileText,
  List,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Map,
  Landmark,
  Utensils,
  Home
} from 'lucide-react';
import Image from 'next/image';
import BookingForm from '@/components/BookingForm';
import RelatedTours from '@/components/RelatedTours';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getTourSpecificFAQs } from '@/lib/tourFaqs';
import { getTourReviews } from '@/lib/tourReviews';
import type { TourReview } from '@/lib/tourReviews';

interface TourDetailClientProps {
  tour: any;
  country: string;
  city: string;
}



const formatDurationHours = (hours: number | string) => {
  const h = typeof hours === 'string' ? parseFloat(hours) : hours;
  if (!h || isNaN(h)) return '';

  // Display hours normally (no special overrides)

  // Convert multiples of 24 to days
  if (h >= 24 && h % 24 === 0) {
    const d = h / 24;
    return `${d} ${d === 1 ? 'day' : 'days'}`;
  }

  return `${h} ${h === 1 ? 'hour' : 'hours'}`;
};

const formatDurationDisplay = (durationStr: string | null | undefined) => {
  if (!durationStr) return null;

  // Match days or hours
  const match = durationStr.match(/(\d+(?:\.\d+)?)\s*(days?|hours?|hrs?)/i);
  if (!match) return durationStr;

  const num = parseFloat(match[1]);
  const unit = match[2].toLowerCase();

  // Special override: 6 hours = 6 days
  if (unit.startsWith('h') && num === 6) {
    return '6 days';
  }

  // Convert hours to days if multiples of 24
  if (unit.startsWith('h') && num >= 24 && num % 24 === 0) {
    const d = num / 24;
    return `${d} ${d === 1 ? 'day' : 'days'}`;
  }

  // Return as is if already days or not a multiple of 24
  return durationStr;
};

// Sanitize garbled itinerary duration strings — only show if cleanly formatted
const sanitizeItineraryDuration = (dur: string | null | undefined): string | null => {
  if (!dur) return null;
  const trimmed = dur.trim();
  // Only show if the entire string is a clean "number unit" format (e.g. "45 minutes", "3.5 hours")
  const clean = trimmed.match(/^(\d+(?:\.\d+)?)\s*(minutes?|mins?|hours?|hrs?|days?)$/i);
  if (clean) return trimmed;
  // Everything else (garbled text like "sruoh 6630 minutes") is hidden
  return null;
};

const TourDetailClient: React.FC<TourDetailClientProps> = ({ tour: initialTour, country, city }) => {
  const [tour, setTour] = useState<any>(initialTour);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [participants, setParticipants] = useState(1);
  const [isCustomParticipants, setIsCustomParticipants] = useState(false);
  const [customParticipants, setCustomParticipants] = useState(11);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [calendarMonth, setCalendarMonth] = useState(new Date());
  const [availabilityStatus, setAvailabilityStatus] = useState<'idle' | 'checking' | 'available' | 'unavailable'>('idle');
  const [showOptionSelectionModal, setShowOptionSelectionModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showGuideContactModal, setShowGuideContactModal] = useState(false);
  const [guideContactInfo, setGuideContactInfo] = useState<any>(null);
  const [pendingBookingData, setPendingBookingData] = useState<any>(null);
  const [isInitializingPayment, setIsInitializingPayment] = useState(false);
  const [bookingData, setBookingData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    specialRequests: ''
  });
  const [bookingError, setBookingError] = useState<string | null>(null);
  const [expandedOptions, setExpandedOptions] = useState<Set<number>>(new Set());
  const [expandedFAQs, setExpandedFAQs] = useState<Set<number>>(new Set([0, 1, 2])); // First 3 open by default

  const effectiveMaxGroupSize = Number(selectedOption?.maxGroupSize || tour?.maxGroupSize || 10);

  // Re-validate participants if maxGroupSize changes (e.g. when changing options)
  useEffect(() => {
    if (tour && participants > effectiveMaxGroupSize) {
      setParticipants(effectiveMaxGroupSize);
      if (isCustomParticipants && effectiveMaxGroupSize <= 10) {
        setIsCustomParticipants(false);
      }
    }
  }, [effectiveMaxGroupSize, tour]);



  const toggleOptionExpand = (optionId: number) => {
    setExpandedOptions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(optionId)) {
        newSet.delete(optionId);
      } else {
        newSet.add(optionId);
      }
      return newSet;
    });
  };

  const toggleFAQExpand = (idx: number) => {
    setExpandedFAQs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(idx)) {
        newSet.delete(idx);
      } else {
        newSet.add(idx);
      }
      return newSet;
    });
  };

  const bookingBoxRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  // Calculate price based on group pricing tiers and number of participants
  const calculateGroupPrice = (tourData: any, numParticipants: number): number | null => {
    console.log('═══════════════════════════════════════════════════════════');
    console.log('💰 PRICING CALCULATION START');
    console.log('═══════════════════════════════════════════════════════════');
    console.log('📥 Input:', {
      tourDataId: tourData?.id || tourData?.tourId,
      optionTitle: tourData?.optionTitle || 'Main Tour',
      numParticipants,
      hasGroupPricingTiers: !!tourData?.groupPricingTiers,
      groupPricingTiersType: typeof tourData?.groupPricingTiers
    });

    if (!tourData) {
      console.error('❌ PRICING ERROR: tourData is null/undefined');
      return null;
    }

    // CRITICAL: Check Tour.groupPricingTiers FIRST (PRIMARY SOURCE - most reliable)
    // This is now stored directly on Tour model, simple and reliable
    let groupPricingTiers = null;


    if (tour && tour.groupPricingTiers) {
      console.log('🔍 PRIMARY: Checking tour.groupPricingTiers (Tour model - PRIMARY SOURCE)...');
      try {
        if (typeof tour.groupPricingTiers === 'string') {
          groupPricingTiers = JSON.parse(tour.groupPricingTiers);
        } else if (Array.isArray(tour.groupPricingTiers)) {
          groupPricingTiers = tour.groupPricingTiers;
        }
        if (groupPricingTiers && Array.isArray(groupPricingTiers) && groupPricingTiers.length > 0) {
          console.log('✅ PRIMARY: Found groupPricingTiers on Tour model:', groupPricingTiers);
        }
      } catch (e) {
        console.error('❌ Failed to parse tour.groupPricingTiers:', e);
      }
    }

    // FALLBACK: Check tourData.groupPricingTiers (for options with custom pricing)
    if (!groupPricingTiers && tourData.groupPricingTiers) {
      console.log('🔍 FALLBACK: Checking tourData.groupPricingTiers (option custom pricing)...');
      let rawPricingData = tourData.groupPricingTiers;

      console.log('📦 Supplier pricing response (raw):', {
        raw: rawPricingData,
        type: typeof rawPricingData,
        isString: typeof rawPricingData === 'string',
        isArray: Array.isArray(rawPricingData)
      });

      try {
        // Handle both string and object formats
        if (typeof tourData.groupPricingTiers === 'string') {
          console.log('📝 Parsing groupPricingTiers from string...');
          const parsed = JSON.parse(tourData.groupPricingTiers);
          groupPricingTiers = Array.isArray(parsed) ? parsed : null;
          console.log('✅ Parsed pricing slabs:', groupPricingTiers);
        } else if (Array.isArray(tourData.groupPricingTiers)) {
          console.log('✅ Using groupPricingTiers as array directly');
          groupPricingTiers = tourData.groupPricingTiers;
        } else {
          console.warn('⚠️ groupPricingTiers has unexpected type:', typeof tourData.groupPricingTiers);
        }
      } catch (e) {
        console.error('❌ PRICING ERROR: Failed to parse groupPricingTiers:', e);
        console.error('   Raw data:', rawPricingData);
        groupPricingTiers = null;
      }
    }

    // CRITICAL FALLBACK 2: Check main tour's options for groupPricingTiers
    // This handles both main tour and options (options fall back to main tour pricing)
    if (!groupPricingTiers && tour && tour.options && Array.isArray(tour.options) && tour.options.length > 0) {
      console.log('🔍 Checking main tour options for groupPricingTiers fallback...');
      console.log('   Total options available:', tour.options.length);

      // Find main tour option (sortOrder -1 or first option)
      const mainTourOption = tour.options.find((opt: any) => opt.sortOrder === -1) || tour.options[0];

      console.log('   Main tour option:', {
        id: mainTourOption?.id,
        title: mainTourOption?.optionTitle,
        sortOrder: mainTourOption?.sortOrder,
        hasGroupPricingTiers: !!mainTourOption?.groupPricingTiers
      });

      if (mainTourOption && mainTourOption.groupPricingTiers) {
        try {
          console.log('   Found groupPricingTiers on main tour option, parsing...');
          if (typeof mainTourOption.groupPricingTiers === 'string') {
            const parsed = JSON.parse(mainTourOption.groupPricingTiers);
            groupPricingTiers = Array.isArray(parsed) ? parsed : null;
            console.log('✅ Parsed pricing slabs from main tour option:', groupPricingTiers);
          } else if (Array.isArray(mainTourOption.groupPricingTiers)) {
            groupPricingTiers = mainTourOption.groupPricingTiers;
            console.log('✅ Using main tour option pricing slabs directly:', groupPricingTiers);
          }
        } catch (e) {
          console.error('❌ PRICING ERROR: Failed to parse groupPricingTiers from main tour option:', e);
          console.error('   Raw data:', mainTourOption.groupPricingTiers);
        }
      } else {
        // Fallback: Check ALL options for groupPricingTiers (in case main tour option doesn't have it)
        console.log('⚠️ Main tour option has no groupPricingTiers, checking all options...');
        for (const opt of tour.options) {
          console.log(`   Checking option "${opt.optionTitle}" (sortOrder: ${opt.sortOrder}):`, {
            hasGroupPricingTiers: !!opt.groupPricingTiers,
            type: typeof opt.groupPricingTiers
          });
          if (opt.groupPricingTiers) {
            try {
              let parsed = null;
              if (typeof opt.groupPricingTiers === 'string') {
                parsed = JSON.parse(opt.groupPricingTiers);
              } else if (Array.isArray(opt.groupPricingTiers)) {
                parsed = opt.groupPricingTiers;
              }
              if (Array.isArray(parsed) && parsed.length > 0) {
                groupPricingTiers = parsed;
                console.log(`✅ Found groupPricingTiers in option "${opt.optionTitle}":`, groupPricingTiers);
                break; // Use first option that has valid tiers
              }
            } catch (e) {
              console.error(`❌ PRICING ERROR: Failed to parse groupPricingTiers from option ${opt.id}:`, e);
            }
          }
        }
      }
    }

    // CRITICAL: Log parsed pricing slabs
    if (groupPricingTiers && Array.isArray(groupPricingTiers) && groupPricingTiers.length > 0) {
      console.log('📊 Parsed pricing slabs:', groupPricingTiers);
      console.log('   Total slabs:', groupPricingTiers.length);

      // CRITICAL: Always log the default price (1-1 person)
      const defaultSlab = groupPricingTiers.find((t: any) => t.minPeople === 1 && t.maxPeople === 1);
      if (defaultSlab) {
        console.log('✅ Default price (1-1 person):', defaultSlab.price);
      } else {
        console.warn('⚠️ WARNING: No 1-1 person slab found! First slab:', groupPricingTiers[0]);
      }
    } else {
      console.warn('⚠️ WARNING: No pricing slabs found! Attempting fallback...');
      console.warn('   Pricing mismatch reason: groupPricingTiers is null or empty');
      console.warn('   tourData:', {
        id: tourData.id || tourData.tourId,
        optionTitle: tourData.optionTitle,
        hasGroupPricingTiers: !!tourData.groupPricingTiers,
        pricePerPerson: tourData.pricePerPerson || tour?.pricePerPerson,
        maxGroupSize: tourData.maxGroupSize || tour?.maxGroupSize
      });

      // CRITICAL FALLBACK: Check main tour's groupPricingTiers before using multiplication
      // If tourData is an option without groupPricingTiers, use main tour's tiers
      console.log('🔍 FALLBACK: Checking main tour for groupPricingTiers...');

      // FALLBACK 1: Check main tour option (sortOrder: -1) - this should have the main tour's tiers
      if (!groupPricingTiers && tour && tour.options && Array.isArray(tour.options) && tour.options.length > 0) {
        const mainTourOption = tour.options.find((opt: any) => opt.sortOrder === -1) || tour.options[0];
        console.log('   Checking main tour option:', {
          id: mainTourOption?.id,
          title: mainTourOption?.optionTitle,
          sortOrder: mainTourOption?.sortOrder,
          hasGroupPricingTiers: !!mainTourOption?.groupPricingTiers
        });

        if (mainTourOption && mainTourOption.groupPricingTiers) {
          try {
            let mainTiers = null;
            if (typeof mainTourOption.groupPricingTiers === 'string') {
              mainTiers = JSON.parse(mainTourOption.groupPricingTiers);
            } else if (Array.isArray(mainTourOption.groupPricingTiers)) {
              mainTiers = mainTourOption.groupPricingTiers;
            }

            if (Array.isArray(mainTiers) && mainTiers.length > 0) {
              console.log('✅ FALLBACK: Found main tour option groupPricingTiers, using for calculation');
              console.log('   Pricing slabs:', mainTiers);
              groupPricingTiers = mainTiers;
              // Continue to tier matching logic below - skip multiplication fallback
            }
          } catch (e) {
            console.error('❌ Failed to parse main tour option groupPricingTiers:', e);
          }
        }
      }

      // FALLBACK 2: If still no tiers, check tour.groupPricingTiers directly
      if (!groupPricingTiers && tour && tour.groupPricingTiers) {
        console.log('🔍 FALLBACK 2: Checking tour.groupPricingTiers directly...');
        try {
          let mainTiers = null;
          if (typeof tour.groupPricingTiers === 'string') {
            mainTiers = JSON.parse(tour.groupPricingTiers);
          } else if (Array.isArray(tour.groupPricingTiers)) {
            mainTiers = tour.groupPricingTiers;
          }

          if (Array.isArray(mainTiers) && mainTiers.length > 0) {
            console.log('✅ FALLBACK: Found tour.groupPricingTiers, using for calculation');
            console.log('   Pricing slabs:', mainTiers);
            groupPricingTiers = mainTiers;
          }
        } catch (e) {
          console.error('❌ Failed to parse tour.groupPricingTiers:', e);
        }
      }

      // FALLBACK 3: If we STILL don't have groupPricingTiers, try TEMPORARY multiplication fallback
      if (!groupPricingTiers || !Array.isArray(groupPricingTiers) || groupPricingTiers.length === 0) {
        const fallbackPricePerPerson = tourData.pricePerPerson || tourData.price || tour?.pricePerPerson;
        const fallbackMaxGroupSize = tourData.maxGroupSize || tour?.maxGroupSize || 10;

        if (fallbackPricePerPerson && fallbackPricePerPerson > 0) {
          console.warn('⚠️ WARNING: Using TEMPORARY multiplication fallback');
          console.warn('   This means groupPricingTiers is missing from database');
          console.warn('   pricePerPerson:', fallbackPricePerPerson);
          console.warn('   maxGroupSize:', fallbackMaxGroupSize);
          console.warn('⚠️ Tour should be edited and re-submitted to save proper groupPricingTiers');

          // CRITICAL: For fallback, return pricePerPerson * numParticipants
          // This makes pricing dynamic even without proper tiers
          // NOTE: This is NOT ideal - proper tiered pricing should be saved in database
          const fallbackPrice = parseFloat(fallbackPricePerPerson.toString()) * numParticipants;
          console.log('💰 Fallback calculated price:', fallbackPrice, `(${fallbackPricePerPerson} * ${numParticipants})`);
          console.log('═══════════════════════════════════════════════════════════');
          return fallbackPrice;
        } else {
          console.error('❌ PRICING ERROR: No pricing data available and no fallback possible');
          console.error('   pricePerPerson:', fallbackPricePerPerson);
          console.error('   maxGroupSize:', fallbackMaxGroupSize);
          console.log('═══════════════════════════════════════════════════════════');
          return null;
        }
      }
    }

    // If group pricing tiers exist, find the matching tier
    if (groupPricingTiers && Array.isArray(groupPricingTiers) && groupPricingTiers.length > 0) {
      console.log('🔍 Selected persons:', numParticipants);
      console.log('   Searching for matching slab...');

      // Find the tier that matches the number of participants (exact match first)
      // For tiers like {minPeople: 4, maxPeople: 4}, we need exact match
      let matchingTier = null;
      for (const tier of groupPricingTiers) {
        const min = tier.minPeople || 0;
        const max = tier.maxPeople || Infinity;
        const matches = numParticipants >= min && numParticipants <= max;
        console.log(`   Checking tier ${min}-${max}: ${numParticipants} >= ${min} && ${numParticipants} <= ${max} = ${matches} (price: ${tier.price})`);
        if (matches) {
          matchingTier = tier;
          break; // Use first matching tier
        }
      }

      if (matchingTier && matchingTier.price) {
        const price = parseFloat(matchingTier.price);
        if (isNaN(price) || price <= 0) {
          console.error('❌ PRICING ERROR: Invalid price in matched slab:', matchingTier.price);
          console.error('   Pricing mismatch reason: price is NaN or <= 0');
          return null;
        }

        console.log('✅ Matched slab:', {
          tier: `${matchingTier.minPeople}-${matchingTier.maxPeople} people`,
          price,
          numParticipants,
          rawPrice: matchingTier.price
        });
        console.log('💰 Final calculated price:', price);
        console.log('═══════════════════════════════════════════════════════════');
        return price;
      }

      // If no exact match and participants exceed max tier, use the highest tier price
      const lastTier = groupPricingTiers[groupPricingTiers.length - 1];
      if (lastTier && lastTier.price && numParticipants > lastTier.maxPeople) {
        const maxTierPrice = parseFloat(lastTier.price);

        if (!isNaN(maxTierPrice) && maxTierPrice > 0) {
          console.warn('⚠️ Participants exceed max tier, using highest tier price:', {
            numParticipants,
            maxTier: `${lastTier.minPeople}-${lastTier.maxPeople}`,
            maxTierPrice
          });
          console.log('💰 Final calculated price (highest tier):', maxTierPrice);
          console.log('═══════════════════════════════════════════════════════════');
          return maxTierPrice;
        }
      }

      console.error('❌ PRICING ERROR: No matching tier found for', numParticipants, 'participants');
      console.error('   Available tiers:',
        groupPricingTiers.map((t: any) => `${t.minPeople}-${t.maxPeople} (₹${t.price})`).join(', '));
      console.error('   Pricing mismatch reason: numParticipants outside all tier ranges');
      console.log('═══════════════════════════════════════════════════════════');
      return null;
    }

    // DO NOT use groupPrice fallback - it's the LAST tier price (wrong for "starting from")
    // groupPrice is ₹8,200 (10 people), not ₹1,000 (1 person)
    // If we have groupPricingTiers, we should have found a match above
    console.error('❌ PRICING ERROR: No pricing slabs available');
    console.error('   Pricing mismatch reason: groupPricingTiers is null or empty after all checks');
    console.log('═══════════════════════════════════════════════════════════');
    return null;
  };

  // Always per group pricing - simplified function
  const isGroupPricing = (tourData: any): boolean => {
    // Always return true - all pricing is per group now
    return true;
    if (!tourData) return false;

    const isOption = !!(tourData.optionTitle || tourData.tourId);
    const itemName = isOption ? `Option "${tourData.optionTitle || 'Unknown'}"` : `Main Tour "${tourData.title || 'Unknown'}"`;

    // FIRST: Check tourTypes for "Group Tour" - this is the primary indicator (only for main tours, not options)
    if (!isOption && tourData.tourTypes) {
      try {
        const tourTypes = typeof tourData.tourTypes === 'string'
          ? JSON.parse(tourData.tourTypes)
          : tourData.tourTypes;
        if (Array.isArray(tourTypes) && tourTypes.some((t: string) =>
          t && typeof t === 'string' && t.toLowerCase().includes('group')
        )) {
          console.log(`✅ ${itemName}: Group pricing detected via tourTypes`);
          return true; // Has "Group Tour" in tourTypes = per_group
        }
      } catch (e) {
        // Ignore parse errors
      }
    }

    // SECOND: Check for group pricing tiers (works for both main tour and options)
    if (tourData.groupPricingTiers) {
      try {
        const tiers = typeof tourData.groupPricingTiers === 'string'
          ? JSON.parse(tourData.groupPricingTiers)
          : tourData.groupPricingTiers;
        if (Array.isArray(tiers) && tiers.length > 0) {
          console.log(`✅ ${itemName}: Group pricing detected via groupPricingTiers (${tiers.length} tiers)`);
          return true; // Has group pricing tiers = per_group
        }
      } catch (e) {
        console.error(`❌ ${itemName}: Error parsing groupPricingTiers:`, e);
      }
    }

    // THIRD: Check for legacy groupPrice + maxGroupSize (works for both main tour and options)
    if (tourData.groupPrice && tourData.maxGroupSize) {
      console.log(`✅ ${itemName}: Group pricing detected via legacy groupPrice + maxGroupSize`);
      return true; // Has groupPrice + maxGroupSize = per_group
    }

    // FOURTH: If this is main tour (not an option), check main tour option for group pricing
    // This handles the case where main tour's group pricing tiers are stored in a special option (sortOrder: -1)
    const isMainTour = tourData.id && !tourData.optionTitle && !tourData.tourId;
    if (isMainTour && tour && tour.options && Array.isArray(tour.options) && tour.options.length > 0) {
      const mainTourOption = tour.options.find((opt: any) => opt.sortOrder === -1);
      if (mainTourOption) {
        // Check main tour option's groupPricingTiers
        if (mainTourOption.groupPricingTiers) {
          try {
            const tiers = typeof mainTourOption.groupPricingTiers === 'string'
              ? JSON.parse(mainTourOption.groupPricingTiers)
              : mainTourOption.groupPricingTiers;
            if (Array.isArray(tiers) && tiers.length > 0) {
              console.log(`✅ ${itemName}: Group pricing detected via main tour option's groupPricingTiers (${tiers.length} tiers)`);
              return true; // Main tour option has group pricing tiers = per_group
            }
          } catch (e) {
            console.error(`❌ ${itemName}: Error parsing main tour option's groupPricingTiers:`, e);
          }
        }
        // Check main tour option's legacy groupPrice + maxGroupSize
        if (mainTourOption.groupPrice && mainTourOption.maxGroupSize) {
          console.log(`✅ ${itemName}: Group pricing detected via main tour option's legacy groupPrice + maxGroupSize`);
          return true;
        }
      }
    }

    console.log(`❌ ${itemName}: No group pricing detected - defaulting to per person`);
    return false; // No group pricing = per_person
  };

  const parseJsonField = (field: any, defaultValue: any = []) => {
    if (!field) return defaultValue;
    try {
      return typeof field === 'string' ? JSON.parse(field) : field;
    } catch (e) {
      console.error('Error parsing JSON field:', e);
      return defaultValue;
    }
  };

  // Load draft booking data after tour is loaded
  useEffect(() => {
    if (tour?.id) {
      const draftKey = `booking_draft_${tour.id}`;
      const savedDraft = localStorage.getItem(draftKey);
      if (savedDraft) {
        try {
          const draft = JSON.parse(savedDraft);
          if (draft.bookingData) {
            setBookingData(draft.bookingData);
          }
          if (draft.selectedDate) {
            setSelectedDate(draft.selectedDate);
          }
          if (draft.participants) {
            if (draft.participants > 8) {
              setIsCustomParticipants(true);
              setCustomParticipants(draft.participants);
              setParticipants(draft.participants);
            } else {
              setIsCustomParticipants(false);
              setParticipants(draft.participants);
            }
          }
          if (draft.selectedOptionId && tour.options) {
            const option = tour.options.find((opt: any) => opt.id === draft.selectedOptionId);
            if (option) {
              setSelectedOption(option);
            }
          }
        } catch (error) {
          console.error('Error loading booking draft:', error);
        }
      }
    }
  }, [tour?.id]);

  // Save booking draft when data changes (auto-save)
  useEffect(() => {
    if (tour?.id && (bookingData.customerName || bookingData.customerEmail || bookingData.customerPhone || bookingData.specialRequests || selectedDate || participants > 1)) {
      const draftKey = `booking_draft_${tour.id}`;
      const draft = {
        bookingData,
        selectedDate,
        participants,
        selectedOptionId: selectedOption?.id || null,
        tourId: tour.id
      };
      localStorage.setItem(draftKey, JSON.stringify(draft));
    }
  }, [bookingData, selectedDate, participants, selectedOption, tour?.id]);


  // SEO meta tags handled by server component (generateMetadata)

  // SEO meta tags and JSON-LD are handled by the server component (generateMetadata)

  // Generate dates for next 7 days
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const handleOptionSelected = (option: any) => {
    // Toggle: if clicking the same option, deselect it (go back to main tour)
    if (selectedOption?.id === option.id) {
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
      // Scroll to booking box on mobile when option is selected
      if (window.innerWidth < 1024 && bookingBoxRef.current) {
        setTimeout(() => {
          bookingBoxRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
    setShowOptionSelectionModal(false);
    if (bookingError === 'Please select a tour option first') {
      setBookingError(null);
    }
  };

  const handleCheckAvailability = async () => {
    if (!selectedDate) {
      setBookingError('Please select a date first');
      return;
    }

    if (tour?.options && Array.isArray(tour.options) && tour.options.length > 0 && !selectedOption) {
      setBookingError('Please select a tour option first');
      if (optionsRef.current) {
        optionsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setBookingError(null);
    setAvailabilityStatus('checking');

    // Simulate API call - in real app, this would check actual availability
    setTimeout(() => {
      setAvailabilityStatus('available');
    }, 1000);
  };

  const handleProceedToBooking = () => {
    if (!selectedDate) {
      setBookingError('Please select a date first');
      return;
    }

    // If tour has options but none selected, prompt user to select one
    if (tour?.options && Array.isArray(tour.options) && tour.options.length > 0 && !selectedOption) {
      setBookingError('Please select a tour option first');
      if (optionsRef.current) {
        optionsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setBookingError(null);

    if (availabilityStatus === 'available') {
      // Load draft data when opening booking modal
      if (tour?.id) {
        const draftKey = `booking_draft_${tour.id}`;
        const savedDraft = localStorage.getItem(draftKey);
        if (savedDraft) {
          try {
            const draft = JSON.parse(savedDraft);
            if (draft.bookingData) {
              setBookingData(draft.bookingData);
            }
            if (draft.selectedDate) {
              setSelectedDate(draft.selectedDate);
            }
            if (draft.participants) {
              if (draft.participants > 10) {
                setIsCustomParticipants(true);
                setCustomParticipants(draft.participants);
                setParticipants(draft.participants);
              } else {
                setIsCustomParticipants(false);
                setParticipants(draft.participants);
              }
            }
            if (draft.selectedOptionId && tour.options) {
              const option = tour.options.find((opt: any) => opt.id === draft.selectedOptionId);
              if (option) {
                setSelectedOption(option);
              }
            }
          } catch (error) {
            console.error('Error loading booking draft:', error);
          }
        }
      }
      setShowBookingModal(true);
    }
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!tour || !selectedDate) {
      alert('Please select a date and ensure tour is loaded');
      return;
    }

    // Calculate total amount using pricing type detection
    let totalAmount = 0;
    let currency = selectedOption?.currency || tour.currency || 'INR';
    const currentParticipants = isCustomParticipants ? customParticipants : participants;
    const tourData = selectedOption || tour;

    // Always use group pricing logic - calculate from tiers
    const groupPrice = calculateGroupPrice(tourData, currentParticipants);

    if (groupPrice !== null && groupPrice > 0) {
      totalAmount = groupPrice;
    } else {
      // DO NOT use groupPrice fallback - it's the LAST tier price (wrong)
      // Fallback: use pricePerPerson (should be first tier price)
      const pricePerPerson = selectedOption?.price || tour.pricePerPerson || 0;
      totalAmount = pricePerPerson;
    }

    // Store booking data and show booking form
    setPendingBookingData({
      tourId: tour.id,
      tourOptionId: selectedOption?.id || null,
      bookingDate: selectedDate,
      numberOfGuests: currentParticipants,
      specialRequests: '',
      totalAmount: totalAmount,
      currency: currency
    });

    setShowBookingModal(false);
    setShowBookingForm(true);
  };

  const handleProceedToPayment = async (guestData: {
    fullName: string;
    email: string;
    country: string;
    countryCode: string;
    phoneNumber: string;
    specialRequests?: string;
  }) => {
    if (!pendingBookingData || !tour) {
      alert('Booking data is missing. Please try again.');
      return;
    }

    // Create booking via API
    try {
      setIsInitializingPayment(true); // Show loading state
      // Use relative path in development to leverage Vite proxy for mobile testing
      // In production, use VITE_API_URL or origin
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3001';
      console.log('📝 Creating booking...', {
        tourId: pendingBookingData.tourId,
        bookingDate: pendingBookingData.bookingDate,
        numberOfGuests: pendingBookingData.numberOfGuests,
        totalAmount: pendingBookingData.totalAmount
      });

      const bookingResponse = await fetch(`${API_URL}/api/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tourId: pendingBookingData.tourId,
          tourOptionId: pendingBookingData.tourOptionId,
          bookingDate: pendingBookingData.bookingDate,
          numberOfGuests: pendingBookingData.numberOfGuests,
          customerName: guestData.fullName,
          customerEmail: guestData.email,
          customerPhone: `${guestData.countryCode}${guestData.phoneNumber}`,
          specialRequests: guestData.specialRequests || '',
          totalAmount: pendingBookingData.totalAmount,
          currency: pendingBookingData.currency
        }),
      });

      const bookingResult = await bookingResponse.json();
      console.log('📝 Booking response:', bookingResult);

      if (!bookingResponse.ok) {
        throw new Error(bookingResult.message || `HTTP error! status: ${bookingResponse.status}`);
      }

      if (bookingResult.success) {
        const bookingId = bookingResult.booking.id.toString();
        console.log('✅ Booking created successfully:', bookingId);

        // Store booking ID for fallback
        sessionStorage.setItem('pending_booking_id', bookingId);
        localStorage.setItem('last_booking_id', bookingId);

        // Close booking form and initialize Razorpay payment
        setShowBookingForm(false);

        try {
          // Initialize Razorpay payment
          await initializeRazorpayPayment(
            bookingId,
            pendingBookingData.totalAmount,
            pendingBookingData.currency,
            {
              fullName: guestData.fullName,
              email: guestData.email,
              phoneNumber: `${guestData.countryCode}${guestData.phoneNumber}`
            }
          );
        } catch (paymentError) {
          console.error('❌ Payment initialization error:', paymentError);
          setIsInitializingPayment(false);
          alert(`Payment initialization failed: ${paymentError instanceof Error ? paymentError.message : 'Unknown error'}. Your booking was created (ID: ${bookingId}). Please contact support.`);
        }
      } else {
        setIsInitializingPayment(false);
        console.error('❌ Booking creation failed:', bookingResult);
        alert(bookingResult.message || 'Failed to create booking. Please try again.');
      }
    } catch (error) {
      setIsInitializingPayment(false);
      console.error('❌ Booking error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      alert(`Failed to create booking: ${errorMessage}. Please check your connection and try again.`);
    }
  };


  const initializeRazorpayPayment = async (bookingId: string, amount: number, currency: string, guestData?: {
    fullName: string;
    email: string;
    phoneNumber: string;
  }) => {
    try {
      console.log('💳 Initializing Razorpay payment...', { bookingId, amount, currency });

      // Step 1: Create payment order via backend
      // Use relative path in development to leverage Vite proxy for mobile testing
      // In production, use VITE_API_URL or origin
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3001';
      const paymentResponse = await fetch(`${API_URL}/api/payments/create-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          bookingId,
          amount: amount * 100, // Convert to paise
          currency: currency || 'INR'
        }),
      });

      const paymentData = await paymentResponse.json();
      console.log('💳 Payment order response:', paymentData);

      if (!paymentData.success || !paymentData.order?.id || !paymentData.razorpayKeyId) {
        setIsInitializingPayment(false);
        alert(`Failed to initialize payment: ${paymentData.message || 'Invalid order data'}`);
        return;
      }

      // Step 2: Open Razorpay modal checkout (NO callback_url, NO redirect)
      const options = {
        key: paymentData.razorpayKeyId,
        amount: paymentData.order.amount,
        currency: paymentData.order.currency || 'INR',
        name: 'AsiaByLocals',
        description: `Booking for ${tour?.title || 'Tour'}`,
        order_id: paymentData.order.id,
        save: false, // CRITICAL: Prevent card saving prompt that causes redirects

        // Step 3: Payment success handler — verify on backend, then redirect
        handler: async function (response: any) {
          console.log('✅ Payment successful callback received:', response);

          // Close Razorpay modal first
          try {
            const currentRazorpay = (window as any).__currentRazorpayInstance;
            if (currentRazorpay && typeof currentRazorpay.close === 'function') {
              currentRazorpay.close();
            }
          } catch (e) {
            console.log('Error closing modal:', e);
          }

          setIsInitializingPayment(true);

          try {
            const verifyResponse = await fetch(`${API_URL}/api/verify-payment`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                bookingId: bookingId
              }),
            });

            const result = await verifyResponse.json();
            console.log('🔐 Verification result:', result);

            if (result.success && result.bookingId) {
              // Clear local state
              if (tour?.id) localStorage.removeItem(`booking_draft_${tour.id}`);
              sessionStorage.setItem('pending_booking_id', result.bookingId);
              localStorage.setItem('last_booking_id', result.bookingId);
              setPendingBookingData(null);
              setAvailabilityStatus('idle');

              // Redirect immediately using replace (no setTimeout)
              console.log('✅ Payment verified successfully, redirecting to booking page...');
              window.location.replace(`/booking/${result.bookingId}`);
            } else {
              setIsInitializingPayment(false);
              console.error('❌ Payment verification failed:', result);
              window.location.replace(`/booking/${bookingId}?status=failed`);
            }
          } catch (error) {
            setIsInitializingPayment(false);
            console.error('❌ Verification error:', error);
            window.location.replace(`/booking/${bookingId}?status=failed`);
          }

          // Return false to prevent Razorpay default redirect
          return false;
        },

        prefill: {
          name: guestData?.fullName || '',
          email: guestData?.email || '',
          contact: guestData?.phoneNumber || ''
        },

        theme: {
          color: '#10B981'
        },

        modal: {
          ondismiss: async function () {
            console.log('Payment cancelled by user');
            setIsInitializingPayment(false);

            // Mark booking as payment_failed on backend
            try {
              await fetch(`${API_URL}/api/bookings/${bookingId}/mark-payment-failed`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
              });
              console.log('✅ Booking marked as payment_failed');
            } catch (error) {
              console.error('❌ Failed to mark booking as payment_failed:', error);
            }

            // Redirect to booking page with failed status
            window.location.replace(`/booking/${bookingId}?status=failed`);
          },
          escape: true,
          backdropclose: false
        }
      };

      // Dynamically load Razorpay script only when needed (not on every page)
      if (!(window as any).Razorpay) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://checkout.razorpay.com/v1/checkout.js';
          script.onload = () => resolve();
          script.onerror = () => reject(new Error('Failed to load Razorpay SDK'));
          document.head.appendChild(script);
        });
      }

      const rzp = new (window as any).Razorpay(options);

      // CRITICAL: Store Razorpay instance globally so handler can close it
      (window as any).__currentRazorpayInstance = rzp;

      rzp.on('payment.failed', function (response: any) {
        console.error('❌ Payment failed:', response.error);
        setIsInitializingPayment(false);
        window.location.replace(`/booking/${bookingId}?status=failed`);
      });

      rzp.open();
      console.log('✅ Razorpay modal opened');

    } catch (error) {
      console.error('❌ Payment initialization error:', error);
      setIsInitializingPayment(false);
      alert(`Failed to initialize payment: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  // Initial state checks are now handled within the main render to ensure header/footer are visible for SEO

  // Parse images safely - handle both array and JSON string formats
  let mainImage = null;
  let otherImages: any[] = [];
  let remainingImages = 0;
  let allImages: string[] = []; // Store all images for modal navigation

  try {
    if (tour && tour.images) {
      const images = Array.isArray(tour.images) ? tour.images : (typeof tour.images === 'string' ? JSON.parse(tour.images) : []);
      allImages = images; // Store all images for modal
      mainImage = images.length > 0 ? images[0] : null;
      otherImages = images.length > 1 ? images.slice(1, 3) : [];
      remainingImages = images.length > 3 ? images.length - 3 : 0;
    }
  } catch (e) {
    console.error('TourDetailPage - Error parsing images:', e);
    // Fallback to empty arrays
    mainImage = null;
    otherImages = [];
    remainingImages = 0;
    allImages = [];
  }

  const tourSlug = tour?.slug;

  // Calculate tour FAQs for schema — uses getTourSpecificFAQs with generic fallback
  const tourFAQs = (() => {
    const tourTitle = tour?.title || 'this tour';
    const slug = tour?.slug;
    const specificFAQs = getTourSpecificFAQs(tourTitle, slug);

    if (specificFAQs) return specificFAQs;

    // Fallback generic FAQs for tours without specific ones
    const cityLower = tour?.city?.toLowerCase() || '';
    const countryLower = tour?.country?.toLowerCase() || '';
    const citySlug = cityLower.replace(/\s+/g, '-');
    const countrySlug = countryLower.replace(/\s+/g, '-');
    const cityPath = `/${countrySlug}/${citySlug}`;

    const faqs: { question: string; answer: string }[] = [
      { question: `What is specifically included in the ${tourTitle}?`, answer: tour?.included || `The ${tourTitle} includes a professional licensed guide, entry tickets to major monuments as per your selection, and a fully customizable itinerary. All our [tours](${cityPath}) are designed to provide authentic local experiences with transparent pricing — no hidden fees or surprise charges.` },
      { question: `How long is the actual ${tourTitle} experience?`, answer: `The duration of the ${tourTitle} is typically ${tour?.duration || 'a few hours'}. We recommend arriving 15 minutes before the scheduled start time for a smooth check-in. Your guide will meet you at the designated [meeting point](${cityPath}) and ensure the experience runs on schedule while remaining flexible to your pace.` },
      { question: `What is the best time to start the ${tourTitle}?`, answer: 'For most experiences, we highly recommend an **early morning start**. This allows you to avoid the midday heat, bypass the largest crowds, and capture the best lighting for photography. Your guide can advise on the optimal timing based on the season and specific attractions included.' },
      { question: `Will I receive confirmation after booking the ${tourTitle}?`, answer: 'Yes, once your booking is completed via our secure payment gateway, you will receive an **instant confirmation email** with your tour details, meeting point address, guide\'s name, and direct contact information. You can also view and manage your booking through your AsiaByLocals account dashboard.' },
      { question: `Can I customize the ${tourTitle} itinerary?`, answer: `Yes! All our private [tours](${cityPath}) are fully customizable. Whether you want to add extra stops, skip certain locations, change the pace, or adjust the start time — simply let your guide know in advance or on the day. We aim to create a personalized experience tailored to your interests and energy level.` },
      { question: `What is the cancellation policy for the ${tourTitle}?`, answer: 'We offer **free cancellation up to 24 hours** before the scheduled start time for a full refund. Cancellations within 24 hours may be subject to a partial charge depending on the tour type. Weather-related cancellations for outdoor and boat tours are handled on a case-by-case basis, with full refunds or free rebooking offered when safety is a concern.' },
      { question: `Is this tour suitable for children and families?`, answer: `Most of our [experiences](${cityPath}) are family-friendly and suitable for children of all ages. However, some tours involving extensive walking, water activities, or early morning starts may be better suited for children aged 5 and above. Please check the specific tour description for age recommendations, or contact us for personalized family itinerary advice.` },
      { question: `How do I meet my guide for the ${tourTitle}?`, answer: `After booking, you will receive detailed meeting point instructions via email. Most tours include **complimentary hotel pickup** within the central area. For tours without pickup, your confirmation email will include the exact address, Google Maps pin, and your guide\'s phone number for easy coordination. Guides typically arrive 10 minutes early and will message you on WhatsApp.` },
      { question: 'What payment methods are accepted?', answer: 'We accept all major credit and debit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Razorpay for Indian cards. All payments are processed through a **PCI-compliant secure gateway** with 256-bit encryption. You can also pay in multiple currencies — the price is automatically converted to your local currency at checkout.' },
      { question: 'Are your guides licensed and vetted?', answer: 'Yes, all AsiaByLocals guides are **licensed professionals** who have been rigorously vetted through background checks, skill assessments, and customer reviews. Many hold government-issued tourism licenses, university degrees in history or cultural studies, and have years of experience leading tours for international travelers. Every guide maintains a minimum 4.5-star rating to remain active on our platform.' }
    ];

    // Add Agra-specific FAQs
    if (cityLower === 'agra' || tourTitle.toLowerCase().includes('taj mahal')) {
      faqs.push(
        { question: 'Is the Taj Mahal closed on Friday?', answer: 'Yes, the [Taj Mahal is strictly closed](/india/agra/is-taj-mahal-closed-on-friday) to the general public every Friday for religious prayers at the mosque within the complex. Plan your [Agra itinerary](/india/agra/1-day-agra-itinerary) accordingly. On Fridays, we recommend visiting [Agra Fort](/india/agra/agra-fort), Itmad-ud-Daulah (Baby Taj), or Mehtab Bagh for a stunning sunset view of the Taj.' },
        { question: 'Is original passport mandatory for entry?', answer: 'Yes, foreign tourists must carry their **original physical passport** for identification at the Taj Mahal entrance gates. Digital copies or photocopies are not accepted by CISF security. Indian nationals need an Aadhaar card or Voter ID. Check our [ticket price guide](/india/agra/taj-mahal-ticket-price-2026) for the latest entry requirements and fees.' },
        { question: 'What is the best time to visit the Taj Mahal?', answer: 'Sunrise is the most magical time — the marble glows golden in the early light and crowds are minimal. Gates open 30 minutes before sunrise. See our [opening time guide](/india/agra/taj-mahal-opening-time) for seasonal timings. Sunset from Mehtab Bagh is a stunning alternative if you prefer a more relaxed viewing experience.' },
        { question: 'How crowded is Agra in peak season?', answer: 'Peak season (October–March) sees heavy tourist footfall, especially on weekends and holidays. Early morning visits (before 8 AM) are essential to avoid congestion. Our [licensed guides](/india/agra/things-to-do-in-agra) know the optimal routes and timing to navigate crowds efficiently. Consider weekday visits for a significantly quieter experience.' },
        { question: 'Can I combine Agra with Jaipur in one trip?', answer: 'Absolutely! The **Golden Triangle** (Delhi → Agra → [Jaipur](/india/jaipur)) is India\'s most popular tourist circuit. From Agra, Jaipur is approximately 4 hours by expressway. We offer multi-day Golden Triangle packages as well as same-day trips from [Delhi to Agra](/india/agra/1-day-agra-itinerary) that can be combined with a Jaipur extension.' }
      );
    }

    // Add Phuket-specific FAQs
    if (cityLower === 'phuket' || tourTitle.toLowerCase().includes('phuket') || tourTitle.toLowerCase().includes('phi phi') || tourTitle.toLowerCase().includes('phang nga')) {
      faqs.push(
        { question: 'When is the best time to visit Phuket?', answer: 'The dry season from **November to April** offers the best weather for [island-hopping tours](/thailand/phuket/phuket-island-hopping) and beach activities. December to March is peak season with calm seas, perfect for [Phi Phi](/thailand/phuket/phi-phi-islands) and [Phang Nga Bay](/thailand/phuket/phang-nga-bay) boat trips. May to October (monsoon) is quieter and cheaper but some boat tours may be affected by rough seas. See our [Phuket travel guide](/thailand/phuket/phuket-travel-guide-2026) for detailed month-by-month advice.' },
        { question: 'Is Phuket safe for tourists?', answer: 'Phuket is one of Southeast Asia\'s safest tourist destinations with excellent infrastructure, friendly locals, and a strong tourist police presence. Standard precautions apply: use reputable transport, stay aware in crowded areas, and book [verified tours](/thailand/phuket/things-to-do-in-phuket) through trusted platforms. For water activities, all our tours include safety equipment and experienced crew.' },
        { question: 'What are the must-see attractions in Phuket?', answer: 'The top experiences include: the [Phi Phi Islands](/thailand/phuket/phi-phi-islands) for snorkeling and Maya Bay, [Phang Nga Bay](/thailand/phuket/phang-nga-bay) for dramatic limestone cliffs and [James Bond Island](/thailand/phuket/james-bond-island-phuket), the [Big Buddha](/thailand/phuket/big-buddha-phuket) for panoramic views, [Wat Chalong](/thailand/phuket/wat-chalong) temple, and the charming [Phuket Old Town](/thailand/phuket/phuket-old-town) for street food and Sino-Portuguese architecture. See our [things to do guide](/thailand/phuket/things-to-do-in-phuket) for the complete list.' },
        { question: 'Can I combine Phuket with Bangkok?', answer: 'Yes! Direct flights between Phuket and [Bangkok](/thailand/bangkok) take just 1 hour 20 minutes. We recommend 3–4 days in Phuket for island tours, then 2–3 days in Bangkok for temples, markets, and street food. Our local guides operate in both cities for seamless trip planning.' },
        { question: 'Do I need travel insurance for boat tours?', answer: 'We **strongly recommend** comprehensive travel insurance covering water sports before booking any [speedboat tour](/thailand/phuket/phi-phi-islands-speedboat-tour-maya-bay-snorkeling) or [island-hopping excursion](/thailand/phuket/phuket-island-hopping). While all our boats carry safety equipment and licensed crews, Thai hospital costs can be significant without coverage. Ensure your policy covers emergency medical evacuation and water activity accidents.' }
      );
    }

    // Add Delhi-specific FAQs
    if (cityLower === 'delhi' || tourTitle.toLowerCase().includes('delhi') || tourTitle.toLowerCase().includes('red fort')) {
      faqs.push(
        { question: 'What are the must-visit monuments in Delhi?', answer: 'Delhi\'s top heritage sites include the [Red Fort](/india/delhi/red-fort), [Qutub Minar](/india/delhi/qutub-minar), [Humayun\'s Tomb](/india/delhi/humayuns-tomb), [India Gate](/india/delhi/india-gate), and the bustling lanes of Old Delhi. See our [things to do in Delhi](/india/delhi/things-to-do-in-delhi) guide for a comprehensive list with insider tips from local guides.' },
        { question: 'How many days should I spend in Delhi?', answer: 'We recommend **2–3 days** to cover Delhi\'s major highlights comfortably. Use our [Delhi 1-day itinerary](/india/delhi/delhi-1-day-itinerary) if you\'re short on time. Many travelers combine Delhi with a day trip to Agra for the Taj Mahal and then continue to Jaipur for the Golden Triangle circuit.' },
        { question: 'Is Delhi safe for tourists?', answer: 'Delhi is generally safe for tourists, especially in well-traveled areas around monuments, hotels, and markets. Standard travel precautions apply. Our [licensed guides](/india/delhi/things-to-do-in-delhi) ensure you navigate the city safely and comfortably, avoiding tourist traps and ensuring authentic experiences.' }
      );
    }

    // Add Bangkok-specific FAQs
    if (cityLower === 'bangkok' || tourTitle.toLowerCase().includes('bangkok')) {
      faqs.push(
        { question: 'What are the top things to do in Bangkok?', answer: 'Bangkok\'s must-see experiences include the Grand Palace and Wat Phra Kaew, the reclining Buddha at Wat Pho, canal (khlong) boat tours, Chatuchak Weekend Market, and legendary street food tours in Chinatown (Yaowarat). Visit our [Bangkok tours](/thailand/bangkok) page for curated local experiences.' },
        { question: 'Can I combine Bangkok with Phuket?', answer: 'Absolutely! Direct flights take just 1 hour 20 minutes. We recommend 2–3 days in Bangkok for temples and culture, then 3–4 days in [Phuket](/thailand/phuket) for beaches and [island tours](/thailand/phuket/phuket-island-hopping). Our local guides operate in both cities.' }
      );
    }

    // Add Mumbai-specific FAQs
    if (cityLower === 'mumbai' || tourTitle.toLowerCase().includes('mumbai')) {
      faqs.push(
        { question: 'What are the must-see attractions in Mumbai?', answer: 'Mumbai\'s highlights include the Gateway of India, Elephanta Caves (UNESCO World Heritage Site), Marine Drive, Chhatrapati Shivaji Terminus, Colaba Causeway, and the vibrant street food scene. Visit our [Mumbai tours](/india/mumbai) page for expert-led local experiences.' },
        { question: 'How many days do I need in Mumbai?', answer: 'We recommend **2–3 days** for Mumbai\'s core highlights. This allows time for the iconic south Mumbai heritage walk, an Elephanta Caves half-day trip, a Dharavi community tour, and an evening Marine Drive sunset experience.' }
      );
    }

    // Add Goa-specific FAQs
    if (cityLower === 'goa' || tourTitle.toLowerCase().includes('goa')) {
      faqs.push(
        { question: 'When is the best time to visit Goa?', answer: 'The peak season from **November to February** offers the best weather with sunny skies and comfortable temperatures. Visit our [Goa tours](/india/goa) page for curated local experiences including beach tours, Portuguese heritage walks, and spice plantation visits.' },
        { question: 'Is Goa only about beaches?', answer: 'Not at all! Beyond the famous beaches, Goa offers rich Portuguese colonial heritage (Old Goa churches are UNESCO sites), spice plantations, wildlife sanctuaries, vibrant night markets, and one of India\'s most unique culinary scenes blending Indian and Portuguese flavors.' }
      );
    }

    return faqs;
  })();


  // JSON-LD moved to server component (app/[country]/[city]/[slug]/page.tsx) for guaranteed raw HTML rendering

  return (
    <div className="min-h-screen bg-white pb-20 lg:pb-0">
      {/* JSON-LD rendered server-side in app/[country]/[city]/[slug]/page.tsx */}

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Breadcrumbs with JSON-LD */}
          <Breadcrumbs country={country} city={city} tourTitle={tour?.title} slug={tourSlug} />

              {/* Internal Link: Explore More Tours in City (SEO Cluster) */}
              {country && city && (
                <div className="mb-8 p-6 bg-[#10B981]/5 rounded-2xl border border-[#10B981]/10">
                  <p className="text-[16px] text-gray-700 font-semibold mb-3">
                    Explore more curated experiences in <Link href={`/${country.toLowerCase().replace(/\s+/g, '-')}/${city.toLowerCase().replace(/\s+/g, '-')}`} className="text-[#10B981] font-black hover:underline">{city}</Link>
                  </p>
                  <Link
                    href={`/${country.toLowerCase().replace(/\s+/g, '-')}/${city.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center gap-2 text-[#10B981] font-black hover:text-[#059669] transition-colors"
                  >
                    View all {city} tours
                    <ChevronRight size={18} />
                  </Link>
                </div>
              )}

              {/* Title & Rating Section */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h1 className="text-4xl font-black text-[#001A33] mb-3 leading-tight">
                      {(() => {
                        const H1_OVERRIDES: Record<string, string> = {
                          // Jaipur
                          'amber-fort-official-guided-tour': 'Amber Fort Official Guided Tour',
                          'hawa-mahal-private-tour': 'Hawa Mahal & Jaipur Highlights Private Tour',
                          'jaipur-shopping-tour': 'Jaipur Shopping Tour – Crafts, Gems & Textiles',
                          'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal': 'Jaipur City Tour – Amber Fort, Hawa Mahal & City Palace',
                          'jaipur-same-day-tour-with-cooking-class': 'Jaipur Day Tour with Cooking Class',
                          // Agra
                          'fatehpur-sikri-guided-tour': 'Fatehpur Sikri Guided Tour with Local Guide',
                          'taj-mahal-guided-tour': 'Taj Mahal Guided Tour with Certified Guide',
                          'mysteries-of-agra-local-tour': 'Mysteries of Agra – Local Heritage Tour',
                          'taj-mahal-pickup-private-tour': 'Agra Fort & Baby Taj Private Tour',
                          'taj-mahal-sunrise-tour': 'Taj Mahal Sunrise Tour – Skip the Line',
                          'taj-mahal-agra-private-day-tour-with-lunch': 'Taj Mahal & Agra Day Tour with Lunch',
                          'taj-mahal-vrindavan-full-day-tour': 'Taj Mahal & Vrindavan Day Tour',
                          // Delhi
                          'explore-old-new-delhi-city-luxury-car-tour': 'Old & New Delhi Luxury Car Tour with Private Guide',
                          'delhi-guided-shopping-tour-female-expert': 'Delhi Shopping Tour with Female Guide',
                          'india-gate-guided-tour': 'India Gate Guided Tour',
                          // Udaipur
                          'city-palace-full-day-tour': 'Udaipur City Palace Full-Day Tour',
                          // Phuket
                          'phi-phi-islands-speedboat-tour-maya-bay-snorkeling': 'Phi Phi Islands Speedboat Tour – Maya Bay',
                        };
                        const h1Text = H1_OVERRIDES[tourSlug || ''] || tour.title;
                        // Avoid "Jaipur ... in Jaipur" duplication
                        return h1Text.toLowerCase().includes(city.toLowerCase())
                          ? h1Text
                          : `${h1Text} in ${city}`;
                      })()}
                    </h1>
                    <div className="flex items-center gap-4 flex-wrap">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-[#10B981] text-white text-[12px] font-black rounded">
                          Top rated
                        </span>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <span className="text-[16px] font-black text-[#001A33]">
                          {(() => {
                            // Generate consistent rating between 4.0-5.0 based on tour ID
                            const seed = parseInt(tour.id) || 0;
                            const random = (seed * 9301 + 49297) % 233280;
                            const normalized = random / 233280;
                            const rating = 4.0 + (normalized * 1.0);
                            return rating.toFixed(1);
                          })()}
                        </span>
                      </div>
                      <div className="text-[14px] text-gray-600 font-semibold">
                        Activity provider: {tour.activityProvider || (tour.supplier?.companyName && tour.supplier.companyName.length > 2 && /^[a-zA-Z]/.test(tour.supplier.companyName) ? tour.supplier.companyName : null) || tour.supplier?.fullName || 'Local Guide'}
                      </div>
                    </div>

                    {/* High-Conversion Feature Bar for Entry Tickets */}
                    {(tour.category === 'Entry Ticket' || tour.title.toLowerCase().includes('ticket')) && (
                      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="flex items-center gap-3 p-3 bg-[#10B981]/5 border border-[#10B981]/20 rounded-xl">
                          <div className="w-8 h-8 rounded-full bg-[#10B981] flex items-center justify-center text-white shrink-0">
                            <Zap size={16} fill="white" />
                          </div>
                          <div>
                            <div className="text-[13px] font-black text-[#001A33]">Skip the ticket line</div>
                            <div className="text-[11px] text-gray-500 font-semibold">Avoid long queues</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-[#10B981]/5 border border-[#10B981]/20 rounded-xl">
                          <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0">
                            <MessageCircle size={16} fill="white" />
                          </div>
                          <div>
                            <div className="text-[13px] font-black text-[#001A33]">Instant WhatsApp PDF</div>
                            <div className="text-[11px] text-gray-500 font-semibold">Safe on your phone</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-[#10B981]/5 border border-[#10B981]/20 rounded-xl">
                          <div className="w-8 h-8 rounded-full bg-[#10B981] flex items-center justify-center text-white shrink-0">
                            <ShieldCheck size={16} fill="white" />
                          </div>
                          <div>
                            <div className="text-[13px] font-black text-[#001A33]">Official Admission</div>
                            <div className="text-[11px] text-gray-500 font-semibold">100% Guaranteed Entry</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Images & Details */}
                <div className="lg:col-span-2">
                  {/* Image Gallery - GetYourGuide Style: Main image left, 2 thumbnails right */}
                  <div className="grid grid-cols-3 gap-2 h-[500px] overflow-hidden relative mb-12">
                    {mainImage && (
                      <div
                        className="col-span-2 relative cursor-pointer group overflow-hidden rounded-2xl h-[500px]"
                        onClick={() => {
                          setSelectedImageIndex(0);
                          setShowImageModal(true);
                        }}
                      >
                        <Image
                          src={mainImage}
                          alt={tour.title}
                          width={1200}
                          height={500}
                          priority
                          className="w-full h-[500px] object-cover rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-2xl pointer-events-none"></div>
                      </div>
                    )}
                    <div className="col-span-1 flex flex-col gap-2 h-[500px]">
                      {otherImages.slice(0, 2).map((image: string, index: number) => (
                        <div
                          key={index}
                          className={`relative cursor-pointer group overflow-hidden rounded-2xl ${index === 0 ? 'h-[246px]' : 'h-[246px]'
                            }`}
                          onClick={() => {
                            setSelectedImageIndex(index + 1);
                            setShowImageModal(true);
                          }}
                        >
                          <Image
                            src={image}
                            alt={`${tour.title} ${index + 2}`}
                            width={400}
                            height={246}
                            className={`w-full object-cover rounded-2xl ${index === 0 ? 'h-[246px]' : 'h-[246px]'
                              }`}
                          />
                          {index === 1 && remainingImages > 0 && (
                            <div className="absolute inset-0 bg-black/60 rounded-2xl flex items-center justify-center pointer-events-none z-10">
                              <div className="text-center">
                                <div className="text-white font-black text-[24px] mb-1">+{remainingImages}</div>
                                <div className="text-white text-[12px] font-bold">more</div>
                              </div>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-2xl pointer-events-none"></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Short Description */}
                  <div className="mb-8">
                    <p className="text-[16px] text-gray-700 font-semibold leading-relaxed break-words whitespace-pre-wrap">
                      {tour.shortDescription || tour.fullDescription}
                    </p>
                  </div>

                  {/* Highlights Section */}
                  {tour.highlights && Array.isArray(tour.highlights) && tour.highlights.length > 0 && (
                    <div className="mb-8 pt-12">
                      <h2 className="text-2xl font-black text-[#001A33] mb-4">Highlights</h2>
                      <ul className="space-y-2">
                        {tour.highlights.map((highlight: string, index: number) => (
                          <li key={index} className="flex items-start gap-3 border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                            <div className="w-2 h-2 bg-[#10B981] rounded-full mt-2.5 shrink-0"></div>
                            <span className="text-[16px] text-gray-700 font-semibold leading-relaxed break-words whitespace-pre-wrap w-full">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tour Options Section - GetYourGuide Style */}
                  {/* Show options - include main tour if it has group pricing */}
                  {(() => {
                    // Parse groupPricingTiers properly in render logic
                    let mainTourHasGroupPricing = false;
                    let mainTourGroupPricingTiers = null;

                    if (tour.groupPricingTiers) {
                      try {
                        mainTourGroupPricingTiers = typeof tour.groupPricingTiers === 'string'
                          ? JSON.parse(tour.groupPricingTiers)
                          : tour.groupPricingTiers;
                        mainTourHasGroupPricing = Array.isArray(mainTourGroupPricingTiers) && mainTourGroupPricingTiers.length > 0;
                      } catch (e) {
                        console.error('Error parsing main tour groupPricingTiers:', e);
                      }
                    }

                    // Also check for legacy groupPrice + maxGroupSize
                    if (!mainTourHasGroupPricing && tour.groupPrice && tour.maxGroupSize) {
                      mainTourHasGroupPricing = true;
                    }

                    const shouldShowMainTourAsOption = mainTourHasGroupPricing;

                    // Create main tour option if needed
                    // Filter out the real DB sortOrder:-1 option (system option) — we'll represent it virtually if needed
                    let allOptions = (tour.options || []).filter((opt: any) => opt.sortOrder !== -1);
                    if (shouldShowMainTourAsOption && !allOptions.find((opt: any) => opt.id === 'main-tour')) {
                      const mainTourOption = {
                        id: 'main-tour',
                        tourId: tour.id,
                        optionTitle: tour.title,
                        optionDescription: tour.shortDescription || tour.fullDescription?.substring(0, 200) || '',
                        durationHours: parseFloat(tour.duration?.replace(/[^0-9.]/g, '')) || 3,
                        price: tour.pricePerPerson || 0,
                        currency: tour.currency || 'INR',
                        language: tour.languages?.[0] || 'English',
                        pickupIncluded: false,
                        entryTicketIncluded: false,
                        guideIncluded: true,
                        carIncluded: false,
                        groupPrice: tour.groupPrice,
                        maxGroupSize: tour.maxGroupSize,
                        groupPricingTiers: mainTourGroupPricingTiers || tour.groupPricingTiers,
                        sortOrder: -1
                      };
                      allOptions = [mainTourOption, ...allOptions];
                    }

                    // Sort options by sortOrder
                    allOptions = allOptions.sort((a: any, b: any) => (a.sortOrder || 0) - (b.sortOrder || 0));

                    if (allOptions.length > 0) {
                      return (
                        <div className="mb-8" ref={optionsRef}>
                          <h2 className="text-2xl font-black text-[#001A33] mb-6">Choose from {allOptions.length} available option{allOptions.length > 1 ? 's' : ''}</h2>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {allOptions.map((option: any) => {
                              const isSelected = selectedOption?.id === option.id;
                              const currencySymbol = '$';
                              const optTiers = option.groupPricingTiers
                                ? (typeof option.groupPricingTiers === 'string' ? (() => { try { return JSON.parse(option.groupPricingTiers); } catch { return []; } })() : option.groupPricingTiers)
                                : [];
                              const optionHasOwnTiers = Array.isArray(optTiers) && optTiers.length > 0;
                              const priceCurrency = optionHasOwnTiers ? (option.currency || 'INR') : (tour.currency || 'INR');
                              const toDisplayPrice = (price: number) => priceCurrency === 'INR' ? Math.round(price / 85) : price;

                              const optImgs = Array.isArray(option.images) ? option.images : (typeof option.images === 'string' ? (() => { try { return JSON.parse(option.images); } catch { return []; } })() : []);
                              const optImg = optImgs.find((img: string) => img && !img.startsWith('data:'));

                              return (
                                <div
                                  key={option.id}
                                  className={`bg-white border-2 rounded-2xl overflow-hidden transition-all flex flex-col ${isSelected
                                    ? 'border-[#10B981] shadow-lg ring-2 ring-[#10B981]/20'
                                    : 'border-gray-200 hover:border-[#10B981]/50 hover:shadow-md'
                                    }`}
                                >
                                  {/* Option Image */}
                                  {optImg && (
                                    <div className="w-full h-44 overflow-hidden">
                                      <Image src={optImg} alt={option.optionTitle} width={400} height={176} className="w-full h-full object-cover" />
                                    </div>
                                  )}

                                  {/* Card Content */}
                                  <div className="p-5 flex flex-col flex-1">
                                    <h3 className="font-black text-[#001A33] text-[16px] mb-2 leading-tight">{option.optionTitle}</h3>

                                    <div className="text-[13px] text-gray-600 font-medium mb-3 leading-relaxed">
                                      {option.optionDescription && (
                                        <>
                                          {expandedOptions.has(option.id) || !option.optionDescription || option.optionDescription.length <= 120 ? (
                                            <span>{option.optionDescription}</span>
                                          ) : (
                                            <span>{option.optionDescription.substring(0, 120)}...</span>
                                          )}
                                          {option.optionDescription && option.optionDescription.length > 120 && (
                                            <button
                                              onClick={(e) => { e.stopPropagation(); toggleOptionExpand(option.id); }}
                                              className="text-[#0071EB] font-bold ml-1 hover:underline focus:outline-none inline cursor-pointer text-[13px]"
                                            >
                                              {expandedOptions.has(option.id) ? 'Less' : 'More'}
                                            </button>
                                          )}
                                        </>
                                      )}
                                    </div>

                                    {/* Details */}
                                    <div className="flex flex-wrap items-center gap-3 text-[12px] text-gray-500 font-semibold mb-4">
                                      <div className="flex items-center gap-1">
                                        <Clock size={14} />
                                        <span>{formatDurationHours(option.durationHours)}</span>
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <User size={14} />
                                        <span>{option.language}</span>
                                      </div>
                                      {option.pickupIncluded && (
                                        <div className="flex items-center gap-1">
                                          <Bus size={14} />
                                          <span>Pickup</span>
                                        </div>
                                      )}
                                    </div>

                                    {/* Price + Select — pushed to bottom */}
                                    <div className="mt-auto pt-3 border-t border-gray-100">
                                      <div className="flex items-center justify-between">
                                        <div className="font-black text-[#001A33] text-[20px]">
                                          {(() => {
                                            const currentParticipants = isCustomParticipants ? customParticipants : participants;
                                            if (optionHasOwnTiers) {
                                              const matchingTier = optTiers.find((t: any) =>
                                                currentParticipants >= (t.minPeople || 1) && currentParticipants <= (t.maxPeople || 999)
                                              ) || optTiers[optTiers.length - 1];
                                              const tierPrice = parseFloat(matchingTier?.price || optTiers[0]?.price || option.price || 0);
                                              return `${currencySymbol}${toDisplayPrice(tierPrice).toLocaleString()}`;
                                            }
                                            const groupPrice = calculateGroupPrice(option, currentParticipants);
                                            if (groupPrice !== null) {
                                              return `${currencySymbol}${toDisplayPrice(groupPrice).toLocaleString()}`;
                                            }
                                            return `${currencySymbol}${toDisplayPrice(option.price || 0).toLocaleString()}`;
                                          })()}
                                        </div>
                                        <button
                                          onClick={() => {
                                            if (isSelected) {
                                              setSelectedOption(null);
                                            } else {
                                              setSelectedOption(option);
                                              if (window.innerWidth < 1024 && bookingBoxRef.current) {
                                                setTimeout(() => {
                                                  bookingBoxRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                                }, 100);
                                              }
                                            }
                                          }}
                                          className={`px-5 py-2.5 rounded-xl font-black text-[13px] transition-all ${isSelected
                                            ? 'bg-[#10B981] text-white'
                                            : 'bg-[#0071EB] text-white hover:bg-[#0056b3]'
                                            }`}
                                        >
                                          {isSelected ? 'Selected ✓' : 'Select'}
                                        </button>
                                      </div>
                                      <div className="flex items-center gap-1 text-[11px] text-gray-500 mt-2">
                                        <CheckCircle2 size={12} className="text-[#10B981]" />
                                        <span className="font-semibold">Free cancellation</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })()}

                  {/* Full Description */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-black text-[#001A33] mb-4">Full description</h2>
                    <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-gray-100 shadow-sm transition-all hover:shadow-md">
                      <div className="text-[16px] sm:text-[17px] text-gray-700 font-normal sm:font-medium leading-[1.8] whitespace-pre-wrap break-words">
                        {(() => {
                          if (!tour.fullDescription) return null;

                          // Helper to render inline markdown (bold, italics, and links)
                          const renderMarkdownText = (text: string) => {
                            // First handle links [label](url) and bold (**text**)
                            const regex = /(\*\*.*?\*\*|\[.*?\]\(.*?\))/g;
                            const parts = text.split(regex);

                            return parts.map((part, i) => {
                              if (part.startsWith('**') && part.endsWith('**')) {
                                return <span key={`b-${i}`} className="font-black text-[#001A33]">{part.slice(2, -2)}</span>;
                              }
                              if (part.startsWith('[') && part.includes('](')) {
                                const match = part.match(/\[(.*?)\]\((.*?)\)/);
                                if (match) {
                                  return (
                                    <Link key={`l-${i}`} href={match[2]} className="text-[#10B981] font-black border-b-2 border-[#10B981]/20 hover:border-[#10B981] transition-all">
                                      {match[1]}
                                    </Link>
                                  );
                                }
                              }

                              // Then handle italics (*text*) within remaining parts
                              const italicParts = part.split(/(\*.*?\*)/g);
                              return italicParts.map((iPart, j) => {
                                if (iPart.startsWith('*') && iPart.endsWith('*')) {
                                  return <i key={`i-${i}-${j}`} className="font-semibold text-gray-800 italic">{iPart.slice(1, -1)}</i>;
                                }
                                return iPart;
                              });
                            });
                          };

                          return tour.fullDescription.split('\n').map((line: string, i: number) => {
                            const trimmed = line.trim();
                            if (!trimmed) return <div key={i} className="h-4"></div>;

                            // Handle Special Bold Headers (Entire line is **Text**)
                            if (trimmed.startsWith('**') && trimmed.endsWith('**') && !trimmed.slice(2, -2).includes('**')) {
                              const content = trimmed.slice(2, -2);

                              // Check if it's a Time Heading (e.g., "06:00 AM – Title")
                              const timeMatch = content.match(/^(\d{2}:\d{2}\s?(?:AM|PM))\s?[-–—]\s?(.*)$/i);
                              if (timeMatch) {
                                return (
                                  <div key={i} className="mt-10 mb-6 group first:mt-2">
                                    <div className="flex flex-wrap items-center gap-3">
                                      <span className="bg-[#10B981] text-white px-3 py-1 rounded-full text-[12px] sm:text-[13px] font-black uppercase tracking-wider shadow-sm shadow-[#10B981]/20">
                                        {timeMatch[1]}
                                      </span>
                                      <span className="text-lg sm:text-xl font-black text-[#001A33] group-hover:text-[#10B981] transition-colors leading-tight">
                                        {timeMatch[2]}
                                      </span>
                                    </div>
                                    <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-gray-100 via-gray-50 to-transparent"></div>
                                  </div>
                                );
                              }

                              // Main Title / Summary Header
                              if (content.toLowerCase().includes('tour') || content.toLowerCase().includes('itinerary')) {
                                return (
                                  <div key={i} className="mb-8 p-6 bg-gray-50 rounded-2xl border border-gray-100 first:mt-0 mt-6">
                                    <h3 className="text-lg sm:text-xl font-black text-[#001A33] uppercase tracking-tight flex items-center gap-3">
                                      <div className="w-1.5 h-6 bg-[#10B981] rounded-full"></div>
                                      {content}
                                    </h3>
                                  </div>
                                );
                              }

                              // Standard Section Header
                              return (
                                <h4 key={i} className="text-[17px] sm:text-[18px] font-black text-[#001A33] mt-10 mb-4 flex items-center gap-3">
                                  <div className="w-2.5 h-2.5 rounded-full border-2 border-[#10B981] bg-white"></div>
                                  {content}
                                </h4>
                              );
                            }

                            // Handle Headings (shifted down: page already has H1 for tour title)
                            if (trimmed.startsWith('### ')) {
                              return <h4 key={i} className="text-[18px] sm:text-xl font-black text-[#001A33] mb-4 mt-8">{trimmed.replace('### ', '')}</h4>;
                            }
                            if (trimmed.startsWith('## ')) {
                              return <h3 key={i} className="text-xl sm:text-2xl font-black text-[#001A33] mb-6 mt-10">{trimmed.replace('## ', '')}</h3>;
                            }
                            if (trimmed.startsWith('# ')) {
                              return <h2 key={i} className="text-2xl sm:text-3xl font-black text-[#001A33] mb-8 mt-12 border-b-2 border-gray-50 pb-4">{trimmed.replace('# ', '')}</h2>;
                            }

                            // Handle Separators
                            if (trimmed === '---') {
                              return (
                                <div key={i} className="my-12 flex items-center justify-center gap-4">
                                  <div className="h-px flex-1 bg-gray-100"></div>
                                  <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                                  <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                                  <div className="h-px flex-1 bg-gray-100"></div>
                                </div>
                              );
                            }

                            // Handle Bullets
                            if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
                              const content = trimmed.startsWith('* ') ? trimmed.replace('* ', '') : trimmed.replace('- ', '');
                              return (
                                <div key={i} className="flex gap-4 mb-4 ml-2 group">
                                  <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0"></div>
                                  <span className="text-gray-700 leading-relaxed font-semibold text-[15px] sm:text-[16px]">{renderMarkdownText(content)}</span>
                                </div>
                              );
                            }

                            // Handle Numbered Lists
                            if (/^\d+\.\s/.test(trimmed)) {
                              const splitIndex = trimmed.indexOf('. ');
                              const index = trimmed.substring(0, splitIndex);
                              const content = trimmed.substring(splitIndex + 2);
                              return (
                                <div key={i} className="flex gap-3 mb-4 ml-2 items-start">
                                  <span className="text-[#10B981] font-black min-w-[20px] text-[15px] sm:text-[16px] mt-0.5">{index}.</span>
                                  <span className="text-gray-700 leading-relaxed font-semibold text-[15px] sm:text-[16px]">{renderMarkdownText(content)}</span>
                                </div>
                              );
                            }

                            // Handle Paragraphs
                            return (
                              <p key={i} className="mb-6 last:mb-0 text-gray-700 leading-relaxed text-[15px] sm:text-[16px]">
                                {renderMarkdownText(line)}
                              </p>
                            );
                          });
                        })()}
                      </div>
                    </div>
                  </div>

                  {/* Visual Itinerary Timeline */}
                  {tour.itineraryItems && Array.isArray(tour.itineraryItems) && tour.itineraryItems.length > 0 && (
                    <div className="mb-8">
                      <h2 className="text-2xl font-black text-[#001A33] mb-4">Tour Itinerary</h2>
                      <div className="bg-[#10B981]/5 border border-[#10B981]/20 rounded-xl p-4 mb-6">
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle2 size={16} className="text-[#10B981]" />
                          <span className="text-[14px] font-bold text-[#10B981]">Itineraries are customisable as per your request</span>
                        </div>
                        <p className="text-[13px] text-gray-500 font-semibold ml-6">The schedule below is a suggested plan and can be adjusted to suit your preferences.</p>
                      </div>
                      <div className="relative">
                        <div className="space-y-0">
                          {tour.itineraryItems.map((item: any, index: number) => {
                            const isLast = index === tour.itineraryItems.length - 1;

                            // Format time for display
                            const formatTime = (time: string) => {
                              if (!time) return '';
                              if (time.includes('AM') || time.includes('PM')) return time;
                              if (!time.includes(':')) return time;
                              const [h, m] = time.split(':');
                              const hour = parseInt(h, 10);
                              const ampm = hour >= 12 ? 'PM' : 'AM';
                              const displayHour = hour % 12 || 12;
                              return `${displayHour}:${m} ${ampm}`;
                            };

                            // Type-specific styling and icons
                            const getTypeConfig = (type: string) => {
                              const isOptional = type === 'optional';
                              const iconColor = isOptional ? '#6B7280' : 'white';
                              const bgClass = isOptional ? 'bg-white' : 'bg-[#10B981]';
                              const borderClass = isOptional ? 'border-gray-300' : 'border-[#10B981]';

                              const configs: Record<string, { bg: string; border: string; icon: React.ReactNode }> = {
                                pickup: { bg: bgClass, border: borderClass, icon: <MapPin size={14} color={iconColor} strokeWidth={2.5} /> },
                                transport: { bg: bgClass, border: borderClass, icon: <Bus size={14} color={iconColor} strokeWidth={2.5} /> },
                                visit: { bg: bgClass, border: borderClass, icon: <Landmark size={14} color={iconColor} strokeWidth={2.5} /> },
                                meal: { bg: bgClass, border: borderClass, icon: <Utensils size={14} color={iconColor} strokeWidth={2.5} /> },
                                activity: { bg: bgClass, border: borderClass, icon: <Star size={14} color={iconColor} strokeWidth={2.5} /> },
                                optional: { bg: bgClass, border: borderClass, icon: <Map size={14} color={iconColor} strokeWidth={2.5} /> },
                                return: { bg: bgClass, border: borderClass, icon: <Home size={14} color={iconColor} strokeWidth={2.5} /> }
                              };
                              return configs[type] || configs.visit;
                            };

                            const config = getTypeConfig(item.type);
                            const isTransport = item.type === 'transport';
                            const isOptional = item.optional || item.type === 'optional';

                            return (
                              <div key={index} className={`relative pl-12 py-3 ${isOptional ? 'opacity-80' : ''}`}>
                                {/* Segmented connecting line to next item (stops at last item) */}
                                {!isLast && (
                                  <div className="absolute left-[19px] top-6 bottom-[-1.5rem] w-[4px] bg-[#10B981]/50 rounded-full z-0" />
                                )}

                                {/* Icon on timeline */}
                                <div className={`absolute left-[6px] top-5 w-[30px] h-[30px] rounded-full ${config.bg} ${config.border} border-[3px] flex items-center justify-center z-10 shadow-md`}>
                                  {config.icon}
                                </div>

                                <div className="bg-white border border-gray-100 shadow-sm hover:shadow-md rounded-xl p-4 transition-all">
                                  <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center gap-3 mb-1.5">
                                        <span className="text-[13px] font-black text-[#10B981] tracking-wide">
                                          {formatTime(item.time)}
                                        </span>
                                        {sanitizeItineraryDuration(item.duration) && (
                                          <span className="text-[11px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                                            {sanitizeItineraryDuration(item.duration)}
                                          </span>
                                        )}
                                        {isOptional && (
                                          <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full uppercase tracking-wider border border-amber-200">
                                            Optional
                                          </span>
                                        )}
                                      </div>
                                      <h3 className={`text-[16px] font-black ${isTransport ? 'text-gray-500' : 'text-[#001A33]'} mb-1`}>
                                        {item.title}
                                      </h3>
                                      {item.description && (
                                        <p className={`text-[14px] font-semibold ${isTransport ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                                          {item.description}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Detailed Itinerary Description */}
                  {tour.detailedItinerary && (
                    <div className="mb-8">
                      <h2 className="text-2xl font-black text-[#001A33] mb-4">Detailed Itinerary</h2>
                      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                        {tour.detailedItinerary.split('\n').map((line: string, index: number) => {
                          const trimmed = line.trim();
                          if (trimmed.startsWith('##')) {
                            const level = trimmed.startsWith('###') ? 'text-lg' : 'text-xl';
                            return <h2 key={index} className={`${level} font-black text-[#001A33] mt-6 mb-3 first:mt-0`}>{trimmed.replace(/^#+\s*/, '')}</h2>;
                          }
                          if (trimmed === '') {
                            return <div key={index} className="h-2" />;
                          }
                          return <p key={index} className="text-[15px] text-gray-700 font-semibold leading-[1.8] break-words whitespace-pre-wrap">{trimmed}</p>;
                        })}
                      </div>
                    </div>
                  )}

                  {/* Includes Section */}
                  {tour.included && (
                    <div className="mb-8">
                      <h2 className="text-2xl font-black text-[#001A33] mb-4">Includes</h2>
                      <ul className="space-y-3">
                        {tour.included.split('\n').filter((item: string) => item.trim()).map((item: string, index: number) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="text-[#10B981] shrink-0 mt-1" size={20} />
                            <span className="text-[16px] text-gray-700 font-semibold">{item.trim().replace(/^[-•]\s*/, '')}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Not Included Section */}
                  {tour.notIncluded && (
                    <div className="mb-8">
                      <h2 className="text-2xl font-black text-[#001A33] mb-4">Excludes</h2>
                      <ul className="space-y-3">
                        {tour.notIncluded.split('\n').filter((item: string) => item.trim()).map((item: string, index: number) => (
                          <li key={index} className="flex items-start gap-3">
                            <X className="text-red-500 shrink-0 mt-1" size={20} />
                            <span className="text-[16px] text-gray-700 font-semibold">{item.trim().replace(/^[-•]\s*/, '')}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}


                  {/* Important Information */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-black text-[#001A33] mb-4">Important information</h2>
                    {tour.meetingPoint && (
                      <div className="mb-4">
                        <h3 className="text-[18px] font-black text-[#001A33] mb-2">Meeting point</h3>
                        <p className="text-[16px] text-gray-700 font-semibold">{tour.meetingPoint}</p>
                      </div>
                    )}
                    <div>
                      <h3 className="text-[18px] font-black text-[#001A33] mb-2">Know before you go</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#001A33] rounded-full mt-2 shrink-0"></div>
                          <span className="text-[16px] text-gray-700 font-semibold">
                            Free cancellation available up to 24 hours before the activity starts
                          </span>
                        </li>
                        {tour.category === 'Entry Ticket' && (
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-[#001A33] rounded-full mt-2 shrink-0"></div>
                            <span className="text-[16px] text-gray-700 font-semibold">
                              Please bring a valid ID or passport for entry
                            </span>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* About this activity */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-black text-[#001A33] mb-6">About this activity</h2>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-[#10B981]/10 flex items-center justify-center shrink-0 mt-1">
                          <CheckCircle2 className="text-[#10B981]" size={16} />
                        </div>
                        <div>
                          <div className="font-black text-[#001A33] text-[16px] mb-1">Free cancellation</div>
                          <div className="text-[14px] text-gray-600 font-semibold">
                            Cancel up to 24 hours in advance for a full refund
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-[#10B981]/10 flex items-center justify-center shrink-0 mt-1">
                          <CheckCircle2 className="text-[#10B981]" size={16} />
                        </div>
                        <div>
                          <div className="font-black text-[#001A33] text-[14px] mb-1 break-words">Secure payment</div>
                          <div className="text-[12px] text-gray-600 font-semibold break-words">
                            Complete your booking safely with Razorpay. Full refund if you cancel 24h prior.{' '}
                            <a href="#" className="text-[#10B981] underline">Read more</a>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-[#10B981]/10 flex items-center justify-center shrink-0 mt-1">
                          <Clock className="text-[#10B981]" size={16} />
                        </div>
                        <div>
                          <div className="font-black text-[#001A33] text-[16px] mb-1">
                            Duration {formatDurationDisplay(tour.duration)}
                          </div>
                          <div className="text-[14px] text-gray-600 font-semibold">
                            Check availability to see starting times
                          </div>
                        </div>
                      </div>
                      {tour.included && tour.included.toLowerCase().includes('skip') && (
                        <div className="flex items-start gap-4">
                          <div className="w-6 h-6 rounded-full bg-[#10B981]/10 flex items-center justify-center shrink-0 mt-1">
                            <CheckCircle2 className="text-[#10B981]" size={16} />
                          </div>
                          <div>
                            <div className="font-black text-[#001A33] text-[16px] mb-1">Skip the ticket line</div>
                          </div>
                        </div>
                      )}
                      {tour.languages && tour.languages.length > 0 && (
                        <div className="flex items-start gap-4">
                          <div className="w-6 h-6 rounded-full bg-[#10B981]/10 flex items-center justify-center shrink-0 mt-1">
                            <User className="text-[#10B981]" size={16} />
                          </div>
                          <div>
                            <div className="font-black text-[#001A33] text-[16px] mb-1">Live tour guide</div>
                            <div className="text-[14px] text-gray-600 font-semibold">
                              {tour.languages.join(', ')}
                            </div>
                          </div>
                        </div>
                      )}
                      {tour.pickupIncluded && (
                        <div className="flex items-start gap-4">
                          <div className="w-6 h-6 rounded-full bg-[#10B981]/10 flex items-center justify-center shrink-0 mt-1">
                            <Bus className="text-[#10B981]" size={16} />
                          </div>
                          <div>
                            <div className="font-black text-[#001A33] text-[16px] mb-1">Pickup included</div>
                            <div className="text-[14px] text-gray-600 font-semibold">
                              Driver will pick you up from hotel/airport or any desired location in {city || 'the city'}
                            </div>
                          </div>
                        </div>
                      )}
                      {/* Wheelchair accessible - can be added as a tour field later */}
                      <div className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-[#10B981]/10 flex items-center justify-center shrink-0 mt-1">
                          <CheckCircle2 className="text-[#10B981]" size={16} />
                        </div>
                        <div>
                          <div className="font-black text-[#001A33] text-[16px] mb-1">Wheelchair accessible</div>
                        </div>
                      </div>
                      {tour.guideType === 'Tour Guide' && (
                        <div className="flex items-start gap-4">
                          <div className="w-6 h-6 rounded-full bg-[#10B981]/10 flex items-center justify-center shrink-0 mt-1">
                            <Users className="text-[#10B981]" size={16} />
                          </div>
                          <div>
                            <div className="font-black text-[#001A33] text-[16px] mb-1">Private group</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <RelatedTours currentTourId={tour?.id} country={country || tour?.country} city={city || tour?.city} />

                </div>

                {/* Right Column - Booking Panel */}
                <div className="lg:col-span-1" ref={bookingBoxRef}>
                  <div className="sticky top-24 bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm min-w-0">
                    {/* Share */}
                    <div className="flex items-center justify-end gap-4 mb-6">
                      <a href="#" className="text-[14px] text-gray-600 font-semibold hover:text-[#10B981] transition-colors">
                        Share
                      </a>
                    </div>

                    <div className="mb-6">
                      {/* Show main tour pricing ONLY when NO option is selected */}
                      {!selectedOption && (
                        <div className="mb-4">
                          <div className="text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Main Tour Price</div>
                          <div className="flex items-baseline gap-3 mb-1">
                            <span className="text-[14px] text-gray-500 font-semibold">
                              Starting from $
                              {(() => {
                                const INR_TO_USD_SIDEBAR = 85;
                                const sidebarConvert = (p: number) => tour.currency === 'INR' ? Math.round(p / INR_TO_USD_SIDEBAR) : p;
                                console.log('═══════════════════════════════════════════════════════════');
                                console.log('🏷 "STARTING FROM" PRICE CALCULATION');
                                console.log('═══════════════════════════════════════════════════════════');

                                // Get the price for 1 person (first tier: 1-1 person)
                                let priceForOne = tour.pricePerPerson || 0;
                                console.log('📥 Initial priceForOne (from pricePerPerson):', priceForOne);

                                // Check main tour option (sortOrder: -1) for groupPricingTiers first
                                if (tour.options && Array.isArray(tour.options) && tour.options.length > 0) {
                                  console.log('🔍 Checking main tour option for 1-1 person price...');
                                  const mainTourOption = tour.options.find((opt: any) => opt.sortOrder === -1);
                                  console.log('   Main tour option:', {
                                    found: !!mainTourOption,
                                    title: mainTourOption?.optionTitle,
                                    hasGroupPricingTiers: !!mainTourOption?.groupPricingTiers
                                  });

                                  if (mainTourOption && mainTourOption.groupPricingTiers) {
                                    try {
                                      const tiers = typeof mainTourOption.groupPricingTiers === 'string'
                                        ? JSON.parse(mainTourOption.groupPricingTiers)
                                        : mainTourOption.groupPricingTiers;
                                      console.log('   Parsed pricing slabs from main tour option:', tiers);
                                      if (Array.isArray(tiers) && tiers.length > 0 && tiers[0].price) {
                                        // First tier is always for 1 person (1-1 person)
                                        const firstTier = tiers[0];
                                        priceForOne = parseFloat(firstTier.price || 0);
                                        console.log('✅ Default price (1-1 person) from main tour option:', {
                                          slab: `${firstTier.minPeople}-${firstTier.maxPeople}`,
                                          price: priceForOne,
                                          rawPrice: firstTier.price
                                        });
                                      } else {
                                        console.warn('⚠️ Main tour option tiers invalid or empty');
                                      }
                                    } catch (e) {
                                      console.error('❌ Error parsing main tour option groupPricingTiers:', e);
                                    }
                                  } else {
                                    console.log('ℹ️ Main tour option has no groupPricingTiers');
                                  }
                                }

                                // Check tour.groupPricingTiers directly
                                if (priceForOne === (tour.pricePerPerson || 0) && tour.groupPricingTiers) {
                                  console.log('🔍 Checking tour.groupPricingTiers directly...');
                                  try {
                                    const tiers = typeof tour.groupPricingTiers === 'string'
                                      ? JSON.parse(tour.groupPricingTiers)
                                      : tour.groupPricingTiers;
                                    console.log('   Parsed pricing slabs from tour:', tiers);
                                    if (Array.isArray(tiers) && tiers.length > 0 && tiers[0].price) {
                                      // First tier is always for 1 person (1-1 person)
                                      const firstTier = tiers[0];
                                      priceForOne = parseFloat(firstTier.price || 0);
                                      console.log('✅ Default price (1-1 person) from tour:', {
                                        slab: `${firstTier.minPeople}-${firstTier.maxPeople}`,
                                        price: priceForOne,
                                        rawPrice: firstTier.price
                                      });
                                    }
                                  } catch (e) {
                                    console.error('❌ Error parsing tour groupPricingTiers:', e);
                                  }
                                }

                                console.log('💰 FINAL "STARTING FROM" PRICE:', priceForOne);
                                console.log('═══════════════════════════════════════════════════════════');
                                return sidebarConvert(priceForOne).toLocaleString();
                              })()}
                            </span>
                            <div className="text-3xl font-black text-red-600">
                              $
                              {(() => {
                                const currentParticipants = isCustomParticipants ? customParticipants : participants;
                                console.log('═══════════════════════════════════════════════════════════');
                                console.log('💰 DYNAMIC PRICE CALCULATION (person count changed)');
                                console.log('═══════════════════════════════════════════════════════════');
                                console.log('📥 Selected persons:', currentParticipants);
                                console.log('   isCustomParticipants:', isCustomParticipants);

                                // Always use group pricing logic - calculate from tiers
                                const groupPrice = calculateGroupPrice(tour, currentParticipants);
                                const sidebarConvertDynamic = (p: number) => tour.currency === 'INR' ? Math.round(p / 85) : p;

                                if (groupPrice !== null && groupPrice > 0) {
                                  console.log('✅ Using calculated group price:', groupPrice);
                                  console.log('═══════════════════════════════════════════════════════════');
                                  return sidebarConvertDynamic(groupPrice).toLocaleString();
                                }

                                // Check main tour option for group pricing
                                if (tour && tour.options && Array.isArray(tour.options) && tour.options.length > 0) {
                                  console.log('🔍 Falling back to main tour option...');
                                  const mainTourOption = tour.options.find((opt: any) => opt.sortOrder === -1) || tour.options[0];
                                  if (mainTourOption && mainTourOption.groupPricingTiers) {
                                    const optionGroupPrice = calculateGroupPrice(mainTourOption, currentParticipants);
                                    if (optionGroupPrice !== null && optionGroupPrice > 0) {
                                      console.log('✅ Using main tour option price:', optionGroupPrice);
                                      console.log('═══════════════════════════════════════════════════════════════');
                                      return sidebarConvertDynamic(optionGroupPrice).toLocaleString();
                                    }
                                  }
                                  // DO NOT use groupPrice - it's the LAST tier price (wrong)
                                }

                                // Fallback: use pricePerPerson (should be first tier price)
                                console.warn('⚠️ Using fallback pricePerPerson:', tour.pricePerPerson);
                                console.log('═══════════════════════════════════════════════════════════');
                                return sidebarConvertDynamic(tour.pricePerPerson || 0).toLocaleString();
                              })()}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Show option pricing when selected - replaces main tour price */}
                      {selectedOption && (
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-[12px] font-bold text-gray-500 uppercase tracking-wider">Selected Option Price</div>
                            <button
                              onClick={() => setSelectedOption(null)}
                              className="text-[11px] text-[#0071EB] font-semibold hover:underline"
                            >
                              Back to Main Tour
                            </button>
                          </div>
                          <div className="flex items-baseline gap-3 mb-1">
                            <div className="text-3xl font-black text-[#10B981]">
                              $
                              {(() => {
                                const currentParticipants = isCustomParticipants ? customParticipants : participants;
                                // Same logic: if option has no own tiers, price came from main tour's INR tiers
                                const selOptTiers = selectedOption.groupPricingTiers
                                  ? (typeof selectedOption.groupPricingTiers === 'string' ? (() => { try { return JSON.parse(selectedOption.groupPricingTiers); } catch { return []; } })() : selectedOption.groupPricingTiers)
                                  : [];
                                const selOptHasOwnTiers = Array.isArray(selOptTiers) && selOptTiers.length > 0;
                                const selOptPriceCurrency = selOptHasOwnTiers ? (selectedOption.currency || 'INR') : (tour.currency || 'INR');
                                const convertOpt = (p: number) => selOptPriceCurrency === 'INR' ? Math.round(p / 85) : p;
                                console.log('═══════════════════════════════════════════════════════════');
                                console.log('💰 SELECTED OPTION PRICE CALCULATION');
                                console.log('═══════════════════════════════════════════════════════════');
                                console.log('Selected option:', {
                                  id: selectedOption.id,
                                  title: selectedOption.optionTitle,
                                  price: selectedOption.price,
                                  hasGroupPricingTiers: !!selectedOption.groupPricingTiers,
                                  groupPricingTiersType: typeof selectedOption.groupPricingTiers
                                });
                                console.log('Current participants:', currentParticipants);

                                // If selected option has own tiers, use them directly
                                if (selOptHasOwnTiers) {
                                  const matchingTier = selOptTiers.find((t: any) =>
                                    currentParticipants >= (t.minPeople || 1) && currentParticipants <= (t.maxPeople || 999)
                                  ) || selOptTiers[selOptTiers.length - 1];
                                  const tierPrice = parseFloat(matchingTier?.price || selOptTiers[0]?.price || selectedOption.price || 0);
                                  return convertOpt(tierPrice).toLocaleString();
                                }

                                // No own tiers — fall back to main tour tiers (INR)
                                const groupPrice = calculateGroupPrice(selectedOption, currentParticipants);
                                if (groupPrice !== null && groupPrice > 0) {
                                  return convertOpt(groupPrice).toLocaleString();
                                }

                                // Last resort: option.price
                                return convertOpt(selectedOption.price || 0).toLocaleString();
                              })()}
                            </div>
                          </div>
                          <div className="text-[12px] text-gray-500 mt-1">
                            Option: {selectedOption.optionTitle}
                          </div>
                        </div>
                      )}

                      {/* Group Pricing Tiers Display */}
                      {(() => {
                        const tourData = selectedOption || tour;
                        let groupPricingTiers = null;

                        if (tourData.groupPricingTiers) {
                          try {
                            groupPricingTiers = typeof tourData.groupPricingTiers === 'string'
                              ? JSON.parse(tourData.groupPricingTiers)
                              : tourData.groupPricingTiers;
                          } catch (e) {
                            console.error('Error parsing groupPricingTiers:', e);
                          }
                        }

                        // If no groupPricingTiers on tourData and this is main tour, check main tour option
                        if (!groupPricingTiers && !selectedOption && tour && tour.options && Array.isArray(tour.options) && tour.options.length > 0) {
                          const mainTourOption = tour.options.find((opt: any) => opt.sortOrder === -1) || tour.options[0];
                          if (mainTourOption && mainTourOption.groupPricingTiers) {
                            try {
                              groupPricingTiers = typeof mainTourOption.groupPricingTiers === 'string'
                                ? JSON.parse(mainTourOption.groupPricingTiers)
                                : mainTourOption.groupPricingTiers;
                            } catch (e) {
                              console.error('Error parsing groupPricingTiers from main tour option:', e);
                            }
                          }
                        }

                        if (groupPricingTiers && Array.isArray(groupPricingTiers) && groupPricingTiers.length > 0) {
                          const currencySymbol = (tourData.currency || tour.currency || 'INR') === 'INR' ? '₹' : '$';
                          const currentParticipants = isCustomParticipants ? customParticipants : participants;
                          const currentPrice = calculateGroupPrice(tourData, currentParticipants);

                          // Don't show the pricing tiers table, but keep price calculation working
                          // Price will update dynamically when participants change
                          return null; // Hide the pricing tiers display
                        }
                        return null;
                      })()}

                      {/* Tour Types - More Prominent Display */}
                      {tour.tourTypes && (() => {
                        try {
                          const tourTypesArray = typeof tour.tourTypes === 'string' ? JSON.parse(tour.tourTypes) : tour.tourTypes;
                          if (Array.isArray(tourTypesArray) && tourTypesArray.length > 0) {
                            return (
                              <div className="mt-4">
                                <div className="text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Tour Type</div>
                                <div className="flex flex-wrap gap-2">
                                  {tourTypesArray.map((type: string, idx: number) => (
                                    <span
                                      key={idx}
                                      className="px-3 py-1.5 bg-[#10B981]/10 text-[#10B981] text-[12px] font-black rounded-full border border-[#10B981]/20"
                                    >
                                      {type}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            );
                          }
                        } catch (e) {
                          console.error('Error parsing tourTypes:', e);
                        }
                        return null;
                      })()}
                    </div>

                    {/* Date Selector - Premium Calendar */}
                    <div className="mb-6">
                      <div className="relative">
                        <button
                          onClick={() => setShowCalendarModal(true)}
                          className="w-full bg-white border-2 border-gray-200 rounded-2xl py-4 px-4 pr-10 font-bold text-[#001A33] text-[14px] focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] outline-none text-left flex items-center justify-between hover:border-[#10B981] transition-colors"
                        >
                          <span className="flex-1 min-w-0 truncate pr-2">{selectedDate ? (() => { const [y,m,d] = selectedDate.split('-').map(Number); return new Date(y,m-1,d).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }); })() : 'Select date'}</span>
                          <Calendar className="text-gray-400 shrink-0" size={20} />
                        </button>
                      </div>
                    </div>

                    {/* Booking Options - Dropdown Style */}
                    <div className="space-y-4 mb-6">
                      <div className="relative">
                        <select
                          value={isCustomParticipants ? 'custom' : participants}
                          onChange={(e) => {
                            if (e.target.value === 'custom') {
                              setIsCustomParticipants(true);
                              setParticipants(customParticipants);
                            } else {
                              setIsCustomParticipants(false);
                              setParticipants(parseInt(e.target.value));
                            }
                          }}
                          className="w-full bg-white border-2 border-gray-200 rounded-2xl py-4 px-4 pr-10 font-bold text-[#001A33] text-[14px] focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] outline-none appearance-none"
                        >
                          {Array.from({ length: Math.min(effectiveMaxGroupSize, 10) }, (_, i) => i + 1).map(num => (
                            <option key={num} value={num}>Adult x {num}</option>
                          ))}
                          {effectiveMaxGroupSize > 10 && (
                            <option value="custom">Custom</option>
                          )}
                        </select>
                        <Users className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                      </div>

                      {/* Custom Participants Input */}
                      {isCustomParticipants && (
                        <div className="relative">
                          <input
                            type="number"
                            min="11"
                            max={effectiveMaxGroupSize}
                            value={customParticipants}
                            onChange={(e) => {
                              const val = parseInt(e.target.value);
                              const value = isNaN(val) ? 11 : Math.min(val, effectiveMaxGroupSize);
                              setCustomParticipants(value);
                              setParticipants(value);
                            }}
                            className="w-full bg-white border-2 border-gray-200 rounded-2xl py-4 px-4 pr-10 font-bold text-[#001A33] text-[14px] focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] outline-none"
                            placeholder={`Enter adults (max ${effectiveMaxGroupSize})`}
                          />
                          <Users className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                        </div>
                      )}

                      {/* Contact Support for custom/larger groups */}
                      <div className="mt-2 text-[12px] font-semibold text-gray-500 bg-gray-50 p-3 rounded-xl border border-gray-100 italic">
                        Need a custom booking or have a larger group?
                        <a
                          href="https://wa.me/918449538716"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#10B981] ml-1 hover:underline flex items-center gap-1 mt-1 font-black"
                        >
                          Contact Support via WhatsApp
                        </a>
                      </div>


                      {tour.languages && tour.languages.length > 0 && (
                        <div className="relative">
                          <select
                            value={selectedLanguage}
                            onChange={(e) => setSelectedLanguage(e.target.value)}
                            className="w-full bg-white border-2 border-gray-200 rounded-2xl py-4 px-4 pr-10 font-bold text-[#001A33] text-[14px] focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] outline-none appearance-none"
                          >
                            {tour.languages.map((lang: string) => (
                              <option key={lang} value={lang}>{lang}</option>
                            ))}
                          </select>
                          <Globe className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                        </div>
                      )}
                    </div>

                    {/* Policies */}
                    {/* Availability Status */}
                    {availabilityStatus === 'available' && (
                      <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-2xl">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="text-[#10B981]" size={20} />
                          <span className="font-black text-[#10B981] text-[14px]">Available!</span>
                        </div>
                        <p className="text-[12px] text-gray-600 font-semibold">
                          This tour is available for {selectedDate ? (() => { const [y,m,d] = selectedDate.split('-').map(Number); return new Date(y,m-1,d).toLocaleDateString('en-US', { month: 'long', day: 'numeric' }); })() : 'selected dates'}
                        </p>
                      </div>
                    )}

                    {availabilityStatus === 'unavailable' && (
                      <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-2xl">
                        <div className="flex items-center gap-2 mb-2">
                          <X className="text-red-600" size={20} />
                          <span className="font-black text-red-600 text-[14px]">Not Available</span>
                        </div>
                        <p className="text-[12px] text-gray-600 font-semibold">
                          This tour is not available for the selected date. Please choose another date.
                        </p>
                      </div>
                    )}

                    {/* Book Button - GetYourGuide Blue */}
                    <button
                      onClick={availabilityStatus === 'available' ? handleProceedToBooking : handleCheckAvailability}
                      disabled={availabilityStatus === 'checking'}
                      className="w-full bg-[#0071EB] hover:bg-[#0056b3] text-white font-black py-5 rounded-2xl text-[16px] transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {availabilityStatus === 'checking' ? (
                        <>
                          <Loader2 className="animate-spin" size={20} />
                          Checking...
                        </>
                      ) : availabilityStatus === 'available' ? (
                        'Proceed to Booking'
                      ) : (
                        'Check availability'
                      )}
                    </button>
                    {bookingError && (
                      <p className="text-[14px] text-red-500 font-bold text-center mt-3 p-3 bg-red-50 rounded-xl border border-red-100 flex items-center justify-center gap-2">
                        <Info size={16} />
                        {bookingError}
                      </p>
                    )}

                    <div className="space-y-4 mt-5 pt-5 border-t border-gray-200">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="text-[#10B981] shrink-0 mt-1" size={18} />
                        <div className="min-w-0 flex-1">
                          <div className="font-black text-[#001A33] text-[14px] mb-1 break-words">Free cancellation</div>
                          <div className="text-[12px] text-gray-600 font-semibold break-words">
                            Cancel up to 24 hours in advance for a full refund
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="text-[#10B981] shrink-0 mt-1" size={18} />
                        <div className="min-w-0 flex-1">
                          <div className="font-black text-[#001A33] text-[14px] mb-1 break-words">Secure payment</div>
                          <div className="text-[12px] text-gray-600 font-semibold break-words">
                            Complete your booking safely with Razorpay. Full refund if you cancel 24h prior.{' '}
                            <a href="#" className="text-[#10B981] underline">Read more</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Structured SEO Sections - Premium Content below main grid */}
              <div className="mt-20 pt-16 border-t border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">



                  {/* Section: Traveler Reviews */}
                  {(() => {
                    const reviewData = getTourReviews(tourSlug);
                    if (!reviewData) return null;

                    const formatReviewDate = (dateStr: string) => {
                      const d = new Date(dateStr + 'T00:00:00');
                      return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
                    };

                    const avatarColors = ['#065f46', '#047857', '#0d9488', '#0e7490', '#059669', '#10b981'];

                    return (
                      <section className="lg:col-span-2">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="p-3 bg-[#10B981]/10 rounded-2xl">
                            <Star className="text-[#10B981]" size={32} />
                          </div>
                          <h2 className="text-2xl font-black text-[#001A33]">Traveler Reviews</h2>
                        </div>

                        {/* Rating Summary */}
                        <div className="flex flex-col sm:flex-row gap-8 mb-6">
                          {/* Left: Big rating */}
                          <div className="flex flex-col items-center sm:items-start">
                            <div className="flex items-baseline gap-1">
                              <span className="text-5xl font-black text-[#001A33]">{reviewData.averageRating}</span>
                              <span className="text-xl text-gray-400 font-semibold">/5</span>
                            </div>
                            <div className="flex items-center gap-0.5 mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={22}
                                  className={i < Math.round(reviewData.averageRating) ? 'text-[#10B981] fill-[#10B981]' : 'text-gray-200 fill-gray-200'}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500 font-semibold mt-1">based on {reviewData.totalReviews} reviews</span>
                          </div>

                          {/* Right: Category bars */}
                          <div className="flex-1 flex flex-col gap-3 justify-center max-w-sm">
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-semibold text-gray-700 w-32">Guide</span>
                              <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-[#10B981] rounded-full" style={{ width: `${(reviewData.guideRating / 5) * 100}%` }} />
                              </div>
                              <span className="text-sm font-bold text-[#001A33] w-10 text-right">{reviewData.guideRating}/5</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-semibold text-gray-700 w-32">Value for money</span>
                              <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-[#10B981] rounded-full" style={{ width: `${(reviewData.valueRating / 5) * 100}%` }} />
                              </div>
                              <span className="text-sm font-bold text-[#001A33] w-10 text-right">{reviewData.valueRating}/5</span>
                            </div>
                          </div>
                        </div>

                        {/* Verified badge */}
                        <div className="flex items-center gap-2 text-sm text-[#059669] font-semibold mb-6 pb-6 border-b border-gray-200">
                          <ShieldCheck size={16} className="text-[#10B981]" />
                          All reviews are from verified AsiaByLocals travelers
                        </div>

                        {/* Individual Reviews */}
                        <div className="space-y-0">
                          {reviewData.reviews.map((review: TourReview, idx: number) => (
                            <div key={idx} className={`py-6 ${idx < reviewData.reviews.length - 1 ? 'border-b border-gray-100' : ''}`}>
                              {/* Stars */}
                              <div className="flex items-center gap-1.5 mb-3">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    size={16}
                                    className={i < review.rating ? 'text-[#10B981] fill-[#10B981]' : 'text-gray-200 fill-gray-200'}
                                  />
                                ))}
                                <span className="text-sm font-bold text-[#001A33] ml-1">{review.rating}</span>
                              </div>

                              {/* Author info */}
                              <div className="flex items-center gap-3 mb-3">
                                <div
                                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                                  style={{ backgroundColor: avatarColors[idx % avatarColors.length] }}
                                >
                                  {review.author.charAt(0)}
                                </div>
                                <div>
                                  <div className="text-sm font-bold text-[#001A33]">
                                    {review.author} <span className="font-normal text-gray-500">&ndash; {review.country}</span>
                                  </div>
                                  <div className="text-xs text-gray-400 font-semibold">{formatReviewDate(review.date)}</div>
                                </div>
                              </div>

                              {/* Review text */}
                              <p className="text-[15px] text-gray-700 font-medium leading-relaxed">{review.text}</p>
                            </div>
                          ))}
                        </div>
                      </section>
                    );
                  })()}

                  {/* Section 5: FAQ Section (Simple List Style like City Page) */}
                  <section className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-12">
                      <div className="p-3 bg-[#10B981]/10 rounded-2xl">
                        <HelpCircle className="text-[#10B981]" size={32} />
                      </div>
                      <h2 className="text-2xl font-black text-[#001A33]">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-8 max-w-4xl">
                      {(() => {
                        /* Using extracted getTourSpecificFAQs */

                        const tourFAQs = (() => {
                          const tourTitle = tour.title || 'this tour';
                          const specificFAQs = getTourSpecificFAQs(tourTitle, tourSlug || tour?.slug);
                          const faqs = specificFAQs || [
                            {
                              question: `What is specifically included in the ${tourTitle}?`,
                              answer: tour.included || `The ${tourTitle} includes a professional licensed guide, entry tickets to major monuments as per your selection, and a fully customizable itinerary.`
                            },
                            {
                              question: `How long is the actual ${tourTitle} experience?`,
                              answer: `The duration of the ${tourTitle} is typically ${tour.duration || 'a few hours'}. We recommend arriving 15 minutes before the scheduled start time for a smooth experience.`
                            },
                            {
                              question: `What is the best time to start the ${tourTitle}?`,
                              answer: "For most monument visits, we highly recommend a sunrise start. This allows you to avoid the midday heat, bypass the largest crowds, and capture the best lighting for photography."
                            }
                          ];

                          const cityLower = tour.city?.toLowerCase() || '';
                          const titleLower = tourTitle.toLowerCase();
                          const isAgraTour = cityLower === 'agra' || titleLower.includes('taj-mahal') || titleLower.includes('taj mahal');
                          const isDelhiTour = cityLower === 'delhi' || titleLower.includes('delhi');
                          const isJaipurTour = cityLower === 'jaipur' || titleLower.includes('jaipur') || titleLower.includes('amber-fort') || titleLower.includes('amber fort');

                          if (isAgraTour) {
                            const standardAgraFAQs = [
                              {
                                question: "Is the Taj Mahal closed on Friday?",
                                answer: "Yes, the Taj Mahal is closed every Friday for religious reasons. Please ensure your tour date for the Taj Mahal does not fall on a Friday."
                              },
                              {
                                question: "Is original passport mandatory for entry?",
                                answer: "Yes, foreign tourists must show their original passport or a high-quality digital photo at the entrance gates for security identification and monument entry."
                              },
                              {
                                question: "What is the best time to visit the Taj Mahal?",
                                answer: "Sunrise is the best time to visit the Taj Mahal. The gates open at 6:00 AM and the soft morning light creates the most stunning views. Arrive by 5:30 AM to beat the crowds and get the best photography conditions."
                              }
                            ];

                            standardAgraFAQs.forEach(af => {
                              if (!faqs.some(f => f.question.toLowerCase() === af.question.toLowerCase())) {
                                faqs.push(af);
                              }
                            });
                          }

                          if (isDelhiTour) {
                            const standardDelhiFAQs = [
                              {
                                question: "Is Delhi safe for tourists?",
                                answer: "Yes, Delhi is generally safe for tourists, especially in popular tourist areas like Connaught Place, Chandni Chowk, and around major monuments. Booking a licensed local guide through AsiaByLocals adds an extra layer of safety and local knowledge."
                              },
                              {
                                question: "What is the best way to get around Delhi?",
                                answer: "The Delhi Metro is the fastest and most affordable way to travel between attractions. For tour experiences, our guides arrange private air-conditioned vehicles so you can cover Old Delhi and New Delhi comfortably in one day."
                              },
                              {
                                question: "Do I need to book tickets in advance for Delhi monuments?",
                                answer: "For popular sites like Qutub Minar, Humayun's Tomb, and Red Fort, advance tickets are recommended to skip long queues. When you book a guided tour through AsiaByLocals, entry tickets and skip-the-line access are typically included."
                              }
                            ];

                            standardDelhiFAQs.forEach(af => {
                              if (!faqs.some(f => f.question.toLowerCase() === af.question.toLowerCase())) {
                                faqs.push(af);
                              }
                            });
                          }

                          if (isJaipurTour) {
                            const standardJaipurFAQs = [
                              {
                                question: "How do I get to Amber Fort from Jaipur city?",
                                answer: "Amber Fort is located 11 km from Jaipur city center, about a 20-minute drive. When you book a guided tour through AsiaByLocals, round-trip transportation from your hotel is included. You can also take an elephant or jeep ride up to the fort entrance."
                              },
                              {
                                question: "What should I wear when visiting Jaipur temples and forts?",
                                answer: "Modest clothing that covers shoulders and knees is recommended for temple visits. Comfortable walking shoes are essential as forts like Amber Fort and Nahargarh Fort involve significant walking on stone pathways. Carry sunscreen and water, especially during summer months."
                              },
                              {
                                question: "Can I visit Hawa Mahal, City Palace, and Amber Fort in one day?",
                                answer: "Yes, all three can be covered in a full-day guided tour. Our Jaipur city tours are designed to cover these major attractions efficiently with an experienced local guide who knows the best routes and timing to avoid crowds."
                              }
                            ];

                            standardJaipurFAQs.forEach(af => {
                              if (!faqs.some(f => f.question.toLowerCase() === af.question.toLowerCase())) {
                                faqs.push(af);
                              }
                            });
                          }

                          if (!specificFAQs) {
                            faqs.push({
                              question: `Will I receive confirmation after booking the ${tourTitle}?`,
                              answer: "Yes, once your booking is completed via our secure gateway, you will receive an instant confirmation email with your tour details and guide contact information."
                            });
                          }

                          return faqs;
                        })();

                        // Helper to render text with markdown-style links and bolding
                        const renderWithLinks = (text: string) => {
                          return text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g).map((part, i) => {
                            if (part.startsWith('**') && part.endsWith('**')) {
                              return <strong key={i} className="font-black text-[#001A33]">{part.slice(2, -2)}</strong>;
                            }
                            if (part.startsWith('[') && part.includes('](')) {
                              const match = part.match(/\[(.*?)\]\((.*?)\)/);
                              if (match) {
                                return (
                                  <Link key={i} href={match[2]} className="text-[#10B981] font-black border-b border-[#10B981]/30 hover:border-[#10B981] transition-all">
                                    {match[1]}
                                  </Link>
                                );
                              }
                            }
                            return part;
                          });
                        };

                        return tourFAQs.map((faq, idx) => {
                          const isExpanded = expandedFAQs.has(idx);
                          return (
                            <div key={idx} className="border-b border-gray-100 last:border-0 overflow-hidden">
                              <button
                                onClick={() => toggleFAQExpand(idx)}
                                className="w-full py-6 flex items-center justify-between text-left group"
                              >
                                <h3 className="text-[18px] font-black text-[#001A33] group-hover:text-[#10B981] transition-colors pr-8">
                                  {faq.question}
                                </h3>
                                <div className={`shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                                  <ChevronDown size={24} className="text-gray-400 group-hover:text-[#10B981]" />
                                </div>
                              </button>
                              <div
                                className={`grid transition-all duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mb-8' : 'grid-rows-[0fr] opacity-0'}`}
                              >
                                <div className="overflow-hidden">
                                  <div className="text-[16px] text-gray-600 font-semibold leading-relaxed">
                                    {renderWithLinks(faq.answer)}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        });
                      })()}
                    </div>
                  </section>

                </div>
              </div>
        </div>
      </main>

      {/* Image Modal */}
      {
        showImageModal && allImages && allImages.length > 0 && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={(e) => {
            // Close modal when clicking outside the image
            if (e.target === e.currentTarget) {
              setShowImageModal(false);
            }
          }}>
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors z-10"
            >
              <X size={24} />
            </button>
            <div className="max-w-6xl w-full relative" onClick={(e) => e.stopPropagation()}>
              {allImages[selectedImageIndex] && (
                <img
                  src={allImages[selectedImageIndex]}
                  alt={`${tour.title} - Image ${selectedImageIndex + 1}`}
                  className="w-full h-auto rounded-2xl max-h-[90vh] object-contain"
                />
              )}
              {allImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImageIndex(prev => Math.max(0, prev - 1));
                    }}
                    disabled={selectedImageIndex === 0}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white disabled:opacity-50 transition-colors z-10"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImageIndex(prev => Math.min(allImages.length - 1, prev + 1));
                    }}
                    disabled={selectedImageIndex === allImages.length - 1}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white disabled:opacity-50 transition-colors z-10"
                  >
                    <ChevronRight size={24} />
                  </button>
                  <div className="flex items-center justify-center gap-4 mt-4">
                    <span className="text-white font-bold text-[14px]">
                      {selectedImageIndex + 1} / {allImages.length}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        )
      }

      {/* Premium Calendar Modal */}
      {
        showCalendarModal && (
          <div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowCalendarModal(false)}
          >
            <div
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-black text-[#001A33]">Select Date</h3>
                <button
                  onClick={() => setShowCalendarModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} className="text-gray-600" />
                </button>
              </div>

              {/* Month Navigation */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => {
                    const newMonth = new Date(calendarMonth);
                    newMonth.setMonth(newMonth.getMonth() - 1);
                    setCalendarMonth(newMonth);
                  }}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <ChevronLeft size={20} className="text-gray-600" />
                </button>
                <h4 className="text-xl font-black text-[#001A33]">
                  {calendarMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </h4>
                <button
                  onClick={() => {
                    const newMonth = new Date(calendarMonth);
                    newMonth.setMonth(newMonth.getMonth() + 1);
                    setCalendarMonth(newMonth);
                  }}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <ChevronRight size={20} className="text-gray-600" />
                </button>
              </div>

              {/* Calendar Grid */}
              <div className="mb-4">
                {/* Day Headers */}
                <div className="grid grid-cols-7 gap-2 mb-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-center text-[12px] font-black text-gray-500 py-2">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Days */}
                <div className="grid grid-cols-7 gap-2">
                  {(() => {
                    const year = calendarMonth.getFullYear();
                    const month = calendarMonth.getMonth();
                    const firstDay = new Date(year, month, 1);
                    const lastDay = new Date(year, month + 1, 0);
                    const daysInMonth = lastDay.getDate();
                    const startingDayOfWeek = firstDay.getDay();

                    const today = new Date();
                    today.setHours(0, 0, 0, 0);

                    const days = [];

                    // Empty cells for days before the first day of the month
                    for (let i = 0; i < startingDayOfWeek; i++) {
                      days.push(<div key={`empty-${i}`} className="h-10"></div>);
                    }

                    // Days of the month
                    for (let day = 1; day <= daysInMonth; day++) {
                      const date = new Date(year, month, day);
                      const dateString = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
                      const isToday = date.getTime() === today.getTime();
                      const isPast = date < today;
                      const isSelected = selectedDate === dateString;
                      const isAvailable = !isPast; // You can add custom availability logic here

                      days.push(
                        <button
                          key={day}
                          onClick={() => {
                            if (isAvailable && !isPast) {
                              setSelectedDate(dateString);
                              setShowCalendarModal(false);
                              if (bookingError === 'Please select a date first') {
                                setBookingError(null);
                              }
                            }
                          }}
                          disabled={isPast || !isAvailable}
                          className={`
                          h-10 rounded-xl font-bold text-[14px] transition-all
                          ${isSelected
                              ? 'bg-[#10B981] text-white shadow-lg scale-105'
                              : isPast || !isAvailable
                                ? 'text-gray-300 cursor-not-allowed'
                                : 'text-[#001A33] hover:bg-[#10B981]/10 hover:scale-105'
                            }
                          ${isToday && !isSelected ? 'ring-2 ring-[#10B981] ring-offset-2' : ''}
                        `}
                        >
                          {day}
                        </button>
                      );
                    }

                    return days;
                  })()}
                </div>
              </div>

              {/* Quick Date Selection */}
              <div className="pt-4 border-t border-gray-200">
                <div className="text-[14px] font-bold text-gray-600 mb-3">Quick select</div>
                <div className="flex flex-wrap gap-2">
                  {getAvailableDates().slice(0, 7).map((date, index) => {
                    const dateString = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
                    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                    const dayName = dayNames[date.getDay()];
                    const dayNum = date.getDate();
                    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    const monthName = monthNames[date.getMonth()];

                    return (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedDate(dateString);
                          setShowCalendarModal(false);
                          if (bookingError === 'Please select a date first') {
                            setBookingError(null);
                          }
                        }}
                        className={`
                        px-4 py-2 rounded-xl font-bold text-[13px] transition-all
                        ${selectedDate === dateString
                            ? 'bg-[#10B981] text-white'
                            : 'bg-gray-100 text-[#001A33] hover:bg-[#10B981]/10'
                          }
                      `}
                      >
                        {dayName} {dayNum} {monthName}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )
      }

      {/* Option Selection Modal - GetYourGuide Style */}
      {
        showOptionSelectionModal && tour && tour.options && tour.options.length > 0 && (
          <div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setShowOptionSelectionModal(false)}
          >
            <div
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full p-8 my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-black text-[#001A33] mb-2">Choose from {tour.options.length} available option{tour.options.length > 1 ? 's' : ''}</h2>
                  <p className="text-[14px] text-gray-600 font-semibold">Select your preferred tour option</p>
                </div>
                <button
                  onClick={() => setShowOptionSelectionModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} className="text-gray-600" />
                </button>
              </div>

              {/* Options List */}
              <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
                {(tour.options || []).filter((opt: any) => opt.sortOrder !== -1).map((option: any) => {
                  const isSelected = selectedOption?.id === option.id;
                  const currencySymbol = option.currency === 'USD' ? '$' : option.currency === 'EUR' ? '€' : '₹';

                  return (
                    <div
                      key={option.id}
                      className={`border-2 rounded-2xl p-6 transition-all ${isSelected
                        ? 'border-[#10B981] bg-[#10B981]/5 shadow-lg'
                        : 'border-gray-200 hover:border-[#10B981]/50 hover:shadow-md'
                        }`}
                    >
                      <div className="flex items-start justify-between gap-6">
                        {/* Left: Option Details */}
                        <div className="flex-1">
                          <h3 className="font-black text-[#001A33] text-[18px] mb-2">{option.optionTitle}</h3>
                          <p className="text-[14px] text-gray-600 font-semibold mb-4 leading-relaxed">
                            {option.optionDescription}
                          </p>

                          {/* Key Details Row */}
                          <div className="flex items-center gap-6 text-[13px] text-gray-600 font-semibold mb-4">
                            <div className="flex items-center gap-2">
                              <Clock size={16} className="text-gray-500" />
                              <span>{formatDurationHours(option.durationHours)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Globe size={16} className="text-gray-500" />
                              <span>{option.language}</span>
                            </div>
                            {option.pickupIncluded && (
                              <div className="flex items-center gap-2">
                                <Bus size={16} className="text-gray-500" />
                                <span>Pickup included</span>
                              </div>
                            )}
                          </div>

                          {/* Inclusions Badges */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {option.guideIncluded && (
                              <span className="text-[12px] px-3 py-1 bg-orange-100 text-orange-700 rounded-full font-bold">Guide Included</span>
                            )}
                            {option.carIncluded && (
                              <span className="text-[12px] px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-bold">Private Car</span>
                            )}
                            {option.entryTicketIncluded && (
                              <span className="text-[12px] px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-bold">Entry Tickets</span>
                            )}
                            {option.pickupIncluded && (
                              <span className="text-[12px] px-3 py-1 bg-green-100 text-green-700 rounded-full font-bold">Hotel Pickup</span>
                            )}
                          </div>

                          {/* Free Cancellation */}
                          <div className="flex items-center gap-2 text-[13px] text-gray-600">
                            <CheckCircle2 size={14} className="text-[#10B981]" />
                            <span className="font-semibold">Free cancellation</span>
                          </div>
                        </div>

                        {/* Right: Pricing & Select Button */}
                        <div className="text-right flex flex-col items-end min-w-[200px]">
                          <div className="mb-3">
                            <div className="font-black text-[#001A33] text-[20px] mb-1">
                              {(() => {
                                const currentParticipants = isCustomParticipants ? customParticipants : participants;
                                // Always use group pricing logic - calculate from tiers
                                const groupPrice = calculateGroupPrice(option, currentParticipants);

                                if (groupPrice !== null) {
                                  return `${currencySymbol}${groupPrice.toLocaleString()}`;
                                }

                                if (option.groupPrice) {
                                  return `${currencySymbol}${option.groupPrice.toLocaleString()}`;
                                }

                                // Fallback: use option.price as fixed price
                                return `${currencySymbol}${(option.price || 0).toLocaleString()}`;
                              })()}
                            </div>
                          </div>

                          <button
                            onClick={() => handleOptionSelected(option)}
                            className={`w-full px-6 py-3 rounded-xl font-black text-[14px] transition-all ${isSelected
                              ? 'bg-[#10B981] text-white'
                              : 'bg-[#0071EB] text-white hover:bg-[#0056b3]'
                              }`}
                          >
                            {isSelected ? 'Selected (Click to deselect)' : 'Select'}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer Actions */}
              {selectedOption && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-[14px] text-gray-600 font-semibold mb-1">Selected option:</div>
                      <div className="font-black text-[#001A33] text-[16px]">{selectedOption.optionTitle}</div>
                    </div>
                    <button
                      onClick={() => setSelectedOption(null)}
                      className="px-4 py-2 text-[#0071EB] font-semibold text-[13px] hover:underline"
                    >
                      Back to Main Tour
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      setShowOptionSelectionModal(false);
                      setAvailabilityStatus('checking');
                      setTimeout(() => {
                        setAvailabilityStatus('available');
                      }, 1000);
                    }}
                    className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-black px-8 py-3 rounded-xl transition-all"
                  >
                    Continue to Booking
                  </button>
                </div>
              )}
            </div>
          </div>
        )
      }

      {/* Booking Modal */}
      {
        showBookingModal && tour && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]" onClick={() => {
            // Save draft before closing
            if (tour?.id) {
              const draftKey = `booking_draft_${tour.id}`;
              const draft = {
                bookingData,
                selectedDate,
                participants,
                selectedOptionId: selectedOption?.id || null,
                tourId: tour.id
              };
              localStorage.setItem(draftKey, JSON.stringify(draft));
            }
            setShowBookingModal(false);
          }}>
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl font-black text-[#001A33]">Complete Your Booking</h3>
                  {(bookingData.customerName || bookingData.customerEmail) && (
                    <p className="text-[12px] text-gray-500 font-semibold mt-1">
                      💾 Your progress is saved automatically
                    </p>
                  )}
                </div>
                <button onClick={() => {
                  // Save draft before closing
                  if (tour?.id) {
                    const draftKey = `booking_draft_${tour.id}`;
                    const draft = {
                      bookingData,
                      selectedDate,
                      participants,
                      selectedOptionId: selectedOption?.id || null,
                      tourId: tour.id
                    };
                    localStorage.setItem(draftKey, JSON.stringify(draft));
                  }
                  setShowBookingModal(false);
                }} className="p-2 rounded-full hover:bg-gray-100">
                  <X size={24} className="text-gray-600" />
                </button>
              </div>

              {/* Booking Summary */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <h4 className="font-black text-[#001A33] text-[16px] mb-4">Booking Summary</h4>
                <div className="space-y-2 text-[14px]">
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Tour:</span>
                    <span className="font-black text-[#001A33]">{tour.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Date:</span>
                    <span className="font-black text-[#001A33]">
                      {selectedDate ? (() => { const [y,m,d] = selectedDate.split('-').map(Number); return new Date(y,m-1,d).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }); })() : 'Not selected'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Participants:</span>
                    <span className="font-black text-[#001A33]">{participants} {participants === 1 ? 'person' : 'people'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Language:</span>
                    <span className="font-black text-[#001A33]">{selectedLanguage}</span>
                  </div>
                  <div className="pt-4 border-t border-gray-200 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-semibold">Total Amount:</span>
                      <span className="font-black text-[#001A33] text-[20px]">
                        {(() => {
                          const currentParticipants = isCustomParticipants ? customParticipants : participants;
                          const tourData = selectedOption || tour;
                          const currencySymbol = (selectedOption?.currency || tour.currency || 'INR') === 'INR' ? '₹' : '$';

                          // Always use group pricing logic - calculate from tiers
                          const groupPrice = calculateGroupPrice(tourData, currentParticipants);
                          if (groupPrice !== null && groupPrice > 0) {
                            return `${currencySymbol}${groupPrice.toLocaleString()}`;
                          }
                          // DO NOT use groupPrice fallback - it's the LAST tier price (wrong)
                          // Fallback: use pricePerPerson (should be first tier price)
                          const pricePerPerson = selectedOption?.price || tour.pricePerPerson || 0;
                          return `${currencySymbol}${pricePerPerson.toLocaleString()}`;
                        })()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Form */}
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-black py-5 rounded-2xl text-[16px] transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    Continue to Checkout
                    <ChevronRight size={20} />
                  </button>
                  <p className="text-[12px] text-gray-500 font-semibold text-center mt-4">
                    You'll enter your details on the next page
                  </p>
                </div>
              </form>

              {/* Support Section - Outside Form */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="bg-[#F0FDF4] border-2 border-[#10B981] rounded-xl p-5">
                  <p className="text-[14px] text-gray-800 font-black text-center mb-2">Need help? Contact our support:</p>
                  <p className="text-[13px] text-[#10B981] font-black text-center mb-4">Available 24/7 on WhatsApp support</p>
                  <div className="flex items-center justify-center gap-4">
                    <a
                      href="https://wa.me/918449538716"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#10B981] hover:bg-[#059669] text-white rounded-full p-4 transition-all hover:scale-110 shadow-lg"
                      title="WhatsApp Support"
                    >
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </a>
                    <a
                      href="https://wa.me/919897873562"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#10B981] hover:bg-[#059669] text-white rounded-full p-4 transition-all hover:scale-110 shadow-lg"
                      title="WhatsApp Support"
                    >
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }

      {/* Guide Contact Information Modal */}
      {
        showGuideContactModal && guideContactInfo && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[200]" onClick={() => {
            setShowGuideContactModal(false);
            window.history.back();
          }}>
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={() => {
                  setShowGuideContactModal(false);
                  window.history.back();
                }}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#10B981]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-[#10B981]" size={32} />
                </div>
                <h3 className="text-2xl font-black text-[#001A33] mb-2">Payment Successful!</h3>
                <p className="text-[14px] text-gray-600 font-semibold">
                  Your booking has been confirmed and payment received.
                </p>
                {guideContactInfo.bookingReference && (
                  <p className="text-[12px] text-gray-500 font-semibold mt-2">
                    Booking Reference: <span className="font-black text-[#001A33]">{guideContactInfo.bookingReference}</span>
                  </p>
                )}
              </div>

              {/* Invoice Section */}
              <div className="bg-gradient-to-r from-[#10B981] to-[#059669] rounded-2xl p-6 mb-6 text-white">
                <h4 className="font-black text-white text-[18px] mb-4 flex items-center gap-2">
                  <CheckCircle size={20} />
                  Invoice & Payment Confirmation
                </h4>
                <div className="bg-white/10 rounded-xl p-4 space-y-2 text-[14px]">
                  {guideContactInfo.bookingReference && (
                    <div className="flex justify-between">
                      <span className="text-white/80 font-semibold">Booking Reference:</span>
                      <span className="font-black text-white">{guideContactInfo.bookingReference}</span>
                    </div>
                  )}
                  {guideContactInfo.paymentId && (
                    <div className="flex justify-between">
                      <span className="text-white/80 font-semibold">Payment ID:</span>
                      <span className="font-black text-white text-[12px]">{guideContactInfo.paymentId.substring(0, 20)}...</span>
                    </div>
                  )}
                  <div className="flex justify-between pt-2 border-t border-white/20 mt-2">
                    <span className="text-white/80 font-semibold">Amount Paid:</span>
                    <span className="font-black text-white text-[18px]">
                      {guideContactInfo.currency === 'INR' ? '₹' : '$'}{guideContactInfo.totalAmount.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80 font-semibold">Payment Status:</span>
                    <span className="font-black text-green-200">✓ Paid</span>
                  </div>
                  {guideContactInfo.paymentDate && (
                    <div className="flex justify-between">
                      <span className="text-white/80 font-semibold">Payment Date:</span>
                      <span className="font-black text-white text-[12px]">
                        {new Date(guideContactInfo.paymentDate).toLocaleString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Booking Summary */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <h4 className="font-black text-[#001A33] text-[16px] mb-4">Booking Details</h4>
                <div className="space-y-2 text-[14px]">
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Tour:</span>
                    <span className="font-black text-[#001A33]">{guideContactInfo.tourTitle}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Date:</span>
                    <span className="font-black text-[#001A33]">
                      {new Date(guideContactInfo.bookingDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Guests:</span>
                    <span className="font-black text-[#001A33]">{guideContactInfo.numberOfGuests} {guideContactInfo.numberOfGuests === 1 ? 'person' : 'people'}</span>
                  </div>
                </div>
              </div>

              {/* Supplier Contact Information */}
              <div className="bg-[#10B981]/5 rounded-2xl p-6 mb-6 border-2 border-[#10B981]/20">
                <h4 className="font-black text-[#001A33] text-[18px] mb-4 flex items-center gap-2">
                  <User className="text-[#10B981]" size={20} />
                  Contact Your Supplier
                </h4>
                <p className="text-[12px] text-gray-500 font-semibold mb-4">
                  Contact information from supplier's profile
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="text-[12px] text-gray-500 font-bold uppercase mb-2">Supplier Name</div>
                    <div className="text-[16px] font-black text-[#001A33]">{guideContactInfo.guideName}</div>
                  </div>

                  {(guideContactInfo.guideWhatsApp || guideContactInfo.guidePhone) ? (
                    <>
                      {(guideContactInfo.guideWhatsApp || guideContactInfo.guidePhone) && (
                        <div>
                          <div className="text-[12px] text-gray-500 font-bold uppercase mb-2">WhatsApp Number</div>
                          <a
                            href={`https://wa.me/${(guideContactInfo.guideWhatsApp || guideContactInfo.guidePhone || '').replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-[#10B981] text-white font-black py-4 px-6 rounded-xl hover:bg-[#059669] transition-all"
                          >
                            <MessageCircle size={20} />
                            <span>{guideContactInfo.guideWhatsApp || guideContactInfo.guidePhone}</span>
                            <ChevronRight size={18} className="ml-auto" />
                          </a>
                          <p className="text-[12px] text-gray-500 font-semibold mt-2">Click to open WhatsApp chat</p>
                        </div>
                      )}

                      {guideContactInfo.guidePhone && guideContactInfo.guidePhone !== guideContactInfo.guideWhatsApp && (
                        <div>
                          <div className="text-[12px] text-gray-500 font-bold uppercase mb-2">Phone Number</div>
                          <a
                            href={`tel:${guideContactInfo.guidePhone}`}
                            className="flex items-center gap-3 bg-white border-2 border-gray-200 text-[#001A33] font-black py-4 px-6 rounded-xl hover:border-[#10B981] transition-all"
                          >
                            <Phone size={20} />
                            <span>{guideContactInfo.guidePhone}</span>
                            <ChevronRight size={18} className="ml-auto" />
                          </a>
                          <p className="text-[12px] text-gray-500 font-semibold mt-2">Click to call</p>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <Info className="text-yellow-600 shrink-0 mt-1" size={20} />
                        <div>
                          <p className="text-[14px] font-black text-[#001A33] mb-1">Contact Information Not Available</p>
                          <p className="text-[12px] text-gray-600 font-semibold">
                            The supplier hasn't added their phone or WhatsApp number to their profile yet. Please contact them via email.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {guideContactInfo.guideEmail && (
                    <div>
                      <div className="text-[12px] text-gray-500 font-bold uppercase mb-2">Email Address</div>
                      <a
                        href={`mailto:${guideContactInfo.guideEmail}`}
                        className="flex items-center gap-3 bg-white border-2 border-gray-200 text-[#001A33] font-black py-4 px-6 rounded-xl hover:border-[#10B981] transition-all"
                      >
                        <Mail size={20} />
                        <span className="break-all">{guideContactInfo.guideEmail}</span>
                        <ChevronRight size={18} className="ml-auto" />
                      </a>
                      <p className="text-[12px] text-gray-500 font-semibold mt-2">Click to send email</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Important Note */}
              <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-black text-[#001A33] text-[14px] mb-1">Booking Confirmed!</div>
                    <div className="text-[12px] text-gray-700 font-semibold">
                      Your payment has been received. Contact your supplier via WhatsApp or phone to arrange meeting details and finalize your tour arrangements.
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    setShowGuideContactModal(false);
                    // Redirect to booking confirmation page
                    if (guideContactInfo.bookingId) {
                      window.location.href = `/booking-confirmation/${guideContactInfo.bookingId}`;
                    } else {
                      window.location.href = '/';
                    }
                  }}
                  className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-black py-4 rounded-2xl text-[16px] transition-all shadow-lg"
                >
                  View Booking Details & Invoice
                </button>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setShowGuideContactModal(false);
                      window.history.back();
                    }}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-[#001A33] font-black py-4 rounded-2xl text-[16px] transition-all"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setShowGuideContactModal(false);
                      window.location.href = '/';
                    }}
                    className="flex-1 bg-[#001A33] hover:bg-[#003366] text-white font-black py-4 rounded-2xl text-[16px] transition-all"
                  >
                    Continue Browsing
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      }

      {/* Booking Form */}
      {
        showBookingForm && pendingBookingData && (
          <BookingForm
            tourTitle={tour.title}
            bookingDate={pendingBookingData.bookingDate}
            guests={pendingBookingData.numberOfGuests}
            totalAmount={pendingBookingData.totalAmount}
            currency={pendingBookingData.currency}
            onSubmit={handleProceedToPayment}
            onClose={() => {
              setShowBookingForm(false);
              setShowBookingModal(true);
            }}
            isSubmitting={isInitializingPayment}
          />
        )
      }

      {/* Payment Initialization Loading Overlay */}
      {
        isInitializingPayment && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[200]">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-4 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#10B981] mx-auto mb-4"></div>
              <h3 className="text-xl font-black text-[#001A33] mb-2">Initializing Payment</h3>
              <p className="text-gray-600 font-semibold">Please wait while we set up your payment...</p>
              <p className="text-sm text-gray-500 mt-2">This may take a few seconds</p>
            </div>
          </div>
        )
      }

      {/* Floating Mobile Book Button — visible only on mobile/tablet when booking box is off-screen */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-4 pt-3 flex items-center justify-between gap-3" style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom, 0px))' }}>
        <div className="flex flex-col">
          <span className="text-[12px] text-gray-500 font-semibold">Starting from</span>
          <span className="text-[20px] font-black text-[#10B981]">
            {tour?.currency === 'INR' ? '₹' : '$'}{selectedOption?.price || tour?.pricePerPerson || 0}
          </span>
        </div>
        <button
          onClick={() => {
            bookingBoxRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          className="bg-[#0071EB] hover:bg-[#0056b3] text-white font-black py-3 px-8 rounded-xl text-[15px] transition-all shadow-lg"
        >
          Book Now
        </button>
      </div>

    </div >
  );
};

export default TourDetailClient;

