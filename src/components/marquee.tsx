import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface Headlines {
    image: string;
    nameBn: string;
    today: string;
    unit: string;
    id: number;
    change: {
        dir: string;
        pct: number;
    };
}

const marquee = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");
    const data: Headlines[] = await res.json();
    console.log(data);

    return (
        <div className="pt-2 mt-2 w-full overflow-hidden text-sm sm:text-base">
            <MarqueeText direction="right" duration={12}>
                {data.map(h => (
                    <span key={h.id} className="inline-flex items-center whitespace-nowrap">
                        <span>{h.image}</span>
                        <span className="mx-1">{h.nameBn}</span>
                        <span className="font-light"> {h.today}</span>
                        <span className="font-light">/{h.unit}</span>

                        <span className={`ml-1 ${h.change.dir === "up" ? "text-red-500" : "text-green-600"}`}>
                            {h.change.dir === "up" ? "▲" : "▼"} {h.change.pct}%
                        </span>

                        <span className="mx-3 sm:mx-5"> </span>
                    </span>
                ))}
            </MarqueeText>
        </div>
    );
};

export default marquee;