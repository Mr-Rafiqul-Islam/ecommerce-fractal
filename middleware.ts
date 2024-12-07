import { NextResponse } from 'next/server';
import { clerkMiddleware, createRouteMatcher, auth } from '@clerk/nextjs/server';

// Create route matchers
const isProtectedRoute = createRouteMatcher(['/account(.*)']);

// Middleware logic
export default clerkMiddleware(async (auth, request) => {
  if (isProtectedRoute(request)) {
    // If the user is not authenticated, redirect them to the login page
    if (!(await auth()).userId) {
      return NextResponse.redirect(process.env.NEXT_PUBLIC_SERVER_URL || '/sign-in');
    }
  }
  
  // Proceed to the next middleware or route handler
  return NextResponse.next();
});

// Config: Applies middleware to specific routes
export const config = {
  matcher: [
    // Skip Next.js internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
