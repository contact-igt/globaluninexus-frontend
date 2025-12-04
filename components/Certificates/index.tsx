'use client';

import React from 'react';
import { ShieldCheck, FileText, Globe, CheckCircle, Leaf, Award, Droplets } from 'lucide-react';

const Certificates: React.FC = () => {
    const certificates = [
        {
            id: 1,
            title: "APEDA Registered",
            description: "We are registered under APEDA, ensuring full compliance with India's export regulations for agricultural and processed food products.",
            icon: <ShieldCheck className="w-8 h-8" />
        },
        {
            id: 2,
            title: "FSSAI Certified",
            description: "All our products meet the food safety and quality standards mandated by the Food Safety and Standards Authority of India.",
            icon: <CheckCircle className="w-8 h-8" />
        },
        {
            id: 3,
            title: "Phytosanitary Certificates",
            description: "Every shipment is supported with a phytosanitary certificate to guarantee that the products are free from pests and meet import-country plant health standards.",
            icon: <Leaf className="w-8 h-8" />
        },
        {
            id: 4,
            title: "Fumigation Certificate",
            description: "Our consignments undergo fumigation and are certified to be pest-free, ensuring safe handling and international acceptance.",
            icon: <Droplets className="w-8 h-8" />
        },
        {
            id: 5,
            title: "Moisture & Cleanliness Certificate",
            description: "Products are tested for moisture levels and cleanliness to ensure they meet the required quality parameters for export.",
            icon: <FileText className="w-8 h-8" />
        },
        {
            id: 6,
            title: "Quality Grading Certificate",
            description: "We follow strict grading processes and obtain official quality grading certificates to ensure consistent product standards.",
            icon: <Award className="w-8 h-8" />
        },
        {
            id: 7,
            title: "Global GAP Certificate",
            description: "We maintain global agricultural practices that meet international farm-level certification standards, ensuring safe and sustainable production.",
            icon: <Globe className="w-8 h-8" />
        }
    ];

    return (
        <section id="certificates" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-[#C2A470] font-bold tracking-wider uppercase text-sm mb-3">Our Certifications & Compliance</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#132644] mb-6 font-serif">
                        We adhere to all mandatory national and international standards
                    </h3>
                    <p className="text-slate-600 text-lg">
                        To ensure the highest level of safety, quality, and export readiness for our products.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {certificates.map((cert) => (
                        <div key={cert.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 group">
                            <div className="w-14 h-14 rounded-full bg-[#132644]/5 flex items-center justify-center text-[#132644] mb-4 group-hover:bg-[#132644] group-hover:text-[#C2A470] transition-colors duration-300">
                                {cert.icon}
                            </div>
                            <h4 className="text-xl font-bold text-[#132644] mb-3">{cert.title}</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {cert.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
