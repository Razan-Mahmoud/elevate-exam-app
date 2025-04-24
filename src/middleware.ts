import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const authPages = new Set(["/auth/login", "/auth/register"]);
const privatePages = new Set(["/dashboard"]);

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  token?.token;

  //   Protected routing
  if (privatePages.has(req.nextUrl.pathname) && token) {
    if (token) return NextResponse.next();
    const redirectUrl = new URL("/auth/login", req.nextUrl.origin);
    return NextResponse.redirect(redirectUrl);
  }
  if (authPages.has(req.nextUrl.pathname)) {
    if (token) {
      const redirectUrl = new URL("/dashboard", req.nextUrl.origin);
      return NextResponse.redirect(redirectUrl);
    }
    return NextResponse.next();
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

// If I want public pages

// const authPages = new Set(["/auth/login", "/auth/register"]);
// const publicPages = new Set(["/", ...Array.from(authPages)]);
// export default async function middleware(req: NextRequest) {
//   const token = await getToken({ req });

//   if (publicPages.has(req.nextUrl.pathname)) {
//     if (!token) return NextResponse.next();

//     if (authPages.has(req.nextUrl.pathname)) {
//       const redirectUrl = new URL("/auth/login", req.nextUrl.origin);
//       return NextResponse.redirect(redirectUrl);
//     }
//   }

//   if (token) return NextResponse.next();

//   const redirectUrl = new URL("/auth/login", req.nextUrl.origin);
//   return NextResponse.redirect(redirectUrl);
// }
