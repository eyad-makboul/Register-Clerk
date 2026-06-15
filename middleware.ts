import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.[0-9a-z]+$).*)',
    '/(api|trpc)(.*)',
  ],
};