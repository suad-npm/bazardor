import Link from "next/link";
interface Navs{
    id: string 
    slug: string 
    nameBn: string
    icon: string 
}

const navLink = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories");
  const data:Navs[] = await res.json();
  console.log(data);

  return (
    <div className="flex items-center w-8/11 mx-auto  gap-8">
      {data.map((n, i) => ( <Link className="font-bold" key={i} href={n.slug}> {n.icon} {n.nameBn} </Link> ))}
    </div>
  );
};

export default navLink;