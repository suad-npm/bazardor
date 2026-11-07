import Marquee from "@/components/marquee";
import Hero from "@/components/heroSection";
import IncreasedPrice from "@/components/increased";
import DecreasedPrice from "@/components/decreased";
export default function Home() {
  return (
    <div>

      <Marquee/>
      <Hero/>
      <IncreasedPrice/>
      <DecreasedPrice/>
      চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত,
      গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
    </div>
  );
}
