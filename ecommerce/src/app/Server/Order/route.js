// // import { PrismaClient } from "@prisma/client";
// // import { useSession, signIn } from "next-auth/react";

// // const prisma = new PrismaClient();
// // const { data: session } = useSession();

// // export default async function handler(req, res) {
// //   if (req.method === "POST") {
// //     const { userId, productId, quantity, totalPrice } = req.body;
// // // session.user.email && session.user.name
// //     try {
// //       const order = await prisma.order.create({
// //         data: {
// //           userId:userId,
// //           total:totalPrice,
// //           products: {
// //             create: {
// //               productId :productId,
// //               quantity :quantity,
// //             },
// //           },
// //         },
// //       });

// //       return res.status(201).json(order);
// //     } catch (error) {
// //       console.error(error);
// //       return res.status(500).json({ error: "Order creation failed" });
// //     }
// //   }

// //   return res.status(405).json({ error: "Method not allowed" });
// // }







// import { PrismaClient } from "@prisma/client";
// import { getSession } from "next-auth/react";

// const prisma = new PrismaClient();

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const session = await getSession({ req });
//     if (!session) {
//       return res.status(401).json({ error: "Unauthorized" });
//     }
//     const { productId, quantity, totalPrice } = req.body;
//     const user = await prisma.user.findUnique({
//       where: {
//         email: session.user.email,
//       },
//     });

//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     try {
//       const order = await prisma.order.create({
//         data: {
//           userId: user.id,
//           total: totalPrice,
//           products: {
//             create: {
//               productId,
//               quantity,
//             },
//           },
//         },
//         include: {
//           products: {
//             include: {
//               product: true, 
//             },
//           },
//         },
//       });

//       const orderSummary = {
//         orderId: order.id,
//         userEmail: user.email,
//         products: order.products.map((op) => ({
//           name: op.product.name,
//           quantity: op.quantity,
//           price: op.product.price,
//           total: op.product.price * op.quantity,
//         })),
//         totalPrice: order.total,
//         createdAt: order.createdAt,
//       };

//       // Return the order summary as a response
//       return res.status(201).json({ message: "Order created successfully", order: orderSummary });
//     } catch (error) {
//       console.error("Order creation failed:", error);
//       return res.status(500).json({ error: "Order creation failed" });
//     }
//   }

//   return res.status(405).json({ error: "Method not allowed" });
// }







import { PrismaClient } from "@prisma/client";
// import { useSession } from "next-auth/react"; // For session management
import { getSession } from "next-auth/react"; // For server-side session handling

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const session = await getSession({ req }); // Getting session server-side

    if (!session) {
      return res.status(401).json({ error: "You must be logged in to create an order" });
    }

    const { productId, quantity, totalPrice } = req.body;

    // Ensure session.user contains necessary information
    const { email, name } = session.user;

    try {
      // Retrieve user details from the database if needed (for example, address)
      // const user = await prisma.user.findUnique({
      //   where: { email: email },
      //   // include: { address: true }, // Assuming user has an address model
      // });

      // if (!user) {
      //   return res.status(404).json({ error: "User not found" });
      // }

      // // Create an order with the user details and the products
      // const order = await prisma.order.create({
      //   data: {
      //     userId: email, 
      //     total: totalPrice,
      //     products: {
      //       create: {
      //         productId: productId,
      //         quantity: quantity,
      //       },
      //     },
      //     address: user.address, 
      //   },
      //   include: {
      //     products: true, 
      //     user: true, 
      //   },
      // });

      // Send a response with the created order
      return res.status(201).json({ message: "Order created successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Order creation failed" });
    }
  }

  // Return a 405 if method is not POST
  return res.status(405).json({ error: "Method not allowed" });
}
