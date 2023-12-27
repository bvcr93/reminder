import { UserButton } from "@clerk/nextjs";
import React from "react";

function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between p-4 px-8 h-[60px]">
      logo
      <div className="flex gap-4 items-center">
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
}

export default Navbar;
