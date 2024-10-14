"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = ({ slides = [], options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <section className="embla overflow-hidden">
      <div className="embla__viewport z-10" ref={emblaRef}>
        <div className="embla__container">
          {Array.isArray(slides) && slides.map((index) => (
            <div
              className="embla__slide flex justify-center items-center"
              key={index}
            >
              <div className="embla__slide__number p-14">
                <img
                  src={`/jew${index + 1}.jpg`}
                  className="h-96 w-screen object-cover"
                />
                <div className="absolute text-white w-fit p-28 space-y-3">
                  <h1 className="text-lg font-bold">Limited Time Offer</h1>
                  <h1 className="text-lg font-bold">Special Edition</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                  <h1 className="text-lg font-bold">Buy This T-shirt At 20% Discount, Use Code OFF20</h1>
                  <br />
                  <button className="p-2 bg-white text-black">Shop Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;





































// "use client";
// import React from "react";
// import Autoplay from "embla-carousel-autoplay";
// import useEmblaCarousel from "embla-carousel-react";

// const EmblaCarousel = ({ slides, options }) => {
//   const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

//   return (
//     <section className="embla  overflow-hidden">
//       {/* <section className=" absolute ee z-50 flex items-center justify-center h-[80vh] w-screen bg-cover bg-center text-white" >
//       <div className="absolute inset-0 bg-black opacity-40"></div>
//       <div className="relative z-10 text-center px-6 py-8">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Stunning Clothing & Jewelry</h1>
//         <p className="text-lg md:text-xl mb-8">Explore our latest collections and find your perfect style.</p>
//         <div className="flex justify-center gap-4">
//           <a href="/clothing" className="bg-orange-500 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors">Shop Clothing</a>
//           <a href="/jewelry" className="bg-green-500 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">Shop Jewelry</a>
//         </div>
//       </div>
//     </section> */}
//       <div className="embla__viewport    z-10 " ref={emblaRef}>
//         <div className="embla__container ">
//           {slides.map((index) => (
//             <div
//               className="embla__slide flex justify-center items-center"
//               key={index}
//             >
//               <div className="  embla__slide__number  p-14">
//                 <img
//                   src={`/jew${index + 1}.jpg`}
//                   className="  h-96 w-screen object-cover"
//                 />
//                 <div className=" absolute text-white w-fit  p-28 space-y-3">
//                   <h1 className=" text-lg  font-bold"> Limited Time Offer</h1>{" "}
//                   <h1 className=" text-lg  font-bold"> Special Edition </h1>
//                   <p className="">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//                     elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
//                     leo.{" "}
//                   </p>
//                   <h1 className=" text-lg font-bold">
//                     Buy This T-shirt At 20% Discount, Use Code OFF20
//                   </h1><br />
//                   <button className=" p-2 bg-white text-black">
//                     Shop Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EmblaCarousel;
