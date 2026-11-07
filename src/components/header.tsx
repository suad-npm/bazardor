import Image from "next/image";

const header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-800 rounded-2xl flex items-center justify-center p-2 shrink-0">
          <Image
            className="w-full h-full object-contain"
            height={50}
            width={50}
            src="/logo-icon.png"
            alt="logo"
          />
        </div>

        <div>
          <p className="font-bold text-xl sm:text-2xl">বাজার দর</p>
          <div className="text-xs sm:text-sm">{date}</div>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <button className="btn btn-sm sm:btn-md">
          <p className="font-bold">সাইন ইন</p>
        </button>

        <button className="btn btn-sm sm:btn-md bg-green-800">
          <p className="text-white">সাইন আপ</p>
        </button>
      </div>

    </div>
  );
};

export default header;