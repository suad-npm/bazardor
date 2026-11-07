import Link from "next/link";

interface ProductData {
    id: number;
    slug: string;
    nameBn: string;
    image: string;
    today: number;
    unit: string;
    change: {
        dir: string;
        pct: number;
    };
}

const allProducts = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");
    const data: ProductData[] = await res.json();

    return (
        <div className="w-8/11 mx-auto my-10">

            <h2 className="text-3xl font-bold mb-5">
                সব পণ্য
            </h2>

            <div className="flex justify-between items-center mb-6">
                <p className="text-gray-500">
                    মোট {data.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
                </p>

                <div className="flex items-center gap-3">
                    <span>সাজান</span>
                    <select className="select select-bordered bg-[#f9fcfa]">
                        <option>ডিফল্ট</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-5">

                {data.map(h => (
                    <Link
                        key={h.id}
                        href={`/products/${h.slug}`}
                        className="bg-[#f9fcfa] border border-gray-200 rounded-2xl p-5 hover:shadow-md transition cursor-pointer"
                    >

                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-[#f0f5f0] w-16 h-16 rounded-2xl flex items-center justify-center text-3xl">
                                {h.image}
                            </div>

                            <div>
                                <h3 className="text-xl font-bold">
                                    {h.nameBn}
                                </h3>

                                <p className="text-gray-500">
                                    প্রতি {h.unit === "kg" ? "কেজি" : h.unit === "litre" ? "লিটার" : h.unit}
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-between items-end">

                            <div>
                                <p className="text-gray-500">
                                    আজকের দাম
                                </p>

                                <p className="text-2xl font-bold">
                                    {h.today} <span className="text-base font-normal">টাকা</span>
                                </p>
                            </div>

                            <span className={`rounded-full px-3 py-1 ${
                                h.change.dir === "up"
                                    ? "bg-[#f0f5f0] text-red-500"
                                    : h.change.dir === "down"
                                    ? "bg-[#f0f5f0] text-green-600"
                                    : "bg-[#f0f5f0] text-gray-600"
                            }`}>
                                {h.change.dir === "up"
                                    ? "▲"
                                    : h.change.dir === "down"
                                    ? "▼"
                                    : "—"
                                } {Math.abs(h.change.pct)}%
                            </span>

                        </div>

                    </Link>
                ))}

            </div>

        </div>
    );
};

export default allProducts;