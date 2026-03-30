'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Star, Camera, X, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';

interface BookingInfo {
  id: number;
  customerName: string;
  customerEmail: string;
  bookingDate: string;
  tourTitle: string;
  tourSlug: string;
  tourCity: string;
  tourCountry: string;
  tourId: number;
  tourImage: string | null;
}

export default function ReviewClient({ token }: { token: string }) {
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [booking, setBooking] = useState<BookingInfo | null>(null);

  // Form state
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [guideRating, setGuideRating] = useState(0);
  const [hoverGuideRating, setHoverGuideRating] = useState(0);
  const [valueRating, setValueRating] = useState(0);
  const [hoverValueRating, setHoverValueRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [country, setCountry] = useState('');
  const [photos, setPhotos] = useState<string[]>([]);
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await fetch(`${API_URL}/api/reviews/verify/${token}`);
        const data = await res.json();

        if (!data.success) {
          setError(data.message || 'Invalid review link');
          return;
        }

        setBooking(data.booking);
      } catch (err) {
        setError('Failed to load review page. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, [token, API_URL]);

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    if (photos.length + files.length > 5) {
      alert('You can upload a maximum of 5 photos.');
      return;
    }

    setUploadingPhoto(true);

    for (const file of Array.from(files)) {
      if (file.size > 10 * 1024 * 1024) {
        alert(`${file.name} is too large. Maximum file size is 10MB.`);
        continue;
      }

      try {
        const reader = new FileReader();
        const base64 = await new Promise<string>((resolve, reject) => {
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
        setPhotos(prev => [...prev, base64]);
      } catch (err) {
        console.error('Failed to read file:', err);
      }
    }

    setUploadingPhoto(false);
    // Reset file input
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removePhoto = (index: number) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (rating === 0) {
      alert('Please select an overall rating.');
      return;
    }
    if (reviewText.trim().length < 20) {
      alert('Please write at least 20 characters in your review.');
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch(`${API_URL}/api/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token,
          rating,
          guideRating: guideRating || null,
          valueRating: valueRating || null,
          text: reviewText.trim(),
          country: country.trim() || null,
          photos: photos.length > 0 ? photos : null
        })
      });

      const data = await res.json();

      if (!data.success) {
        alert(data.message || 'Failed to submit review.');
        setSubmitting(false);
        return;
      }

      setSubmitted(true);
    } catch (err) {
      alert('Something went wrong. Please try again.');
      setSubmitting(false);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="animate-spin text-[#10B981] mx-auto mb-4" size={40} />
          <p className="text-gray-600 font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
          <AlertCircle className="text-red-500 mx-auto mb-4" size={48} />
          <h1 className="text-2xl font-bold text-[#001A33] mb-3">Unable to Load Review</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-[#10B981] text-white font-semibold rounded-lg hover:bg-[#059669] transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  // Success state
  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
          <CheckCircle className="text-[#10B981] mx-auto mb-4" size={56} />
          <h1 className="text-2xl font-bold text-[#001A33] mb-3">Thank You!</h1>
          <p className="text-gray-600 mb-2">Your review for <strong>{booking?.tourTitle}</strong> has been submitted successfully.</p>
          <p className="text-gray-500 text-sm mb-6">Your review will appear on the tour page and help other travelers make informed decisions.</p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-[#10B981] text-white font-semibold rounded-lg hover:bg-[#059669] transition-colors"
          >
            Explore More Tours
          </Link>
        </div>
      </div>
    );
  }

  // Star rating component
  const StarRating = ({
    value,
    hoverValue,
    onSet,
    onHover,
    onLeave,
    size = 32,
    label
  }: {
    value: number;
    hoverValue: number;
    onSet: (v: number) => void;
    onHover: (v: number) => void;
    onLeave: () => void;
    size?: number;
    label: string;
  }) => (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map(star => (
          <button
            key={star}
            type="button"
            onClick={() => onSet(star)}
            onMouseEnter={() => onHover(star)}
            onMouseLeave={onLeave}
            className="focus:outline-none transition-transform hover:scale-110"
          >
            <Star
              size={size}
              className={
                star <= (hoverValue || value)
                  ? 'text-[#10B981] fill-[#10B981]'
                  : 'text-gray-200 fill-gray-200'
              }
            />
          </button>
        ))}
        {value > 0 && (
          <span className="ml-2 text-sm font-bold text-[#001A33]">{value}/5</span>
        )}
      </div>
    </div>
  );

  const formattedDate = booking ? new Date(booking.bookingDate).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }) : '';

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
          {booking?.tourImage && (
            <div className="h-48 bg-gray-200 overflow-hidden">
              <img
                src={booking.tourImage}
                alt={booking.tourTitle}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="p-6">
            <h1 className="text-2xl font-black text-[#001A33] mb-2">Share Your Experience</h1>
            <p className="text-gray-600">
              Hi {booking?.customerName}, tell us about your <strong>{booking?.tourTitle}</strong> experience
              in {booking?.tourCity} on {formattedDate}.
            </p>
          </div>
        </div>

        {/* Review Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
          {/* Overall Rating */}
          <StarRating
            value={rating}
            hoverValue={hoverRating}
            onSet={setRating}
            onHover={setHoverRating}
            onLeave={() => setHoverRating(0)}
            size={36}
            label="Overall Rating *"
          />

          {/* Guide Rating */}
          <StarRating
            value={guideRating}
            hoverValue={hoverGuideRating}
            onSet={setGuideRating}
            onHover={setHoverGuideRating}
            onLeave={() => setHoverGuideRating(0)}
            size={28}
            label="Guide Rating (optional)"
          />

          {/* Value Rating */}
          <StarRating
            value={valueRating}
            hoverValue={hoverValueRating}
            onSet={setValueRating}
            onHover={setHoverValueRating}
            onLeave={() => setHoverValueRating(0)}
            size={28}
            label="Value for Money (optional)"
          />

          {/* Country */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Where are you from? (optional)
            </label>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="e.g. United Kingdom"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#10B981] focus:border-transparent outline-none text-[#001A33]"
            />
          </div>

          {/* Review Text */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Review *
            </label>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Share your experience... What did you enjoy most? How was the guide? Would you recommend this tour?"
              rows={5}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#10B981] focus:border-transparent outline-none text-[#001A33] resize-none"
            />
            <p className="text-xs text-gray-400 mt-1">{reviewText.length}/2000 characters (minimum 20)</p>
          </div>

          {/* Photo Upload */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Upload Photos (optional, max 5)
            </label>

            {/* Photo previews */}
            {photos.length > 0 && (
              <div className="flex flex-wrap gap-3 mb-3">
                {photos.map((photo, idx) => (
                  <div key={idx} className="relative w-24 h-24 rounded-xl overflow-hidden border border-gray-200">
                    <img src={photo} alt={`Review photo ${idx + 1}`} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removePhoto(idx)}
                      className="absolute top-1 right-1 w-6 h-6 bg-black/60 rounded-full flex items-center justify-center"
                    >
                      <X size={14} className="text-white" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {photos.length < 5 && (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={uploadingPhoto}
                className="flex items-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:border-[#10B981] hover:text-[#10B981] transition-colors"
              >
                {uploadingPhoto ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : (
                  <Camera size={20} />
                )}
                {uploadingPhoto ? 'Processing...' : 'Add Photos'}
              </button>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handlePhotoUpload}
              className="hidden"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting || rating === 0 || reviewText.trim().length < 20}
            className="w-full py-4 bg-[#10B981] text-white font-bold text-lg rounded-xl hover:bg-[#059669] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
          >
            {submitting ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Review'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
