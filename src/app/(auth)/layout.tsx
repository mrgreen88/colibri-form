import Image from "next/image"
import { FC, ReactNode } from "react"
import Lines from "@/assets/images/Lines.svg"
import Logo from "@/assets/images/Logo.svg"

interface AuthLayoutProps {
  children: ReactNode
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <>
      <Image
        src={Lines}
        alt='Lines'
        width={768}
        height={768}
        className='absolute top-0 z-[-100] rounded-full opacity-[4%]'
      />
      <div className='w-[360px] h-[578px] flex justify-top items-center flex-col mt-24'>
        <Image src={Logo} alt='Logo' width={48} height={48} className='mb-6' />
        <div className='w-full'>{children}</div>
      </div>
    </>
  )
}

export default AuthLayout
