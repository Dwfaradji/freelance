// app/api/upload
import { NextResponse } from "next/server";
import { PrismaClient } from ".prisma/client";
import dbConnect from "@/app/DataBase/dataBase";

const prisma = new PrismaClient();
const res = NextResponse;

export async function POST(req: Request) {
  //Connect date base postgres with prisma
  await dbConnect(req, res);
  // get the form data
  const data = await req.formData();

  // map through all the entries
  for (const entry of Array.from(data.entries())) {
    const [value] = entry;
    const isFile = typeof value == "object";

    if (isFile) {
      const blob = value as Blob;
      const filename = blob.name;
      // upload the stream to the database
      const uploadStream = await prisma.uploads.create({
        data: {
          content_type: blob.type,
          metadata: {}, //add your metadata here if any
        },
      });
    }
  }

  // return the response after all the entries have been processed.
  return NextResponse.json({ success: true });
}
