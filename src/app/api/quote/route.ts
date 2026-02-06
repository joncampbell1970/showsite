import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { addQuoteSubmission } from "@/lib/store";

export async function POST(request: Request) {
  const body = await request.json();
  const submission = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    ...body,
  };
  addQuoteSubmission(submission);
  return NextResponse.json({ ok: true, submission });
}
