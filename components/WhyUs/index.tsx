'use client';

import React from 'react';
import { Sprout, ShieldCheck, TrendingUp } from 'lucide-react';

const WhyUs: React.FC = () => {
    const features = [
        {
            icon: <Sprout className="w-10 h-10 text-[#267C92]" />,
            title: "Verified Sourcing",
            desc: "We work directly with certified farmers and agricultural cooperatives across India, ensuring complete transparency and traceability from farm to export."
        },
        {
            icon: <ShieldCheck className="w-10 h-10 text-[#267C92]" />,
            title: "Quality Control",
            desc: "Every product undergoes rigorous multi-stage quality checks and third-party certifications to meet international food safety standards."
        },
        {
            icon: <TrendingUp className="w-10 h-10 text-[#267C92]" />,
            title: "Competitive Pricing",
            desc: "Our streamlined supply chain and direct sourcing model eliminate middlemen, allowing us to offer competitive pricing while maintaining premium quality."
        }
    ];

    return (
        <section id="about-us" className="py-20 bg-[#F8F9FA]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-[#C2A470] font-bold tracking-wider uppercase text-sm mb-3">Why Choose UniNexus</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#132644] mb-6 font-serif">Trusted by global businesses for quality, reliability, and excellence</h3>
                    <p className="text-slate-600 text-lg">We bridge the gap between Indian farmers and global markets through transparency and rigorous standards.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#C2A470] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="bg-[#F8F9FA] group-hover:bg-[#F8F9FA] w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors border border-gray-100">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold text-[#132644] mb-4 font-serif">{feature.title}</h4>
                            <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
