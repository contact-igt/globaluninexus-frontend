'use client';

import React from 'react';
import { CheckCircle } from 'lucide-react';

const CTA: React.FC = () => {
    return (
        <section id="contact" className="py-20 bg-[#132644] relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#5EBBC8]/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#C2A470]/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="bg-white rounded-3xl p-8 md:p-16 shadow-2xl flex flex-col lg:flex-row gap-12 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#132644] mb-6 font-serif">
                            Partner with <span className="text-[#C2A470]">UniNexus</span> for Global Quality Agri-Exports
                        </h2>
                        <p className="text-slate-600 text-lg mb-8">
                            Join hundreds of businesses worldwide who trust us for authentic, high-quality agricultural products directly from India&apos;s finest farms.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-8">
                            {['ISO Certified', 'Quality Assured', 'Timely Delivery', '24/7 Support'].map((tag) => (
                                <div key={tag} className="flex items-center gap-2 text-[#132644] font-medium bg-[#F8F9FA] border border-slate-200 px-4 py-2 rounded-lg">
                                    <CheckCircle className="w-5 h-5 text-[#C2A470]" /> {tag}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 rounded-lg bg-[#F8F9FA] border border-slate-200 focus:border-[#C2A470] focus:outline-none focus:ring-2 focus:ring-[#C2A470]/20 transition-all"
                                />
                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    className="w-full px-4 py-3 rounded-lg bg-[#F8F9FA] border border-slate-200 focus:border-[#C2A470] focus:outline-none focus:ring-2 focus:ring-[#C2A470]/20 transition-all"
                                />
                            </div>
                            <input
                                type="email"
                                placeholder="Business Email"
                                className="w-full px-4 py-3 rounded-lg bg-[#F8F9FA] border border-slate-200 focus:border-[#C2A470] focus:outline-none focus:ring-2 focus:ring-[#C2A470]/20 transition-all"
                            />
                            <select className="w-full px-4 py-3 rounded-lg bg-[#F8F9FA] border border-slate-200 focus:border-[#C2A470] focus:outline-none focus:ring-2 focus:ring-[#C2A470]/20 transition-all text-slate-500">
                                <option>Select Product of Interest</option>
                                <option>Coconut & Tender Coconut</option>
                                <option>Turmeric</option>
                                <option>Guntur Chillies</option>
                                <option>Seevaga Samba Rice</option>
                                <option>Puliyankudi Lime</option>
                                <option>Other</option>
                            </select>
                            <textarea
                                placeholder="Message / Requirement Details"
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg bg-[#F8F9FA] border border-slate-200 focus:border-[#C2A470] focus:outline-none focus:ring-2 focus:ring-[#C2A470]/20 transition-all"
                            ></textarea>
                            <button className="w-full bg-[#C2A470] hover:bg-[#b0935f] text-[#132644] font-bold py-4 rounded-lg shadow-lg transition-all transform hover:-translate-y-1">
                                Send Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
