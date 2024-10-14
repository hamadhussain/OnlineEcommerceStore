"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { IoLogoCodepen } from "react-icons/io";
import { IoLogoDesignernews } from "react-icons/io";
import { IoLogoPlaystation } from "react-icons/io";
import { IoLogoPolymer } from "react-icons/io";
import { IoLogoXing } from "react-icons/io";
import { IoLogoDeviantart } from "react-icons/io5";
import { IoLogoBuffer } from "react-icons/io5";
import { IoLogoPwa } from "react-icons/io5";
import { BiLogoMicrosoftTeams } from "react-icons/bi";
import { BiLogoUpwork } from "react-icons/bi";

const Logos = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const slidess = [
    { id: 1, src: <IoLogoBuffer />, alt: "North Face" },
    { id: 2, src: <IoLogoCodepen />, alt: "Patagonia" },
    { id: 3, src: <IoLogoDesignernews />, alt: "Columbia" },
    { id: 4, src: <IoLogoPolymer />, alt: "Arc'teryx" },
    { id: 5, src: <IoLogoPlaystation />, alt: "Moncler" },
    { id: 6, src: <IoLogoXing />, alt: "Marmot" },
    { id: 7, src: <IoLogoDeviantart />, alt: "Mountain Hardwear" },
    { id: 8, src: <IoLogoPwa />, alt: "Canada Goose" },
    { id: 9, src: <BiLogoMicrosoftTeams />, alt: "Mackage" },
    { id: 10, src: <BiLogoUpwork />, alt: "Houdini" },
  ];
  

  return (
    <section className="emblaa p-10 h-36 overflow-hidden ">
      <div className="embla__viewportt  imageslider" ref={emblaRef}>
        <div className="embla__containerr ">
          {slidess.map(({ id, src, alt }) => (
            <div className="embla__slidee" key={id}>
                <div className=" flex items-center gap-4 text-2xl">
                    {src}{alt}
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;
