'use client';

import React from 'react';
import { Award } from 'lucide-react';

const OurEdge: React.FC = () => {
    const steps = [
        { id: "01", title: "Direct Farmer Engagement", text: "We work directly with farmers, eliminating middlemen and ensuring fair prices." },
        { id: "02", title: "SOP-Driven Processes", text: "Standardized procedures for harvesting, handling, and quality control." },
        { id: "03", title: "Quality Inspection", text: "Multi-stage inspection with third-party certifications." },
        { id: "04", title: "Global Logistics", text: "Efficient packaging and shipping to meet international standards." }
    ];

    return (
        <section id="process" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="text-[#C2A470] font-bold tracking-wider uppercase text-sm mb-3">Our Edge</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-[#132644] mb-6 font-serif">Direct Sourcing & SOP Excellence</h3>
                        <p className="text-slate-600 text-lg mb-8">
                            We differentiate ourselves through direct engagement with farmers and strict adherence to Standard Operating Procedures (SOPs) at every stage.
                        </p>

                        <div className="space-y-6">
                            {steps.map((step, idx) => (
                                <div key={idx} className="flex gap-4 group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#132644] text-[#C2A470] flex items-center justify-center font-bold text-lg shadow-lg group-hover:bg-[#C2A470] group-hover:text-[#132644] transition-colors">
                                        {step.id}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-[#132644] mb-1">{step.title}</h4>
                                        <p className="text-slate-600">{step.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="order-1 md:order-2 relative">
                        <div className="absolute inset-0 bg-[#132644] rounded-3xl transform rotate-0 opacity-5"></div>
                        <img
                            src="/assets/quality-inspection.jpg"
                            alt="Farmer checking quality"
                            className="relative rounded-3xl shadow-2xl w-full object-cover !object-[65%_50%] h-[600px] grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                        />
                        {/* <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-lg max-w-xs border border-[#C2A470]">
                            <div className="flex items-center gap-3 mb-2">
                                <Award className="text-[#C2A470] w-8 h-8" />
                                <span className="font-bold text-[#132644]">ISO Certified Processes</span>
                            </div>
                            <p className="text-sm text-slate-600">Ensuring highest quality standards for global export.</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurEdge;
