"use client";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import React from "react";

function Navbar() {
  const { userId } = useAuth();
  return (
    <nav className="flex w-full items-center justify-between p-4 px-8 h-[60px]">
      RemindMe
      <div className="flex gap-4 items-center">
        {userId ? <UserButton afterSignOutUrl="/" /> : <SignInButton />}
      </div>
    </nav>
  );
}

export default Navbar;
