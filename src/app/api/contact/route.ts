import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const product = await request.json();
  console.log(product, "product");
  return NextResponse.json({product});
}
