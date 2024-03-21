import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./button";

const Navbar = () => {
  return (
    <div className="bg-gray-100 py-2 top-0 w-full fixed">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <Image src="/Logo.svg" alt="Logo" width={48} height={48} />
        </Link>
        <Link className={buttonVariants()} href="/sign-in">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
