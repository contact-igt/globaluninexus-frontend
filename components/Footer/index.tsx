'use client';

import React from 'react';
import { Globe, MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
    scrollToSection: (id: string) => void;
    handleExploreProducts: () => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection, handleExploreProducts }) => {
    return (
        <footer className="bg-[#132644] text-[#F8F9FA]/70 pt-20 pb-10 border-t border-[#267C92]/30 relative z-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-white p-2 md:p-3 rounded-xl inline-block">
                                <img src="/assets/logo.png" alt="UniNexus Logo" className="w-32 md:w-40 h-auto object-contain" />
                            </div>
                        </div>
                        <p className="mb-6 text-[#F8F9FA]/60">
                            Connecting India&apos;s finest agricultural produce with the world. Quality, trust, and excellence in every shipment.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-[#132644] border border-white/10 flex items-center justify-center hover:bg-[#C2A470] hover:text-[#132644] hover:border-[#C2A470] transition-all">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 font-serif">Quick Links</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Products', 'Quality Standards', 'Certifications', 'Contact'].map((link) => (
                                <li key={link}>
                                    <button onClick={() => link === 'Products' ? handleExploreProducts() : scrollToSection(link.toLowerCase().replace(' ', '-'))} className="hover:text-[#5EBBC8] transition-colors text-left">{link}</button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 font-serif">Our Products</h4>
                        <ul className="space-y-4">
                            {['Coconut', 'Turmeric', 'Spices', 'Guntur Chillies', 'Rice & Millets', 'Fresh Fruits'].map((link) => (
                                <li key={link}>
                                    <button onClick={handleExploreProducts} className="hover:text-[#5EBBC8] transition-colors text-left">{link}</button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 font-serif">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <MapPin className="text-[#C2A470] w-6 h-6 flex-shrink-0" />
                                <span>Chennai, Tamil Nadu, India</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="text-[#C2A470] w-6 h-6 flex-shrink-0" />
                                <a href="mailto:contact@globaluninexus.com" className="hover:text-[#C2A470] transition-colors">contact@globaluninexus.com</a>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="text-[#C2A470] w-6 h-6 flex-shrink-0" />
                                <a href="tel:+917904940409" className="hover:text-[#C2A470] transition-colors">+91 79049 40409</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-[#267C92]/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-[#F8F9FA]/50">
                        © 2025 UniNexus Traders Pvt. Ltd. All rights reserved.
                    </div>
                    <div className="flex gap-8 text-sm">
                        <a href="#" className="hover:text-[#C2A470] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#C2A470] transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-[#C2A470] transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
