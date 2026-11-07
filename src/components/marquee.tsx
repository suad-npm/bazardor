import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface Headlines {
    image: string;
    nameBn: string;
    today: string;
    unit: string;
    change: {
        dir: string;
        pct: number;
    };
}

const marquee = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products")
    const data:Headlines[] = await res.json()
    console.log(data)

    return (
        <div className="pt-2 mt-2 border-t-1 border-black-100">
            <MarqueeText direction="right" duration={12}>
                {data.map(h => <span key={h.id}> 
                    <span>{h.image}</span>
                    <span>{h.nameBn}</span>
                    <span className="font-light"> {h.today}</span>
                    <span className="font-light">/{h.unit}</span>

                    <span className={h.change.dir === "up" ? "text-red-500" : "text-green-600"}>
                        {h.change.dir === "up" ? "▲" : "▼"} {h.change.pct}%
                    </span>

                    <span className="mx-5"> </span>
                </span>)}
            </MarqueeText>
        </div>
    );
};

export default marquee;