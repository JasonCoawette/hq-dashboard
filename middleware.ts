import { NextRequest, NextResponse } from 'next/server';

//TODO: Make sure each function is its own thing

export function middleware(req: NextRequest) {
  // Example: Redirect to login if not authenticated
  // TODO: Implement authentication

  return NextResponse.next();
}