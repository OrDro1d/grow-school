import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const user = req.cookies.get('userId')?.value;
  console.log(user);
  if (!user) {
    return NextResponse.redirect(new URL('auth/signin', req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/user/:path*', '/course/:path*'],
};
