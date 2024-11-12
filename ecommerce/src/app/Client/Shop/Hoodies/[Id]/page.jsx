"use client";
import React, { useState, useEffect } from "react";
import Buttonn from "../../AddCartButton/page";
import Image from "next/image";
import Loader from "@/app/Client/Loader/page";

const ProductDetailPage = ({ params }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("Medium");
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch('/Server/ProductDetials', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ productName: Hoody }), // Sending the id as part of the body
        });        const data = await response.json();
        let id=params.Id
  console.log(data[id-1]);

  
        if (response.ok) {
          setProduct(data[id-1]); 
        } else {
          setError(data.error || "Something went wrong."); 
        }
      } catch (error) {
        setError("Error fetching product details.");
      } finally {
        setLoading(false); 
      }
    };

    fetchProductDetails(); // Call the function to fetch data
  }, [params.id]);
  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  // Handle size selection
  const handleSizeChange = (event) => setSize(event.target.value);
let Hoody="Hoody"
  // Show loading state or error
  if (loading) {
    return <div className=" h-screen flex  justify-center items-center"><Loader/></div>;
  }

  return (
    <div className="h-full md:h-screen flex justify-center items-center left-1/2 top-1/2 w-full">
      <div className="flex flex-col md:flex-row relative top-44 md:top-8 justify-center items-center w-screen gap-7 md:gap-10 lg:gap-24">
        <Image
          src={`/Images/jacket2.png`} 
          alt={product.title}
          className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-lg border-4 bg-slate-100 p-4"
          width={300}
          height={400}
          priority
        />
        {product ? (
          <>
            {" "}
            <div className="ml-8 py-4 flex flex-col justify-center w-96">
              <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
              <h2 className="text-md mb-4">
                Price: <span className="underline">{product.price}</span>
              </h2>
              <p className="mb-4">{product.description}</p>

              <div className="mb-4">
                <label className="block mb-2 font-semibold">Size:</label>
                <select
                  value={size}
                  onChange={handleSizeChange}
                  className="border rounded px-4 py-2"
                >
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                  <option value="X-Large">X-Large</option>
                </select>
              </div>

              <div className="flex items-center mb-4">
                <button
                  onClick={decreaseQuantity}
                  className="border rounded-l px-4 py-2"
                >
                  -
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="border rounded-r px-4 py-2"
                >
                  +
                </button>
              </div>

              <Buttonn product={product} quantity={quantity} size={size} />
            </div>
          </>
        ) : (
          <>no product</>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;

// "use client";
// import React, { useState, useEffect } from 'react';
// import Buttonn from '../../AddCartButton/page'; // Adjust path accordingly
// import Image from 'next/image';
// import { ProductDetailData } from '@/app/Utils/index'; // Import static data

// const ProductDetailPage = ({ params }) => {
//   const [quantity, setQuantity] = useState(1);
//   const [size, setSize] = useState('Medium');
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // Fetch product based on params.id
//   useEffect(() => {
//     setLoading(true);
//     const selectedProduct = ProductDetailData.find((item) => item.id.toString() === params.id); // Ensure `params.id` is compared as string
//     if (selectedProduct) {
//       setProduct(selectedProduct);
//     } else {
//       console.error('Product not found');
//     }
//     setLoading(false);
//   }, [params.id]);

//   // Update quantity
//   const increaseQuantity = () => setQuantity((prev) => prev + 1);
//   const decreaseQuantity = () => {
//     if (quantity > 1) setQuantity((prev) => prev - 1);
//   };

//   // Handle size selection
//   const handleSizeChange = (event) => setSize(event.target.value);

//   // Show loading state
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   // Show product details if found
//   return (
//     <div className="h-full md:h-screen flex justify-center items-center left-1/2 top-1/2 w-full">
//       <div className="flex flex-col md:flex-row relative top-44 md:top-8 justify-center items-center w-screen gap-7 md:gap-10 lg:gap-24">
//         <Image
//           src={`/Hoody${params.Id}.png`} // Dynamic image src
//           // alt={product.title}
//           alt='sdsd'
//           className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-lg"
//           width={400}
//           height={400}
//           priority
//         />
//        {product?<> <div className="ml-8 py-4 flex flex-col justify-center w-96">
//           <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
//           <h2 className="text-md mb-4">
//             Price: <span className="underline">{product.price}</span>
//           </h2>
//           <p className="mb-4">{product.description}</p>

//           <div className="mb-4">
//             <label className="block mb-2 font-semibold">Size:</label>
//             <select value={size} onChange={handleSizeChange} className="border rounded px-4 py-2">
//               <option value="Small">Small</option>
//               <option value="Medium">Medium</option>
//               <option value="Large">Large</option>
//               <option value="X-Large">X-Large</option>
//             </select>
//           </div>

//           <div className="flex items-center mb-4">
//             <button onClick={decreaseQuantity} className="border rounded-l px-4 py-2">
//               -
//             </button>
//             <span className="px-4">{quantity}</span>
//             <button onClick={increaseQuantity} className="border rounded-r px-4 py-2">
//               +
//             </button>
//           </div>

//           <Buttonn product={product} quantity={quantity} size={size} />
//         </div></>:<>no product</>}
//       </div>
//     </div>
//   );
// };

// export default ProductDetailPage;

// // // import React, { useState, useEffect } from "react";
// // // import Buttonn from "../../AddCartButton/page"; // Adjust the path accordingly
// // // import Image from "next/image";

// // // const Jacket = ({ params }) => {
// // //   const [quantity, setQuantity] = useState(1);
// // //   const [size, setSize] = useState("Medium");
// // //   const [product, setProduct] = useState(null);
// // //   const [loading, setLoading] = useState(true); // To handle loading state

// // //   useEffect(() => {
// // //     const fetchProductDetails = async () => {
// // //       try {
// // //         setLoading(true); // Set loading to true before making the API request
// // //         const response = await fetch(`/Server/ProductDetials`);

// // //         if (!response.ok) {
// // //           // throw new Error("Failed to fetch product details");
// // //           console.log("error");

// // //         }

// // //         const data = await response.json();
// // //         console.log(data==params.Id);

// // //         setProduct(data);
// // //       } catch (error) {
// // //         console.error("Error fetching product details:", error);
// // //       } finally {
// // //         setLoading(false); // Set loading to false once the request is complete
// // //       }
// // //     };

// // //     fetchProductDetails();
// // //   }, [params.id]);
// // //   const increaseQuantity = () => setQuantity((prev) => prev + 1);
// // //   const decreaseQuantity = () => {
// // //     if (quantity > 1) setQuantity((prev) => prev - 1);
// // //   };
// // //   const handleSizeChange = (event) => setSize(event.target.value);

// // //   if (loading) {
// // //     return <div>Loading...</div>;
// // //   }

// // //   return (
// // //     <div className="h-full md:h-screen flex justify-center items-center left-1/2 top-1/2 w-full">
// // //       <div className="flex flex-col md:flex-row relative top-44 md:top-8 justify-center items-center w-screen gap-7 md:gap-10 lg:gap-24">
// // //         <Image
// // //           src={`/${params.Id}.png`}
// // //           alt={product?.title}
// // //           className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-lg"
// // //           width={400}
// // //           height={400}
// // //           priority
// // //         />
// // //         <div className="ml-8 py-4 flex flex-col justify-center w-96">
// // //           {product ? (
// // //             <>
// // //               <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
// // //               <h2 className="text-md mb-4">
// // //                 Price: <span className="underline">${product.price}</span>
// // //               </h2>
// // //               <p className="mb-4">{product.description}</p>

// // //               <div className="mb-4">
// // //                 <label className="block mb-2 font-semibold">Size:</label>
// // //                 <select
// // //                   value={size}
// // //                   onChange={handleSizeChange}
// // //                   className="border rounded px-4 py-2"
// // //                 >
// // //                   <option value="Small">Small</option>
// // //                   <option value="Medium">Medium</option>
// // //                   <option value="Large">Large</option>
// // //                   <option value="X-Large">X-Large</option>
// // //                 </select>
// // //               </div>

// // //               <div className="flex items-center mb-4">
// // //                 <button
// // //                   onClick={decreaseQuantity}
// // //                   className="border rounded-l px-4 py-2"
// // //                 >
// // //                   -
// // //                 </button>
// // //                 <span className="px-4">{quantity}</span>
// // //                 <button
// // //                   onClick={increaseQuantity}
// // //                   className="border rounded-r px-4 py-2"
// // //                 >
// // //                   +
// // //                 </button>
// // //               </div>

// // //               <Buttonn product={product} quantity={quantity} size={size} />
// // //             </>
// // //           ) : (
// // //             <p>Product not found.</p>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Jacket;

// // // // import React, { useState, useEffect } from "react";
// // // // import Buttonn from "../../AddCartButton/page";

// // // // const Jacket = ({ params }) => {
// // // //   const [quantity, setQuantity] = useState(1);
// // // //   const [size, setSize] = useState("Medium");
// // // //   const [product, setProduct] = useState(null);

// // // //   useEffect(() => {
// // // //     const fetchProductDetails = async () => {
// // // //       try {
// // // //         const response = await fetch("/Server/ProductCard", {
// // // //           method: "POST",
// // // //           headers: {
// // // //             "Content-Type": "application/json",
// // // //           },
// // // //           body: JSON.stringify({ imagname: `${params.Id}` }),
// // // //         });

// // // //         if (!response.ok) {
// // // //           throw new Error('Network response was not ok');
// // // //         }

// // // //         const data = await response.json();
// // // //         setProduct(data);
// // // //       } catch (error) {
// // // //         console.error('Error fetching product details:', error);
// // // //       }
// // // //     };

// // // //     fetchProductDetails();
// // // //   }, [params.Id]);

// // // //   const increaseQuantity = () => {
// // // //     setQuantity((prev) => prev + 1);
// // // //   };

// // // //   const decreaseQuantity = () => {
// // // //     if (quantity > 1) {
// // // //       setQuantity((prev) => prev - 1);
// // // //     }
// // // //   };

// // // //   const handleSizeChange = (event) => {
// // // //     setSize(event.target.value);
// // // //   };

// // // //   const handleAddToCart = () => {
// // // //     console.log(`Added ${quantity} ${size} jackets to cart.`);
// // // //   };

// // // //   return (
// // // //     <div className="h-full md:h-screen flex justify-center items-center  left-1/2 top-1/2 w-full">
// // // //       <div className="flex flex-col md:flex-row relative top-44 md:top-8 justify-center items-center w-scren gap-7 md:gap-10 lg:gap-24">
// // // //         <img
// // // //           src={`/${params.Id}.png`}
// // // //           alt={`Jacket`}
// // // //           className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-lg "
// // // //         />
// // // //         <div className="ml-8 py-4 flex flex-col justify-center w-96">
// // // //           {product ? (
// // // //             <>
// // // //               <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
// // // //               <h2 className="text-md mb-4">
// // // //                 Price: <span className="underline">${product.price.toFixed(2)}</span>
// // // //               </h2>
// // // //               <p className="mb-4">{product.description}</p>
// // // //             </>
// // // //           ) : (
// // // //             <p>Loading product details...</p>
// // // //           )}

// // // //           <div className="mb-4">
// // // //             <label className="block mb-2 font-semibold">Size:</label>
// // // //             <select
// // // //               value={size}
// // // //               onChange={handleSizeChange}
// // // //               className="border rounded px-4 py-2"
// // // //             >
// // // //               <option value="Small">Small</option>
// // // //               <option value="Medium">Medium</option>
// // // //               <option value="Large">Large</option>
// // // //               <option value="X-Large">X-Large</option>
// // // //             </select>
// // // //           </div>

// // // //           <div className="flex items-center mb-4">
// // // //             <button
// // // //               onClick={decreaseQuantity}
// // // //               className="border rounded-l px-4 py-2"
// // // //             >
// // // //               -
// // // //             </button>
// // // //             <span className="px-4">{quantity}</span>
// // // //             <button
// // // //               onClick={increaseQuantity}
// // // //               className="border rounded-r px-4 py-2"
// // // //             >
// // // //               +
// // // //             </button>
// // // //             <Buttonn />
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Jacket;

// // // // // "use client";

// // import React, { useState } from "react";

// // const Jacket = ({ params }) => {
// //   const [quantity, setQuantity] = useState(1);
// //   const [size, setSize] = useState("Medium"); // Default size
// //   const price = 49.99; // Example price for the jacket
// //   const description =
// //     "This stylish jacket is perfect for any occasion. Made with high-quality materials, it offers both comfort and durability.";
// //   const jacketName = "Stylish Winter Jacket"; // Example jacket name
// //   const response = fetch("/api/route-name", {
// //     method: "POST",
// //     headers: {
// //       "Content-Type": "application/json",
// //     },
// //     body: JSON.stringify("objectWithData"),
// //   });
// //   const increaseQuantity = () => {
// //     setQuantity((prev) => prev + 1);
// //   };

// //   const decreaseQuantity = () => {
// //     if (quantity > 1) {
// //       setQuantity((prev) => prev - 1);
// //     }
// //   };

// //   const handleSizeChange = (event) => {
// //     setSize(event.target.value);
// //   };

// //   const handleAddToCart = () => {
// //     console.log(`Added ${quantity} ${size} jackets to cart.`);
// //     // Add your cart logic here
// //   };

// //   return (
// //     <div className=" h-full md:h-screen flex justify-center items-center absolute lft-1/2 ight-1/2   w-full">
// //       <div className="flex flex-col md:flex-row relative top-44 md:top-8 justify-center items-center w-screen gap-7 md:gap-10 lg:gap-24">
// //       <img
// //             src={`/Hoody${params.Id}.png`}
// //             alt={`Jacket`}
// //             className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-lg "
// //             />
// //         <div className="ml-8 py-4 flex flex-col justify-center w-96">
// //           <h1 className="text-2xl font-bold mb-2">{jacketName}</h1>
// //           <h2 className="text-md mb-4">
// //             Price: <span className="underline">${price.toFixed(2)}</span>
// //           </h2>
// //           <p className="mb-4">{description}</p>

// //           <div className="mb-4">
// //             <label className="block mb-2 font-semibold">Size:</label>
// //             <select
// //               value={size}
// //               onChange={handleSizeChange}
// //               className="border rounded px-4 py-2"
// //             >
// //               <option value="Small">Small</option>
// //               <option value="Medium">Medium</option>
// //               <option value="Large">Large</option>
// //               <option value="X-Large">X-Large</option>
// //             </select>
// //           </div>

// //           {/* Quantity Selector */}
// //           <div className="flex items-center mb-4">
// //             <button
// //               onClick={decreaseQuantity}
// //               className="border rounded-l px-4 py-2"
// //             >
// //               -
// //             </button>
// //             <span className="px-4">{quantity}</span>
// //             <button
// //               onClick={increaseQuantity}
// //               className="border rounded-r px-4 py-2"
// //             >
// //               +
// //             </button>
// //           </div>
// //           <button
// //             onClick={handleAddToCart}
// //             className="bg-blue-500 text-white py-2 px-4 rounded"
// //           >
// //             Add to Cart
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Jacket;

// // // // // // 'use client'

// // // // // // import React, { useState } from "react";

// // // // // // const Jacket = ({ params }) => {
// // // // // //   const [quantity, setQuantity] = useState(1);
// // // // // //   const [size, setSize] = useState("Medium"); // Default size
// // // // // //   const price = 49.99; // Example price for the jacket
// // // // // //   const description = "This stylish jacket is perfect for any occasion. Made with high-quality materials, it offers both comfort and durability.";
// // // // // //   const jacketName = "Stylish Winter Jacket"; // Example jacket name
// // // // // //   const response=fetch('/api/route-name', {
// // // // // //     method: 'POST',
// // // // // //     headers: {
// // // // // //       'Content-Type': 'application/json',
// // // // // //     },
// // // // // //     body: JSON.stringify('objectWithData'),
// // // // // //   })
// // // // // //   const increaseQuantity = () => {
// // // // // //     setQuantity((prev) => prev + 1);
// // // // // //   };

// // // // // //   const decreaseQuantity = () => {
// // // // // //     if (quantity > 1) {
// // // // // //       setQuantity((prev) => prev - 1);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleSizeChange = (event) => {
// // // // // //     setSize(event.target.value);
// // // // // //   };

// // // // // //   const handleAddToCart = () => {
// // // // // //     console.log(`Added ${quantity} ${size} jackets to cart.`);
// // // // // //     // Add your cart logic here
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="h-screen  flex justify-center items-center absolute lft-1/2 ight-1/2   w-full">
// // // // // //       <div className="flex relative top-8 justify-center items-center w-screen gap-36">
// // // // // //       <img
// // // // // //           src={`/${params.Id}.png`}
// // // // // //           alt={`Hoody`}
// // // // // //           className="w-[600px] rounded-lg h-[600px] border2 "
// // // // // //           />
// // // // // //         <div className="ml-8 flex flex-col justify-center w-96">
// // // // // //           <h1 className="text-2xl font-bold mb-2">{jacketName}</h1>
// // // // // //           <h2 className="text-md mb-4">Price: <span className="underline">${price.toFixed(2)}</span></h2>
// // // // // //           <p className="mb-4">{description}</p>

// // // // // //           <div className="mb-4">
// // // // // //             <label className="block mb-2 font-semibold">Size:</label>
// // // // // //             <select
// // // // // //               value={size}
// // // // // //               onChange={handleSizeChange}
// // // // // //               className="border rounded px-4 py-2"
// // // // // //             >
// // // // // //               <option value="Small">Small</option>
// // // // // //               <option value="Medium">Medium</option>
// // // // // //               <option value="Large">Large</option>
// // // // // //               <option value="X-Large">X-Large</option>
// // // // // //             </select>
// // // // // //           </div>

// // // // // //           {/* Quantity Selector */}
// // // // // //           <div className="flex items-center mb-4">
// // // // // //             <button
// // // // // //               onClick={decreaseQuantity}
// // // // // //               className="border rounded-l px-4 py-2"
// // // // // //             >
// // // // // //               -
// // // // // //             </button>
// // // // // //             <span className="px-4">{quantity}</span>
// // // // // //             <button
// // // // // //               onClick={increaseQuantity}
// // // // // //               className="border rounded-r px-4 py-2"
// // // // // //             >
// // // // // //               +
// // // // // //             </button>
// // // // // //           </div>
// // // // // //           <button
// // // // // //             onClick={handleAddToCart}
// // // // // //             className="bg-blue-500 text-white py-2 px-4 rounded"
// // // // // //           >
// // // // // //             Add to Cart
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Jacket;

// // // import React, { useState, useEffect } from "react";
// // // import Buttonn from "../../AddCartButton/page"; // Adjust path accordingly

// // // const Jacket = ({ params }) => {
// // //   const [quantity, setQuantity] = useState(1);
// // //   const [size, setSize] = useState("Medium");
// // //   const [product, setProduct] = useState(null);

// // //   useEffect(() => {
// // //     const fetchProductDetails = async () => {
// // //       try {
// // //         const response = await fetch(`/api/products/${params.Id}`, {
// // //           method: "GET",
// // //         });

// // //         if (!response.ok) {
// // //           throw new Error("Network response was not ok");
// // //         }

// // //         const data = await response.json();
// // //         setProduct(data);
// // //       } catch (error) {
// // //         console.error("Error fetching product details:", error);
// // //       }
// // //     };

// // //     fetchProductDetails();
// // //   }, [params.Id]);

// // //   const increaseQuantity = () => {
// // //     setQuantity((prev) => prev + 1);
// // //   };

// // //   const decreaseQuantity = () => {
// // //     if (quantity > 1) {
// // //       setQuantity((prev) => prev - 1);
// // //     }
// // //   };

// // //   const handleSizeChange = (event) => {
// // //     setSize(event.target.value);
// // //   };

// // //   return (
// // //     <div className="h-full md:h-screen flex justify-center items-center left-1/2 top-1/2 w-full">
// // //       <div className="flex flex-col md:flex-row relative top-44 md:top-8 justify-center items-center w-scren gap-7 md:gap-10 lg:gap-24">
// // //         <img
// // //           src={`/${params.Id}.png`}
// // //           alt="Jacket"
// // //           className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-lg"
// // //         />
// // //         <div className="ml-8 py-4 flex flex-col justify-center w-96">
// // //           {product ? (
// // //             <>
// // //               <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
// // //               <h2 className="text-md mb-4">
// // //                 Price: <span className="underline">${product.price.toFixed(2)}</span>
// // //               </h2>
// // //               <p className="mb-4">{product.description}</p>

// // //               <Buttonn product={product} quantity={quantity} size={size} />
// // //             </>
// // //           ) : (
// // //             <p>Loading product...</p>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Jacket;
