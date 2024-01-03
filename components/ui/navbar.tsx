import { SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";
import { auth } from "@clerk/nextjs";
function Navbar() {
  const { userId }: { userId: string | null } = auth();
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
