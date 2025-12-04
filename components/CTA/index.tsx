'use client';

import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useRouter } from 'next/navigation';

const CTA: React.FC = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [isloading, setisloading] = useState<boolean>(false)
    const [isError, setisError] = useState<boolean>(false)

    const onsubmit = async (data: any) => {
        setisError(false)

        try {
            setisloading(true)
            await fetch("https://script.google.com/macros/s/AKfycbxH1e0c3k7QJ8qLI_XemJS1sRrFZN11lxdU4SyfsFFLBj7GZW7lvhHAyPKH6P77EvN2Bg/exec", {
                method: "POST",
                body: JSON.stringify(data),
            });

            // Redirect to thank you page after successful submission
            router.push('/thank-you');
        }

        catch (err) {
            console.log('error message', err)
            setisError(true)
        }
        finally {
            setisloading(false)

        }

    }



    return (
        <section id="contact" className="py-20 bg-[#132644] relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#5EBBC8]/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#C2A470]/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="bg-white rounded-3xl p-8 md:p-16 shadow-2xl flex flex-col lg:flex-row gap-12 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#132644] mb-6 font-serif">
                            Partner with <span className="text-[#C2A470]">UniNexus</span> for Global Quality Agri-Exports
                        </h2>
                        <p className="text-slate-600 text-lg mb-8">
                            Join hundreds of businesses worldwide who trust us for authentic, high-quality agricultural products directly from India&apos;s finest farms.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-8">
                            {['ISO Certified', 'Quality Assured', 'Timely Delivery', '24/7 Support'].map((tag) => (
                                <div key={tag} className="flex items-center gap-2 text-[#132644] font-medium bg-[#F8F9FA] border border-slate-200 px-4 py-2 rounded-lg">
                                    <CheckCircle className="w-5 h-5 text-[#C2A470]" /> {tag}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <form className="space-y-4" onSubmit={handleSubmit(onsubmit)}>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full px-4 py-3 rounded-lg bg-[#F8F9FA] border border-slate-200 focus:border-[#C2A470] focus:outline-none focus:ring-2 focus:ring-[#C2A470]/20 transition-all"
                                        {...register("name", {
                                            required: "Name required", pattern: {
                                                value: /^[A-Za-z\s]*$/, // Allows letters and spaces
                                                message: 'Only letters and spaces are allowed'
                                            }
                                        })}
                                    />
                                    {typeof errors.name?.message === "string" && (
                                        <p className='text-[red] text-xs mt-1 mx-2 font-medium'>{errors.name.message}</p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Company Name"
                                        className="w-full px-4 py-3 rounded-lg bg-[#F8F9FA] border border-slate-200 focus:border-[#C2A470] focus:outline-none focus:ring-2 focus:ring-[#C2A470]/20 transition-all"

                                        {...register("company_name", {
                                            required: "Company name required"
                                        })}
                                    />
                                    {typeof errors.company_name?.message === "string" && (
                                        <p className='text-[red] text-xs mt-1 mx-2 font-medium'>{errors.company_name?.message}</p>
                                    )}
                                </div>
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Business Email"
                                    className="w-full px-4 py-3 rounded-lg bg-[#F8F9FA] border border-slate-200 focus:border-[#C2A470] focus:outline-none focus:ring-2 focus:ring-[#C2A470]/20 transition-all"

                                    {...register("email", {
                                        required: "Email required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                />
                                {typeof errors.email?.message === "string" && (
                                    <p className='text-[red] text-xs mt-1 mx-2 font-medium '>{errors.email?.message}</p>
                                )}
                            </div>
                            <div>
                                <select className="w-full px-4 py-3 rounded-lg bg-[#F8F9FA] border border-slate-200 focus:border-[#C2A470] focus:outline-none focus:ring-2 focus:ring-[#C2A470]/20 transition-all text-slate-500"

                                    {...register("product", {
                                        required: "Please select product"
                                    })} defaultValue={""}>
                                    <option value={""} selected disabled>Select Product of Interest</option>
                                    <option value={"Coconut & Tender Coconut"}>Coconut & Tender Coconut</option>
                                    <option value={"Turmeric"}>Turmeric</option>
                                    <option value={"Guntur Chillies"}>Guntur Chillies</option>
                                    <option value={"Seeraga Samba Rice"}>Seeraga Samba Rice</option>
                                    <option value={"Puliyankudi Lime"}>Puliyankudi Lime</option>
                                    <option value={"Other"}>Other</option>
                                </select>
                                {typeof errors.product?.message === "string" && (
                                    <p className='text-[red] text-xs mt-1 mx-2 font-medium '>{errors.product?.message}</p>
                                )}
                            </div>
                            <div>
                                <textarea
                                    placeholder="Message / Requirement Details"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-[#F8F9FA] border border-slate-200 focus:border-[#C2A470] focus:outline-none focus:ring-2 focus:ring-[#C2A470]/20 transition-all"
                                    {...register("message")}
                                ></textarea>
                            </div>
                            <div>
                                <button className="w-full bg-[#C2A470] hover:bg-[#b0935f] text-[#132644] font-bold py-4 rounded-lg shadow-lg transition-all transform hover:-translate-y-1" disabled={isloading}>
                                    {
                                        isloading ? "Sending..." : "Send Request"
                                    }
                                </button>
                                {
                                    isError ? (
                                        <p className='text-[red] text-xs mt-2 font-medium text-center '>Please try again later !</p>

                                    ) : ""
                                }
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
