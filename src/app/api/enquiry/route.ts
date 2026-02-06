import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { addEnquirySubmission } from "@/lib/store";

export async function POST(request: Request) {
  const body = await request.json();
  const submission = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    ...body,
  };
  addEnquirySubmission(submission);
  return NextResponse.json({ ok: true, submission });
}
