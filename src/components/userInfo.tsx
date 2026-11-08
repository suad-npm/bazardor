"use client"

import { authClient } from "@/lib/auth-client";
import Link from "next/link";



const userInfo = () => {

    const {data:session} = authClient.useSession()
   const user = session?.user
console.log(user)


const handleSignOut = async()=>{
    await authClient.signOut();
}
   
    return (
        <div className="flex items-center gap-3 sm:gap-4">

            {
                user ? <div className="flex gap-5 items-center">

                    <Link href={"/profile"}>
                    <div className="avatar">
  <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-white text-xl font-semibold">
  {user?.name?.charAt(0)?.toUpperCase() || "U"}
</div>
</div>
                    </Link>

<div>
    <h2>{user?.name}</h2>
<button onClick={handleSignOut} className="btn btn-error btn-xs">Sign Out</button>
</div>


                    
                     </div>:
                 <div >
              <Link href={'/signIn'}>  <button className="btn btn-sm sm:btn-md">
               
                    <p className="font-bold">সাইন ইন</p>
                </button>
</Link>
               <Link href={'/signUp'}>
                <button className="btn btn-sm sm:btn-md bg-green-800">
                    <p className="text-white">সাইন আপ</p>
                </button>
               </Link>
            </div>
            }





           
        </div>
    );
};

export default userInfo;