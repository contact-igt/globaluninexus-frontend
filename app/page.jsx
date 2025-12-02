'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyUs from '@/components/WhyUs';
import OurEdge from '@/components/OurEdge';
import Mission from '@/components/Mission';
import Products from '@/components/Products';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import DetailedProductView from '@/components/DetailedProductView';

export default function Home() {
    const [currentView, setCurrentView] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        if (currentView !== 'home') {
            setCurrentView('home');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    const handleExploreProducts = () => {
        setCurrentView('products');
        setIsMobileMenuOpen(false);
    };

    if (currentView === 'products') {
        return <DetailedProductView onBack={() => setCurrentView('home')} />;
    }

    return (
        <div className="font-sans text-[#132644] bg-white">
            <Navbar
                isScrolled={isScrolled}
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                scrollToSection={scrollToSection}
                handleExploreProducts={handleExploreProducts}
                setCurrentView={setCurrentView}
            />

            <Hero
                scrollToSection={scrollToSection}
                handleExploreProducts={handleExploreProducts}
            />

            <WhyUs />

            <OurEdge />

            <Mission />

            <Products handleExploreProducts={handleExploreProducts} />

            <CTA />

            <Footer
                scrollToSection={scrollToSection}
                handleExploreProducts={handleExploreProducts}
            />
        </div>
    );
}
