'use client';

import React, { useEffect } from 'react';
import {
    ArrowLeft,
    MapPin,
    Droplet,
    Flame,
    CheckCircle,
    Leaf
} from 'lucide-react';

interface DetailedProductViewProps {
    onBack: () => void;
}

const DetailedProductView: React.FC<DetailedProductViewProps> = ({ onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const coconutVarieties = [
        { v: "Pollachi Coconut / Tender", c: "High water content, naturally sweet", u: "Suitable for drinking; used for &apos;Chinnarad&apos; fine powder" },
        { v: "Malayan Green Dwarf", c: "Light green shell, good water volume, medium fiber", u: "Ideal drinking variety" },
        { v: "Malayan Yellow Dwarf", c: "Yellow shell, moderate sweetness", u: "Excellent natural flavor" },
        { v: "Chowghat Green Dwarf", c: "Bright green shell, very sweet water (350–500 ml)", u: "Soft, good kernel quality" },
        { v: "Chowghat Orange Dwarf", c: "Orange/yellow shell, very sweet water", u: "Highly drought-tolerant" },
        { v: "West Coast Tall", c: "Large coconuts, thick soft kernel, high water", u: "Multipurpose (Traditional)" },
        { v: "Hybrid COD × WCT", c: "Large size, sweet water, high yield", u: "Commercial hybrid" },
    ];

    const turmericVarieties = [
        { v: "Erode Local Powder", c: "Deep golden color, bold aroma", u: "Daily cooking & spice blends" },
        { v: "Perur Samba", c: "Strong aroma, high fiber", u: "Ayurveda & premium culinary" },
        { v: "Buda Kaveri", c: "Golden yellow, medium fiber, aromatic", u: "Export-quality turmeric" },
        { v: "Chinnarad Fine Powder", c: "Bright yellow, low fiber, mild aroma", u: "Premium fine-powder processing" }
    ];

    const chillies = [
        { v: "Guntur Red Chillies", c: "Strong heat, long-lasting spiciness", u: "Pickles, powders" },
        { v: "Guntur Sannam (334)", c: "High natural color, 6–8cm pods, high capsaicin", u: "Masala industry" },
        { v: "Teja (317)", c: "Very high color, shiny long pods, very pungent", u: "Export, pickles" },
        { v: "334 / Wonder Hot", c: "High color, medium pungency, thick pod", u: "Color-rich powders" },
        { v: "273 / 341", c: "High color, medium pungency", u: "Hotels, budget powders" },
        { v: "Byadgi / Badgi", c: "Very high color, low heat, wrinkled pods", u: "Natural coloring" },
        { v: "Indo-5", c: "High color & pungency, long pods", u: "Export + masala brands" }
    ];

    const riceVarieties = [
        "Organic White Rice",
        "Brown Rice",
        "Red Rice",
        "Black Rice",
        "Basmati Rice",
        "Non-Basmati Rice"
    ];

    return (
        <div className="bg-[#F8F9FA] min-h-screen pb-20 pt-20">
            {/* Header / Nav for subpage */}
            <div className="fixed top-0 left-0 w-full bg-white shadow-md z-40 py-4 border-b border-[#C2A470]/30">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-[#132644] font-bold hover:bg-[#F8F9FA] px-4 py-2 rounded-lg transition-colors group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform text-[#C2A470]" /> Back to Home
                    </button>
                    <span className="font-bold text-[#132644] text-lg hidden sm:block font-serif">UniNexus Traders Catalog</span>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 mt-8">
                {/* Main Section Heading */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <span className="bg-white text-[#132644] border border-[#C2A470] px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-6 inline-block shadow-sm">
                        Premium Export Catalog
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#132644] mb-6 font-serif">Our Premium Agricultural Products</h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Discover high-quality, naturally sourced agricultural products from Tamil Nadu and across India — curated for export, wholesale, and bulk supply.
                    </p>
                </div>

                {/* Coconut Section */}
                <section className="mb-20 scroll-mt-24" id="coconut">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        <div className="lg:w-1/3">
                            <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[3/4] border-4 border-white ring-1 ring-[#C2A470]/30 group">
                                <img
                                    src="/assets/coconut.webp"
                                    alt="Pollachi Coconut"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#132644]/90 via-[#132644]/40 to-transparent flex items-end p-8">
                                    <h2 className="text-white text-3xl font-bold font-serif border-l-4 border-[#C2A470] pl-4">Coconut & Tender Coconut</h2>
                                </div>
                            </div>
                            <div className="mt-6 bg-white p-6 rounded-xl border border-[#C2A470] shadow-sm">
                                <h3 className="flex items-center gap-2 font-bold text-[#132644] mb-2">
                                    <MapPin className="w-5 h-5 text-[#C2A470]" /> Origin: Pollachi, Tamil Nadu
                                </h3>
                                <p className="text-slate-700">
                                    Pollachi is globally known for supplying premium-grade coconuts and tender coconuts with exceptional water content and natural sweetness.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-2/3 w-full">
                            <h3 className="text-2xl font-bold text-[#132644] mb-6 flex items-center gap-3">
                                <Droplet className="text-[#5EBBC8]" /> Available Varieties
                            </h3>
                            <div className="overflow-x-auto bg-white rounded-xl shadow-lg border-t-4 border-[#C2A470]">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-[#132644] text-white">
                                            <th className="p-4 font-bold font-serif tracking-wide text-[#C2A470]">Variety</th>
                                            <th className="p-4 font-bold font-serif tracking-wide text-[#C2A470]">Characteristics</th>
                                            <th className="p-4 font-bold font-serif tracking-wide text-[#C2A470]">Usage / Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {coconutVarieties.map((row, idx) => (
                                            <tr key={idx} className="hover:bg-[#F8F9FA] transition-colors">
                                                <td className="p-4 font-medium text-[#132644]">{row.v}</td>
                                                <td className="p-4 text-slate-600">{row.c}</td>
                                                <td className="p-4 text-slate-500 italic">{row.u}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ooty Garlic */}
                <section className="mb-20 bg-gradient-to-br from-[#132644] to-[#267C92] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#5EBBC8]/10 rounded-full blur-3xl -mr-20 -mt-20"></div>

                    <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                        <div className="md:w-1/2 order-2 md:order-1">
                            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 font-serif text-white">
                                <span className="text-4xl">🧄</span> Ooty Garlic
                            </h2>
                            <p className="text-lg text-[#F8F9FA] mb-6 leading-relaxed">
                                Sourced from the cool climatic region of Ooty, this garlic variety is widely preferred for its strong medicinal value and rich flavor.
                            </p>
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-[#C2A470]/50 hover:border-[#C2A470] transition-colors">
                                <h4 className="font-bold text-[#C2A470] mb-4 tracking-wide uppercase text-sm">Key Features</h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {[
                                        "Highly medicinal and therapeutic",
                                        "Small, tightly packed bulbs",
                                        "Strong and pungent aroma",
                                        "Excellent shelf life",
                                        "Ideal for cooking and Ayurveda"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-white">
                                            <CheckCircle className="w-4 h-4 text-[#5EBBC8] flex-shrink-0" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:w-1/2 order-1 md:order-2">
                            <img
                                src="/assets/garlic.png"
                                alt="Ooty Garlic"
                                className="rounded-2xl shadow-2xl w-full h-80 object-cover border-4 border-[#C2A470]/30"
                            />
                        </div>
                    </div>
                </section>

                {/* Turmeric */}
                <section className="mb-20">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="lg:w-1/3">
                            <div className="sticky top-24">
                                <h2 className="text-3xl font-bold text-[#132644] mb-4 flex items-center gap-3 font-serif">
                                    <span className="text-[#C2A470]">🌿</span> Turmeric
                                </h2>
                                <div className="bg-white p-6 rounded-xl border border-[#C2A470] mb-6 shadow-sm">
                                    <p className="font-bold text-[#132644] mb-2">Origin: Erode, Tamil Nadu</p>
                                    <p className="text-slate-600">
                                        Erode is one of India&apos;s major turmeric hubs, known for bright color, purity, and high curcumin content.
                                    </p>
                                </div>
                                <img
                                    src="/assets/erode-turmeric-powder.jpeg"
                                    alt="Turmeric Powder"
                                    className="rounded-2xl w-full h-64 object-cover shadow-lg"
                                />
                            </div>
                        </div>
                        <div className="lg:w-2/3">
                            <h3 className="text-xl font-bold text-[#132644] mb-4">Erode Turmeric Varieties</h3>
                            <div className="overflow-hidden bg-white rounded-xl shadow-lg border-t-4 border-[#C2A470]">
                                <table className="w-full text-left">
                                    <thead className="bg-[#132644] text-white">
                                        <tr>
                                            <th className="p-4 font-bold font-serif text-[#C2A470]">Variety</th>
                                            <th className="p-4 font-bold font-serif text-[#C2A470]">Characteristics</th>
                                            <th className="p-4 font-bold font-serif text-[#C2A470]">Usage</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {turmericVarieties.map((row, idx) => (
                                            <tr key={idx} className="hover:bg-[#F8F9FA]">
                                                <td className="p-4 font-medium text-[#132644]">{row.v}</td>
                                                <td className="p-4 text-slate-600">{row.c}</td>
                                                <td className="p-4 text-slate-600">{row.u}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Guntur Red Chillies */}
                <section className="mb-20">
                    <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#C2A470] shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#132644] to-[#267C92]"></div>

                        <div className="text-center max-w-3xl mx-auto mb-10">
                            <h2 className="text-3xl font-bold text-[#132644] mb-4 font-serif">🌶️ Guntur Red Chillies</h2>
                            <p className="text-lg text-slate-600">
                                Origin: Andhra Pradesh. World-famous for high-quality red chillies used in spices, pickles, and industrial production.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {chillies.map((item, idx) => (
                                <div key={idx} className="bg-[#F8F9FA] p-6 rounded-xl shadow-sm border border-slate-200 flex gap-4 items-start hover:border-[#C2A470] transition-colors">
                                    <div className="bg-white p-2 rounded-lg shadow-sm">
                                        <Flame className="w-6 h-6 text-[#C2A470]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-[#132644]">{item.v}</h4>
                                        <p className="text-slate-600 text-sm mb-2">{item.c}</p>
                                        <span className="inline-block bg-white text-[#267C92] text-xs px-2 py-1 rounded font-medium border border-[#267C92]/20">
                                            Best for: {item.u}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Rice Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-[#132644] mb-8 flex items-center gap-3 font-serif">
                        <span className="text-4xl">🍚</span> Rice Varieties
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-[#132644] p-8 rounded-2xl border border-[#C2A470]/50 shadow-2xl relative overflow-hidden text-white">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C2A470] rounded-bl-full -mr-10 -mt-10 z-0 opacity-20"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-[#C2A470] mb-4 font-serif">Seevaga Samba Rice</h3>
                                <p className="text-[#F8F9FA] mb-6">Premium small-grain rice from Tamil Nadu delta regions.</p>
                                <ul className="space-y-3">
                                    {[
                                        "Naturally aromatic",
                                        "Strong aroma & firm texture",
                                        "Non-sticky; grains remain separate",
                                        "Excellent for traditional dishes & biryani",
                                        "Great flavor absorption"
                                    ].map((feat, i) => (
                                        <li key={i} className="flex items-center gap-2 text-[#F8F9FA]">
                                            <Leaf className="w-4 h-4 text-[#5EBBC8]" /> {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-[#C2A470] flex flex-col justify-center">
                            <h3 className="text-xl font-bold text-[#132644] mb-6 font-serif">Other Premium Varieties</h3>
                            <div className="flex flex-wrap gap-3">
                                {riceVarieties.map((rice, i) => (
                                    <span key={i} className="bg-[#F8F9FA] border border-[#267C92]/30 px-4 py-2 rounded-lg text-[#132644] font-medium shadow-sm hover:border-[#C2A470] hover:text-[#C2A470] cursor-default transition-colors">
                                        {rice}
                                    </span>
                                ))}
                            </div>
                            <p className="mt-6 text-sm text-[#267C92] italic">
                                * All varieties are nutrient-dense, fiber-rich, and suitable for both retail and export.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Lime & Guava */}
                <section className="mb-20 grid md:grid-cols-2 gap-12">
                    {/* Lime */}
                    <div className="bg-white p-8 rounded-3xl border border-[#C2A470]/50 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="text-4xl">🍋</div>
                            <div>
                                <h3 className="text-2xl font-bold text-[#132644] font-serif">Puliyankudi Lime</h3>
                                <p className="text-[#267C92] font-medium">Tamil Nadu</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold text-[#132644] mb-2">Features</h4>
                                <p className="text-slate-600">Thin rind, extremely high juice content, strong citrus aroma. Perfect for beverages & pickles.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#132644] mb-2">Health Benefits</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Weight Management", "Blood Sugar Regulation", "Heart Health"].map((h, i) => (
                                        <span key={i} className="bg-[#F8F9FA] text-[#132644] text-xs font-bold px-3 py-1 rounded-full border border-[#C2A470]">
                                            {h}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Guava */}
                    <div className="bg-white p-8 rounded-3xl border border-[#C2A470]/50 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="text-4xl">🍐</div>
                            <div>
                                <h3 className="text-2xl font-bold text-[#132644] font-serif">Palani Aayakudi Guava</h3>
                                <p className="text-[#267C92] font-medium">Famous Indian Variety</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <p className="text-slate-700">Known for rich sweetness and soft edible seeds.</p>
                            <ul className="space-y-2">
                                {[
                                    "Naturally sweet",
                                    "High pulp content",
                                    "Soft edible seeds",
                                    "Ideal for juices & fresh consumption"
                                ].map((feat, i) => (
                                    <li key={i} className="flex items-center gap-2 text-slate-700">
                                        <CheckCircle className="w-4 h-4 text-[#C2A470]" /> {feat}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Bottom CTA */}
                <div className="text-center pb-12">
                    <h3 className="text-2xl font-bold mb-6 text-[#132644] font-serif">Interested in our Catalog?</h3>
                    <button
                        onClick={onBack}
                        className="bg-[#C2A470] hover:bg-[#b0935f] text-[#132644] px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all transform hover:-translate-y-1"
                    >
                        Contact Us for Quote
                    </button>
                </div>

            </div>
        </div>
    );
};

export default DetailedProductView;
