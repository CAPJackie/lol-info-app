import { NextRequest, NextResponse } from "next/server";

const allowedOrigin = [process.env.BASE_URL];

export function middleware(request: NextRequest) {
  const origin = request.headers.get("origin");

  if (origin && !allowedOrigin.includes(origin)) {
    return new NextResponse(null, {
      status: 400,
      statusText: "Bad Request",
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  return NextResponse.next();
}
