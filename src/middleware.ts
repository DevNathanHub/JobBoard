import { authMiddleware } from "@clerk/nextjs";
import { redirectToSignIn } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/"], // List of public routes
  afterAuth: async (auth, req: NextRequest) => {
    const { userId, sessionClaims } = auth;

    // Avoid onboarding redirect loops and allow access to dashboard/* routes
    const isDashboardRoute = req.nextUrl.pathname.startsWith("/dashboard");

    // If user is authenticated but not onboarded, redirect to onboarding (/dashboard)
    if (userId && !sessionClaims?.metadata?.onboardingComplete && !isDashboardRoute) {
      const onboardingUrl = new URL("/dashboard", req.url);
      return NextResponse.redirect(onboardingUrl);
    }

    // If the user is already on /dashboard or any dashboard/* route, allow them to continue
    if (userId && !sessionClaims?.metadata?.onboardingComplete && isDashboardRoute) {
      return NextResponse.next(); // Allow access to onboarding/dashboard-related pages
    }

    // If user is not signed in and the route is private, redirect to sign-in
    if (!userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    // User is authenticated and the route is private, allow them to proceed
    if (userId && !auth.isPublicRoute) {
      return NextResponse.next();
    }

    // If the route is public, anyone can view it
    return NextResponse.next();
  }
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
