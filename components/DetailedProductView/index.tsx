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
                    <span className="font-bold text-[#132644] text-lg hidden sm:block font-serif">UniNexus Traders Catalogue</span>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 mt-8">
                {/* Main Section Heading */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <span className="bg-white text-[#132644] border border-[#C2A470] px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-6 inline-block shadow-sm">
                        Premium Export Catalogue
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#132644] mb-6 font-serif">Our Premium Agricultural Products</h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Discover high-quality, naturally sourced agricultural products from Tamil Nadu and across India — curated for export, wholesale, and bulk supply.
                    </p>
                </div>

                {/* Products List - Alternating Layout */}
                <div className="flex flex-col gap-16 mb-20">

                    {/* Coconut & Tender Coconut */}
                    <div className="group bg-[#237087] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#267C92] hover:border-[#C2A470] flex flex-col lg:flex-row lg:h-[28rem]">
                        <div className="lg:w-1/2 h-64 lg:h-full overflow-hidden relative">
                            <img
                                src="/assets/coconut.webp"
                                alt="Pollachi Coconut"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#132644]/80 to-transparent lg:hidden"></div>
                        </div>
                        <div className="lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="bg-[#C2A470] text-[#132644] text-xs font-bold px-3 py-1 rounded-full">Best Seller</span>
                                <div className="flex items-center gap-1 text-[#C2A470] text-sm font-bold">
                                    <MapPin className="w-4 h-4" /> Pollachi, Tamil Nadu
                                </div>
                            </div>
                            <h2 className="text-2xl lg:text-3xl font-bold text-white font-serif mb-3">Coconut & Tender Coconut</h2>
                            <p className="text-white text-sm lg:text-base mb-5 leading-relaxed line-clamp-3">
                                Pollachi is globally known for supplying premium-grade coconuts and tender coconuts with exceptional water content and natural sweetness.
                            </p>
                            <div className="space-y-2">
                                {coconutVarieties.slice(0, 4).map((variety, idx) => (
                                    <div key={idx} className="flex items-start gap-3 text-sm">
                                        <Droplet className="w-4 h-4 text-[#5EBBC8] mt-0.5 flex-shrink-0" />
                                        <span className="text-white"><strong className="text-[#C2A470]">{variety.v}:</strong> {variety.c}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Ooty Garlic */}
                    <div className="group bg-[#237087] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#267C92] hover:border-[#C2A470] flex flex-col lg:flex-row-reverse lg:h-[28rem]">
                        <div className="lg:w-1/2 h-64 lg:h-full overflow-hidden relative">
                            <img
                                src="/assets/garlic.png"
                                alt="Ooty Garlic"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="flex items-center gap-1 text-[#C2A470] text-sm font-bold">
                                    <MapPin className="w-4 h-4" /> Ooty, Tamil Nadu
                                </div>
                            </div>
                            <h2 className="text-2xl lg:text-3xl font-bold text-white font-serif mb-3">Ooty Garlic</h2>
                            <p className="text-white text-sm lg:text-base mb-5 leading-relaxed line-clamp-3">
                                Sourced from the cool climatic region of Ooty, this garlic variety is widely preferred for its strong medicinal value and rich flavor.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    "Highly medicinal",
                                    "Small, tightly packed bulbs",
                                    "Strong pungent aroma",
                                    "Long shelf life"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-sm bg-[#132644]/30 p-3 rounded-lg border border-[#C2A470]/20">
                                        <CheckCircle className="w-4 h-4 text-[#C2A470] flex-shrink-0" />
                                        <span className="text-white">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Turmeric */}
                    <div className="group bg-[#237087] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#267C92] hover:border-[#C2A470] flex flex-col lg:flex-row lg:h-[28rem]">
                        <div className="lg:w-1/2 h-64 lg:h-full overflow-hidden relative">
                            <img
                                src="/assets/erode-turmeric-powder.jpeg"
                                alt="Erode Turmeric"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="flex items-center gap-1 text-[#C2A470] text-sm font-bold">
                                    <MapPin className="w-4 h-4" /> Erode, Tamil Nadu
                                </div>
                            </div>
                            <h2 className="text-2xl lg:text-3xl font-bold text-white font-serif mb-3">Turmeric</h2>
                            <p className="text-white text-sm lg:text-base mb-5 leading-relaxed line-clamp-3">
                                Erode is one of India&apos;s major turmeric hubs, known for bright color, purity, and high curcumin content.
                            </p>
                            <div className="space-y-2">
                                {turmericVarieties.map((variety, idx) => (
                                    <div key={idx} className="flex items-start gap-3 text-sm">
                                        <Leaf className="w-4 h-4 text-[#C2A470] mt-0.5 flex-shrink-0" />
                                        <span className="text-white"><strong className="text-[#C2A470]">{variety.v}:</strong> {variety.c}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Karnataka Black Pepper */}
                    <div className="group bg-[#237087] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#267C92] hover:border-[#C2A470] flex flex-col lg:flex-row-reverse lg:h-[28rem]">
                        <div className="lg:w-1/2 h-64 lg:h-full overflow-hidden relative">
                            <img
                                src="/assets/karnataka-black-pepper.png"
                                alt="Karnataka Black Pepper"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="flex items-center gap-1 text-[#C2A470] text-sm font-bold">
                                    <MapPin className="w-4 h-4" /> Western Ghats, Karnataka
                                </div>
                            </div>
                            <h2 className="text-2xl lg:text-3xl font-bold text-white font-serif mb-3">Karnataka Black Pepper</h2>
                            <p className="text-white text-sm lg:text-base mb-5 leading-relaxed line-clamp-3">
                                Known as the &quot;King of Spices,&quot; renowned for its bold flavor, high piperine content, and rich dark color.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    "High Piperine Content",
                                    "Uniform Bold Size",
                                    "Rich, Complex Aroma",
                                    "Premium Export Quality"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-sm bg-[#132644]/30 p-3 rounded-lg border border-[#C2A470]/20">
                                        <CheckCircle className="w-4 h-4 text-[#C2A470] flex-shrink-0" />
                                        <span className="text-white">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Theni Cardamom */}
                    <div className="group bg-[#237087] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#267C92] hover:border-[#C2A470] flex flex-col lg:flex-row lg:h-[28rem]">
                        <div className="lg:w-1/2 h-64 lg:h-full overflow-hidden relative">
                            <img
                                src="/assets/theni-cardamom.png"
                                alt="Theni Cardamom"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="flex items-center gap-1 text-[#C2A470] text-sm font-bold">
                                    <MapPin className="w-4 h-4" /> Theni, Tamil Nadu
                                </div>
                            </div>
                            <h2 className="text-2xl lg:text-3xl font-bold text-white font-serif mb-3">Theni Cardamom</h2>
                            <p className="text-white text-sm lg:text-base mb-5 leading-relaxed line-clamp-3">
                                Sourced from the &quot;Cardamom Hills,&quot; celebrated as the &quot;Queen of Spices&quot; for its intense aroma and vibrant green color.
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { t: "Intense Aroma", d: "High volatile oil" },
                                    { t: "Vibrant Green", d: "Natural color" },
                                    { t: "Bold Pods", d: "7mm - 8mm+" },
                                    { t: "Hand-Picked", d: "Premium quality" }
                                ].map((fact, idx) => (
                                    <div key={idx} className="bg-[#132644]/30 p-3 rounded-lg border border-[#C2A470]/30">
                                        <h5 className="font-bold text-white text-xs mb-1">{fact.t}</h5>
                                        <p className="text-xs text-white/90">{fact.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Guntur Red Chillies */}
                    <div className="group bg-[#237087] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#267C92] hover:border-[#C2A470] flex flex-col lg:flex-row-reverse lg:h-[28rem]">
                        <div className="lg:w-1/2 h-64 lg:h-full overflow-hidden relative">
                            <img
                                src="/assets/guntur-red-chilli.webp"
                                alt="Guntur Red Chillies"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="flex items-center gap-1 text-[#C2A470] text-sm font-bold">
                                    <MapPin className="w-4 h-4" /> Andhra Pradesh
                                </div>
                            </div>
                            <h2 className="text-2xl lg:text-3xl font-bold text-white font-serif mb-3">Guntur Red Chillies</h2>
                            <p className="text-white text-sm lg:text-base mb-5 leading-relaxed line-clamp-3">
                                World-famous for high-quality red chillies used in spices, pickles, and industrial production.
                            </p>
                            <div className="space-y-2">
                                {chillies.slice(0, 4).map((variety, idx) => (
                                    <div key={idx} className="flex items-start gap-3 text-sm">
                                        <Flame className="w-4 h-4 text-[#C2A470] mt-0.5 flex-shrink-0" />
                                        <span className="text-white"><strong className="text-[#C2A470]">{variety.v}:</strong> {variety.c}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Kavuni Rice */}
                    <div className="group bg-[#237087] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#267C92] hover:border-[#C2A470] flex flex-col lg:flex-row lg:h-[28rem]">
                        <div className="lg:w-1/2 h-64 lg:h-full overflow-hidden relative">
                            <img
                                src="/assets/kavuni-rice.png"
                                alt="Kavuni Rice"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="flex items-center gap-1 text-[#C2A470] text-sm font-bold">
                                    <MapPin className="w-4 h-4" /> Kangayam, Tamil Nadu
                                </div>
                            </div>
                            <h2 className="text-2xl lg:text-3xl font-bold text-white font-serif mb-3">Kavuni Rice</h2>
                            <p className="text-white text-sm lg:text-base mb-5 leading-relaxed line-clamp-3">
                                Kangayam&apos;s traditional farming methods produce high-quality, nutrient-rich Kavuni rice loved in local and export markets.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-[#132644]/30 p-4 rounded-xl border-l-4 border-[#C2A470]">
                                    <h5 className="font-bold text-white text-sm mb-1">Red Kavuni</h5>
                                    <p className="text-xs text-white/90">Rich in iron & fiber</p>
                                </div>
                                <div className="bg-[#132644]/30 p-4 rounded-xl border-l-4 border-[#8B4513]">
                                    <h5 className="font-bold text-white text-sm mb-1">Brown Kavuni</h5>
                                    <p className="text-xs text-white/90">High protein</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Seeraga Samba Rice */}
                    <div className="group bg-[#237087] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#267C92] hover:border-[#C2A470] flex flex-col lg:flex-row-reverse lg:h-[28rem]">
                        <div className="lg:w-1/2 h-64 lg:h-full overflow-hidden relative">
                            <img
                                src="/assets/seevaga-samba-rice.png"
                                alt="Seeraga Samba Rice"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="flex items-center gap-1 text-[#C2A470] text-sm font-bold">
                                    <MapPin className="w-4 h-4" /> Delta, Thanjavur
                                </div>
                            </div>
                            <h2 className="text-2xl lg:text-3xl font-bold text-white font-serif mb-3">Seeraga Samba Rice</h2>
                            <p className="text-white text-sm lg:text-base mb-5 leading-relaxed line-clamp-3">
                                Premium small-grain rice from Tamil Nadu delta regions.
                            </p>
                            <div className="space-y-2">
                                {[
                                    "Naturally aromatic",
                                    "Strong aroma & firm texture",
                                    "Excellent for biryani",
                                    "Traditional variety"
                                ].map((feat, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm">
                                        <Leaf className="w-4 h-4 text-[#C2A470]" />
                                        <span className="text-white">{feat}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Millets */}
                    <div className="group bg-[#237087] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#267C92] hover:border-[#C2A470] flex flex-col lg:flex-row lg:h-[28rem]">
                        <div className="lg:w-1/2 h-64 lg:h-full overflow-hidden relative">
                            <img
                                src="/assets/millets.png"
                                alt="Millets Varieties"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="flex items-center gap-1 text-[#C2A470] text-sm font-bold">
                                    <MapPin className="w-4 h-4" /> Tamil Nadu & Karnataka
                                </div>
                            </div>
                            <h2 className="text-2xl lg:text-3xl font-bold text-white font-serif mb-3">Millets</h2>
                            <p className="text-white text-sm lg:text-base mb-5 leading-relaxed line-clamp-3">
                                Ancient superfoods packed with nutrition. Our millets are naturally grown, gluten-free, and rich in fiber, minerals, and antioxidants.
                            </p>
                            <div className="space-y-2">
                                {[
                                    { v: "Foxtail Millet", d: "High in protein & calcium" },
                                    { v: "Pearl Millet", d: "Rich in iron & magnesium" },
                                    { v: "Finger Millet (Ragi)", d: "Excellent calcium source" },
                                    { v: "Little Millet", d: "Low glycemic index" }
                                ].map((millet, idx) => (
                                    <div key={idx} className="flex items-start gap-3 text-sm">
                                        <Leaf className="w-4 h-4 text-[#C2A470] mt-0.5 flex-shrink-0" />
                                        <span className="text-white"><strong className="text-[#C2A470]">{millet.v}:</strong> {millet.d}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Puliyankudi Lime */}
                    <div className="group bg-[#237087] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#267C92] hover:border-[#C2A470] flex flex-col lg:flex-row-reverse lg:h-[28rem]">
                        <div className="lg:w-1/2 h-64 lg:h-full overflow-hidden relative">
                            <img
                                src="/assets/puliyankudi-lime.png"
                                alt="Puliyankudi Lime"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="flex items-center gap-1 text-[#C2A470] text-sm font-bold">
                                    <MapPin className="w-4 h-4" /> Tamil Nadu
                                </div>
                            </div>
                            <h2 className="text-2xl lg:text-3xl font-bold text-white font-serif mb-3">Puliyankudi Lime</h2>
                            <p className="text-white text-sm lg:text-base mb-5 leading-relaxed line-clamp-3">
                                Thin rind, extremely high juice content, strong citrus aroma. Perfect for beverages & pickles.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {["Weight Management", "Blood Sugar Control", "Heart Health"].map((h, i) => (
                                    <span key={i} className="bg-[#132644]/30 text-white text-xs font-bold px-4 py-2 rounded-full border border-[#C2A470]/50">
                                        {h}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Palani Aayakudi Guava */}
                    <div className="group bg-[#237087] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#267C92] hover:border-[#C2A470] flex flex-col lg:flex-row lg:h-[28rem]">
                        <div className="lg:w-1/2 h-64 lg:h-full overflow-hidden relative">
                            <img
                                src="/assets/guava.webp"
                                alt="Palani Aayakudi Guava"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="flex items-center gap-1 text-[#C2A470] text-sm font-bold">
                                    <MapPin className="w-4 h-4" /> Palani, Tamil Nadu
                                </div>
                            </div>
                            <h2 className="text-2xl lg:text-3xl font-bold text-white font-serif mb-3">Palani Guava</h2>
                            <p className="text-white text-sm lg:text-base mb-5 leading-relaxed line-clamp-3">
                                Known for rich sweetness and soft edible seeds. Famous Indian variety.
                            </p>
                            <div className="space-y-2">
                                {[
                                    "Naturally sweet",
                                    "High pulp content",
                                    "Ideal for juices & fresh consumption"
                                ].map((feat, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm">
                                        <CheckCircle className="w-4 h-4 text-[#C2A470]" />
                                        <span className="text-white">{feat}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom CTA */}
                <div className="text-center pb-12">
                    <h3 className="text-2xl font-bold mb-6 text-[#132644] font-serif">Interested in our Catalogue?</h3>
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
