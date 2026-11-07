import Marquee from "@/components/marquee";
import Hero from "@/components/heroSection";
import IncreasedPrice from "@/components/increased";
import DecreasedPrice from "@/components/decreased";
import AllProducts from "@/components/allProdeucts";
export default function Home() {
  return (
    <div>

      <Marquee/>
      <Hero/>
      <IncreasedPrice/>
      <DecreasedPrice/>
      <AllProducts/>
     
    </div>
  );
}
