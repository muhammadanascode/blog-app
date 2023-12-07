// api/categories/index.js

import { NextResponse } from "next/server";
import prisma from "../../../../utils/connect";

export default async function handler(req, res) {
  try {
    const categories = await prisma.category.findMany();
    const responseBody = JSON.stringify(categories);

    return new NextResponse(responseBody, { status: 200 });
  } catch (error) {
    const errorMessage = JSON.stringify({ message: "Something went wrong" });
    
    return new NextResponse(errorMessage, { status: 500 });
  }
}
