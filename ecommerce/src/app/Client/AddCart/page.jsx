"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

const initialProducts = [
  { id: 1, name: "/hoody1.png", price: "$10.00", quantity: 1 },
  { id: 2, name: "/hoody1.png", price: "$20.00", quantity: 1 },
  { id: 3, name: "/hoody1.png", price: "$15.00", quantity: 1 },
  { id: 1, name: "/hoody1.png", price: "$10.00", quantity: 1 },
  { id: 2, name: "/hoody1.png", price: "$20.00", quantity: 1 },
  { id: 3, name: "/hoody1.png", price: "$15.00", quantity: 1 },
  { id: 1, name: "/hoody1.png", price: "$10.00", quantity: 1 },
  { id: 2, name: "/hoody1.png", price: "$20.00", quantity: 1 },
  { id: 3, name: "/hoody1.png", price: "$15.00", quantity: 1 },
];

export default function SheetDemo({ color }) {
  const [cartItems, setCartItems] = useState(initialProducts);

  const handleQuantityChange = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };
  // useEffect(() => {
 
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("/Server/ProductCard", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ items: 'cartItems '}),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const data = await response.json();
  //     console.log(data); // Handle the response data as needed
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // if (!loginData.email) {

  //   // }
  //   try {
  //     const response = await fetch("/Server/ProductCard", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email:' loginData.email',
  //         password: 'loginData.password',
  //         // action: "login",
  //       }),
  //     });

  //     // console.log(response);
  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log(data.message);
  //       // console.log(loginData.email + loginData.password);
  //       // router.push("/Components/Dashboard");
  //     } else {
  //       // setError("Invalid email or password");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     // setError("An error occurred");
  //   }
  // };
// }, []);


const handleRemove = async () => {
  try {
 
    const response = await fetch("/Server/ProductCard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ greeting: "Hello" }),
    });
    if (response.ok) {
      const data = await response.json();
      // setMessage(data.message);
      console.log(data.message);
      
    } else {
      console.error("Error fetching message");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

const handleSubmit = async () => {
  try {
 
    const response = await fetch("/Server/ProductCard");

    if (response.ok) {
      const data = await response.json();
      // setMessage(data.message);
      console.log(data.message);
      
    } else {
      console.error("Error fetching message");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="none"
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
          <MdOutlineShoppingCart />
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-scroll">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>
            Review your selected items before proceeding to checkout.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {cartItems.map((product) => (
            <div key={product.id} className="grid grid-cols-4 items-center gap-4">
              {/* <Label className="text-right">{product.name}</Label> */}
              <Image src={`${product.name}`} width={60} height={60}/>
              <span className="col-span-2">{product.price}</span>
              <Input
                type="number"
                value={product.quantity}
                onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value) || 1)}
                className="col-span-1 w-16"
              />
              <Button variant="outline" className="col-span-1">
                Remove
              </Button>
            </div>
          ))}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="button" onClick={handleSubmit}>Proceed to Checkout</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}


























// "use client";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
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
// import { useEffect, useState } from "react";
// import { IoMenuOutline } from "react-icons/io5";
// import { MdOutlineShoppingCart } from "react-icons/md";

// const products = [
//   { id: 1, name: "Product 1", price: "$10.00" },
//   { id: 2, name: "Product 2", price: "$20.00" },
//   { id: 3, name: "Product 3", price: "$15.00" },
// ];

// export default function SheetDemo({color}) {
//   const [quantity, setQuantity] = useState(1);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/api/route-name", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             quantity
//           }),
//         });

//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }

//         const data = await response.json();
//         console.log(data); // Handle the response data as needed
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);
//   return (
//     // <Sheet>
//     //   <SheetTrigger asChild>
//     //     <Button
//     //       variant="outline"
//     //       className="text-white border-none hover:text-white bg-transparent hover:bg-transparent text-3xl"
//     //     >
//     //       <IoMenuOutline />{" "}
//     //     </Button>
//     //   </SheetTrigger>
//     //   <SheetContent>
//     //     <SheetHeader>
//     //       <SheetTitle>Edit profile</SheetTitle>
//     //       <SheetDescription>
//     //         Make changes to your profile here. Click save when you're done.
//     //       </SheetDescription>
//     //     </SheetHeader>
//     //     <div className="grid gap-4 py-4">
//     //       <div className="grid grid-cols-4 items-center gap-4">
//     //         <Label htmlFor="name" className="text-right">
//     //           Name
//     //         </Label>
//     //         <Input id="name" value="Pedro Duarte" className="col-span-3" />
//     //       </div>
//     //       <div className="grid grid-cols-4 items-center gap-4">
//     //         <Label htmlFor="username" className="text-right">
//     //           Username
//     //         </Label>
//     //         <Input id="username" value="@peduarte" className="col-span-3" />
//     //       </div>
//     //     </div>
//     //     <SheetFooter>
//     //       <SheetClose asChild>
//     //         <Button type="submit">Save changes</Button>
//     //       </SheetClose>
//     //     </SheetFooter>
//     //   </SheetContent>
//     // </Sheet>
//     <Sheet>
//       <SheetTrigger asChild>
//         <Button
//           variant="outline"
//           className={`text-${color} border-none hover:text-white bg-transparent hover:bg-transparent text-4xl` } >
//           <MdOutlineShoppingCart />
//         </Button>
//       </SheetTrigger>
//       <SheetContent>
//         <SheetHeader>
//           <SheetTitle>Your Cart</SheetTitle>
//           <SheetDescription>
//             Review your selected items before proceeding to checkout.
//           </SheetDescription>
//         </SheetHeader>
//         <div className="grid gap-4 py-4">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="grid grid-cols-4 items-center gap-4"
//             >
//               <Label className="text-right">{product.name}</Label>
//               <span className="col-span-2">{product.price}</span>
//               <Button variant="outline" className="col-span-1">
//                 Remove
//               </Button>
//             </div>
//           ))}
//         </div>
//         <SheetFooter>
//           <SheetClose asChild>
//             <Button type="button" onClick={fetchData}>Proceed to Checkout</Button>
//           </SheetClose>
//         </SheetFooter>
//       </SheetContent>
//     </Sheet>
//   );
// }
