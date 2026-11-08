"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import  React from "react";
import toast from "react-hot-toast";

const SignUpPage = () => {

    const onSubmit = async (e :React.SubmitEvent<HTMLElement>) => {

        e.preventDefault();

        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries()) as {name:string,email: string,image:string,password:string};

       const {data,error} = await authClient.signUp.email({
            ...user,
            callbackURL:"/"
        })

        if (data){
            toast.success("Successfully Sign UP")

              console.log(data)
            redirect("/")
          
        }

        if (error){
            toast.error( "Invalid Email or Password"  )
            console.log(error)
        }

    };

    return (
        <form onSubmit={onSubmit}>
            <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-10">

               
                <div className="text-center mb-6">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                        অ্যাকাউন্ট তৈরি করুন
                    </h1>

                    <p className="text-gray-600 text-sm sm:text-base">
                        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
                    </p>
                </div>

           
                <div className="w-full max-w-md bg-[#f9fcfa] border border-gray-200 rounded-2xl p-5 sm:p-6">

                    <div className="space-y-4">

                     
                        <div>
                            <label className="block font-medium mb-1">
                                নাম
                            </label>

                            <input
                                type="text"
                                name="name"
                                placeholder="যেমন: রহিম উদ্দিন"
                                className="input input-bordered w-full bg-transparent"
                            />
                        </div>

                        
                        <div>
                            <label className="block font-medium mb-1">
                                ইমেইল
                            </label>

                            <input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                className="input input-bordered w-full bg-transparent"
                            />
                        </div>

            
                        <div>
                            <label className="block font-medium mb-1">
                                পাসওয়ার্ড
                            </label>

                            <input
                                type="password"
                                name="password"
                                placeholder="কমপক্ষে ৮ অক্ষর"
                                className="input input-bordered w-full bg-transparent"
                            />
                        </div>

                   
                        <div>
                            <label className="block font-medium mb-1">
                                পাসওয়ার্ড নিশ্চিত করুন
                            </label>

                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="আবার লিখুন"
                                className="input input-bordered w-full bg-transparent"
                            />
                        </div>

                 
                        <button
                            type="submit"
                            className="btn w-full bg-green-700 hover:bg-green-800 text-white border-none mt-1"
                        >
                            অ্যাকাউন্ট তৈরি করুন
                        </button>

                    </div>

              
                    <div className="flex items-center gap-3 my-4">
                        <div className="h-px bg-gray-300 flex-1"></div>
                        <span className="text-gray-700 text-sm">অথবা</span>
                        <div className="h-px bg-gray-300 flex-1"></div>
                    </div>

                   
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">

                        <button
                            type="button"
                            className="btn btn-outline border-gray-800 bg-transparent text-gray-900 hover:bg-gray-100"
                        >
                            <span className="text-blue-500 font-bold">G</span>
                            Google দিয়ে চালিয়ে যান
                        </button>

                        <button
                            type="button"
                            className="btn btn-outline border-gray-800 bg-transparent text-gray-900 hover:bg-gray-100"
                        >
                            <span>●</span>
                            GitHub দিয়ে চালিয়ে যান
                        </button>

                    </div>

                
                    <p className="text-center text-sm text-gray-600 mt-4">
                        অ্যাকাউন্ট আছে?{" "}
                        <Link
                            href="/login"
                            className="text-green-700 font-medium underline"
                        >
                            সাইন ইন করুন
                        </Link>
                    </p>

                </div>

             
                <Link
                    href="/"
                    className="text-gray-500 hover:text-green-700 underline text-sm mt-6"
                >
                    ← হোম পেজে ফিরে যান
                </Link>

            </div>
        </form>
    );
};

export default SignUpPage;