'use client';

import React from 'react';
import { CheckCircle, ArrowLeft, Package } from 'lucide-react';
import Link from 'next/link';

export default function ThankYouPage() {
    return (
        <div className="min-h-screen bg-[#132644] flex items-center justify-center px-4 relative overflow-hidden">
            {/* Minimalist Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#5EBBC8]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C2A470]/5 rounded-full blur-3xl"></div>

            {/* Main Content Card */}
            <div className="max-w-lg w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10 shadow-2xl">

                {/* Success Icon */}
                <div className="flex justify-center mb-6">
                    <div className="bg-[#C2A470]/20 rounded-full p-4">
                        <CheckCircle className="w-12 h-12 text-[#C2A470]" strokeWidth={2} />
                    </div>
                </div>

                {/* Thank You Message */}
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
                    Thank You
                </h1>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                    We have received your request. <br /> Our team will contact you shortly.
                </p>

                {/* Contact Information */}
                <div className="mb-8 p-4 bg-white/5 rounded-xl border border-white/5">
                    <p className="text-sm text-slate-400 mb-1">
                        Questions? Email us at
                    </p>
                    <a href="mailto:contact@globaluninexus.com" className="text-[#5EBBC8] hover:text-[#4da9b6] font-medium transition-colors text-lg">
                        contact@globaluninexus.com
                    </a>
                </div>

                {/* Action Button */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-[#C2A470] hover:bg-[#b0935f] text-[#132644] px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
