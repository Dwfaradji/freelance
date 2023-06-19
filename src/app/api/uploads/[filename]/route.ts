import { NextResponse } from "next/server";
import { Prisma, PrismaClient } from "@prisma/client";
import UploadWhereUniqueInput = Prisma.UploadWhereUniqueInput;
import { Readable } from "stream";

const prisma = new PrismaClient();

type Params = {
  params: { filename: string };
};

export async function GET(req: Request, { params }: Params) {
  // get the form data
  const data = await req.formData();

  // map through all the entries
  for (const entry of Array.from(data.entries())) {
    const [key, value] = entry;
    // FormDataEntryValue can either be type `Blob` or `string`
    // if its type is object then it's a Blob
    const isFile = typeof value == "object";

    if (isFile) {
      const blob = value as Blob;
      const filename = blob.name;

      // check if file already exists in database using Prisma
      const existing = await prisma.upload.findUnique({
        where: {
          filename: filename,
        } as UploadWhereUniqueInput,
      });
      if (existing) {
        // If file already exists, let's skip it.
        // If you want a different behavior such as override, modify this part.
        continue;
      }

      // convert the blob to a stream
      const buffer = Buffer.from(await blob.arrayBuffer());
      const stream = Readable.from(buffer);

      await prisma.upload.create({
        data: {
          filename: filename,
          content: buffer, // Modifier cette ligne pour utiliser le buffer plutôt que le flux
          contentType: blob.type,
          metadata: {}, // add your metadata here if any
        },
      });
    }
  }

  // return the response after all the entries have been processed.
  return NextResponse.json({ success: true });
}

//======================================================================================================//
// // app/api/uploads/[filename]/route.ts
// import { connectToDb } from "@/lib/mongo";
// import { NextResponse } from "next/server";
//
// type Params = {
//   params: { filename: string };
// };
//
// export async function GET(req: Request, { params }: Params) {
//   // 1. get GridFS bucket
//   const { bucket } = await connectToDb();
//
//   const filename = params.filename as string;
//   // 2. validate the filename
//   if (!filename) {
//     return new NextResponse(null, { status: 400, statusText: "Bad Request" });
//   }
//
//   const files = await bucket.find({ filename }).toArray();
//   if (!files.length) {
//     return new NextResponse(null, { status: 404, statusText: "Not found" });
//   }
//
//   // 3. get file data
//   const file = files.at(0)!;
//
//   // 4. get the file contents as stream
//   // Force the type to be ReadableStream since NextResponse doesn't accept GridFSBucketReadStream
//   const stream = bucket.openDownloadStreamByName(filename) as unknown as ReadableStream;
//
//   // 5. return a streamed response
//   return new NextResponse(stream, {
//     headers: {
//       "Content-Type": file.contentType!,
//     },
//   });
// }
