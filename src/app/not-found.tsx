
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#f0f5f0] px-4">
      <div className="text-center max-w-xl mx-auto">

        {/* Basket Icon */}
        <div className="text-7xl mb-4">
          🧺
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#14251b] mb-4">
          পাতাটি খুঁজে পাওয়া যায়নি
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
          আপনি যে পণ্য বা পাতাটি খুঁজছেন সেটি সরানো হয়েছে
          বা কখনো ছিল না।
        </p>

        {/* Home Button */}
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-[#008b45] hover:bg-[#006f37] text-white font-bold text-lg px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
        >
          হোম পেজে যান
        </Link>

      </div>
    </div>
  );
};

export default NotFound;
