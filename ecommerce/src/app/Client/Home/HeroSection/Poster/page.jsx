import React from "react";

const Poster = () => {
  return (
    // <div className=" text-white  flex justify-center items-center text- w-full gap-14 px-44 ">
    //   <div className="post1  bg-cover bg-center  relative text-white">
    //     <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    //     <div className="relative space-y-4 p-4">
    //       <h1 className="text-2xl font-bold">20% Off On Tank Tops</h1>
    //       <p>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
    //         dictum.
    //       </p>
    //       <button className="bg-white text-black w-fit px-5 py-2">
    //         Shop Now
    //       </button>
    //     </div>
    //   </div>

    //   <div className="post2  bg-cover bg-center  relative text-white">
    //     <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    //     <div className="relative space-y-4 p-4">
    //       <h1 className="text-2xl font-bold">Latest Eyewear For You
    //       </h1>
    //       <p>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
    //         dictum.
    //       </p>
    //       <button className="bg-white text-black w-fit px-5 py-2">
    //         Shop Now
    //       </button>
    //     </div>
    //   </div>

    //   <div className="post3  bg-cover bg-center  relative text-white">
    //     <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    //     <div className="relative space-y-4 p-4">
    //       <h1 className="text-2xl font-bold">Let's Lorem Suit Up!
    //       </h1>
    //       <p>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
    //         dictum.
    //       </p>
    //       <button className="bg-white text-black w-fit px-5 py-2">
    //         Shop Now
    //       </button>
    //     </div>
    //   </div>
    // </div>
<div className="text-white flex flex-col lg:flex-row justify-center items-center w-full gap-10 md:gap-14 px-4 md:px-44">
  <div className="post1 bg-cover bg-center relative text-white w-full lg:w-1/3">
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative space-y-4 p-4">
      <h1 className="text-2xl font-bold">20% Off On Tank Tops</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.
      </p>
      <button className="bg-white text-black w-fit px-5 py-2">Shop Now</button>
    </div>
  </div>

  <div className="post2 bg-cover bg-center relative text-white w-full lg:w-1/3">
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative space-y-4 p-4">
      <h1 className="text-2xl font-bold">Latest Eyewear For You</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.
      </p>
      <button className="bg-white text-black w-fit px-5 py-2">Shop Now</button>
    </div>
  </div>

  <div className="post3 bg-cover bg-center relative text-white w-full lg:w-1/3">
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative space-y-4 p-4">
      <h1 className="text-2xl font-bold">Let's Lorem Suit Up!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.
      </p>
      <button className="bg-white text-black w-fit px-5 py-2">Shop Now</button>
    </div>
  </div>
</div>

  );
};

export default Poster;
