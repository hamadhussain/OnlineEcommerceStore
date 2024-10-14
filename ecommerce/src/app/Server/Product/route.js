import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  const { imagname } = await req.json();

  try {
    const product = await prisma.product.findFirst({
      where: {
        images: {
          has: imagname, // Use 'has' to check if the image name exists in the array
        },
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


// export async function GET() {
//   const { imagname } = await req.json();

//   try {
//     const product = await prisma.product.delete({
//       where: {
//         images: {
//           has: imagname, // Use 'has' to check if the image name exists in the array
//         },
//       },
//       select: {
//         description: true,
//         name: true,
//         price: true, // Include price in the selection
//         category: true, // Include category in the selection
//         stock: true, // Include stock in the selection
//       },
//     });

//     if (!product) {
//       return NextResponse.json({ error: 'Product not found' }, { status: 404 });
//     }

//     // Return the product details you want
//     const { name, price, description, category, stock } = product;
    
//     return NextResponse.json(
//       { name, price, description, category, stock },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: 'Error retrieving product' }, { status: 500 });
//   }
// }












// // import { NextResponse } from 'next/server';
// // import { PrismaClient } from '@prisma/client';

// // const prisma = new PrismaClient();

// // export async function POST(req) {
// //   const { imagname } = await req.json();

// //   try {
// //     const product = await prisma.product.findFirst({
// //         where:{
// //             images:imagname,
// //         }
// //     });

// //     return NextResponse.json(product, { status: 201 });
// //   } catch (error) {
// //     console.error(error);
// //     return NextResponse.json({ error: 'Error creating product' }, { status: 500 });
// //   }
// // }

// import { NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export async function POST(req) {
//   const { imagname } = await req.json();

//   try {
//     const product = await prisma.product.findFirst({
//       where: {
//         images: {
//           has: imagname, // Use 'has' to check if the image name exists in the array
//         },
//       },
//       select: {
//         description: true,
//         name: true,
//       },
//     });

//     if (!product) {
//       return NextResponse.json({ error: 'Product not found' }, { status: 404 });
//     }

//     // Return the product details you want
//     const { name, price, description, category, stock } = product;
    
//     return NextResponse.json(
//       { name, price, description, category, stock },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: 'Error retrieving product' }, { status: 500 });
//   }
// }
