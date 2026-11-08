

"use client"

import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";

const Profile = () => {

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user?.name) {
            (user.name);
        }
    }, [user?.name]);

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);

        const { data, error } = await authClient.updateUser({
            name: name,
        });

        if (data) {
            console.log("Name updated successfully");
        }

        if (error) {
            console.log(error);
        }

        setLoading(false);
    };

    const handleLogout = async () => {
        const { error } = await authClient.signOut();

        if (error) {
            console.log(error);
        } else {
            window.location.href = "/";
        }
    };

    return (
        <div className="min-h-screen bg-[#f0f5f1] py-10 px-4">

            <div className="max-w-5xl mx-auto">

               
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">
                        আমার প্রোফাইল
                    </h2>

                    <p className="text-gray-600 mt-1">
                        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
                    </p>
                </div>

                
                <div className="bg-[#f9fcfa] border border-gray-200 rounded-3xl p-6 mb-7">

                    <div className="flex flex-col sm:flex-row sm:items-center gap-5">

                        <div className="flex items-center gap-5 flex-1">

                         
                            <div className="w-24 h-24 rounded-full bg-green-700 flex items-center justify-center text-white text-4xl font-semibold">
                                {user?.name?.charAt(0)?.toUpperCase() || "U"}
                            </div>

                       
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-900">
                                    {user?.name}
                                </h3>

                                <p className="text-gray-600 text-lg break-all">
                                    {user?.email}
                                </p>
                            </div>

                        </div>

               
                        <button
                            onClick={handleLogout}
                            className="btn btn-outline border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                        >
                            <span className="text-lg">⇥</span>
                            সাইন আউট
                        </button>

                    </div>

                </div>

               
                <div className="bg-[#f9fcfa] border border-gray-200 rounded-3xl p-6 sm:p-8">

                    <h3 className="text-2xl font-bold text-gray-900 mb-5">
                        নাম হালনাগাদ করুন
                    </h3>

                    <form onSubmit={handleUpdate}>

                        <div className="mb-5">

                            <label className="block text-lg font-medium text-gray-800 mb-2">
                                নাম
                            </label>

                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="আপনার নাম লিখুন"
                                className="input input-bordered w-full bg-transparent"
                                required
                            />

                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="btn bg-green-700 hover:bg-green-800 text-white border-none"
                        >
                            {loading ? "আপডেট হচ্ছে..." : "নাম হালনাগাদ করুন"}
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
};

export default Profile;
