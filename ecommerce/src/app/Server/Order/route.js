import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { userId, productId, quantity, total } = req.body;

    try {
      const order = await prisma.order.create({
        data: {
          userId,
          total,
          products: {
            create: {
              productId,
              quantity,
            },
          },
        },
      });

      return res.status(201).json(order);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Order creation failed" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
