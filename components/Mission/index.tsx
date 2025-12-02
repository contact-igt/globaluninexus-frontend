'use client';

import React from 'react';
import { Leaf, Globe, Users, CheckCircle, TrendingUp } from 'lucide-react';

const Mission: React.FC = () => {
    const missions = [
        { icon: <Leaf />, title: "Source Quality" },
        { icon: <Globe />, title: "Global Standards" },
        { icon: <Users />, title: "Support Farmers" },
        { icon: <CheckCircle />, title: "Sustainable Trade" },
        { icon: <TrendingUp />, title: "Expand Presence" },
    ];

    return (
        <section className="py-20 bg-[#132644] text-white relative overflow-hidden">
            {/* Background Mesh Network Effect */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #22d3ee 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                <h2 className="text-[#C2A470] font-bold tracking-wider uppercase text-sm mb-3">Our Mission</h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-12 font-serif">
                    Committed to excellence, sustainability, <br className="hidden md:block" />and global agricultural trade
                </h3>

                <div className="grid md:grid-cols-5 gap-6">
                    {missions.map((mission, idx) => (
                        <div key={idx} className="bg-[#132644]/40 backdrop-blur-sm p-6 rounded-xl border border-[#267C92]/30 hover:border-[#5EBBC8] hover:bg-[#132644]/60 transition-all group">
                            <div className="w-12 h-12 mx-auto bg-[#132644] rounded-full flex items-center justify-center text-[#C2A470] mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-black/20">
                                {mission.icon}
                            </div>
                            <h4 className="font-bold text-lg text-[#F8F9FA] group-hover:text-[#5EBBC8] transition-colors">{mission.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Mission;
