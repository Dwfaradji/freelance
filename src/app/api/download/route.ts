// app/api/upload
import { Prisma, PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { Readable } from "stream";
import UploadWhereUniqueInput = Prisma.UploadWhereUniqueInput;

const prisma = new PrismaClient();

export async function POST(req: Request) {
  // get the form data
  const data = await req.formData();
  console.log(data);
  // map through all the entries
  for (const entry of Array.from(data.entries())) {
    const [key, value] = entry;
    // FormDataEntryValue can either be type Blob or string
    // if its type is object then it's a Blob
    const isFile = typeof value == "object";

    if (isFile) {
      const blob = value as Blob;
      const filename = blob.name;

      // check if file already exists in database using Prisma
      // const existing = await prisma.upload.findUnique({
      //   where: {
      //     filename: filename,
      //   } as UploadWhereUniqueInput,
      // });
      // if (existing) {
      //   // If file already exists, let's skip it.
      //   // If you want a different behavior such as override, modify this part.
      //   continue;
      // }

      // convert the blob to a stream
      const buffer = Buffer.from(await blob.arrayBuffer());
      const stream = Readable.from(buffer);

      await prisma.upload.create({
        data: {
          filename: filename,
          content: buffer,
          contentType: blob.type,
          metadata: {}, // add your metadata here if any
        },
      });
    }
  }

  // return the response after all the entries have been processed.
  return NextResponse.json({ success: true });
}

//====================================================================================================//

// // app/api/upload
// import { connectToDb, fileExists } from "@/lib/mongo";
// import { NextResponse } from "next/server";
// import { Readable } from "stream";
//
// export async function POST(req: Request) {
//   const { bucket } = await connectToDb();
//   // get the form data
//   const data = await req.formData();
//
//   // map through all the entries
//   for (const entry of Array.from(data.entries())) {
//     const [key, value] = entry;
//     // FormDataEntryValue can either be type `Blob` or `string`
//     // if its type is object then it's a Blob
//     const isFile = typeof value == "object";
//
//     if (isFile) {
//       const blob = value as Blob;
//       const filename = blob.name;
//
//       // check if file already exists BDD prisma
//       const existing = await fileExists(filename);
//       if (existing) {
//         // If file already exists, let's skip it.
//         // If you want a different behavior such as override, modify this part.
//         continue;
//       }
//
//       //conver the blob to stream
//       const buffer = Buffer.from(await blob.arrayBuffer());
//       const stream = Readable.from(buffer);
//
//       const uploadStream = bucket.openUploadStream(filename, {
//         // make sure to add content type so that it will be easier to set later.
//         contentType: blob.type,
//         metadata: {}, //add your metadata here if any
//       });
//
//       // pipe the readable stream to a writeable stream to save it to the database
//       await stream.pipe(uploadStream);
//     }
//   }
//
//   // return the response after all the entries have been processed.
//   return NextResponse.json({ success: true });
// }
