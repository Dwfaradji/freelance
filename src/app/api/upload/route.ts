import { NextRequest, NextResponse } from "next/server";
import { UploadFile } from "@/app/Utils/UploadFile";

export async function POST(request: NextRequest) {
  await UploadFile(request);
  return NextResponse.json({ success: true });
}
