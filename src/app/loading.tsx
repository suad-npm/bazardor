
const LoadingPage = () => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#f0f5f0] px-4">

            {/* Basket Icon */}
            <div className="relative mb-6">
                <div className="w-24 h-24 bg-white rounded-3xl shadow-md flex items-center justify-center">
                    <span className="text-5xl animate-bounce">
                        🧺
                    </span>
                </div>

                {/* Spinner */}
                <div className="absolute -inset-2 border-4 border-transparent border-t-[#008b45] border-r-[#008b45] rounded-full animate-spin"></div>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-[#14251b] mb-2">
                বাজার দর
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-sm mb-6 text-center">
                আপনার জন্য সর্বশেষ বাজারদর নিয়ে আসছি...
            </p>

            {/* Loading Bar */}
            <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full w-1/2 bg-[#008b45] rounded-full animate-pulse"></div>
            </div>

            <p className="text-xs text-gray-400 mt-3">
                একটু অপেক্ষা করুন...
            </p>

        </div>
    );
};

export default LoadingPage;
