import React from 'react';
import { ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#001A33] text-white pt-20 pb-10 px-6 mt-12">
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    <div className="col-span-1 lg:col-span-1">
                        <a href="/" className="inline-block mb-6">
                            <img src="/logo.png" alt="AsiaByLocals Logo" className="h-20 w-auto invert brightness-0" />
                        </a>
                        <p className="text-gray-400 text-[14px] leading-relaxed">
                            Empowering local experts across Asia to share their heritage directly with curious travelers.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h5 className="font-black text-xs uppercase tracking-widest text-gray-500">Language</h5>
                        <div className="bg-white/5 border border-white/10 p-3 rounded-lg flex justify-between items-center text-sm font-bold text-gray-300">
                            English (International)
                        </div>
                        <h5 className="font-black text-xs uppercase tracking-widest text-gray-500 mt-4">Currency</h5>
                        <div className="bg-white/5 border border-white/10 p-3 rounded-lg flex justify-between items-center text-sm font-bold text-gray-300">
                            US Dollar ($)
                        </div>
                    </div>

                    <div>
                        <h5 className="font-black text-xs uppercase tracking-widest text-gray-500 mb-8">Support</h5>
                        <ul className="space-y-4 text-sm font-bold text-gray-400">
                            <li><a href="/support" className="hover:text-white transition-colors">Support</a></li>
                            <li><a href="/safety-guidelines" className="hover:text-white transition-colors">Safety Guidelines</a></li>
                            <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-black text-xs uppercase tracking-widest text-gray-500 mb-8">Company</h5>
                        <ul className="space-y-4 text-sm font-bold text-gray-400">
                            <li><a href="/about-us" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="/supplier" className="hover:text-white transition-colors">Become a Supplier</a></li>
                        </ul>
                    </div>
                </div>

                {/* Payment Methods */}
                <div className="pt-10 border-t border-white/5 mb-10">
                    <h5 className="font-black text-xs uppercase tracking-widest text-gray-500 mb-6 text-center">We Accept</h5>
                    <div className="flex flex-wrap justify-center items-center gap-6">
                        {/* Visa */}
                        <div className="bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 flex items-center justify-center hover:bg-white/15 transition-colors" title="Visa">
                            <svg viewBox="0 0 780 500" className="h-7 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M293.2 348.7L233.4 151.3h-60.7L123 300.8c-3 14.7-6.2 20.4-16.3 26.7-16.5 10.2-43.7 19.7-67.7 25.7l1.6 7.5h97.6c13.5 0 25.6-9 28.7-24.6l24.2-128.6 75.3 153.2h26.8zM412.4 151.3l-47.5 197.4h-56.7l47.5-197.4h56.7zM610.6 260.4c.2-42.8-59.2-45.1-58.8-64.2.1-5.8 5.7-12 17.8-13.6 6-0.8 22.5-1.4 41.3 7.2l7.3-34.3c-10.1-3.7-23-7.2-39.2-7.2-41.4 0-70.5 22-70.7 53.5-.3 23.3 20.8 36.3 36.6 44 16.3 7.8 21.7 12.8 21.7 19.8-.1 10.7-13 15.4-25.1 15.6-21.1.3-33.3-5.7-43.1-10.3l-7.6 35.5c9.8 4.5 27.9 8.4 46.6 8.6 44 0 72.8-21.7 72.9-55.3l.3.7zM710.4 348.7l-10.1-48.3h-67.7l-11.1 48.3h-57.2l79.6-197.4c5.8-13.2 15.8-18.3 29.2-18.3h47.6l44.3 215.7h-54.6z" fill="white" />
                            </svg>
                        </div>
                        {/* Mastercard */}
                        <div className="bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 flex items-center justify-center hover:bg-white/15 transition-colors" title="Mastercard">
                            <svg viewBox="0 0 131.39 86.9" className="h-7 w-auto" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="43.45" cy="43.45" r="43.45" fill="#EB001B" />
                                <circle cx="87.94" cy="43.45" r="43.45" fill="#F79E1B" />
                                <path d="M65.7 11.2a43.3 43.3 0 0 0-16.2 32.3A43.3 43.3 0 0 0 65.7 75.7 43.3 43.3 0 0 0 81.8 43.5 43.3 43.3 0 0 0 65.7 11.2z" fill="#FF5F00" />
                            </svg>
                        </div>
                        {/* Amex */}
                        <div className="bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 flex items-center justify-center hover:bg-white/15 transition-colors" title="American Express">
                            <span className="text-white font-black text-sm tracking-tight">AMEX</span>
                        </div>
                        {/* PayPal */}
                        <div className="bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 flex items-center justify-center hover:bg-white/15 transition-colors" title="PayPal">
                            <span className="font-black text-sm"><span className="text-[#00457C]" style={{ color: '#69b3e7' }}>Pay</span><span style={{ color: '#003087' }}>Pal</span></span>
                        </div>
                        {/* Razorpay */}
                        <div className="bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 flex items-center justify-center hover:bg-white/15 transition-colors" title="Razorpay">
                            <span className="font-black text-sm" style={{ color: '#528FF0' }}>Razorpay</span>
                        </div>
                        {/* UPI */}
                        <div className="bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 flex items-center justify-center hover:bg-white/15 transition-colors" title="UPI">
                            <span className="font-black text-sm text-white">UPI</span>
                        </div>
                        {/* Net Banking */}
                        <div className="bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 flex items-center justify-center hover:bg-white/15 transition-colors" title="Net Banking">
                            <span className="font-black text-xs text-gray-300 uppercase tracking-wider">Net Banking</span>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-black uppercase tracking-widest text-gray-500">
                    <span>&copy; {new Date().getFullYear()} AsiaByLocals HQ • Authentic Experiences Only</span>
                    <div className="flex gap-4">
                        <span className="hover:text-white cursor-pointer">Instagram</span>
                        <span className="hover:text-white cursor-pointer">Facebook</span>
                        <span className="hover:text-white cursor-pointer">LinkedIn</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
