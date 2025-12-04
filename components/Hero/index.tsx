'use client';

import React from 'react';
import { ChevronRight, Globe } from 'lucide-react';

interface HeroProps {
    scrollToSection: (id: string) => void;
    handleExploreProducts: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection, handleExploreProducts }) => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center pt-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/bgimage.jpg"
                        alt="Global Logistics and Agriculture"
                        className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#132644] via-[#132644]/90 to-[#267C92]/80"></div>
                    {/* Watermark/Network effect overlay */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #5EBBC8 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 mt-5 text-white">
                    <div className="max-w-3xl mt-[80px] mb-5">
                        <div className="inline-flex items-center gap-2 bg-[#132644]/60 backdrop-blur-md border border-[#5EBBC8]/30 px-4 py-1.5 rounded-full text-[#5EBBC8] text-sm font-medium mb-6">
                            <Globe className="w-4 h-4" /> Global Trade Specialists
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 font-serif">
                            Connecting India&apos;s Finest <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#C2A470] to-[#F8F9FA]">Agricultural Produce</span> <br />
                            with the World
                        </h1>
                        <p className="text-lg md:text-xl text-[#F8F9FA]/90 mb-8 max-w-2xl leading-relaxed border-l-4 border-[#C2A470] pl-6">
                            UniNexus Traders Pvt. Ltd. delivers fresh, authentic, and globally certified products directly from trusted farmers to your business.
                        </p>
                        <div className="flex flex-col sm:flex-row mb-[50px] gap-4">
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="bg-[#C2A470] hover:bg-[#b0935f] text-[#132644] px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                            >
                                Start Trading <ChevronRight className="w-5 h-5" />
                            </button>
                            <button
                                onClick={handleExploreProducts}
                                className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center"
                            >
                                View Catalogue
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-[#132644] text-white -mt-1 relative z-20 border-b border-[#267C92]/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-[#267C92]/50">
                        {[
                            { number: "500+", label: "Verified Farmers" },
                            { number: "25+", label: "Countries Served" },
                            { number: "100%", label: "Quality Assured" },
                            { number: "10K+", label: "Tons Exported" }
                        ].map((stat, idx) => (
                            <div key={idx} className="p-2">
                                <div className="text-3xl md:text-4xl font-bold text-[#C2A470] mb-2 font-serif">{stat.number}</div>
                                <div className="text-sm md:text-base text-[#5EBBC8] font-medium tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
