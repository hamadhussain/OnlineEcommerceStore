// // // // import React from "react";

// // // // const GsapPage = () => {
// // // //   return (
// // // //     <div className=" h-screen bg-gradient-to-tl from-red-700 to-red-300   brightness-105">
// // // //       <div className="absolute z-10 ">
// // // //         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt,
// // // //         dignissimos?
// // // //       </div>
// // // //       {/* <div className="flex justify-center items-center h-screen blur-2xl">
// // // //         <div className=" z-0   bg-red-400 rounded-full w-44 h-44"></div>
// // // //       </div> */}
// // // //     </div>
// // // //   );
// // // // };

// // // .bgcolor{
// // //   background-image: radial-gradient(orange, red);
// // // }

// // // /* styles/globals.css */
// // // .circle {
// // //   position: fixed;
// // //   top: 50%;
// // //   left: 50%;
// // //   width: 0;
// // //   height: 0;
// // //   border-radius: 50%;
// // //   background-color: #0070f3; /* Change to your desired color */
// // //   transform: translate(-50%, -50%);
// // //   clip-path: circle(0% at 50% 50%);
// // //   animation: expand 1s forwards; /* Animation on mount */
// // // }

// // // @keyframes expand {
// // //   0% {
// // //     width: 0;
// // //     height: 0;
// // //     clip-path: circle(0% at 50% 50%);
// // //   }
// // //   /* 70% {
// // //     width: 70vw;
// // //     height: 50vh;
// // //     clip-path: circle(150% at 100% 150%);
// // //   } */
// // //   100% {
// // //     width: 70vw;
// // //     height: 50vh;
// // //     clip-path: circle(150% at 100% 100%);
// // //     opacity: 0;
// // //   }
// // // }

// // // .fullScreen {
// // //   width: 100vw;
// // //   height: 100vh;
// // //   clip-path: circle(100% at 100% 0%);
// // // }

// // // // export default GsapPage;
// // // 'use client'
// // // // components/CircleAnimation.js
// // // import { useEffect, useState } from 'react';

// // // const CircleAnimation = () => {
// // //   const [isAnimating, setIsAnimating] = useState(true);

// // //   useEffect(() => {
// // //     const timer = setTimeout(() => {
// // //       setIsAnimating(false);
// // //     }, 1000); // Duration of the animation (adjust as needed)

// // //     return () => clearTimeout(timer);
// // //   }, []);

// // //   return (
// // //     <div className={`circle ${isAnimating ? 'animate' : 'fullScreen'}`}>
// // //       {/* Optional: Add content here */}
// // //     </div>
// // //   );
// // // };

// // // export default CircleAnimation;

// // import * as React from "react";

// // import { Card, CardContent } from "@/components/ui/card";
// // import {
// //   Carousel,
// //   CarouselContent,
// //   CarouselItem,
// //   CarouselNext,
// //   CarouselPrevious,
// // } from "@/components/ui/carousel";

// // export default function CarouselDemo() {
// //   return (
// //     // <Carousel className=" overflow-hidden h-screen flex justify- p-2 items-center max-w-xs">
// //     //   <CarouselContent>
// //     //     {Array.from({ length: 4 }).map((_, index) => (
// //     //       <CarouselItem key={index}>
// //     //         <div className="p1 ">
// //     //           <Card>
// //     //             <CardContent className="flex aspect-square items-center justify-center p6">
// //     //               <span className="text-4xl font-semibold">{index + 1}</span>
// //     //             </CardContent>
// //     //           </Card>
// //     //         </div>
// //     //       </CarouselItem>
// //     //     ))}
// //     //   </CarouselContent>
// //     //   <CarouselPrevious />
// //     //   <CarouselNext />
// //     // </Carousel>
// //     <div className="overflow-hiddn flex justify-end px-12 items-center h-screen border-4">
// //       <Carousel className="   max-w-xs">
// //         <CarouselContent>
// //           {Array.from({ length: 5 }).map((_, index) => (
// //             <CarouselItem key={index}>
// //               <div className="p-">
// //                 <Card>
// //                   <CardContent className="flex aspect-square items-center justify-center p-">
// //                     <span className="text-4xl font-semibold">{index + 1}</span>
// //                   </CardContent>
// //                 </Card>
// //               </div>
// //             </CarouselItem>
// //           ))}
// //         </CarouselContent>
// //         <CarouselPrevious />
// //         <CarouselNext />
// //       </Carousel>
// //     </div>
// //   );
// // }

// // import * as React from "react";
// // import { Card, CardContent } from "@/components/ui/card";
// // import {
// //   Carousel,
// //   CarouselContent,
// //   CarouselItem,
// //   CarouselNext,
// //   CarouselPrevious,
// // } from "@/components/ui/carousel";

// // export default function CarouselDemo() {
// //   const itemsPerSlide = 3; // Number of items to display in each slide

// //   return (
// //     <div className="overflow-hidden flex justify-center items-center h-screen">
// //       <Carousel className="max-w-4xl">
// //         <CarouselContent>
// //           {Array.from({ length: Math.ceil(8 / itemsPerSlide) }).map((_, slideIndex) => (
// //             <CarouselItem key={slideIndex} className="flex space-x-4">
// //               {Array.from({ length: itemsPerSlide }).map((_, itemIndex) => {
// //                 const actualIndex = slideIndex * itemsPerSlide + itemIndex;
// //                 if (actualIndex < 8) {
// //                   return (
// //                     <div key={itemIndex} className="flex-1">
// //                       <Card>
// //                         <CardContent className="flex aspect-square items-center justify-center p-6">
// //                           <span className="text-4xl font-semibold">{actualIndex + 1}</span>
// //                         </CardContent>
// //                       </Card>
// //                     </div>
// //                   );
// //                 }
// //                 return null; // Prevent rendering extra items if we exceed the total
// //               })}
// //             </CarouselItem>
// //           ))}
// //         </CarouselContent>
// //         <CarouselPrevious />
// //         <CarouselNext />
// //       </Carousel>
// //     </div>
// //   );
// // }

"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { Link as LInkk } from "react-scroll";
import Link from "next/link";
import {
  Roboto_Mono,
  Lobster,
  Lato,
  Fira_Sans,
  Barlow_Condensed,
  NTR,
  Dancing_Script
} from "next/font/google";

const roboto = Dancing_Script({
  family: ["Dancing Script", "sans-serif"],
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  // display: "swap",
});

const SLIDE_COUNT = 3;
const OPTIONS = { loop: true };
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Header = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay()]);
  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "red",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  };

  const headingStyle = {
    color: "#333",
    textAlign: "center",
  };
  return (
<div className="h-screen px-5 md:px-10 bg-gradient-to- from-red-700 to-red-300 flex flex-col md:flex-row justify-around items-center overflow-hidden">
  <div className="w-full md:w-[900px]">
    <h1 className={`text-4xl md:text-7xl font-bold text-whit mb-4 title ${roboto.className}`}>
      Elevate Your Style with Our Offers
    </h1>
    <p className="text-xs md:text-lg mx-3 text-whit mb-6 line-clamp-4">
    25% Off On All Products    </p>
    {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
      <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition">
        Explore More
      </button>
      <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 transition">
        Shop Now
      </button>
    </div> */}
              <LInkk
              activeClass="active"
              to="target"
              spy={true}
              smooth={true}
              offset={50}
            >
              {" "}
              <button className="text-whte border-black w-fit px-5 py-2 rouded-lg bg-transparent border-2">
                Explore Now
              </button>
            </LInkk> <Link href="/Client/Shop">
              <button className="bg-black font-extrabold text-white w-fit px-5 py-2 rouned-lg border-2 border-black">
                Shop Now
              </button>
            </Link>
  </div>
  <div className="mt-6 md:mt-0">
    <section className="embla   w-full md:w-[650px] overflow-hiden">
      <div className="embla__viewpot overflow-hidden" ref={emblaRef}>
        <div className="embla__container">
          {SLIDES.map((index) => {
             return (
                  <div
                    className={`embla__slide  flex  justify-center items-center  rounded-full w-0px] 
                      `}
                    key={index}
                  >
                    {/* <div className="embla__slide__number">                        */}
                    <Image
                      src={`/Images/jacket${index +1}.png`}
                      className="embla__slide__number i kl "
                      alt="image"
                      width={700}
                      height={400}
                    />

                    {/* </div> */}
                  </div>
                );
          })}
        </div>
      </div>
    </section>
  </div>
</div>

    // </div>
  );
};

export default Header;

// "use client";

// import React from "react";
// import Autoplay from "embla-carousel-autoplay";
// import useEmblaCarousel from "embla-carousel-react";
// import Image from "next/image";

// const SLIDE_COUNT = 3;
// const OPTIONS = { loop: true };
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

// const EmblaCarousel = () => {
//   const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay()]);
//   let bgColor;

//   return (
//     <>
//     <section className="embla p-12 rounded-lg border-double ">
//           <div className="embla__viewport" ref={emblaRef}>
//             <div className="embla__container">
//               {SLIDES.map((index) => {
//                 const value = index + 7;

//                 // Determine background color based on the value
//                 if (value === 8) {
//                   bgColor = 'red';
//                 } else if (value === 7) {
//                   bgColor = 'pink';
//                 } else if (value === 9) {
//                   bgColor = 'green';
//                 } else {
//                   bgColor = ''; // Default or reset color
//                 }

//                 return (
//                   <div
//                     className="embla__slide  h-screen"
//                     key={index}
//                     style={{ backgroundColor: bgColor }}
//                   >
//                     <Image
//                       src={`/hoody${index + 7}.png`}
//                       className="embla__slide__number"
//                       alt="image"
//                       width={200}
//                       height={100}
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>
//     {/* <div className={`h-screen bg-gradient-to-tl from-${bgColor}-700 ${bgColor=='red' ? 'bg-purple-400':'bg-slate-500'} to-${bgColor}-300 flex justify-end items-center overflow-hidden p-4`}>
//       <div>

//       </div>
//     </div> */}
//     </>
//   );
// };

// export default EmblaCarousel;