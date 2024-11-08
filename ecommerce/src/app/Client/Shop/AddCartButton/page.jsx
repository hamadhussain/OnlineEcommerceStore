// "use client";
// import React from "react";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import { useSession, signIn, signOut } from "next-auth/react";
// import { Button } from "@/components/ui/button";

// const Buttonn = ({ handleAddToCart }) => {
//   const { data: session } = useSession();

//   return (
//     <>
//       {!session ? (
//         <>nbsdmnmn</>
//       ) : (
//         <>
//           {" "}
//           <AlertDialog>
//             <AlertDialogTrigger>
//               {" "}
//               <p
//                 onClick={() => signIn("google")}
//                 // onClick={handleAddToCart}
//                 className="bg-blue-500 text-white py-2 px-4 rounded"
//               >
//                 Add to Cart
//               </p>
//             </AlertDialogTrigger>
//             <AlertDialogContent>
//               <AlertDialogHeader>
//                 <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
//                 <AlertDialogDescription>
//                   This action cannot be undone. This will permanently delete
//                   your account and remove your data from our servers.
//                 </AlertDialogDescription>
//               </AlertDialogHeader>
//               <AlertDialogFooter>
//                 <AlertDialogCancel>Cancel</AlertDialogCancel>
//                 <AlertDialogAction>Continue</AlertDialogAction>
//               </AlertDialogFooter>
//             </AlertDialogContent>
//           </AlertDialog>
//         </>
//       )}
//     </>
//   );
// };

// export default Buttonn;










"use client";
import React from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component

const Buttonn = ({ product, quantity, size }) => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleAddToCart = async () => {
    if (!session) {
      router.push("/Login");
      return;
    }

    try {
      // Create or fetch user
      const userResponse = await fetch("/Server/User", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: session.user.email,
          name: session.user.name,
        }),
      });

      if (!userResponse.ok) {
        throw new Error("Error creating or fetching user");
      }

      const userData = await userResponse.json();

      // Fetch product details
      // const productResponse = await fetch(`/api/products/${product.id}`);
      // if (!productResponse.ok) {
      //   throw new Error("Error fetching product details");
      // }
      const productResponse = await fetch('/Server/Product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imagname: product.imagname }), // Assuming `imagname` is available in the product object
      });
      
      if (!productResponse.ok) {
        throw new Error("Error fetching product details");
      }
      
      const productDetails = await productResponse.json();

      // Create order
      const orderResponse = await fetch("/Server/Order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userData.id,
          productId: productDetails.id,
          quantity,
          total: productDetails.price * quantity,
        }),
      });

      if (!orderResponse.ok) {
        throw new Error("Error creating order");
      }

      console.log("Order created successfully");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      {session ? (
        <Button onClick={handleAddToCart} className="bg-blue-500 text-white py-2 px-4 rounded">
          Add to Cart
        </Button>
      ) : (
        <Button onClick={() => signIn("google")} className="bg-blue-500 text-white py-2 px-4 rounded">
          Sign in to Add to Cart
        </Button>
      )}
    </div>
  );
};

export default Buttonn;
