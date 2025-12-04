'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ProductsProps {
    handleExploreProducts: () => void;
}

const Products: React.FC<ProductsProps> = ({ handleExploreProducts }) => {
    const products = [
        {
            name: "Pollachi Coconut",
            image: "/assets/coconut.webp",
            desc: "Premium coconuts & tender coconuts from Pollachi, Tamil Nadu."
        },
        {
            name: "Erode Turmeric",
            image: "/assets/erode-turmeric-powder.jpeg",
            desc: "High curcumin content, bright color, sourced from Erode."
        },
        {
            name: "Guntur Red Chillies",
            image: "/assets/guntur-red-chilli.webp",
            desc: "World-famous heat and color varieties from Andhra Pradesh."
        },
        {
            name: "Palani Aayakudi Guava",
            image: "/assets/guava.webp",
            desc: "Naturally sweet, soft seeds, high pulp content."
        }
    ];

    return (
        <section id="products" className="py-20 bg-[#F8F9FA]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div className="max-w-2xl">
                        <h2 className="text-[#C2A470] font-bold tracking-wider uppercase text-sm mb-3">Our Premium Agricultural Products</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-[#132644] mb-4 font-serif">Export Quality Sourcing</h3>
                        <p className="text-slate-600 text-lg">
                            Discover high-quality, naturally sourced agricultural products from Tamil Nadu and across India — curated for export, wholesale, and bulk supply.
                        </p>
                    </div>
                    <button
                        onClick={handleExploreProducts}
                        className="text-[#132644] font-bold hover:text-[#267C92] flex items-center gap-2 group whitespace-nowrap bg-white border border-[#C2A470] px-6 py-3 rounded-full hover:bg-[#F8F9FA] transition-colors shadow-sm"
                    >
                        View Full Catalogue <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, idx) => (
                        <div key={idx} className="group cursor-pointer" onClick={handleExploreProducts}>
                            <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/5] shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#132644]/90 via-[#132644]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                                <div className="absolute bottom-0 left-0 p-6 w-full">
                                    <h4 className="text-white text-xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 font-serif">{product.name}</h4>
                                    <p className="text-[#C2A470] text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100 font-medium">{product.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
