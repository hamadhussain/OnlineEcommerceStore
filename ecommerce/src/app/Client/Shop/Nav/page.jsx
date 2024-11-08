"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import SheetDemo from "../../AddCart/page";
import CartMenu from "../../Menu/page";
import { GiSleevelessJacket } from "react-icons/gi";
import {namesLink} from '@/app/Utils'
import { FcSearch } from "react-icons/fc";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputFocus, setFocus] = useState(false);
  const dropdownRef = useRef(null);

  const names = namesLink

  const handleChange = (event) => {
    setInputValue(event.target.value);
    setFocus(true);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setFocus(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredNames = names.filter(({ name }) =>
    name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <>
      <div className="hidden lg:block">
        <nav className="flex  justify-between items-center bg-white p-4 border-b border-gray-300">
          <div className="flex items-center gap-5">            
            <Link href="/">
            <h1 className="text-black text-xl font-bold flex items-center  gap-2">
            <GiSleevelessJacket className="border-2 text-3xl rounded-full" />
              M.J</h1></Link>
            <Link href="/Client/Shop/Jackets">
              <p className="uppercase hover:border-b-2 transition-all duration-700 border-0">
                Leather-Jackets
              </p>
            </Link>
            <Link href="/Client/Shop/Hoodies">
              <p className="uppercase hover:border-b-2 transition-all duration-700 border-0">
                Hoodies
              </p>
            </Link>
          </div>

          <div className="flex items-center  gap-4 relative">
            <Link href="/login">
              <button className="bg-blue-500 text-white p-1 px-2 rounded hover:bg-blue-600">
                Login
              </button>
            </Link>
            <input
              className="border border-gray-300 h-8 p-1 px-2 rounded mr-2"
              id="textInput"
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="Search Products..."
              onFocus={() => setFocus(true)}
            />
            {inputFocus && inputValue && (
              <div
                ref={dropdownRef}
                className="absolute z-10 bg-white border border-gray-300 top-10 left-0 w-full"
              >
                {filteredNames.map(({ name, link }, index) => (
                  <Link key={index} href={link}>
                    <div
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => {
                        setInputValue(name);
                        setFocus(false);
                      }}
                    >
                      {name}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>

      <div className="lg:hidden block">
        {" "}
        <header className="flex  backdrop-brightness-95 py-10 text-black z-20 bg-white bg-fxed fied w-scree items-center justify-between px-6 border-gray-200">
          
          <Link href="/"><div className="flex items-center italic gap-1 text-3xl">
            <GiSleevelessJacket className="border-4 rounded-full" />
            <p className="companylogo italic">M.J</p>
          </div></Link>
          <div className=" flex items-center gap-4 text-black">
            <SheetDemo />
            <CartMenu />
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;

// "use client";
// import Link from "next/link";
// import { useState, useEffect, useRef } from "react";

// const Navbar = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [inputFocus, setFocus] = useState(false);
//   const dropdownRef = useRef(null);

//   const handleChange = (event) => {
//     setInputValue(event.target.value);
//     setFocus(true);
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setFocus(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const filteredNames = ["James", "John", "Paul", "Ringo", "George"].filter(name =>
//     name.toLowerCase().includes(inputValue.toLowerCase())
//   );

//   return (
//     <nav className="flex justify-between items-center bg-white p-4 border-b border-gray-300">
//       <div className="flex items-center gap-5">
//         <h1 className="text-black text-xl font-bold">M.J</h1>
//         <Link href="/Client/Men/Jackets">
//           <p className="uppercase hover:border-b-2 transition-all duration-700 border-0">Leather-Jackets</p>
//         </Link>
//         <Link href="/Client/Men/Hoodies">
//           <p className="uppercase hover:border-b-2 transition-all duration-700 border-0">Hoodies</p>
//         </Link>
//       </div>

//       <div className="flex items-center  h-10 gap-3 relative">
//         <Link href="/login">
//           <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Login</button>
//         </Link>
//         <input
//           className="border border-gray-300 h-full p-2 rounded mr-2"
//           id="textInput"
//           type="text"
//           value={inputValue}
//           onChange={handleChange}
//           placeholder="Search..."
//           onFocus={() => setFocus(true)}
//         />
//         {inputFocus && inputValue && (
//           <div ref={dropdownRef} className="absolute z-10 bg-white border border-gray-300 top-10 left-0 w-full">
//             {filteredNames.map((filteredName, index) => (
//  <Link href={filteredName.Link}>             <div
//  key={index}
//  className="p-2 hover:bg-gray-200 cursor-pointer"
//  onClick={() => {
//    setInputValue(filteredName);
//    setFocus(false);
//  }}
// >
//  {filteredName}
// </div></Link>
//             ))}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// // "use client";
// // import Link from "next/link";
// // import { useState } from "react";

// // const Navbar = () => {
// //   const [inputValue, setInputValue] = useState("");
// //   const [inputFocus, setFocus] = useState(false);
// //   const handleChange = (event) => {
// //     setInputValue(event.target.value);
// //   };
// //   const filteredNames = ["James", "John", "Paul", "Ringo", "George"];

// //   return (
// //     <>
// //       <nav className="flex justify-between items-center bg-white p-4 borer-b border-gray-300 border-2">
// //         <div className="flex items-center gap-5">
// //           <h1 className="text-black text-xl font-bold mr4">M.J</h1>
// //           <Link href="/Client/Men/Jackets">
// //             <p className="uppercase hover:border-b-2 transition-all duration-700 border-0">
// //               Leather-Jackets
// //             </p>
// //           </Link>
// //           <Link href="/Client/Men/Hoodies">
// //             <p className="uppercase hover:border-b-2 transition-all duration-700 border-0">
// //               Hoodies
// //             </p>
// //           </Link>
// //         </div>

// //         <div className="flex items-center border-2 h-10">
// //           <div className="flex items-center relative gap-3">
// //             <Link href="/login">
// //               <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
// //                 Login
// //               </button>
// //             </Link>
// //            {/* <div className=" flex"> */}
// //              <input
// //               className="border  border-gray-300 h- p-2 rounded mr-2"
// //               id="textInput"
// //               type="text"
// //               value={inputValue}
// //               onChange={handleChange}
// //               placeholder="Search..."

// //             />
// //             {inputValue && (
// //               <div className="relative z-10 bg-white border border-gray-300 top-32 -left-56 w-full">
// //                 {filteredNames.map((filteredName, index) => (
// //                   <div
// //                     key={index}
// //                     className="p-2 hover:bg-gray-200 cursor-pointer"
// //                     onClick={() => {
// //                       setInputValue(filteredName);
// //                       setFocus(false);
// //                     }}
// //                   >
// //                     {filteredName}
// //                   </div>
// //                 ))}
// //               </div>
// //             )}</div>
// //           {/* </div> */}
// //         </div>
// //       </nav>
// //     </>
// //   );
// // };

// // export default Navbar;

// // // // // // "use client";
// // // // // // // // // // import Link from 'next/link';

// // // // // // // // // // const menuItems = [
// // // // // // // // // //   {
// // // // // // // // // //     title: "Men's Products",
// // // // // // // // // //     items: [
// // // // // // // // // //       {
// // // // // // // // // //         title: 'Apparel',
// // // // // // // // // //         subItems: [
// // // // // // // // // //           { title: 'T-shirts', href: '/mens-tshirts' },
// // // // // // // // // //           { title: 'Dress shirts', href: '/mens-dress-shirts' },
// // // // // // // // // //           { title: 'Jeans', href: '/mens-jeans' },
// // // // // // // // // //           { title: 'Jackets', href: '/mens-jackets' },
// // // // // // // // // //           { title: 'Suits', href: '/mens-suits' },
// // // // // // // // // //           { title: 'Activewear', href: '/mens-activewear' },
// // // // // // // // // //         ],
// // // // // // // // // //       },
// // // // // // // // // //       {
// // // // // // // // // //         title: 'Footwear',
// // // // // // // // // //         subItems: [
// // // // // // // // // //           { title: 'Sneakers', href: '/mens-sneakers' },
// // // // // // // // // //           { title: 'Dress shoes', href: '/mens-dress-shoes' },
// // // // // // // // // //           { title: 'Boots', href: '/mens-boots' },
// // // // // // // // // //           { title: 'Sandals', href: '/mens-sandals' },
// // // // // // // // // //           { title: 'Athletic shoes', href: '/mens-athletic-shoes' },
// // // // // // // // // //         ],
// // // // // // // // // //       },
// // // // // // // // // //       {
// // // // // // // // // //         title: 'Accessories',
// // // // // // // // // //         subItems: [
// // // // // // // // // //           { title: 'Watches', href: '/mens-watches' },
// // // // // // // // // //           { title: 'Belts', href: '/mens-belts' },
// // // // // // // // // //           { title: 'Wallets', href: '/mens-wallets' },
// // // // // // // // // //           { title: 'Sunglasses', href: '/mens-sunglasses' },
// // // // // // // // // //           { title: 'Hats', href: '/mens-hats' },
// // // // // // // // // //         ],
// // // // // // // // // //       },
// // // // // // // // // //       {
// // // // // // // // // //         title: 'Grooming',
// // // // // // // // // //         subItems: [
// // // // // // // // // //           { title: 'Shaving kits', href: '/mens-shaving-kits' },
// // // // // // // // // //           { title: 'Beard care products', href: '/mens-beard-care' },
// // // // // // // // // //           { title: 'Skincare', href: '/mens-skincare' },
// // // // // // // // // //           { title: 'Fragrance', href: '/mens-fragrance' },
// // // // // // // // // //         ],
// // // // // // // // // //       },
// // // // // // // // // //       {
// // // // // // // // // //         title: 'Outdoor Gear',
// // // // // // // // // //         subItems: [
// // // // // // // // // //           { title: 'Backpacks', href: '/mens-backpacks' },
// // // // // // // // // //           { title: 'Camping equipment', href: '/mens-camping-equipment' },
// // // // // // // // // //           { title: 'Sports gear', href: '/mens-sports-gear' },
// // // // // // // // // //           { title: 'Fishing gear', href: '/mens-fishing-gear' },
// // // // // // // // // //         ],
// // // // // // // // // //       },
// // // // // // // // // //     ],
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     title: "Women's Products",
// // // // // // // // // //     items: [
// // // // // // // // // //       {
// // // // // // // // // //         title: 'Apparel',
// // // // // // // // // //         subItems: [
// // // // // // // // // //           { title: 'Dresses', href: '/womens-dresses' },
// // // // // // // // // //           { title: 'Blouses', href: '/womens-blouses' },
// // // // // // // // // //           { title: 'Skirts', href: '/womens-skirts' },
// // // // // // // // // //           { title: 'Activewear', href: '/womens-activewear' },
// // // // // // // // // //           { title: 'Outerwear', href: '/womens-outerwear' },
// // // // // // // // // //         ],
// // // // // // // // // //       },
// // // // // // // // // //       {
// // // // // // // // // //         title: 'Footwear',
// // // // // // // // // //         subItems: [
// // // // // // // // // //           { title: 'Heels', href: '/womens-heels' },
// // // // // // // // // //           { title: 'Flats', href: '/womens-flats' },
// // // // // // // // // //           { title: 'Boots', href: '/womens-boots' },
// // // // // // // // // //           { title: 'Sneakers', href: '/womens-sneakers' },
// // // // // // // // // //           { title: 'Sandals', href: '/womens-sandals' },
// // // // // // // // // //         ],
// // // // // // // // // //       },
// // // // // // // // // //       {
// // // // // // // // // //         title: 'Accessories',
// // // // // // // // // //         subItems: [
// // // // // // // // // //           { title: 'Handbags', href: '/womens-handbags' },
// // // // // // // // // //           { title: 'Jewelry', href: '/womens-jewelry' },
// // // // // // // // // //           { title: 'Scarves', href: '/womens-scarves' },
// // // // // // // // // //           { title: 'Sunglasses', href: '/womens-sunglasses' },
// // // // // // // // // //           { title: 'Hair accessories', href: '/womens-hair-accessories' },
// // // // // // // // // //         ],
// // // // // // // // // //       },
// // // // // // // // // //       {
// // // // // // // // // //         title: 'Beauty',
// // // // // // // // // //         subItems: [
// // // // // // // // // //           { title: 'Makeup', href: '/womens-makeup' },
// // // // // // // // // //           { title: 'Skincare', href: '/womens-skincare' },
// // // // // // // // // //           { title: 'Hair care', href: '/womens-hair-care' },
// // // // // // // // // //           { title: 'Fragrance', href: '/womens-fragrance' },
// // // // // // // // // //         ],
// // // // // // // // // //       },
// // // // // // // // // //       {
// // // // // // // // // //         title: 'Fitness',
// // // // // // // // // //         subItems: [
// // // // // // // // // //           { title: 'Yoga mats', href: '/womens-yoga-mats' },
// // // // // // // // // //           { title: 'Workout gear', href: '/womens-workout-gear' },
// // // // // // // // // //           { title: 'Fitness trackers', href: '/womens-fitness-trackers' },
// // // // // // // // // //         ],
// // // // // // // // // //       },
// // // // // // // // // //     ],
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     title: 'Electronics',
// // // // // // // // // //     items: [
// // // // // // // // // //       { title: 'Headphones', href: '/electronics-headphones' },
// // // // // // // // // //       { title: 'Smartwatches', href: '/electronics-smartwatches' },
// // // // // // // // // //       { title: 'Phone cases', href: '/electronics-phone-cases' },
// // // // // // // // // //     ],
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     title: 'Home Goods',
// // // // // // // // // //     items: [
// // // // // // // // // //       { title: 'Bedding', href: '/home-goods-bedding' },
// // // // // // // // // //       { title: 'Kitchenware', href: '/home-goods-kitchenware' },
// // // // // // // // // //       { title: 'Decorative items', href: '/home-goods-decorative-items' },
// // // // // // // // // //     ],
// // // // // // // // // //   },
// // // // // // // // // // ];

// // // // // // // // // // const Navbar = () => {
// // // // // // // // // //   return (
// // // // // // // // // //     <nav className="bg-white overflow-y-croll fied h-screen w-64 p-4 border-r border-gray-300">
// // // // // // // // // //       <h1 className="text-black text-xl font-bold mb-4  pb-2">Categories</h1>
// // // // // // // // // //       <ul className="space-y-4">
// // // // // // // // // //         {menuItems.map((category, index) => (
// // // // // // // // // //           <li key={index}>
// // // // // // // // // //             <h2 className="text-black font-semibold mb-2 border-b pb-1">{category.title}</h2>
// // // // // // // // // //             <ul className="ml-4 space-y-2">
// // // // // // // // // //               {category.items.map((item, itemIndex) => (
// // // // // // // // // //                 <li key={itemIndex}>
// // // // // // // // // //                   <Link href={`/${item.href || item.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-black hover:bg-gray-200 block p-2 rounded">
// // // // // // // // // //                     {item.title}
// // // // // // // // // //                   </Link>
// // // // // // // // // //                   {item.subItems && (
// // // // // // // // // //                     <ul className="ml-4 space-y-1">
// // // // // // // // // //                       {item.subItems.map((subItem, subIndex) => (
// // // // // // // // // //                         <li key={subIndex}>
// // // // // // // // // //                           <Link href={subItem.href} className="text-black hover:bg-gray-200 block p-2 rounded">
// // // // // // // // // //                             {subItem.title}
// // // // // // // // // //                           </Link>
// // // // // // // // // //                         </li>
// // // // // // // // // //                       ))}
// // // // // // // // // //                     </ul>
// // // // // // // // // //                   )}
// // // // // // // // // //                 </li>
// // // // // // // // // //               ))}
// // // // // // // // // //             </ul>
// // // // // // // // // //           </li>
// // // // // // // // // //         ))}
// // // // // // // // // //       </ul>
// // // // // // // // // //     </nav>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // export default Navbar;

// // // // // // // import Link from 'next/link';

// // // // // // // const menuItems = [
// // // // // // //   {
// // // // // // //     title: "Men's Products",
// // // // // // //     items: [
// // // // // // //       {
// // // // // // //         title: 'Leather',
// // // // // // //         href: '/mens-leather',
// // // // // // //       },
// // // // // // //       {
// // // // // // //         title: 'Hoodies',
// // // // // // //         href: '/mens-hoodies',
// // // // // // //       },
// // // // // // //     ],
// // // // // // //   },
// // // // // // //   {
// // // // // // //     title: "Women's Products",
// // // // // // //     items: [
// // // // // // //       {
// // // // // // //         title: 'Dresses',
// // // // // // //         href: '/womens-dresses',
// // // // // // //       },
// // // // // // //       {
// // // // // // //         title: 'Activewear',
// // // // // // //         href: '/womens-activewear',
// // // // // // //       },
// // // // // // //     ],
// // // // // // //   },
// // // // // // //   {
// // // // // // //     title: 'Electronics',
// // // // // // //     items: [
// // // // // // //       { title: 'Headphones', href: '/electronics-headphones' },
// // // // // // //       { title: 'Smartwatches', href: '/electronics-smartwatches' },
// // // // // // //     ],
// // // // // // //   },
// // // // // // //   {
// // // // // // //     title: 'Home Goods',
// // // // // // //     items: [
// // // // // // //       { title: 'Bedding', href: '/home-goods-bedding' },
// // // // // // //       { title: 'Kitchenware', href: '/home-goods-kitchenware' },
// // // // // // //     ],
// // // // // // //   },
// // // // // // // ];

// // // // // // // const Navbar = () => {
// // // // // // //   return (
// // // // // // //     <nav className="bg-white h-sreen w-64 p-4 border-r border-gray-300 overflow-y-aut flex">
// // // // // // //       <h1 className="text-black text-2xl font-bold mb-4">E-Commerce Name</h1>
// // // // // // //       <div className="mb-4">
// // // // // // //         <input
// // // // // // //           type="text"
// // // // // // //           placeholder="Search..."
// // // // // // //           className="border border-gray-300 p-2 w-full rounded"
// // // // // // //         />
// // // // // // //       </div>
// // // // // // //       <ul className="space-y-4">
// // // // // // //         {menuItems.map((category, index) => (
// // // // // // //           <li key={index}>
// // // // // // //             <h2 className="text-black font-semibold mb-2 border-b pb-1">{category.title}</h2>
// // // // // // //             <ul className="ml-4 space-y-2">
// // // // // // //               {category.items.map((item, itemIndex) => (
// // // // // // //                 <li key={itemIndex}>
// // // // // // //                   <Link href={item.href} className="text-black hover:bg-gray-200 block p-2 rounded">
// // // // // // //                     {item.title}
// // // // // // //                   </Link>
// // // // // // //                 </li>
// // // // // // //               ))}
// // // // // // //             </ul>
// // // // // // //           </li>
// // // // // // //         ))}
// // // // // // //       </ul>
// // // // // // //       <Link href="/login">
// // // // // // //         <button className="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
// // // // // // //           Login
// // // // // // //         </button>
// // // // // // //       </Link>
// // // // // // //     </nav>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Navbar;

// // // // // // import Link from 'next/link';
// // // // // // import { useState } from 'react';

// // // // // // const menuItems = [
// // // // // //   {
// // // // // //     title: "Men's Products",
// // // // // //     subItems: [
// // // // // //       { title: 'Hoodies', href: '/mens-hoodies' },
// // // // // //       { title: 'Jackets', href: '/mens-jackets' },
// // // // // //     ],
// // // // // //   },
// // // // // //   {
// // // // // //     title: "Women's Products",
// // // // // //     subItems: [
// // // // // //       { title: 'Hoodies', href: '/womens-hoodies' },
// // // // // //       { title: 'Jackets', href: '/womens-jackets' },
// // // // // //     ],
// // // // // //   },
// // // // // // ];

// // // // // // const Navbar = () => {
// // // // // //   const [isOpen, setIsOpen] = useState(false);

// // // // // //   const toggleDropdown = () => {
// // // // // //     setIsOpen(!isOpen);
// // // // // //   };

// // // // // //   return (
// // // // // //     <nav className="flex justify-between items-center bg-white p-4 border-b border-gray-300 h-full">
// // // // // //       <div className="relative">
// // // // // //         <h1 className="text-black text-xl font-bold mr-4">E-Commerce Name</h1>
// // // // // //         <div className="relative">
// // // // // //           <button onClick={toggleDropdown} className="text-black focus:outline-none">
// // // // // //             Products
// // // // // //           </button>
// // // // // //           {isOpen && (
// // // // // //             <ul className=" relative bg-white border border-gray-300 shadow-lg mt-1 rounded">
// // // // // //               {menuItems.map((category, index) => (
// // // // // //                 <li key={index} className="py-2 px-4">
// // // // // //                   <span className="font-semibold">{category.title}</span>
// // // // // //                   <ul className="ml-4 space-y-1">
// // // // // //                     {category.subItems.map((subItem, subIndex) => (
// // // // // //                       <li key={subIndex}>
// // // // // //                         <Link href={subItem.href} className="text-black hover:bg-gray-200 block p-2 rounded">
// // // // // //                           {subItem.title}
// // // // // //                         </Link>
// // // // // //                       </li>
// // // // // //                     ))}
// // // // // //                   </ul>
// // // // // //                 </li>
// // // // // //               ))}
// // // // // //             </ul>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <div className="flex items-center">
// // // // // //         <input
// // // // // //           type="text"
// // // // // //           placeholder="Search..."
// // // // // //           className="border border-gray-300 p-2 rounded mr-2"
// // // // // //         />
// // // // // //         <Link href="/login">
// // // // // //           <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
// // // // // //             Login
// // // // // //           </button>
// // // // // //         </Link>
// // // // // //       </div>
// // // // // //     </nav>
// // // // // //   );
// // // // // // };

// // // // // // export default Navbar;

// // // "use client";
// // // import Link from "next/link";
// // // import { useState } from "react";

// // // // const menuItems = [
// // // //   {
// // // //     title: "Men's Products",
// // // //     subItems: [
// // // //       { title: "Hoodies", href: "/mens-hoodies" },
// // // //       { title: "Jackets", href: "/mens-jackets" },
// // // //     ],
// // // //   },
// // // //   {
// // // //     title: "Women's Products",
// // // //     subItems: [
// // // //       { title: "Hoodies", href: "/womens-hoodies" },
// // // //       { title: "Jackets", href: "/womens-jackets" },
// // // //     ],
// // // //   },
// // // // ];

// // // const Navbar = () => {
// // //   const [inputValue, setInputValue] = useState("");

// // //   const [inputFocus, setFocus] = useState(false);
// // //   const handleChange = (event) => {
// // //     setInputValue(event.target.value);
// // //   };
// // //   const filteredNames = ["James", "John", "Paul", "Ringo", "George"];

// // //   return (
// // //     <>
// // //       <nav className="flex justify-between items-center bg-white p-4 border-b border-gray-300">
// // //         <div className="flex items-center gap-5">
// // //           <h1 className="text-black text-xl font-bold mr4 ">M.J</h1>
// // //           {/* <select
// // //           name="products"
// // //           id="products"
// // //           onChange={handleSelectChange}
// // //           className="border border-gray-300 p-2 rounded mr-4"
// // //         >
// // //           <option value="">Select Product</option>
// // //           {menuItems.map((category, index) => (
// // //             <optgroup key={index} label={category.title}>
// // //               {category.subItems.map((subItem, subIndex) => (
// // //                 <option key={subIndex} value={subItem.href}>
// // //                   {subItem.title}
// // //                 </option>
// // //               ))}
// // //             </optgroup>
// // //           ))}
// // //         </select>
// // //         <select name="cars" id="cars">
// // //           <option value="volvo">Volvo</option>
// // //           <option value="saab">Saab</option>
// // //           <option value="mercedes">Mercedes</option>
// // //           <option value="audi">Audi</option>
// // //         </select>{" "} */}
// // //           <Link href="/Client/Men/Jackets">
// // //             {" "}
// // //             <p className=" uppercase hover:border-b-2 transition-all duration-700 border-0">
// // //               Leather-Jackets
// // //             </p>
// // //           </Link>{" "}
// // //           <Link href="/Client/Men/Hoodies">
// // //             <p className=" uppercase hover:border-b-2 transition-all duration-700 border-0">
// // //               Hoodies
// // //             </p>
// // //           </Link>
// // //         </div>

// // //         <div className="flex items-center">
// // //           {/* <input
// // //           type="text"
// // //           placeholder="Search..."
// // //           className="border border-gray-300 p-2 rounded mr-2"
// // //         /> */}
// // //           {/* <div className="flex items-center">
// // //             <input
// // //               type="text"
// // //               placeholder="Search..."
// // //               className="border border-gray-300 p-2 rounded mr-2"
// // //             />
// // //             <Link href="/login">
// // //               <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
// // //                 Login
// // //               </button>
// // //             </Link>
// // //           </div>
// // //            */}
// // //           <div className="flex items-center relative gap-3">
// // //             <Link href="/login">
// // //               <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
// // //                 Login
// // //               </button>
// // //             </Link>
// // //             {/* <div>
// // //               <input
// // //               className="border border-gray-300 p-2 rounded mr-2"
// // //               id="textInput"
// // //               type="text"
// // //               value={inputValue}
// // //               onChange={handleChange}
// // //               placeholder="Search..."
// // //               onFocus={setFocus(true)}
// // //             />
// // //             {inputFocus ? {filteredNames.length > 0 && (
// // //               // <div className="absolute z-10 bg-white border border-gray-300 mt-1 w-full">
// // //                 {filteredNames.map((filteredName, index) => (
// // //                   <div
// // //                     key={index}
// // //                     className="p-2 hover:bg-gray-200 cursor-pointer"
// // //                   >
// // //                     {filteredName}
// // //                   </div>
// // //                 ))}
// // //               // </div>
// // //             )} : null}
// // //             </div> */}
// // //                     <div className="flex items-center relative gap-3">
// // //           <input
// // //             className="border border-gray-300 p-2 rounded mr-2"
// // //             id="textInput"
// // //             type="text"
// // //             value={inputValue}
// // //             onChange={handleChange}
// // //             placeholder="Search..."
// // //             // onFocus={handleFocus}
// // //             // onBlur={handleBlur}
// // //           />
// // //           { filteredNames.length > 0 && (
// // //             <div className="relative z-10 bg-white border border-gray-300 mt-1 w-full">
// // //               {filteredNames.map((filteredName, index) => (
// // //                 <div
// // //                   key={index}
// // //                   className="p-2 hover:bg-gray-200 cursor-pointer"
// // //                   onClick={() => {
// // //                     setInputValue(filteredName); // Set input value on click
// // //                     setFocus(false); // Optionally blur the input
// // //                   }}
// // //                 >
// // //                   {filteredName}
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           )}
// // //         </div>
// // //             {/* <div>
// // //               <input
// // //                 className="border border-gray-300 p-2 rounded mr-2"
// // //                 id="textInput"
// // //                 type="text"
// // //                 value={inputValue}
// // //                 onChange={handleChange}
// // //                 // onChange={(e) => setQuery(e.target.value)}

// // //                 placeholder="Search..."
// // //                 // onClick={() => setFocus(true)} // Use arrow function to avoid immediate invocation
// // //                 // onBlur={() => setFocus(false)} // Optionally handle blur to hide suggestions
// // //               />
// // //               {inputFocus && ( // Use && for conditional rendering
// // //     <div className="absolute z-10 bg-white border border-gray-300 mt-1 w-full">
// // //       {filteredNames.map((filteredName, index) => (
// // //         <div
// // //           key={index}
// // //           className="p-2 hover:bg-gray-200 cursor-pointer"
// // //           onClick={() => handleSelect(filteredName)} // Optional: handle selection
// // //         >
// // //           {filteredName}
// // //         </div>
// // //       ))}
// // //     </div>
// // //   )}
// // //             </div> */}
// // //           </div>
// // //         </div>
// // //       </nav>

// // //       {/* <div className=" border-2 text-end relative -left-14">
// // //         {" "}
// // //         {names
// // //           .filter((name) =>
// // //             name.toLowerCase().includes(inputValue.toLowerCase())
// // //           )
// // //           .map((filteredName, index) => (
// // //             <option key={index}>{filteredName}</option>
// // //           ))}
// // //       </div> */}
// // //     </>
// // //   );
// // // };

// // // export default Navbar;

// // // // // // "use client";
// // // // // // import Link from "next/link";
// // // // // // import { useState } from "react";

// // // // // // const Navbar = () => {
// // // // // //   const [inputValue, setInputValue] = useState("");
// // // // // //   const handleChange = (event) => {
// // // // // //     setInputValue(event.target.value);
// // // // // //   };
// // // // // //   const names = ["James", "John", "Paul", "Ringo", "George"];

// // // // // //   const filteredNames = names.filter((name) =>
// // // // // //     name.toLowerCase().includes(inputValue.toLowerCase())
// // // // // //   );

// // // // // //   return (
// // // // // //     <>
// // // // // //       <nav className="flex justify-between items-center bg-white p-4 border-b border-gray-300">
// // // // // //         <div className="flex items-center gap-5">
// // // // // //           <h1 className="text-black text-xl font-bold mr-4">M.J</h1>
// // // // // //           <Link href="/Client/Men/Jackets">
// // // // // //             <p className="uppercase hover:border-b-2 transition-all duration-700 border-0">
// // // // // //               Leather-Jackets
// // // // // //             </p>
// // // // // //           </Link>
// // // // // //           <Link href="/Client/Men/Hoodies">
// // // // // //             <p className="uppercase hover:border-b-2 transition-all duration-700 border-0">
// // // // // //               Hoodies
// // // // // //             </p>
// // // // // //           </Link>
// // // // // //         </div>

// // // // // //         <div className="flex items-center relative">
// // // // // //           <Link href="/login">
// // // // // //             <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
// // // // // //               Login
// // // // // //             </button>
// // // // // //           </Link>
// // // // // //           <input
// // // // // //             className="border border-gray-300 p-2 rounded mr-2"
// // // // // //             id="textInput"
// // // // // //             type="text"
// // // // // //             value={inputValue}
// // // // // //             onChange={handleChange}
// // // // // //             placeholder="Search..."
// // // // // //           />
// // // // // //           {filteredNames.length > 0 && (
// // // // // //             <div className="absolute z-10 bg-white border border-gray-300 mt-1 w-full">
// // // // // //               {filteredNames.map((filteredName, index) => (
// // // // // //                 <div key={index} className="p-2 hover:bg-gray-200 cursor-pointer">
// // // // // //                   {filteredName}
// // // // // //                 </div>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </nav>
// // // // // //     </>
// // // // // //   );
// // // // // // };

// // // // // // export default Navbar;

// // // // // // "use client"

// // // // // // import { useState } from 'react';

// // // // // // const items = [
// // // // // //     "Apple",
// // // // // //     "Banana",
// // // // // //     "Cherry",
// // // // // //     "Date",
// // // // // //     "Elderberry",
// // // // // //     "Fig",
// // // // // //     "Grape"
// // // // // // ];

// // // // // // const SearchFilter = () => {
// // // // // //     const [search, setSearch] = useState('');

// // // // // //     const filteredItems = items.filter(item =>
// // // // // //         item.toLowerCase().includes(search.toLowerCase())
// // // // // //     );

// // // // // //     return (
// // // // // //         <div>
// // // // // //             <div className="navbar">
// // // // // //                 <h1>Search Filter</h1>
// // // // // //                 <input
// // // // // //                     type="text"
// // // // // //                     value={search}
// // // // // //                     onChange={(e) => setSearch(e.target.value)}
// // // // // //                     placeholder="Search..."
// // // // // //                 />
// // // // // //             </div>
// // // // // //             <ul className="itemList">
// // // // // //                 {filteredItems.map((item, index) => (
// // // // // //                     <li key={index}>{item}</li>
// // // // // //                 ))}
// // // // // //             </ul>
// // // // // //             <style jsx>{`
// // // // // //                 .navbar {
// // // // // //                     background-color: #4CAF50;
// // // // // //                     color: white;
// // // // // //                     padding: 10px;
// // // // // //                     display: flex;
// // // // // //                     align-items: center;
// // // // // //                 }

// // // // // //                 input {
// // // // // //                     margin-left: 20px;
// // // // // //                     padding: 5px;
// // // // // //                     border: none;
// // // // // //                     border-radius: 4px;
// // // // // //                 }

// // // // // //                 .itemList {
// // // // // //                     max-height: 200px; /* Fixed height */
// // // // // //                     overflow-y: auto; /* Enable scrolling */
// // // // // //                     padding: 0;
// // // // // //                     list-style-type: none;
// // // // // //                     margin: 0;
// // // // // //                 }

// // // // // //                 .itemList li {
// // // // // //                     padding: 8px;
// // // // // //                     border-bottom: 1px solid #ccc;
// // // // // //                 }
// // // // // //             `}</style>
// // // // // //         </div>
// // // // // //     );
// // // // // // };

// // // // // // export default SearchFilter;

// // // 'use client'

// // // const { useState } = require("react")

// // // const Navbar = () => {
// // //   const [inputValue, setInputValue] = useState("");
// // //   const [inputFocus, setFocus] = useState(false);
// // //   const filteredNames = ["James", "John", "Paul", "Ringo", "George"];

// // //   const handleChange = (event) => {
// // //     setInputValue(event.target.value);
// // //   };

// // //   const handleFocus = () => setFocus(true);
// // //   const handleBlur = () => setFocus(false);

// // //   const filteredResults = filteredNames.filter((name) =>
// // //     name.toLowerCase().includes(inputValue.toLowerCase())
// // //   );

// // //   return (
// // //     <>
// // //       <nav className="flex justify-between items-center bg-white p-4 border-b border-gray-300">
// // //         {/* ...other nav elements... */}

// // //         <div className="flex items-center relative gap-3">
// // //           <input
// // //             className="border border-gray-300 p-2 rounded mr-2"
// // //             id="textInput"
// // //             type="text"
// // //             value={inputValue}
// // //             onChange={handleChange}
// // //             placeholder="Search..."
// // //             onFocus={handleFocus}
// // //             onBlur={handleBlur}
// // //           />
// // //           {inputFocus && inputValue && filteredResults.length > 0 && (
// // //             <div className="absolute z-10 bg-white border border-gray-300 mt-1 w-full">
// // //               {filteredResults.map((filteredName, index) => (
// // //                 <div
// // //                   key={index}
// // //                   className="p-2 hover:bg-gray-200 cursor-pointer"
// // //                   onClick={() => {
// // //                     setInputValue(filteredName); // Set input value on click
// // //                     setFocus(false); // Optionally blur the input
// // //                   }}
// // //                 >
// // //                   {filteredName}
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           )}
// // //         </div>
// // //       </nav>
// // //     </>
// // //   );
// // // };

// // // export default Navbar;

// // // "use client";
// // // import Link from "next/link";
// // // import { useState } from "react";

// // // const Navbar = () => {
// // //   const [inputValue, setInputValue] = useState("");
// // //   const [inputFocus, setFocus] = useState(false);
// // //   const [selectedItems, setSelectedItems] = useState([]);

// // //   const filteredNames = ["James", "John", "Paul", "Ringo", "George"];

// // //   const handleChange = (event) => {
// // //     setInputValue(event.target.value);
// // //   };

// // //   const handleFocus = () => setFocus(true);
// // //   const handleBlur = () => setFocus(false);

// // //   const filteredResults = filteredNames.filter((name) =>
// // //     name.toLowerCase().includes(inputValue.toLowerCase())
// // //   );

// // //   const handleSelect = (name) => {
// // //     setSelectedItems((prev) => [...prev, name]);
// // //     setInputValue(""); // Clear the input after selection
// // //     setFocus(false); // Optionally blur the input
// // //   };

// // //   return (
// // //     <>
// // //       <nav className="flex justify-between items-center bg-white p-4 border-b border-gray-300">
// // //         <div className="flex items-center gap-5">
// // //           <h1 className="text-black text-xl font-bold mr-4">M.J</h1>
// // //           <Link href="/Client/Men/Jackets">
// // //             <p className="uppercase hover:border-b-2 transition-all duration-700 border-0">Leather-Jackets</p>
// // //           </Link>
// // //           <Link href="/Client/Men/Hoodies">
// // //             <p className="uppercase hover:border-b-2 transition-all duration-700 border-0">Hoodies</p>
// // //           </Link>
// // //         </div>

// // //         <div className="flex items-center relative gap-3">
// // //           <input
// // //             className="border border-gray-300 p-2 rounded mr-2"
// // //             id="textInput"
// // //             type="text"
// // //             value={inputValue}
// // //             onChange={handleChange}
// // //             placeholder="Search..."
// // //             onFocus={handleFocus}
// // //             onBlur={handleBlur}
// // //           />
// // //           {inputFocus && inputValue && filteredResults.length > 0 && (
// // //             <div className="absolute z-10 bg-white border border-gray-300 mt-1 w-full">
// // //               {filteredResults.map((filteredName, index) => (
// // //                 <div
// // //                   key={index}
// // //                   className="p-2 hover:bg-gray-200 cursor-pointer"
// // //                   onClick={() => handleSelect(filteredName)}
// // //                 >
// // //                   {filteredName}
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           )}
// // //         </div>
// // //       </nav>

// // //     </>
// // //   );
// // // };

// // // export default Navbar;
