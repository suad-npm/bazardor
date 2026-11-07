interface ProductDetails {
    id: number;
    slug: string;
    nameBn: string;
    category: string;
    categoryNameBn: string;
    categoryIcon: string;
    unit: string;
    image: string;
    today: number;
    yesterday: number;
    lastWeek: number;
    lastMonth: number;
    change: {
        dir: string;
        pct: number;
    };
    markets: {
        market: string;
        division: string;
        min: number;
        max: number;
    }[];
}

interface Params {
    params: Promise<{
        productDetailsId: string;
    }>;
}

const productDetails = async ({ params }: Params) => {
    const { productDetailsId } = await params;

    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${productDetailsId}`);
    const data: ProductDetails = await res.json();

    console.log(data);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">

         
            <div className="bg-[#f9fcfa] border border-gray-200 rounded-2xl p-4 sm:p-6 mb-4">

                <div className="flex justify-between items-center gap-3">

                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className="bg-[#f0f5f0] w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center text-3xl shrink-0">
                            {data.image}
                        </div>

                        <div>
                            <h1 className="text-xl sm:text-2xl font-bold">
                                {data.nameBn}
                            </h1>

                            <p className="text-gray-500 text-sm">
                                প্রতি {data.unit === "kg" ? "কেজি" : data.unit} · {data.categoryNameBn}
                            </p>

                            <p className="text-gray-500 text-xs sm:text-sm mt-1">
                                গতকালের তুলনায় আজ দাম {data.change.dir === "up" ? "বেড়েছে" : data.change.dir === "down" ? "কমেছে" : "অপরিবর্তিত"} {data.change.pct}%
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#f0f5f0] rounded-xl p-3 text-center shrink-0">
                        <p className="text-gray-500 text-xs">আজকের দাম</p>
                        <p className="text-xl sm:text-2xl font-bold">
                            {data.today.toLocaleString("bn-BD")}
                        </p>
                        <p className="text-gray-500 text-xs">
                            টাকা / {data.unit === "kg" ? "কেজি" : data.unit}
                        </p>

                        <p className={`text-sm font-bold ${data.change.dir === "up" ? "text-red-500" : data.change.dir === "down" ? "text-green-600" : "text-gray-600"}`}>
                            {data.change.dir === "up" ? "▲" : data.change.dir === "down" ? "▼" : "—"} {data.change.pct.toLocaleString("bn-BD")}%
                        </p>
                    </div>

                </div>
            </div>

            <div className="bg-[#f9fcfa] border border-gray-200 rounded-2xl p-4 sm:p-5 mb-4">

                <h2 className="font-bold text-lg mb-3">
                    দামের সারসংক্ষেপ
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

                    <div className="border border-gray-200 rounded-xl p-4">
                        <p className="text-gray-500 text-sm">সর্বনিম্ন দাম</p>
                        <p className="text-green-600 font-bold text-xl">
                            {Math.min(...data.markets.map(m => m.min)).toLocaleString("bn-BD")} টাকা
                        </p>
                        <p className="text-gray-400 text-xs">সবচেয়ে কম পাওয়া বাজারে</p>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-4">
                        <p className="text-gray-500 text-sm">সর্বোচ্চ দাম</p>
                        <p className="text-red-500 font-bold text-xl">
                            {Math.max(...data.markets.map(m => m.max)).toLocaleString("bn-BD")} টাকা
                        </p>
                        <p className="text-gray-400 text-xs">সবচেয়ে বেশি পাওয়া বাজারে</p>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-4">
                        <p className="text-gray-500 text-sm">গড় দাম</p>
                        <p className="text-green-600 font-bold text-xl">
                            {Math.round(data.markets.reduce((sum, m) => sum + (m.min + m.max) / 2, 0) / data.markets.length).toLocaleString("bn-BD")} টাকা
                        </p>
                        <p className="text-gray-400 text-xs">প্রতি {data.unit === "kg" ? "কেজি" : data.unit} হিসেবে</p>
                    </div>

                </div>
            </div>

   
            <div className="bg-[#f9fcfa] border border-gray-200 rounded-2xl p-4 sm:p-5">

                <h2 className="font-bold text-lg mb-3">
                    বাজারভিত্তিক আজকের দাম
                </h2>

                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full text-sm">

                        <thead>
                            <tr className="text-gray-600">
                                <th>বাজার</th>
                                <th>বিভাগ</th>
                                <th className="text-right">সর্বনিম্ন</th>
                                <th className="text-right">সর্বোচ্চ</th>
                                <th className="text-right">গড়</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.markets.map((m, i) => (
                                <tr key={i}>
                                    <td>{m.market}</td>
                                    <td>{m.division}</td>
                                    <td className="text-right">
                                        {m.min.toLocaleString("bn-BD")} টাকা
                                    </td>
                                    <td className="text-right">
                                        {m.max.toLocaleString("bn-BD")} টাকা
                                    </td>
                                    <td className="text-right font-bold">
                                        {((m.min + m.max) / 2).toLocaleString("bn-BD")} টাকা
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

            </div>


            <div className="mt-5">
                <p className="font-bold text-sm">
                    {data.categoryIcon} {data.categoryNameBn}
                </p>
            </div>

        </div>
    );
};

export default productDetails;