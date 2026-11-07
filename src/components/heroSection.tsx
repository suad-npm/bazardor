import Image from "next/image";

const hero = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div className="w-8/11 mx-auto my-3">
      <div className="bg-[#f9fcfa] border border-gray-200 rounded-[30px] px-5 md:px-12 py-10 flex items-center justify-between">

        <div className="w-1/2">
          <p className="bg-green-100 text-green-700 rounded-full px-4 py-2 inline-block mb-4">
            {date}
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="text-lg text-gray-600 mb-7">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বোচ্চ এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <button className="btn bg-green-700 text-white border-none hover:bg-green-800">
            সব পণ্য দেখুন
          </button>
        </div>

        <div className="w-1/2 flex justify-center">
          <div className="text-[150px]">
            <Image height={400} width={400} alt="hero Image" src="/bazar-hero.png"/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default hero;