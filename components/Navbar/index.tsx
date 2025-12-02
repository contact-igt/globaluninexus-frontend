'use client';

import React from 'react';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';

interface NavbarProps {
    isScrolled: boolean;
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (open: boolean) => void;
    scrollToSection: (id: string) => void;
    handleExploreProducts: () => void;
    setCurrentView: (view: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
    isScrolled,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    scrollToSection,
    handleExploreProducts,
    setCurrentView,
}) => {
    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-md ${isScrolled ? 'py-2' : 'py-3'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                <div
                    className="flex items-center gap-2 cursor-pointer group"
                    onClick={() => setCurrentView('home')}
                >
                    <img src="/assets/logo2.jpg" alt="Logo" className="w-20 md:w-[90px] ml-5 object-contain" />
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {['About Us', 'Products', 'Process', 'Contact'].map((item) => (
                        <button
                            key={item}
                            onClick={item === 'Products' ? handleExploreProducts : () => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                            className="text-base font-semibold text-[#132644] hover:text-[#5EBBC8] transition-colors"
                        >
                            {item}
                        </button>
                    ))}

                    {/* Call to Action Button */}
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="bg-[#C2A470] hover:bg-[#b0935f] text-[#132644] px-5 py-2.5 rounded-full text-base font-semibold transition-colors shadow-lg flex items-center gap-2"
                    >
                        Request Quote
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className="text-[#132644]" />
                    ) : (
                        <Menu className="text-[#132644]" />
                    )}
                </button>
            </div>

            {/* Mobile Nav Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-[#C2A470]/30">
                    <div className="flex flex-col p-4 gap-4">
                        <button onClick={() => scrollToSection('about-us')} className="text-left py-2 font-medium text-[#132644] border-b border-gray-100">About Us</button>
                        <button onClick={handleExploreProducts} className="text-left py-2 font-medium text-[#132644] border-b border-gray-100">Products</button>
                        <button onClick={() => scrollToSection('process')} className="text-left py-2 font-medium text-[#132644] border-b border-gray-100">Process</button>
                        <button onClick={() => scrollToSection('contact')} className="text-left py-2 font-medium text-[#132644] border-b border-gray-100">Contact</button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="bg-[#C2A470] text-[#132644] w-full py-3 rounded-lg font-medium"
                        >
                            Request Quote
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
