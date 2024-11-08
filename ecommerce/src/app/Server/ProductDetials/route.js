import { NextResponse } from "next/server";
import { ProductDetailDataJacket, ProductDetailDataHoodies } from "@/app/Utils/index"; 

export async function POST(request) {
  try {
    const { productName } = await request.json();

    if (productName === "Jacket") {
      return NextResponse.json(ProductDetailDataJacket);
    } else if (productName === "Hoody") {
      return NextResponse.json(ProductDetailDataHoodies);
    } else {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error retrieving product:", error); 
    return NextResponse.json(
      { error: "Error retrieving product" },
      { status: 500 }
    );
  }
}









// import { NextResponse } from "next/server";
// import {ProductDetailDataJacket,ProductDetailDataHoodies} from "@/app/Utils/index"; 

// export async function GET() {
//   try {
   
//     return NextResponse.json( ProductDetailDataJacket );

//   } catch (error) {
//     console.error("Error retrieving product:", error); 
//     return NextResponse.json(
//       { error: "Error retrieving product" },
//       { status: 500 }
//     );
//   }
// }



// // import { ProductDetailData } from "@/app/Utils/index";
// // import { NextResponse } from "next/server";

// // export async function GET(req, { params }) {
// //   try {
// //     // Get product ID from URL params
// //     const productId = params.id;

// //     // Find the product from the static data array
// //     const selectedProduct = ProductDetailData.find((item) => item.id.toString() === productId);

// //     // If product is not found, return an error response
// //     if (!selectedProduct) {
// //       return NextResponse.json(
// //         { error: "Product not found" },
// //         { status: 404 }
// //       );
// //     }

// //     // Return the selected product details
// //     return NextResponse.json(selectedProduct);

// //   } catch (error) {
// //     console.error("Error retrieving product details:", error);
// //     return NextResponse.json(
// //       { error: "Error retrieving product details" },
// //       { status: 500 }
// //     );
// //   }
// // }
