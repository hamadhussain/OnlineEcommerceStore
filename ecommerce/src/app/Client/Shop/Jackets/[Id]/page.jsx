"use client";
import React, { useState, useEffect } from "react";
import Buttonn from "../../AddCartButton/page";
import Image from "next/image";
import Loader from "@/app/Client/Loader/page";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const ProductDetailPage = ({ params }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("Medium");
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [pricee, setPrice] = useState(0); // State to store calculated price

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch('/Server/ProductDetials', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ productName: "Jacket" }), // Replace 'Jacket' with dynamic product name if needed
        });

        const data = await response.json();
        const id = params.Id;

        if (response.ok) {
          setProduct(data[id - 1]); // Assuming the product array is indexed by 1, for example
        } else {
          setError(data.error || "Something went wrong.");
        }
      } catch (error) {
        setError("Error fetching product details.");
      } finally {
        setLoading(false); 
      }
    };

    fetchProductDetails(); 
  }, [params.id]);

  // Update the price whenever the product or quantity changes
  useEffect(() => {
    if (product) {
      
      const price = product.price * quantity; // Calculate the price
      setPrice(price); // Update the state with the new price
    }
  }, [product, quantity]); // This effect runs whenever product or quantity changes

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleSizeChange = (event) => setSize(event.target.value);

  if (loading) {
    return <div className="h-screen flex justify-center items-center"><Loader /></div>;
  }

  if (error) {
    return <div className="h-screen flex justify-center items-center text-red-500">{error}</div>;
  }

  return (
    <div className="h-full md:h-sceen flex justify-center  items-center left1/2 to-1/2 w-screen">
      <div className="flex flex-col md:flex-row relative top-44  md:top-8 justify-center ites-center w-screen gap-7 md:gap-10 lg:gap-24">
        <Image
          src={`/Jacket${params.Id}.png`} 
          alt={product.title}
          className="w-full max-w-xs md:max-w-md lg:max-w-xl rounded-lg border-4 bg-slate-100 p-4"
          width={300}
          height={400}
          priority
        />
        {product ? (
          // <TabsDemo/>
       <div  className=" fixe">
          <h1 className="text-4xl font-bold mb-2 mt-4  underline">{product.title}</h1>
          <Tabs defaultValue="account" className="w[400px] ">
          <TabsList className="grid w-full grid-cols-2 ">
            <TabsTrigger value="account">Desciption</TabsTrigger>
            <TabsTrigger value="password">Reviews</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account">
                  <div className="ml-8 py-4 flex flex-col justify-center w-96">
                    <span className="font-bold">Description</span>
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

                    <h2 className="mb-4">
                      Price: <span className="text-2xl opacity-50">${pricee}</span>
                    </h2>

                  </div>
                  </TabsContent>
                  <TabsContent className=" " value="password">
                                  {/* Reviews Section */}
                                  <div className="ml-8 py-4">
                                    <span className="font-bold text-lg mb-2">Reviews</span>
                                    {product.reviews?.totalReviews > 0 ? (
                                      <>
                                        <div className="mb-4">
                                          <h3 className="text-xl font-semibold">
                                            Average Rating: {product.reviews.rating} / 5
                                          </h3>
                                          <span className="text-sm text-gray-500">
                                            ({product.reviews.totalReviews} reviews)
                                          </span>
                                        </div>

                                        <div>
                                          {product.reviews.reviewList.map((review, index) => (
                                            <div key={index} className="border-b py-3">
                                              <p className="font-semibold">{review.user}</p>
                                              <p className="text-sm text-gray-600">{review.comment}</p>
                                              <span className="text-sm text-gray-400">Rating: {review.rating} / 5</span>
                                            </div>
                                          ))}
                                        </div>
                                      </>
                                    ) : (
                                      <p>No reviews yet.</p>
                                    )}

                                    <div className="mt-8">
                                      <span className="font-bold">Available Sizes:</span>
                                      <ul className="list-disc pl-4 gap-10 flex">
                                        {product.extraDetails.sizes.map((size) => (
                                          <li key={size}>{size}</li>
                                        ))}
                                      </ul>
                                    </div>

                                    <div className="mt-4">
                                      <span className="font-bold">Available Colors:</span>
                                      <ul className="list-disc pl-4 gap-10 flex">
                                        {product.extraDetails.availableColors.map((color) => (
                                          <li key={color}>{color}</li>
                                        ))}
                                      </ul>
                                    </div>

                                    <div className="mt-4">
                                      <span className="font-bold">Care Instructions:</span>
                                      <p>{product.extraDetails.careInstructions}</p>
                                    </div>
                                  </div>
            </TabsContent>

          </Tabs>
          <Buttonn productImage={`Jacket${params.Id}`} productDescription={product.description} productName={product.title} productPrice={pricee}  quantity={quantity} size={size} />

        </div>
          
        ) : (
          <p>No product available.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;














// "use client";
// import React, { useState, useEffect } from "react";
// import Buttonn from "../../AddCartButton/page";
// import Image from "next/image";
// import Loader from "@/app/Client/Loader/page";
// import TabsDemo from "../Tabs/page";
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/components/ui/tabs"

// const ProductDetailPage = ({ params }) => {
//   const [quantity, setQuantity] = useState(1);
//   const [size, setSize] = useState("Medium");
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true); 
//   const [error, setError] = useState(null); 
//   const [pricee, setPrice] = useState(0); // State to store calculated price

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const response = await fetch('/Server/ProductDetials', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ productName: "Jacket" }), // Replace 'Jacket' with dynamic product name if needed
//         });

//         const data = await response.json();
//         const id = params.Id;

//         if (response.ok) {
//           setProduct(data[id - 1]); // Assuming the product array is indexed by 1, for example
//         } else {
//           setError(data.error || "Something went wrong.");
//         }
//       } catch (error) {
//         setError("Error fetching product details.");
//       } finally {
//         setLoading(false); 
//       }
//     };

//     fetchProductDetails(); 
//   }, [params.id]);

//   // Update the price whenever the product or quantity changes
//   useEffect(() => {
//     if (product) {
      
//       const price = product.price * quantity; // Calculate the price
//       setPrice(price); // Update the state with the new price
//     }
//   }, [product, quantity]); // This effect runs whenever product or quantity changes

//   const increaseQuantity = () => setQuantity((prev) => prev + 1);
//   const decreaseQuantity = () => {
//     if (quantity > 1) setQuantity((prev) => prev - 1);
//   };

//   const handleSizeChange = (event) => setSize(event.target.value);

//   if (loading) {
//     return <div className="h-screen flex justify-center items-center"><Loader /></div>;
//   }

//   if (error) {
//     return <div className="h-screen flex justify-center items-center text-red-500">{error}</div>;
//   }

//   return (
//     <div className="h-full md:h-screen flex justify-center items-center left-1/2 top-1/2 w-full">
//       <div className="flex flex-col md:flex-row relative top-44 md:top-8 justify-center items-center w-screen gap-7 md:gap-10 lg:gap-24">
//         <Image
//           src={`/${"Jacket"}${params.Id}.png`} 
//           alt={product.title}
//           className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-lg border-4 bg-slate-100 p-4"
//           width={300}
//           height={400}
//           priority
//         />
//         {product ? (
//           // <TabsDemo/>
//        <div >
//           <h1 className="text-3xl font-bold mb-2">{product.title}</h1>

// <Tabs defaultValue="account" className="w-[400px]">
// <TabsList className="grid w-full grid-cols-2">
//   <TabsTrigger value="account">Account</TabsTrigger>
//   <TabsTrigger value="password">Password</TabsTrigger>
// </TabsList>
// <TabsContent value="account">
// <div className="ml-8 py-4 flex flex-col justify-center w-96">
//   <span className="font-bold">Description</span>
//   <p className="mb-4">{product.description}</p>

//   <div className="mb-4">
//     <label className="block mb-2 font-semibold">Size:</label>
//     <select
//       value={size}
//       onChange={handleSizeChange}
//       className="border rounded px-4 py-2"
//     >
//       <option value="Small">Small</option>
//       <option value="Medium">Medium</option>
//       <option value="Large">Large</option>
//       <option value="X-Large">X-Large</option>
//     </select>
//   </div>

//   <div className="flex items-center mb-4">
//     <button
//       onClick={decreaseQuantity}
//       className="border rounded-l px-4 py-2"
//     >
//       -
//     </button>
//     <span className="px-4">{quantity}</span>
//     <button
//       onClick={increaseQuantity}
//       className="border rounded-r px-4 py-2"
//     >
//       +
//     </button>
//   </div>

//   <h2 className="mb-4">
//     Price: <span className="text-2xl opacity-50">${pricee}</span>
//   </h2>

//   <Buttonn productID={product} quantity={quantity} size={size} />
// </div>
// </TabsContent>
// <TabsContent value="password">
  
// </TabsContent>
// </Tabs></div>
          
//         ) : (
//           <p>No product available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductDetailPage;
















// // "use client";
// // import React, { useState, useEffect } from "react";
// // import Buttonn from "../../AddCartButton/page";
// // import Image from "next/image";
// // import Loader from "@/app/Client/Loader/page";

// // const ProductDetailPage = ({ params }) => {
// //   const [quantity, setQuantity] = useState(1);
// //   const [size, setSize] = useState("Medium");
// //   const [product, setProduct] = useState(null);
// //   const [loading, setLoading] = useState(true); 
// //   const [error, setError] = useState(null); 
// //   const [pricee, setPrice] = useState(0); 


// //   useEffect(() => {
// //     const fetchProductDetails = async () => {
// //       try {
// //         const response = await fetch('/Server/ProductDetials', {
// //           method: 'POST',
// //           headers: {
// //             'Content-Type': 'application/json',
// //           },
// //           body: JSON.stringify({ productName: "Jacket" }), // Replace 'Jacket' with dynamic product name if needed
// //         });

// //         const data = await response.json();
// //         const id = params.Id;

// //         if (response.ok) {
// //           setProduct(data[id - 1]); // Assuming the product array is indexed by 1, for example
// //         } else {
// //           setError(data.error || "Something went wrong.");
// //         }
// //       } catch (error) {
// //         setError("Error fetching product details.");
// //       } finally {
// //         setLoading(false); 
// //       }
// //     };

// //     fetchProductDetails(); 
// //   }, [params.id]);
// //   let price;
// //   useEffect(() => {
// //     if (product) {
// //       console.log(product.price);
// //        price =product.price * quantity
// //       console.log(setPrice(price));
      
// //     }
// //   }, [product]);

// //   const increaseQuantity = () => setQuantity((prev) => prev + 1);
// //   const decreaseQuantity = () => {
// //     if (quantity > 1) setQuantity((prev) => prev - 1);
// //   };


// //   const handleSizeChange = (event) => setSize(event.target.value);

// //   if (loading) {
// //     return <div className="h-screen flex justify-center items-center"><Loader /></div>;
// //   }

// //   if (error) {
// //     return <div className="h-screen flex justify-center items-center text-red-500">{error}</div>;
// //   }

// //   return (
// //     <div className="h-full md:h-screen flex justify-center items-center left-1/2 top-1/2 w-full">
// //       <div className="flex flex-col md:flex-row relative top-44 md:top-8 justify-center items-center w-screen gap-7 md:gap-10 lg:gap-24">
// //         <Image
// //           src={`/${"Jacket"}${params.Id}.png`} 
// //           alt={product.title}
// //           className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-lg border-4 bg-slate-100 p-4"
// //           width={300}
// //           height={400}
// //           priority
// //         />
// //         {product ? (
// //           <div className="ml-8 py-4 flex flex-col justify-center w-96">
// //             <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
// //             <span className="font-bold">Description</span>
// //             <p className="mb-4">{product.description}</p>

// //             <div className="mb-4">
// //               <label className="block mb-2 font-semibold">Size:</label>
// //               <select
// //                 value={size}
// //                 onChange={handleSizeChange}
// //                 className="border rounded px-4 py-2"
// //               >
// //                 <option value="Small">Small</option>
// //                 <option value="Medium">Medium</option>
// //                 <option value="Large">Large</option>
// //                 <option value="X-Large">X-Large</option>
// //               </select>
// //             </div>

// //             <div className="flex items-center mb-4">
// //               <button
// //                 onClick={decreaseQuantity}
// //                 className="border rounded-l px-4 py-2"
// //               >
// //                 -
// //               </button>
// //               <span className="px-4">{quantity}</span>
// //               <button
// //                 onClick={increaseQuantity}
// //                 className="border rounded-r px-4 py-2"
// //               >
// //                 +
// //               </button>
// //             </div>

// //             <h2 className="mb-4">
// //               Price: <span className="text-2xl opacity-50">{pricee}</span>
// //             </h2>

// //             <Buttonn productID={product} quantity={quantity} size={size} />
// //           </div>
// //         ) : (
// //           <p>No product available.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductDetailPage;












// // // // "use client";
// // // // import React, { useState, useEffect } from "react";
// // // // import Buttonn from "../../AddCartButton/page";
// // // // import Image from "next/image";
// // // // import Loader from "@/app/Client/Loader/page";

// // // // const ProductDetailPage = ({ params }) => {
// // // //   const [quantity, setQuantity] = useState(1);
// // // //   const [size, setSize] = useState("Medium");
// // // //   const [product, setProduct] = useState(null);
// // // //   const [loading, setLoading] = useState(true); 
// // // //   const [error, setError] = useState(null); 

// // // //   useEffect(() => {
// // // //     const fetchProductDetails = async () => {
// // // //       try {
// // // //         const jacket = "Jacket"; // Moved jacket declaration here
// // // //         const response = await fetch('/Server/ProductDetails', { // Correct endpoint
// // // //           method: 'POST',
// // // //           headers: {
// // // //             'Content-Type': 'application/json',
// // // //           },
// // // //           body: JSON.stringify({ productName: jacket }), // Use jacket here
// // // //         });

// // // //         if (response.ok) {
// // // //           const data = await response.json();
// // // //           const id = params.id; // Ensure consistency in id reference
// // // //           setProduct(data[id - 1]); // Assuming data is an array
// // // //         } else {
// // // //           const errorData = await response.json();
// // // //           setError(errorData.error || "Something went wrong."); 
// // // //         }
// // // //       } catch (error) {
// // // //         setError("Error fetching product details.");
// // // //       } finally {
// // // //         setLoading(false); 
// // // //       }
// // // //     };

// // // //     fetchProductDetails(); 
// // // //   }, [params.id]);

// // // //   const increaseQuantity = () => setQuantity((prev) => prev + 1);
// // // //   const decreaseQuantity = () => {
// // // //     if (quantity > 1) setQuantity((prev) => prev - 1);
// // // //   };

// // // //   const handleSizeChange = (event) => setSize(event.target.value);

// // // //   if (loading) {
// // // //     return <div className="h-screen flex justify-center items-center"><Loader/></div>;
// // // //   }

// // // //   // if (error) {
// // // //   //   return <div className="text-red-500 text-center">{error}</div>; // Display error message
// // // //   // }

// // // //   const price = product ? (product.price * quantity).toFixed(2) : 0; // Calculate total price

// // // //   return (
// // // //     <div className="h-full md:h-screen flex justify-center items-center left-1/2 top-1/2 w-full">
// // // //       <div className="flex flex-col md:flex-row relative top-44 md:top-8 justify-center items-center w-screen gap-7 md:gap-10 lg:gap-24">
// // // //         <Image
// // // //           src={`/${"Jacket"}${params.id}.png`} // Use params.id for consistency
// // // //           // alt={product.title}
// // // //           alt="sdad"
// // // //           className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-lg border-4 bg-slate-100 p-4"
// // // //           width={300}
// // // //           height={400}
// // // //           priority
// // // //         />
// // // //         {product ? (
// // // //           <>
// // // //             <div className="ml-8 py-4 flex flex-col justify-center w-96">
// // // //               <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
// // // //               <span className="font-bold">Description</span>
// // // //               <p className="mb-4">{product.description}</p>

// // // //               <div className="mb-4">
// // // //                 <label className="block mb-2 font-semibold">Size:</label>
// // // //                 <select
// // // //                   value={size}
// // // //                   onChange={handleSizeChange}
// // // //                   className="border rounded px-4 py-2"
// // // //                 >
// // // //                   <option value="Small">Small</option>
// // // //                   <option value="Medium">Medium</option>
// // // //                   <option value="Large">Large</option>
// // // //                   <option value="X-Large">X-Large</option>
// // // //                 </select>
// // // //               </div>

// // // //               <div className="flex items-center mb-4">
// // // //                 <button
// // // //                   onClick={decreaseQuantity}
// // // //                   className="border rounded-l px-4 py-2"
// // // //                 >
// // // //                   -
// // // //                 </button>
// // // //                 <span className="px-4">{quantity}</span>
// // // //                 <button
// // // //                   onClick={increaseQuantity}
// // // //                   className="border rounded-r px-4 py-2"
// // // //                 >
// // // //                   +
// // // //                 </button>
// // // //               </div>
// // // //               <h2 className="mb-4">
// // // //                 Price: <span className="text-2xl opacity-50">${price}</span> {/* Display price */}
// // // //               </h2>

// // // //               <Buttonn productID={product} quantity={quantity} size={size} />
// // // //             </div>
// // // //           </>
// // // //         ) : (
// // // //           <>No product found</> // Better user feedback
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ProductDetailPage;
























// // // "use client";
// // // import React, { useState, useEffect } from "react";
// // // import Buttonn from "../../AddCartButton/page";
// // // import Image from "next/image";
// // // import Loader from "@/app/Client/Loader/page";

// // // const ProductDetailPage = ({ params }) => {
// // //   const [quantity, setQuantity] = useState(1);
// // //   const [size, setSize] = useState("Medium");
// // //   const [product, setProduct] = useState(null);
// // //   const [loading, setLoading] = useState(true); 
// // //   const [error, setError] = useState(null); 
// // //   useEffect(() => {
// // //     const fetchProductDetails = async () => {
// // //       try {
// // //         // const response = await fetch(`/Server/ProductDetials`);
// // //         const response = await fetch('/Server/ProductDetials', {
// // //           method: 'POST',
// // //           headers: {
// // //             'Content-Type': 'application/json',
// // //           },
// // //           body: JSON.stringify({ productName: jacket }), 
// // //         });
// // //         const data = await response.json();
// // //         let id=params.Id
// // //   // console.log(data[id-1]);
// // //   // console.log(product.price);

  
// // //         if (response.ok) {
// // //           setProduct(data[id-1]); 
          
// // //         } else {
          
// // //           setError(data.error || "Something went wrong."); 
// // //         }
// // //       } catch (error) {
// // //         setError("Error fetching product details.");
// // //       } finally {
// // //         setLoading(false); 
// // //       }
// // //     };

// // //     fetchProductDetails(); 
// // //   }, [params.id]);
// // //   let jacket="Jacket"
// // //   console.log(product.price);

// // //   const increaseQuantity = () => setQuantity((prev) => prev + 1);
// // //   const decreaseQuantity = () => {
// // //     if (quantity > 1) setQuantity((prev) => prev - 1);
// // //   };

// // //   const handleSizeChange = (event) => setSize(event.target.value);
// // //   // let price=product * quantity.toFixed
// // //   // console.log("price :" + product.price);
  
  
// // //   if (loading) {
// // //     return <div className=" h-screen flex  justify-center items-center"><Loader/></div>;
// // //   }

// // //   return (
// // //     <div className="h-full md:h-screen flex justify-center items-center left-1/2 top-1/2 w-full">
// // //     <div className="flex flex-col md:flex-row relative top-44 md:top-8 justify-center items-center w-screen gap-7 md:gap-10 lg:gap-24">
// // //       <Image
// // //         src={`/${jacket}${params.Id}.png`} 
// // //         alt={product.title}
// // //         className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-lg border-4 bg-slate-100 p-4"
// // //         width={300}
// // //         height={400}
// // //         priority
// // //       />
// // //       {product ? (
// // //         <>
// // //           <div className="ml-8 py-4 flex flex-col justify-center w-96">
// // //             <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
// // //            <span className=" font-bold">Description</span>
// // //             <p className="mb-4">{product.description}</p>

// // //             <div className="mb-4">
// // //               <label className="block mb-2 font-semibold">Size:</label>
// // //               <select
// // //                 value={size}
// // //                 onChange={handleSizeChange}
// // //                 className="border rounded px-4 py-2"
// // //               >
// // //                 <option value="Small">Small</option>
// // //                 <option value="Medium">Medium</option>
// // //                 <option value="Large">Large</option>
// // //                 <option value="X-Large">X-Large</option>
// // //               </select>
// // //             </div>

// // //             <div className="flex items-center mb-4">
// // //               <button
// // //                 onClick={decreaseQuantity}
// // //                 className="border rounded-l px-4 py-2"
// // //               >
// // //                 -
// // //               </button>
// // //               <span className="px-4">{quantity}</span>
// // //               <button
// // //                 onClick={increaseQuantity}
// // //                 className="border rounded-r px-4 py-2"
// // //               >
// // //                 +
// // //               </button>
// // //             </div>
// // //             <h2 className=" mb-4">
// // //               {/* Price: <span className="text-2xl opacity-50">{price}</span> */}
// // //             </h2>

// // //             <Buttonn productID={product} quantity={quantity} size={size} />
// // //           </div>
// // //         </>
// // //       ) : (
// // //         <>no product</>
// // //       )}
// // //     </div>
// // //   </div>
// // //   );
// // // };

// // // export default ProductDetailPage;





// // // //     // <div className="h-full md:h-screen flex justify-center items-center left-1/2 top-1/2 w-full">
// // // //     //   <div className="flex flex-col md:flex-row relative top-44 md:top-8 justify-center items-center w-screen gap-7 md:gap-10 lg:gap-24">
// // // //     //     <Image
// // // //     //       src={`/${jacket}${params.Id}.png`} 
// // // //     //       // alt={product.title}
// // // //     //       alt="xza"
// // // //     //       className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-lg border-4 bg-slate-100 p-4"
// // // //     //       width={400}
// // // //     //       height={400}
// // // //     //       priority
// // // //     //     />
// // // //     //     {product ? (
// // // //     //       <>
// // // //     //         {" "}
// // // //     //         <div className="ml-8 py-4 flex flex-col justify-center w-96">
// // // //     //           <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
// // // //     //           <h2 className="text-md mb-4">
// // // //     //             Price: <span className="underline">{product.price}</span>
// // // //     //           </h2>
// // // //     //           <p className="mb-4">{product.description}</p>

// // // //     //           <div className="mb-4">
// // // //     //             <label className="block mb-2 font-semibold">Size:</label>
// // // //     //             <select
// // // //     //               value={size}
// // // //     //               onChange={handleSizeChange}
// // // //     //               className="border rounded px-4 py-2"
// // // //     //             >
// // // //     //               <option value="Small">Small</option>
// // // //     //               <option value="Medium">Medium</option>
// // // //     //               <option value="Large">Large</option>
// // // //     //               <option value="X-Large">X-Large</option>
// // // //     //             </select>
// // // //     //           </div>

// // // //     //           <div className="flex items-center mb-4">
// // // //     //             <button
// // // //     //               onClick={decreaseQuantity}
// // // //     //               className="border rounded-l px-4 py-2"
// // // //     //             >
// // // //     //               -
// // // //     //             </button>
// // // //     //             <span className="px-4">{quantity}</span>
// // // //     //             <button
// // // //     //               onClick={increaseQuantity}
// // // //     //               className="border rounded-r px-4 py-2"
// // // //     //             >
// // // //     //               +
// // // //     //             </button>
// // // //     //           </div>

// // // //     //           <Buttonn product={product} quantity={quantity} size={size} />
// // // //     //         </div>
// // // //     //       </>
// // // //     //     ) : (
// // // //     //       <>no product</>
// // // //     //     )}
// // // //     //   </div>
// // // //     // </div>

// // // // // "use client";
// // // // // import Image from "next/image";
// // // // // import React, { useState, useEffect } from "react";

// // // // // const Jacket = ({ params }) => {
// // // // //   const [quantity, setQuantity] = useState(1);
// // // // //   const [size, setSize] = useState("Medium");
// // // // //   const [product, setProduct] = useState(null);

// // // // //   useEffect(() => {
// // // // //     const fetchProductDetails = async () => {
// // // // //       try {
// // // // //         const response = await fetch("/Server/ProductCard", {
// // // // //           method: "POST",
// // // // //           headers: {
// // // // //             "Content-Type": "application/json",
// // // // //           },
// // // // //           body: JSON.stringify({ imagname: `${params.Id}` }),
// // // // //         });

// // // // //         if (!response.ok) {
// // // // //           throw new Error("Network response was not ok");
// // // // //         }

// // // // //         const data = await response.json();
// // // // //         setProduct(data);
// // // // //       } catch (error) {
// // // // //         console.error("Error fetching product details:", error);
// // // // //       }
// // // // //     };

// // // // //     fetchProductDetails();
// // // // //   }, [params.Id]);

// // // // //   const increaseQuantity = () => {
// // // // //     setQuantity((prev) => prev + 1);
// // // // //   };

// // // // //   const decreaseQuantity = () => {
// // // // //     if (quantity > 1) {
// // // // //       setQuantity((prev) => prev - 1);
// // // // //     }
// // // // //   };

// // // // //   const handleSizeChange = (event) => {
// // // // //     setSize(event.target.value);
// // // // //   };

// // // // //   const handleAddToCart = () => {
// // // // //     console.log(`Added ${quantity} ${size} jackets to cart.`);
// // // // //   };

// // // // //   return (
// // // // //     <div className="h-full md:h-screen flex justify-center items-center  left-1/2 top-1/2 w-full">
// // // // //       <div className="flex flex-col md:flex-row relative top-44 md:top-8 justify-center items-center w-scren gap-7 md:gap-10 lg:gap-24">
// // // // //         {/* <img
// // // // //           src={`/${params.Id}.png`}
// // // // //           alt={`Jacket`}
// // // // //           className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-lg "
// // // // //         /> */}
// // // // //         <Image
// // // // //           src={`/${params.Id}.png`}
// // // // //           alt={`Jacket`}
// // // // //           width={500} // specify width
// // // // //           height={500} // specify height
// // // // //           className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-lg"
// // // // //         />
// // // // //         <div className="ml-8 py-4 flex flex-col justify-center w-96">
// // // // //           {product ? (
// // // // //             <>
// // // // //               <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
// // // // //               <h2 className="text-md mb-4">
// // // // //                 Price:{" "}
// // // // //                 <span className="underline">${product.price.toFixed(2)}</span>
// // // // //               </h2>
// // // // //               <p className="mb-4">{product.description}</p>
// // // // //             </>
// // // // //           ) : (
// // // // //             <p>Loading product details...</p>
// // // // //           )}

// // // // //           <div className="mb-4">
// // // // //             <label className="block mb-2 font-semibold">Size:</label>
// // // // //             <select
// // // // //               value={size}
// // // // //               onChange={handleSizeChange}
// // // // //               className="border rounded px-4 py-2"
// // // // //             >
// // // // //               <option value="Small">Small</option>
// // // // //               <option value="Medium">Medium</option>
// // // // //               <option value="Large">Large</option>
// // // // //               <option value="X-Large">X-Large</option>
// // // // //             </select>
// // // // //           </div>

// // // // //           <div className="flex items-center mb-4">
// // // // //             <button
// // // // //               onClick={decreaseQuantity}
// // // // //               className="border rounded-l px-4 py-2"
// // // // //             >
// // // // //               -
// // // // //             </button>
// // // // //             <span className="px-4">{quantity}</span>
// // // // //             <button
// // // // //               onClick={increaseQuantity}
// // // // //               className="border rounded-r px-4 py-2"
// // // // //             >
// // // // //               +
// // // // //             </button>
// // // // //           </div>
// // // // //           <button
// // // // //             onClick={handleAddToCart}
// // // // //             className="bg-blue-500 text-white py-2 px-4 rounded"
// // // // //           >
// // // // //             Add to Cart
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Jacket;

// // // // // // "use client";

// // // // // // import React, { useState } from "react";

// // // // // // const Jacket = ({ params }) => {
// // // // // //   const [quantity, setQuantity] = useState(1);
// // // // // //   const [size, setSize] = useState("Medium"); // Default size
// // // // // //   const price = 49.99; // Example price for the jacket
// // // // // //   const description =
// // // // // //     "This stylish jacket is perfect for any occasion. Made with high-quality materials, it offers both comfort and durability.";
// // // // // //   const jacketName = "Stylish Winter Jacket"; // Example jacket name

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
// // // // // //     const response = fetch("/Server/ProductCard", {
// // // // // //       method: "POST",
// // // // // //       headers: {
// // // // // //         "Content-Type": "application/json",
// // // // // //       },
// // // // // //       body: JSON.stringify("objectWithData"),
// // // // // //     });
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className=" h-full md:h-screen flex justify-center items-center absolute lft-1/2 ight-1/2   w-full">
// // // // // //       <div className="flex flex-col md:flex-row relative top-44 md:top-8 justify-center items-center w-screen gap-7 md:gap-10 lg:gap-24">
// // // // // //         <img
// // // // // //           src={`/${params.Id}.png`}
// // // // // //           alt={`Jacket`}
// // // // // //           className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-lg border-4"
// // // // // //         />
// // // // // //         <div className="ml-8 py-4 flex flex-col justify-center w-96">
// // // // // //           <h1 className="text-2xl font-bold mb-2">{jacketName}</h1>
// // // // // //           <h2 className="text-md mb-4">
// // // // // //             Price: <span className="underline">${price.toFixed(2)}</span>
// // // // // //           </h2>
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

// // // // // // // "use client";

// // // // // // // import React, { useState } from "react";

// // // // // // // const Jacket = ({ params }) => {
// // // // // // //   const [quantity, setQuantity] = useState(1);
// // // // // // //   const [size, setSize] = useState("Medium"); // Default size
// // // // // // //   const price = 49.99; // Example price for the jacket
// // // // // // //   const description =
// // // // // // //     "This stylish jacket is perfect for any occasion. Made with high-quality materials, it offers both comfort and durability.";
// // // // // // //   const jacketName = "Stylish Winter Jacket"; // Example jacket name

// // // // // // //   const increaseQuantity = () => {
// // // // // // //     setQuantity((prev) => prev + 1);
// // // // // // //   };

// // // // // // //   const decreaseQuantity = () => {
// // // // // // //     if (quantity > 1) {
// // // // // // //       setQuantity((prev) => prev - 1);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleSizeChange = (event) => {
// // // // // // //     setSize(event.target.value);
// // // // // // //   };

// // // // // // //   const handleAddToCart = () => {
// // // // // // //     console.log(`Added ${quantity} ${size} jackets to cart.`);
// // // // // // //     // Add your cart logic here
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="flex flex-col justify-center items-center h-full md:h-screen w-full p-4">
// // // // // // //       <div className="flex flex-col md:flex-row md:justify-center md:items-center h-full w-full gap-6 md:gap-12">
// // // // // // //         <img
// // // // // // //           src={`/${params.Id}.png`}
// // // // // // //           alt={`Jacket`}
// // // // // // //           className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-lg "
// // // // // // //         />
// // // // // // //         <div className="flex flex-col justify-center w-full max-w-md">
// // // // // // //           <h1 className="text-xl md:text-2xl font-bold mb-2">{jacketName}</h1>
// // // // // // //           <h2 className="text-md mb-4">
// // // // // // //             Price: <span className="underline">${price.toFixed(2)}</span>
// // // // // // //           </h2>
// // // // // // //           <p className="mb-4">{description}</p>

// // // // // // //           <div className="mb-4">
// // // // // // //             <label className="block mb-2 font-semibold">Size:</label>
// // // // // // //             <select
// // // // // // //               value={size}
// // // // // // //               onChange={handleSizeChange}
// // // // // // //               className="border rounded px-4 py-2 w-full"
// // // // // // //             >
// // // // // // //               <option value="Small">Small</option>
// // // // // // //               <option value="Medium">Medium</option>
// // // // // // //               <option value="Large">Large</option>
// // // // // // //               <option value="X-Large">X-Large</option>
// // // // // // //             </select>
// // // // // // //           </div>

// // // // // // //           {/* Quantity Selector */}
// // // // // // //           <div className="flex items-center mb-4">
// // // // // // //             <button
// // // // // // //               onClick={decreaseQuantity}
// // // // // // //               className="border rounded-l px-4 py-2"
// // // // // // //             >
// // // // // // //               -
// // // // // // //             </button>
// // // // // // //             <span className="px-4">{quantity}</span>
// // // // // // //             <button
// // // // // // //               onClick={increaseQuantity}
// // // // // // //               className="border rounded-r px-4 py-2"
// // // // // // //             >
// // // // // // //               +
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //           <button
// // // // // // //             onClick={handleAddToCart}
// // // // // // //             className="bg-blue-500 text-white py-2 px-4 rounded w-full"
// // // // // // //           >
// // // // // // //             Add to Cart
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Jacket;
