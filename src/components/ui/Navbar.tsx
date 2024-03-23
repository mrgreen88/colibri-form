import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./button";
import { ModeToggle } from "./toggle-mode";

const Navbar = () => {
  return (
    <div className="py-2 top-0 w-full fixed">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <Image src="/Logo.svg" alt="Logo" width={48} height={48} />
        </Link>
        <div className="flex items-center gap-3">
          <Link className={buttonVariants()} href="/sign-in">
            Sign in
          </Link>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
