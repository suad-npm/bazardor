import Link from "next/link";

interface DecreaseData {
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

const decreasedPrice = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");
    const data: DecreaseData[] = await res.json();

    const decreasedProducts = data
        .filter(h => h.change.dir === "down")
        .slice(0, 6);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">

            <h2 className="text-xl sm:text-2xl font-bold mb-5">
                <span className="text-green-600">▼</span> আজ দাম কমেছে
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {decreasedProducts.map(h => (
                    <Link
                        key={h.id}
                        href={`/products/${h.slug}`}
                        className="bg-[#f9fcfa] border border-gray-200 rounded-2xl p-4 sm:p-5 hover:shadow-md transition cursor-pointer"
                    >

                        <div className="flex items-center gap-3 sm:gap-4 mb-4">
                            <div className="bg-[#f0f5f0] w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-2xl flex items-center justify-center text-3xl">
                                {h.image}
                            </div>

                            <div className="min-w-0">
                                <h3 className="text-lg sm:text-xl font-bold">{h.nameBn}</h3>
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

                            <span className="bg-[#f0f5f0] text-green-600 rounded-full px-2 sm:px-3 py-1 text-sm whitespace-nowrap">
                                ▼ {Math.abs(h.change.pct)}%
                            </span>
                        </div>

                    </Link>
                ))}
            </div>

        </div>
    );
};

export default decreasedPrice;