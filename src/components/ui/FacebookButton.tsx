"use client";

import { Button } from "./button";
import Image from "next/image";
import { FC, ReactNode } from "react";
import { signIn } from "next-auth/react";

interface FacebookSignInButtonProps {
  children: ReactNode;
}

const FacebookButton: FC<FacebookSignInButtonProps> = ({ children }) => {
  return (
    <Button
      onClick={() => signIn("facebook")}
      className="w-full flex items-center gap-3 border font-semibold bg-transparent hover:bg-accent hover:text-accent-foreground text-button"
    >
      <Image src="/Facebook.svg" alt="Google" width={24} height={24} />
      {children}
    </Button>
  );
};

export default FacebookButton;
