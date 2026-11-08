import { connection } from "next/server";
import Image from "next/image";
import Link from "next/link";
import UserInfo from "./userInfo";

const Header = async () => {
    await connection();

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
                    <Link href="/">
                        <p className="font-bold text-xl sm:text-2xl">
                            বাজার দর
                        </p>
                    </Link>

                    <div className="text-xs sm:text-sm">
                        {date}
                    </div>
                </div>
            </div>

            <UserInfo/>

        </div>
    );
};

export default Header;