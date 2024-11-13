"use client";
import { useState, useEffect, useRef } from "react";
import HeroSection from "./HeroSection/page";
import FeaturedCollections from "./ProductCard/page";
import Footer from "./Footer/page";
import { GiSleevelessJacket } from "react-icons/gi";
import Link from "next/link";
import { FcAbout } from "react-icons/fc";
import { GrContact } from "react-icons/gr";
import Navigation from "../../Client/Home/Navigation/page";
import SheetDemo from "../AddCart/page";
import Menu from "../Menu/page";
import Header from "./Header/page";

export default function Home() {
  const [message, setMessage] = useState(false);
  // const [inputValue, setInputValue] = useState("");
  // const handleChange = (event) => {
  //   setInputValue(event.target.value);
  // };
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(true);
    }, 1000);
  }, []);
  const [inputValue, setInputValue] = useState("");
  const [inputFocus, setFocus] = useState(false);
  const dropdownRef = useRef(null);

  const names = [
    { name: "James", link: "/" },
    { name: "John", link: "/john" },
    { name: "Paul", link: "/paul" },
    { name: "Ringo", link: "/ringo" },
    { name: "George", link: "/george" },
  ];

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
    <div className=" overflo-hidden bg-gradient-to-r from-green-50 via-teal-50 to-aqua-100
">
      {/* <div className="body  ">
        <div
          className={`absolute inset-0 bg-black transition-all duration-700 ${
            message ? "  bg-opacity-50" : " bg-opacity-10"
          }`}
        ></div>

        <header className="flex backdrop-brightness-95 py-10  text-white z-20 bg-hite bg-fixd ixed w-scren items-center justify-between  px-6 bg-whi border-ray-200">
          <div className=" gap-11 flex items-center">
            <div className="flex items-center italic gap-1 text-3xl">
              <GiSleevelessJacket className=" border-4 rounded-full" />
              <p className="companylogo italic">M.J</p>
            </div>
            <nav className="hidden md:flex space-x-16">
              <Link href="/jewelry">Jackets For Men</Link>
              <Link href="/clothing">Jackets For Women</Link>
            </nav>
          </div>

          <div className="flex items-center space-x-6">
            <Link className=" " href="/about">
              <FcAbout className=" text-3xl " />
            </Link>
            <Link className=" " href="/contact">
              <GrContact className=" text-3xl " />
            </Link>
            <input
              type="text"
              placeholder="Search ..."
              className="w-full p-2 pl-3 bg-white border-none focus:outline-none"
            />{" "}
            <CiSearch className=" text-6xl " />
            <button
              // onClick={onClick}
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Login
            </button>
          </div>
        </header>
        <div className="">
          <div className=" text-white  z">
            <div className=" h-screen">
              <h1 className="">Raining Offers For Hot Summer!</h1>
              <p>
                25% Off On All Products
                <div>
                  <button className="bg-white text-black w-fit px-5 py-2">
                    Shop Now
                  </button>{" "}
                  <button className="text-white text-back border-white w-fit px-5 py-2">
                    Find More
                  </button>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="bdy flex justify-around items- flex-col">
        {/* <div
          className={`absolute inset-0 bg-black transition-all duration-700 ${
            message ? "bg-opacity-50" : "bg-opacity-10"
          }`}
        ></div> */}
        <div className="lg:block hidden  text-wite ">
          <header className="flex bg-gadient-to-br from-red-700 to-red-300 navb  backdrop-brightnes py-4 text-whte z-20 bg-whte bg-fxed fied w-scree items-center justify-between px-6 ">
            <div className="gap-11 flex items-center">
              <div className="flex items-center  gap-1 text3xl">
              <Link href="/">
            <h1 className="text- text-xl font-bold flex items-center  gap-2">
            <GiSleevelessJacket className="border-2 text-3xl rounded-full" />
              M.J</h1>
              </Link> 
              </div>
              <nav className="hidden md:flex space-x-12 uppercase">
                <Navigation />  </nav>
            </div>

            <div className="flex items-center space-x-6">

              <div className="flex items-center  gap-4 relative">
              <Link href="/login">
              <button className="bg-blue-500 text-white p-1 px-2 rounded hover:bg-blue-600">
                Login
              </button>
            </Link>
            <input
              className="border-b border-gray-300 h-8 p-1 px-2 py-1 rounded mr-2"
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
              <SheetDemo color={""} />
            </div>
          </header>
        </div>
        <div className="lg:hidden block">
          {" "}
          <header className="flex  backdrop-brightness95 py-10 text-black z-20 bg-whte bg-fxed fied w-scree items-center justify-between px-6 borer-gray-200">
            <div className="flex items-center italic gap-1 text-3xl">
              <GiSleevelessJacket className="border-4 rounded-full" />
              <p className="companylogo italic">M.J</p>
            </div>
            <div className=" flex items-center gap-4">
              <SheetDemo color={"none"} />
              <Menu color={"none"} />
            </div>
          </header>
        </div>

<Header/>
        {/* <div className="h-screen overflow-hidden text-white flex flex-col brightness-200 relative px-4 lg:px-36 space-y-4 items-cener justify-center">
          <h1 className="text-4xl md:text-7xl lg:text-8xl w-full md:w-[700px] font-bold mb-4 leading-relaxed text-center md:text-start">
            Raining Offers For Winter!
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-center md:text-start">
            25% Off On All Products
          </p>
          <div className="flex items-center flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0">
          <LInkk
              activeClass="active"
              to="target"
              spy={true}
              smooth={true}
              offset={50}
            >
              {" "}
              <button className="text-white border-white w-fit px-5 py-2 rouded-lg bg-transparent border">
                Explore Now
              </button>
            </LInkk> <Link href="/Client/Shop">
              <button className="bg-white font-extrabold text-black w-fit px-5 py-2 rouned-lg">
                Shop Now
              </button>
            </Link>
            
          </div>
        </div> */}



      </div>

      <div className="  z-10">
        <HeroSection />
        <div name="target">
          {" "}
          <FeaturedCollections />
        </div>
        <Footer />
      </div>
    </div>
  );
}
