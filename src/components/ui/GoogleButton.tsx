"use client"

import Image from "next/image"
import { Button } from "./button"
import { FC, ReactNode } from "react"
import { signIn } from "next-auth/react"
import Google from "@/assets/images/Google.svg"

interface GoogleSignInButtonProps {
  children: ReactNode
}

const GoogleButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  return (
    <Button
      onClick={() => signIn("google")}
      className='w-full flex items-center gap-3 border font-semibold bg-transparent hover:bg-accent hover:text-accent-foreground text-button'
    >
      <Image src={Google} alt='Google' width={24} height={24} />
      {children}
    </Button>
  )
}

export default GoogleButton
