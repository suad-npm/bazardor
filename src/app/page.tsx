import { Suspense } from "react";
import Hero from "@/components/heroSection";
import IncreasedPrice from "@/components/increased";
import DecreasedPrice from "@/components/decreased";
import AllProducts from "@/components/allProdeucts";



export const instant = false;
export default function Home() {
  return (
    <div>

      
     <Suspense fallback={<div className="h-96" />}>
    <Hero />
</Suspense>

<Suspense fallback={<div className="h-60" />}>
    <DecreasedPrice />
</Suspense>

<Suspense fallback={<div className="h-60" />}>
    <IncreasedPrice />
</Suspense>

<Suspense fallback={<div className="h-96" />}>
    <AllProducts />
</Suspense>
     
    </div>
  );
}
