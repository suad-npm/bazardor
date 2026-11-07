import Link from "next/link";

interface Navs {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
}

const navLink = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories");
    const data: Navs[] = await res.json();

    return (
        <div className="border-b border-black-100 p-1">
            <div className="flex items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-5 sm:gap-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
                {data.map((n) => (
                    <Link
                        className="font-bold text-sm sm:text-base shrink-0"
                        key={n.id}
                        href={`/catagory/${n.slug}`}
                    >
                        {n.icon} {n.nameBn}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default navLink;