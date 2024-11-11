// import { Button } from "@/components/ui/button";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { IoMenuOutline, IoLogIn } from "react-icons/io5";
// import Link from "next/link";
// import { useSession, signIn, signOut } from "next-auth/react";

// export default function Menu({ color }) {
//   const { data: session } = useSession();

//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <Button
//           variant="outline"
//           className={`
//             text-${color} 
//             hover:text-${color} 
//             border-none 
//             hover:border-none 
//             bg-transparent 
//             hover:bg-transparent 
//             text-5xl 
//             sm:text-4xl 
//             md:text-3xl 
//             lg:text-2xl 
//             xl:text-xl
//             hover:scale-105
//            transition-all
//             duration-150
//           `}
//         >
//           <IoMenuOutline />
//         </Button>
//       </SheetTrigger>
//       <SheetContent>
//         <SheetHeader>
//           <SheetTitle>Online Store</SheetTitle>
//           <SheetDescription>
//             Discover our premium collection of jackets and hoodies, designed for
//             style and comfort. Our website offers a curated selection of
//             high-quality outerwear that blends fashion with functionality. Shop
//             now for versatile pieces perfect for any occasion, and enjoy
//             seamless navigation, secure shopping, and fast shipping. Elevate
//             your wardrobe with our timeless designs.{" "}
//           </SheetDescription>
//         </SheetHeader>
//         <div className="grid gap-4 py-4">
//           <div className="flex items-center bg-sky-400 text-white rounded-sm justify-center gap-2">
//             {/* <IoLogIn className="text-xl" /> */}
//             {/* <Link href="/login"> */}
//               {/* {session?
//             <>    <Button variant="none" className="text-white capitalize">
//             Login
//           </Button></>:<>
//           {session.user.email}
//           </>
//           } */}
//               {session ? (
//                 <>
//                   <span>{session.user.email}</span>
//                   <Button
//                     variant="none"
//                     className="text-white capitalize"
//                     onClick={() => signOut()}
//                   >
//                     Logout
//                   </Button>
//                 </>
//               ) : (
//                 <Button
//                   variant="none"
//                   className="text-white capitalize"
//                   onClick={() => signIn()}
//                 >
//                   Login
//                 </Button>
//               )}
//           </div>
//           <Link
//             href="/Client/Menu/Terms&Policies"
//             className="text
//           blue-600 hover:border-b-2 py-3 w-fit"
//           >
//             Terms and Privacy Policy
//           </Link>
//           <Link
//             href="/jackets"
//             className="tex
//           -blue-600 hover:border-b-2 py-3 w-fit"
//           >
//             Jackets
//           </Link>
//           <Link
//             href="/hoodies"
//             className="text
//           blue-600 hover:border-b-2 py-3 w-fit"
//           >
//             Hoodies
//           </Link>
//         </div>
//         <SheetFooter>
//           <SheetClose asChild>
//             <Button type="button">Close</Button>
//           </SheetClose>
//         </SheetFooter>
//       </SheetContent>
//     </Sheet>
//   );
// }









'use client'


import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMenuOutline, IoLogIn } from "react-icons/io5";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useEffect } from "react";

export default function Menu({ color }) {
  const { data: session } = useSession();
  const [mounted, setMounted] = useState(false);

  // Ensure this runs only on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until client-side
  if (!mounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className={`
            text-${color} 
            hover:text-${color} 
            border-none 
            hover:border-none 
            bg-transparent 
            hover:bg-transparent 
            text-5xl 
            sm:text-4xl 
            md:text-3xl 
            lg:text-2xl 
            xl:text-xl
            hover:scale-105
            transition-all
            duration-150
          `}
        >
          <IoMenuOutline />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Online Store</SheetTitle>
          <SheetDescription>
            Discover our premium collection of jackets and hoodies, designed for
            style and comfort. Our website offers a curated selection of
            high-quality outerwear that blends fashion with functionality. Shop
            now for versatile pieces perfect for any occasion, and enjoy
            seamless navigation, secure shopping, and fast shipping. Elevate
            your wardrobe with our timeless designs.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center bg-sky-400 text-white rounded-sm justify-center gap-2">
            {session ? (
              <>
                <span>{session.user.email}</span>
                <Button
                  variant="none"
                  className="text-white capitalize"
                  onClick={() => signOut()}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button
                variant="none"
                className="text-white capitalize"
                onClick={() => signIn()}
              >
                Login
              </Button>
            )}
          </div>
          <Link
            href="/Client/Menu/Terms&Policies"
            className="text-blue-600 hover:border-b-2 py-3 w-fit"
          >
            Terms and Privacy Policy
          </Link>
          <Link
            href="/jackets"
            className="text-blue-600 hover:border-b-2 py-3 w-fit"
          >
            Jackets
          </Link>
          <Link
            href="/hoodies"
            className="text-blue-600 hover:border-b-2 py-3 w-fit"
          >
            Hoodies
          </Link>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="button">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
