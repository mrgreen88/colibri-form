"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "../ui/button"
import ArrowLeft from "@/assets/images/ArrowLeft.svg"

export function CheckEmailForm() {
  return (
    <div>
      <div className='text-center mb-8'>
        <h1 className='sm:text-3xl text-2xl leading-[38px] font-semibold text-header mb-3'>
          Check your email
        </h1>
        <p className='text-paragraph'>
          {`We sent a password reset link to your email`}
        </p>
      </div>

      <Button className='w-full font-semibold mb-8' type='submit'>
        Click to reset
      </Button>

      <Link
        href='/sign-in'
        className='flex justify-center gap-[13.5px] items-center text-primary font-semibold text-sm hover:underline'
      >
        <Image src={ArrowLeft} alt='Arrow Left' width={7} height={12} />
        <p>Back to log in</p>
      </Link>
    </div>
  )
}
