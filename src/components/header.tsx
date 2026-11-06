
import Image from "next/image";


const header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div className="flex justify-between items-center w-8/11 mx-auto py-4">

      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-green-800 rounded-2xl flex items-center justify-center p-2">
          <Image
            className="w-full h-full object-contain"
            height={50}
            width={50}
            src="/logo-icon.png"
            alt="logo"
          />
        </div>

        <div>
          <p className="font-bold text-2xl">বাজার দর</p>
          <div>{date}</div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="btn "><p className="font-bold ">সাইন ইন</p></button>
        <button className="btn bg-green-800 "><p className="text-white">সাইন আপ</p></button>
      </div>

    </div>
  );
};

export default header;