import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!token?.tokens) {
      return NextResponse.json("Not authenticated", { status: 401 });
    }

    return NextResponse.json(token.tokens);
  } catch {
    return NextResponse.json("Failed to retrieve token", { status: 500 });
  }
}
