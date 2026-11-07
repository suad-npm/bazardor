import { connection } from "next/server";
import Image from "next/image";
import Link from "next/link";

const Hero = async () => {
  await connection();

  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-3">
      <div className="bg-[#f9fcfa] border border-gray-200 rounded-[30px] px-5 sm:px-8 md:px-12 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-8">

        <div className="w-full md:w-1/2">
          <p className="bg-green-100 text-green-700 rounded-full px-4 py-2 inline-block mb-4 text-sm sm:text-base">
            {date}
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="text-base sm:text-lg text-gray-600 mb-7">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বোচ্চ এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <Link href="#all-products">
            <button className="btn bg-green-700 text-white border-none hover:bg-green-800">
              সব পণ্য দেখুন
            </button>
          </Link>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-100">
            <Image
              height={400}
              width={400}
              className="w-full h-auto object-contain"
              alt="hero Image"
              src="/bazar-hero.png"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;