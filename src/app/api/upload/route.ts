import { NextRequest, NextResponse } from "next/server";
import { UploadFile } from "@/lib/UploadFile";


export async function POST(request: NextRequest) {
  await UploadFile(request);
  return NextResponse.json({ success: true });
}
