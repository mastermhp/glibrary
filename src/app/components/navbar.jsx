"use client";

import Link from "next/link";
import { UserButton, SignInButton, SignUpButton, useUser } from "@clerk/nextjs";

export function NavBar() {
  const { isSignedIn, user } = useUser();

  return (
    <nav className="bg-slate-800 p-4 opacity-90">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center justify-center">
          <Link href="/">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-red-800 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <span className="text-xl font-bold text-red-400">Lfg</span>
              </div>
            </div>
          </Link>
        </div>
       
        <div className="flex items-center space-x-4">
          {isSignedIn ? (
            <>
              <span className="text-white">Welcome, {user.firstName}!</span>
              {user.primaryEmailAddress?.emailAddress ===
                process.env.NEXT_PUBLIC_ADMIN_EMAIL && "parashmehedihasan@gmail.com" && (
                <Link href="/admin" className="text-white">
                  Admin Panel
                </Link>
              )}
              <UserButton afterSignOutUrl="/" />
            </>
          ) : (
            <>
              <SignInButton mode="modal">
                <button className="text-white">Sign In</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="text-white">Sign Up</button>
              </SignUpButton>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
