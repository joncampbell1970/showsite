import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { addBookingSubmission } from "@/lib/store";

export async function POST(request: Request) {
  const body = await request.json();
  const submission = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    ...body,
  };
  addBookingSubmission(submission);
  return NextResponse.json({ ok: true, submission });
}
