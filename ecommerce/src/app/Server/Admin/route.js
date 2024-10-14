import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  const { name, description, price, category, images, stock } = await req.json();

  try {
    const product = await prisma.product.create({
      data: {
        name,
        description,
        price,
        category,
        images,
        stock,
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error creating product' }, { status: 500 });
  }
}
