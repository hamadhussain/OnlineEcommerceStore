import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name } = req.body;

    try {
      const user = await prisma.user.findUnique({ where: { email } });

      if (!user) {
        const newUser = await prisma.user.create({
          data: {
            email,
            name,
          },
        });
        return res.status(201).json(newUser);
      }

      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "User creation failed" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
