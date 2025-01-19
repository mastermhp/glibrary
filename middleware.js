import { authMiddleware, clerkClient } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/", "/sign-in", "/sign-up"],
  async afterAuth(auth, req, evt) {
    if (auth.userId && auth.isPublicRoute) {
      const user = await clerkClient.users.getUser(auth.userId);
      
      if (user.emailAddresses[0].emailAddress === process.env.ADMIN_EMAIL) {
        await clerkClient.users.updateUser(auth.userId, {
          publicMetadata: { role: "admin" },
        });
      }
    }

    if (req.nextUrl.pathname === "/admin") {
      if (!auth.userId) {
        return NextResponse.redirect(new URL("/sign-in", req.url));
      }

      const user = await clerkClient.users.getUser(auth.userId);

      if (user.emailAddresses[0].emailAddress !== process.env.ADMIN_EMAIL) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }
  },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

