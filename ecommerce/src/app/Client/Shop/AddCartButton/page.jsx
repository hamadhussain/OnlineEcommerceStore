"use client";
import React, { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import { PiShoppingCart } from "react-icons/pi";
import Loader from "../../Loader/page";

const Buttonn = ({
  productPrice,
  quantity,
  productName,
  size,
  productImage,
  productId,
  productDescription
}) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to control drawer visibility
  const [selectedProduct, setSelectedProduct] = useState(null); // Store selected product details for confirmation
  const [loading, setLoading] = useState(false); 

  const handleAddToCart = async () => {
    if (!session) {
      router.push("/Login");
      return;
    }

    try {
      setSelectedProduct({
        productImage,
        productPrice,
        quantity,
        productName,
        size,
        productId,
      });
      setIsDrawerOpen(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleConfirmProduct = async () => {
    if (!selectedProduct) return;

    try {
      // const userResponse = await fetch("/Server/User", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     email: session.user.email,
      //     name: session.user.name,
      //   }),
      // });

      // if (!userResponse.ok) {
      //   throw new Error("Error creating or fetching user");
      // }
      // const userData = await userResponse.json();
      // console.log("userData bro"+userData);
      
      const orderResponse = await fetch("/Server/Order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: session.user.email,
          productId: selectedProduct.productId,
          quantity: selectedProduct.quantity,
          totalPrice: productPrice,
        }),
      });

      if (!orderResponse.ok) {
        throw new Error("Error creating order");
      }

      console.log("Order created successfully" + orderResponse);
      setIsDrawerOpen(false); 
    } catch (error) {
      console.error("Error bro:");
    }
  };

  return (
    <div className=" border4 border-black ">
      {!session ? (
        // <button
        //   // onClick={handleAddToCart}
        //   className="bg-green-400 text-white py-6  w-full font-extrabold text-2xl rounded"
        // >
        
        // </button>
        
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerTrigger className="text-white bg-red-500 hover:bg-red-600 py-2 draw w-full font-extrabold text-2xl rounded text-center flex justify-center " ><PiShoppingCart />

        </DrawerTrigger>
        <DrawerContent>
          <div className="flex justify-center items-center space-x-8">
           {
            !loading?(<>
             <Image
              src={`/Images/${productImage}.png`} 
              alt="Product Image"
              className="w-full max-w-xs  pl-7 md:max-w-md lg:max-w-xs roundedg p-4"
              width={200}
              height={100}
              priority
            /></>):(<><Loader/></>)
           }
            {/* Product Details */}
            <div className="space-y-2 border-l border-black pl-7 text-">
              <h3 className="text-xl font-semibold">{productName}</h3>
              <p className="text-lg"> {productDescription}</p>
              <p className="text-lg">Size: {size}</p>
              <p className="text-lg">Quantity: {quantity}</p>
              <p className="text-lg font-bold">Price: ${productPrice}</p>
            </div>
          </div>
          <DrawerFooter>
            <Button
              className="bg-green-500 text-white"
              onClick={handleConfirmProduct}
            >
              Add Product
            </Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      ) : (
        <Button
          onClick={() => signIn("google")}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Sign in to Add to Cart
        </Button>
      )}

      {/* Drawer component */}
      
    </div>
  );
};

export default Buttonn;










// "use client";
// import React, { useState } from "react";
// import { useSession, signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer";
// import Image from "next/image";

// const Buttonn = ({ productPrice, quantity, productName, size, productImage, productId }) => {
//   const { data: session } = useSession();
//   const router = useRouter();
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to control drawer visibility
//   const [selectedProduct, setSelectedProduct] = useState(null); // Store selected product details for confirmation

//   const handleAddToCart = async () => {
//     if (!session) {
//       router.push("/Login");
//       return;
//     }

//     try {
//       // Open the drawer and pass product details for confirmation
//       setSelectedProduct({
//         productImage,
//         productPrice,
//         quantity,
//         productName,
//         size,
//         productId,
//       });
//       setIsDrawerOpen(true);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const handleConfirmProduct = async () => {
//     if (!selectedProduct) return;

//     try {
//       // Here you can process the order
//       const userResponse = await fetch("/Server/User", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: session.user.email,
//           name: session.user.name,
//         }),
//       });

//       if (!userResponse.ok) {
//         throw new Error("Error creating or fetching user");
//       }
//       const userData = await userResponse.json();

//       const orderResponse = await fetch("/Server/Order", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           userId: session.user.email,
//           productId: selectedProduct.productId,
//           quantity: selectedProduct.quantity,
//           totalPrice: selectedProduct.productPrice * selectedProduct.quantity,
//         }),
//       });

//       if (!orderResponse.ok) {
//         throw new Error("Error creating order");
//       }

//       console.log("Order created successfully");
//       setIsDrawerOpen(false); // Close the drawer after confirming
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div>
//       {session ? (
//         <Button
//           onClick={handleAddToCart}
//           className="bg-blue-500 text-white py-2 px-4 rounded"
//         >
//           Add to Cart
//         </Button>
//       ) : (
//         <Button
//           onClick={() => signIn("google")}
//           className="bg-blue-500 text-white py-2 px-4 rounded"
//         >
//           Sign in to Add to Cart
//         </Button>
//       )}

//       {/* Drawer component */}
//       <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
//         <DrawerTrigger>Open</DrawerTrigger>
//         <DrawerContent>
//           <div className="flex justify-center items- space-y-4">
//           <Image
//           src={`/Images/jacket1.png`} 
//           alt="Image"
//           className="w-full max-w-xs md:max-w-md lg:max-w-xs rounded-lg p-4"
//           width={200}
//           height={100}
//           priority
//         />
// <div></div>
//           </div>
//           <DrawerFooter>
//             <Button
//               className="bg-green-500 text-white"
//               onClick={handleConfirmProduct}
//             >
//               Confirm Product
//             </Button>
//             <DrawerClose asChild>
//               <Button variant="outline">Cancel</Button>
//             </DrawerClose>
//           </DrawerFooter>
//         </DrawerContent>
//       </Drawer>
//     </div>
//   );
// };

// export default Buttonn;










// // "use client";
// // import React from "react";
// // import { useSession, signIn } from "next-auth/react";
// // import { useRouter } from "next/navigation";
// // import { Button } from "@/components/ui/button";
// // // import Drawer from "./Drawer/page";
// // import {
// //   Drawer,
// //   DrawerClose,
// //   DrawerContent,
// //   DrawerDescription,
// //   DrawerFooter,
// //   DrawerHeader,
// //   DrawerTitle,
// //   DrawerTrigger,
// // } from "@/components/ui/drawer";

// // const Buttonn = ({ productPrice, quantity, productName, size }) => {
// //   const { data: session } = useSession();
// //   const router = useRouter();
// //   console.log("product of  :" + productPrice);

// //   const handleAddToCart = async () => {
// //     if (!session) {
// //       router.push("/Login");
// //       return;
// //     }

// //     try {
// //       const userResponse = await fetch("/Server/User", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           email: session.user.email,
// //           name: session.user.name,
// //         }),
// //       });

// //       if (!userResponse.ok) {
// //         throw new Error("Error creating or fetching user");
// //       }
// //       const userData = await userResponse.json();
// //       const productResponse = await fetch("/Server/Product", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({ imagname: product.price }), // Assuming `imagname` is available in the product object
// //       });

// //       if (!productResponse.ok) {
// //         throw new Error("Error fetching product details");
// //       }
// //       const productDetails = await productResponse.json();
// //       const orderResponse = await fetch("/Server/Order", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           userId: session.user.email,
// //           productId: productName,
// //           quantity: quantity,
// //           totalPrice: price,
// //         }),
// //       });

// //       if (!orderResponse.ok) {
// //         throw new Error("Error creating order");
// //       }

// //       console.log("Order created successfully");
// //     } catch (error) {
// //       console.error("Error:", error);
// //     }
// //   };

// //   return (
// //     <div>
// //       {session ? (
// //         <Button
// //           onClick={handleAddToCart}
// //           className="bg-blue-500 text-white py-2 px-4 rounded"
// //         >
// //           Add to Cart
// //         </Button>
// //       ) : (
// //         <Button
// //           onClick={() => signIn("google")}
// //           className="bg-blue-500 text-white py-2 px-4 rounded"
// //         >
// //           Sign in to Add to Cart
// //         </Button>
// //       )}
// //       <Drawer>
// //         <DrawerTrigger>Open</DrawerTrigger>
// //         <DrawerContent>
// //           <DrawerHeader>
// //             <DrawerTitle>Are you absolutely sure?</DrawerTitle>
// //             <DrawerDescription>This action cannot be undone.</DrawerDescription>
// //           </DrawerHeader>
// //           <DrawerFooter>
// //             {/* <Button>Submit</Button> */}
// //             <DrawerClose>
// //               {/* <Button variant="outline">Cancel</Button> */}
// //             </DrawerClose>
// //           </DrawerFooter>
// //         </DrawerContent>
// //       </Drawer>
// //     </div>
// //   );
// // };

// // export default Buttonn;

// // // "use client";
// // // import React from "react";
// // // import {
// // //   AlertDialog,
// // //   AlertDialogAction,
// // //   AlertDialogCancel,
// // //   AlertDialogContent,
// // //   AlertDialogDescription,
// // //   AlertDialogFooter,
// // //   AlertDialogHeader,
// // //   AlertDialogTitle,
// // //   AlertDialogTrigger,
// // // } from "@/components/ui/alert-dialog";
// // // import { useSession, signIn, signOut } from "next-auth/react";
// // // import { Button } from "@/components/ui/button";

// // // const Buttonn = ({ handleAddToCart }) => {
// // //   const { data: session } = useSession();

// // //   return (
// // //     <>
// // //       {!session ? (
// // //         <>nbsdmnmn</>
// // //       ) : (
// // //         <>
// // //           {" "}
// // //           <AlertDialog>
// // //             <AlertDialogTrigger>
// // //               {" "}
// // //               <p
// // //                 onClick={() => signIn("google")}
// // //                 // onClick={handleAddToCart}
// // //                 className="bg-blue-500 text-white py-2 px-4 rounded"
// // //               >
// // //                 Add to Cart
// // //               </p>
// // //             </AlertDialogTrigger>
// // //             <AlertDialogContent>
// // //               <AlertDialogHeader>
// // //                 <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
// // //                 <AlertDialogDescription>
// // //                   This action cannot be undone. This will permanently delete
// // //                   your account and remove your data from our servers.
// // //                 </AlertDialogDescription>
// // //               </AlertDialogHeader>
// // //               <AlertDialogFooter>
// // //                 <AlertDialogCancel>Cancel</AlertDialogCancel>
// // //                 <AlertDialogAction>Continue</AlertDialogAction>
// // //               </AlertDialogFooter>
// // //             </AlertDialogContent>
// // //           </AlertDialog>
// // //         </>
// // //       )}
// // //     </>
// // //   );
// // // };

// // // export default Buttonn;
