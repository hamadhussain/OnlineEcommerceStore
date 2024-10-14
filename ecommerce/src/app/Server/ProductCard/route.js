// // import { PrismaClient } from "@prisma/client";
// // import { NextResponse } from "next/server";

// // const prisma = new PrismaClient();

// // export async function POST(req) {
  
// //   const body = await req.json();
// //   if (body) {
    
// //   }
// //   return NextResponse.json({ message: body.greeting });
// //   console.log("hello world");

// // }



// /Server/ProductCard
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  const { imagname } = await req.json();

  try {
    const product = await prisma.product.findFirst({
      where: {
        images: imagname, // Use direct comparison
      },
      select: {
        description: true,
        name: true,
        price: true, // Include price in the selection
        category: true, // Include category in the selection
        stock: true, // Include stock in the selection
      },
    });

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    // Return the product details you want
    const { name, price, description, category, stock } = product;
    
    return NextResponse.json(
      { name, price, description, category, stock },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error retrieving product' }, { status: 500 });
  }
}







// import { PrismaClient } from "@prisma/client";
// import { NextResponse } from "next/server";

// const prisma = new PrismaClient();

// export async function POST(req) {
//   try {
//     const body = await req.json();
    
//     // Validate the body data
//     const { name, description, price, category, images, stock } = body;

//     if (!name || !description || !price || !category || !images || stock === undefined) {
//       return NextResponse.json({ error: "All fields are required." }, { status: 400 });
//     }

//     // Create a new product in the database
//     const newProduct = await prisma.product.create({
//       data: {
//         name,
//         description,
//         price,
//         category,
//         images,
//         stock,
//       },
//     });

//     return NextResponse.json(newProduct, { status: 201 });
//   } catch (error) {
//     console.error("Error creating product:", error);
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 });
//   } finally {
//     await prisma.$disconnect();
//   }
// }
