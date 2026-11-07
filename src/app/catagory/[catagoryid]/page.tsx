interface CategoryProduct {
    id: number;
    nameBn: string;
    image: string;
    today: number;
    unit: string;
    change: {
        dir: string;
        pct: number;
    };
}

const catagoryNews = async ({ params }: { params: Promise<{ catagoryid: string }> }) => {
    const {catagoryid} = await params;

    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products?category=${catagoryid}`);
    const data: CategoryProduct[] = await res.json();

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">

           
            <div className="bg-[#f9fcfa] border border-gray-200 rounded-3xl p-5 sm:p-8 mb-7">
                <div className="flex items-center gap-4">

                    <div className="bg-[#f0f5f0] w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl shrink-0">
                        {data[0]?.image}
                    </div>

                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold">
                            {catagoryid}
                        </h1>

                        <p className="text-gray-500 text-sm sm:text-base">
                            {data.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও পরিবর্তন
                        </p>
                    </div>

                </div>
            </div>

        
            <div className="flex justify-between items-center mb-5 gap-3">

                <p className="text-gray-600 text-sm sm:text-base">
                    মোট {data.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
                </p>

                <div className="flex items-center gap-2">
                    <span className="text-gray-600 text-sm hidden sm:block">
                        সাজান
                    </span>

                    <select className="select select-bordered select-sm sm:select-md bg-[#f9fcfa]">
                        <option>ডিফল্ট</option>
                    </select>
                </div>

            </div>

           
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">

                {data.map(h => (
                    <div
                        key={h.id}
                        className="bg-[#f9fcfa] border border-gray-200 rounded-2xl p-4 sm:p-5"
                    >

                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-[#f0f5f0] w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-2xl flex items-center justify-center text-3xl">
                                {h.image}
                            </div>

                            <div>
                                <h3 className="text-lg sm:text-xl font-bold">
                                    {h.nameBn}
                                </h3>

                                <p className="text-gray-500">
                                    প্রতি {h.unit === "kg" ? "কেজি" : h.unit}
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-between items-end gap-2">
                            <div>
                                <p className="text-gray-500">আজকের দাম</p>

                                <p className="text-xl sm:text-2xl font-bold">
                                    {h.today} <span className="text-base font-normal">টাকা</span>
                                </p>
                            </div>

                            <span className={`rounded-full px-3 py-1 text-sm ${
                                h.change.dir === "up"
                                    ? "bg-[#f0f5f0] text-red-500"
                                    : h.change.dir === "down"
                                    ? "bg-[#f0f5f0] text-green-600"
                                    : "bg-[#f0f5f0] text-gray-600"
                            }`}>
                                {h.change.dir === "up" ? "▲" : h.change.dir === "down" ? "▼" : "—"} {h.change.pct}%
                            </span>
                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
};

export default catagoryNews;