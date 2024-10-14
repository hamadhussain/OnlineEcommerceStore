// // import React from 'react';
// // import {
// //     NavigationMenu,
// //     NavigationMenuContent,
// //     NavigationMenuItem,
// //     NavigationMenuLink,
// //     NavigationMenuList,
// //     NavigationMenuTrigger,
// // } from "@/components/ui/navigation-menu";
// // import Link from 'next/link';

// // const Navigation = () => {
// //     return (
// //         <div className="hidden md:flex space-x-12 uppercase">
// //             <NavigationMenu>
// //                 {/* Men's Products */}
// //                 <NavigationMenuItem>
// //                     <NavigationMenuTrigger>For Men</NavigationMenuTrigger>
// //                     <NavigationMenuContent>
// //                         <NavigationMenuList>
// //                             <NavigationMenuItem>
// //                                 <NavigationMenuLink href="/Client/Men/Apparel">Apparel</NavigationMenuLink>
// //                                 <NavigationMenuList>
// //                                     <NavigationMenuLink href="/Client/Men/Apparel/T-shirts">T-shirts</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Men/Apparel/Dress-shirts">Dress shirts</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Men/Apparel/Jeans">Jeans</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Men/Apparel/Jackets">Jackets</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Men/Apparel/Suits">Suits</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Men/Apparel/Activewear">Activewear</NavigationMenuLink>
// //                                 </NavigationMenuList>
// //                             </NavigationMenuItem>
// //                             <NavigationMenuItem>
// //                                 <NavigationMenuLink href="/Client/Men/Footwear">Footwear</NavigationMenuLink>
// //                                 <NavigationMenuList>
// //                                     <NavigationMenuLink href="/Client/Men/Footwear/Sneakers">Sneakers</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Men/Footwear/Dress-shoes">Dress shoes</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Men/Footwear/Boots">Boots</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Men/Footwear/Sandals">Sandals</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Men/Footwear/Athletic-shoes">Athletic shoes</NavigationMenuLink>
// //                                 </NavigationMenuList>
// //                             </NavigationMenuItem>
// //                             <NavigationMenuItem>
// //                                 <NavigationMenuLink href="/Client/Men/Accessories">Accessories</NavigationMenuLink>
// //                                 <NavigationMenuList>
// //                                     <NavigationMenuLink href="/Client/Men/Accessories/Watches">Watches</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Men/Accessories/Belts">Belts</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Men/Accessories/Wallets">Wallets</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Men/Accessories/Sunglasses">Sunglasses</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Men/Accessories/Hats">Hats</NavigationMenuLink>
// //                                 </NavigationMenuList>
// //                             </NavigationMenuItem>
// //                             <NavigationMenuItem>
// //                                 <NavigationMenuLink href="/Client/Men/Grooming">Grooming</NavigationMenuLink>
// //                                 <NavigationMenuList>
// //                                     <NavigationMenuLink href="/Client/Men/Grooming/Shaving-kits">Shaving kits</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Men/Grooming/Beard-care">Beard care products</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Men/Grooming/Skincare">Skincare</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Men/Grooming/Fragrance">Fragrance</NavigationMenuLink>
// //                                 </NavigationMenuList>
// //                             </NavigationMenuItem>
// //                             <NavigationMenuItem>
// //                                 <NavigationMenuLink href="/Client/Men/Outdoor-Gear">Outdoor Gear</NavigationMenuLink>
// //                                 <NavigationMenuList>
// //                                     <NavigationMenuLink href="/Client/Men/Outdoor-Gear/Backpacks">Backpacks</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Men/Outdoor-Gear/Camping-equipment">Camping equipment</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Men/Outdoor-Gear/Sports-gear">Sports gear</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Men/Outdoor-Gear/Fishing-gear">Fishing gear</NavigationMenuLink>
// //                                 </NavigationMenuList>
// //                             </NavigationMenuItem>
// //                         </NavigationMenuList>
// //                     </NavigationMenuContent>
// //                 </NavigationMenuItem>

// //                 {/* Women's Products */}
// //                 <NavigationMenuItem>
// //                     <NavigationMenuTrigger>For Women</NavigationMenuTrigger>
// //                     <NavigationMenuContent>
// //                         <NavigationMenuList>
// //                             <NavigationMenuItem>
// //                                 <NavigationMenuLink href="/Client/Women/Apparel">Apparel</NavigationMenuLink>
// //                                 <NavigationMenuList>
// //                                     <NavigationMenuLink href="/Client/Women/Apparel/Dresses">Dresses</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Women/Apparel/Blouses">Blouses</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Women/Apparel/Skirts">Skirts</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Women/Apparel/Activewear">Activewear</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Women/Apparel/Outerwear">Outerwear</NavigationMenuLink>
// //                                 </NavigationMenuList>
// //                             </NavigationMenuItem>
// //                             <NavigationMenuItem>
// //                                 <NavigationMenuLink href="/Client/Women/Footwear">Footwear</NavigationMenuLink>
// //                                 <NavigationMenuList>
// //                                     <NavigationMenuLink href="/Client/Women/Footwear/Heels">Heels</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Women/Footwear/Flats">Flats</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Women/Footwear/Boots">Boots</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Women/Footwear/Sneakers">Sneakers</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Women/Footwear/Sandals">Sandals</NavigationMenuLink>
// //                                 </NavigationMenuList>
// //                             </NavigationMenuItem>
// //                             <NavigationMenuItem>
// //                                 <NavigationMenuLink href="/Client/Women/Accessories">Accessories</NavigationMenuLink>
// //                                 <NavigationMenuList>
// //                                     <NavigationMenuLink href="/Client/Women/Accessories/Handbags">Handbags</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Women/Accessories/Jewelry">Jewelry</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Women/Accessories/Scarves">Scarves</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Women/Accessories/Sunglasses">Sunglasses</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Women/Accessories/Hair-accessories">Hair accessories</NavigationMenuLink>
// //                                 </NavigationMenuList>
// //                             </NavigationMenuItem>
// //                             <NavigationMenuItem>
// //                                 <NavigationMenuLink href="/Client/Women/Beauty">Beauty</NavigationMenuLink>
// //                                 <NavigationMenuList>
// //                                     <NavigationMenuLink href="/Client/Women/Beauty/Makeup">Makeup</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Women/Beauty/Skincare">Skincare</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Women/Beauty/Hair-care">Hair care</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Women/Beauty/Fragrance">Fragrance</NavigationMenuLink>
// //                                 </NavigationMenuList>
// //                             </NavigationMenuItem>
// //                             <NavigationMenuItem>
// //                                 <NavigationMenuLink href="/Client/Women/Fitness">Fitness</NavigationMenuLink>
// //                                 <NavigationMenuList>
// //                                     <NavigationMenuLink href="/Client/Women/Fitness/Yoga-mats">Yoga mats</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Women/Fitness/Workout-gear">Workout gear</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Women/Fitness/Fitness-trackers">Fitness trackers</NavigationMenuLink>
// //                                 </NavigationMenuList>
// //                             </NavigationMenuItem>
// //                         </NavigationMenuList>
// //                     </NavigationMenuContent>
// //                 </NavigationMenuItem>

// //                 {/* Unisex Products */}
// //                 <NavigationMenuItem>
// //                     <NavigationMenuTrigger>Unisex Products</NavigationMenuTrigger>
// //                     <NavigationMenuContent>
// //                         <NavigationMenuList>
// //                             <NavigationMenuItem>
// //                                 <NavigationMenuLink href="/Client/Unisex/Electronics">Electronics</NavigationMenuLink>
// //                                 <NavigationMenuList>
// //                                     <NavigationMenuLink href="/Client/Unisex/Electronics/Headphones">Headphones</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Unisex/Electronics/Smartwatches">Smartwatches</NavigationMenuLink>
// //                                     <NavigationMenuLink href="/Client/Unisex/Electronics/Phone-cases">Phone cases</NavigationMenuLink>
// //                                 </NavigationMenuList>
// //                             </NavigationMenuItem>
// //                             <NavigationMenuItem>
// //                                 <NavigationMenuLink href="/Client/Unisex/Home-Goods">Home Goods</NavigationMenuLink>
// //                             </NavigationMenuItem>
// //                         </NavigationMenuList>
// //                     </NavigationMenuContent>
// //                 </NavigationMenuItem>
// //             </NavigationMenu>
// //         </div>
// //     );
// // };

// // export default Navigation;

// import React from 'react';
// import {
//     NavigationMenu,
//     NavigationMenuContent,
//     NavigationMenuItem,
//     NavigationMenuLink,
//     NavigationMenuList,
//     NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import Link from 'next/link';

// const Navigation = () => {
//     return (
//         <div className="hidden md:flex space-x-12 uppercase bg-transparent text-white">
//             <NavigationMenu className="bg-blue-500">
//                 {/* Men's Products */}
//                 <NavigationMenuItem>
//                     <NavigationMenuTrigger className="text-white bg-blue-500 hover:text-gray-300">For Men</NavigationMenuTrigger>
//                     <NavigationMenuContent className="bg-gray-800 text-white rounded-lg shadow-lg">
//                         <NavigationMenuList>
//                             <NavigationMenuItem>
//                                 <NavigationMenuLink href="/Client/Men/Apparel" className="hover:bg-gray-700">Apparel</NavigationMenuLink>
//                                 <NavigationMenuList>
//                                     <NavigationMenuLink href="/Client/Men/Apparel/T-shirts" className="hover:bg-gray-700">T-shirts</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Men/Apparel/Dress-shirts" className="hover:bg-gray-700">Dress shirts</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Men/Apparel/Jeans" className="hover:bg-gray-700">Jeans</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Men/Apparel/Jackets" className="hover:bg-gray-700">Jackets</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Men/Apparel/Suits" className="hover:bg-gray-700">Suits</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Men/Apparel/Activewear" className="hover:bg-gray-700">Activewear</NavigationMenuLink>
//                                 </NavigationMenuList>
//                             </NavigationMenuItem>
//                             <NavigationMenuItem>
//                                 <NavigationMenuLink href="/Client/Men/Footwear" className="hover:bg-gray-700">Footwear</NavigationMenuLink>
//                                 <NavigationMenuList>
//                                     <NavigationMenuLink href="/Client/Men/Footwear/Sneakers" className="hover:bg-gray-700">Sneakers</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Men/Footwear/Dress-shoes" className="hover:bg-gray-700">Dress shoes</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Men/Footwear/Boots" className="hover:bg-gray-700">Boots</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Men/Footwear/Sandals" className="hover:bg-gray-700">Sandals</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Men/Footwear/Athletic-shoes" className="hover:bg-gray-700">Athletic shoes</NavigationMenuLink>
//                                 </NavigationMenuList>
//                             </NavigationMenuItem>
//                             <NavigationMenuItem>
//                                 <NavigationMenuLink href="/Client/Men/Accessories" className="hover:bg-gray-700">Accessories</NavigationMenuLink>
//                                 <NavigationMenuList>
//                                     <NavigationMenuLink href="/Client/Men/Accessories/Watches" className="hover:bg-gray-700">Watches</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Men/Accessories/Belts" className="hover:bg-gray-700">Belts</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Men/Accessories/Wallets" className="hover:bg-gray-700">Wallets</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Men/Accessories/Sunglasses" className="hover:bg-gray-700">Sunglasses</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Men/Accessories/Hats" className="hover:bg-gray-700">Hats</NavigationMenuLink>
//                                 </NavigationMenuList>
//                             </NavigationMenuItem>
//                             <NavigationMenuItem>
//                                 <NavigationMenuLink href="/Client/Men/Grooming" className="hover:bg-gray-700">Grooming</NavigationMenuLink>
//                                 <NavigationMenuList>
//                                     <NavigationMenuLink href="/Client/Men/Grooming/Shaving-kits" className="hover:bg-gray-700">Shaving kits</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Men/Grooming/Beard-care" className="hover:bg-gray-700">Beard care products</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Men/Grooming/Skincare" className="hover:bg-gray-700">Skincare</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Men/Grooming/Fragrance" className="hover:bg-gray-700">Fragrance</NavigationMenuLink>
//                                 </NavigationMenuList>
//                             </NavigationMenuItem>
//                             <NavigationMenuItem>
//                                 <NavigationMenuLink href="/Client/Men/Outdoor-Gear" className="hover:bg-gray-700">Outdoor Gear</NavigationMenuLink>
//                                 <NavigationMenuList>
//                                     <NavigationMenuLink href="/Client/Men/Outdoor-Gear/Backpacks" className="hover:bg-gray-700">Backpacks</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Men/Outdoor-Gear/Camping-equipment" className="hover:bg-gray-700">Camping equipment</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Men/Outdoor-Gear/Sports-gear" className="hover:bg-gray-700">Sports gear</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Men/Outdoor-Gear/Fishing-gear" className="hover:bg-gray-700">Fishing gear</NavigationMenuLink>
//                                 </NavigationMenuList>
//                             </NavigationMenuItem>
//                         </NavigationMenuList>
//                     </NavigationMenuContent>
//                 </NavigationMenuItem>

//                 {/* Women's Products */}
//                 <NavigationMenuItem>
//                     <NavigationMenuTrigger className="text-white hover:text-gray-300">For Women</NavigationMenuTrigger>
//                     <NavigationMenuContent className="bg-gray-800 text-white rounded-lg shadow-lg">
//                         <NavigationMenuList>
//                             <NavigationMenuItem>
//                                 <NavigationMenuLink href="/Client/Women/Apparel" className="hover:bg-gray-700">Apparel</NavigationMenuLink>
//                                 <NavigationMenuList>
//                                     <NavigationMenuLink href="/Client/Women/Apparel/Dresses" className="hover:bg-gray-700">Dresses</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Women/Apparel/Blouses" className="hover:bg-gray-700">Blouses</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Women/Apparel/Skirts" className="hover:bg-gray-700">Skirts</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Women/Apparel/Activewear" className="hover:bg-gray-700">Activewear</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Women/Apparel/Outerwear" className="hover:bg-gray-700">Outerwear</NavigationMenuLink>
//                                 </NavigationMenuList>
//                             </NavigationMenuItem>
//                             <NavigationMenuItem>
//                                 <NavigationMenuLink href="/Client/Women/Footwear" className="hover:bg-gray-700">Footwear</NavigationMenuLink>
//                                 <NavigationMenuList>
//                                     <NavigationMenuLink href="/Client/Women/Footwear/Heels" className="hover:bg-gray-700">Heels</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Women/Footwear/Flats" className="hover:bg-gray-700">Flats</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Women/Footwear/Boots" className="hover:bg-gray-700">Boots</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Women/Footwear/Sneakers" className="hover:bg-gray-700">Sneakers</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Women/Footwear/Sandals" className="hover:bg-gray-700">Sandals</NavigationMenuLink>
//                                 </NavigationMenuList>
//                             </NavigationMenuItem>
//                             <NavigationMenuItem>
//                                 <NavigationMenuLink href="/Client/Women/Accessories" className="hover:bg-gray-700">Accessories</NavigationMenuLink>
//                                 <NavigationMenuList>
//                                     <NavigationMenuLink href="/Client/Women/Accessories/Handbags" className="hover:bg-gray-700">Handbags</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Women/Accessories/Jewelry" className="hover:bg-gray-700">Jewelry</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Women/Accessories/Scarves" className="hover:bg-gray-700">Scarves</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Women/Accessories/Sunglasses" className="hover:bg-gray-700">Sunglasses</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Women/Accessories/Hair-accessories" className="hover:bg-gray-700">Hair accessories</NavigationMenuLink>
//                                 </NavigationMenuList>
//                             </NavigationMenuItem>
//                             <NavigationMenuItem>
//                                 <NavigationMenuLink href="/Client/Women/Beauty" className="hover:bg-gray-700">Beauty</NavigationMenuLink>
//                                 <NavigationMenuList>
//                                     <NavigationMenuLink href="/Client/Women/Beauty/Makeup" className="hover:bg-gray-700">Makeup</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Women/Beauty/Skincare" className="hover:bg-gray-700">Skincare</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Women/Beauty/Hair-care" className="hover:bg-gray-700">Hair care</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Women/Beauty/Fragrance" className="hover:bg-gray-700">Fragrance</NavigationMenuLink>
//                                 </NavigationMenuList>
//                             </NavigationMenuItem>
//                             <NavigationMenuItem>
//                                 <NavigationMenuLink href="/Client/Women/Fitness" className="hover:bg-gray-700">Fitness</NavigationMenuLink>
//                                 <NavigationMenuList>
//                                     <NavigationMenuLink href="/Client/Women/Fitness/Yoga-mats" className="hover:bg-gray-700">Yoga mats</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Women/Fitness/Workout-gear" className="hover:bg-gray-700">Workout gear</NavigationMenuLink>
//                                     <NavigationMenuLink href="/Client/Women/Fitness/Fitness-trackers" className="hover:bg-gray-700">Fitness trackers</NavigationMenuLink>
//                                 </NavigationMenuList>
//                             </NavigationMenuItem>
//                         </NavigationMenuList>
//                     </NavigationMenuContent>
//                 </NavigationMenuItem>

//             </NavigationMenu>
//         </div>
//     );
// };

// export default Navigation;

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Navigation = () => { 
  return (
    <div className=" flex gap-4  bg-transparent tex">
      {/* <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className=" bg-transparent ">
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className=" bg-transparent ">
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu> */}
         <Link href="/Client/Shop/Jackets">
          <p className="uppercase hover:border-b-2 transition-all duration-700 border-0">Leather-Jackets</p>
        </Link>
        <Link href="/Client/Shop/Hoodies">
          <p className="uppercase hover:border-b-2 transition-all duration-700 border-0">Hoodies</p>
        </Link>
        
    </div>
  );
};

export default Navigation;
