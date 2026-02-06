import { NextResponse } from "next/server";
import { getAdminData } from "@/lib/store";

export async function GET() {
  return NextResponse.json(getAdminData());
}
