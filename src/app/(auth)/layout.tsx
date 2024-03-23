import Image from "next/image";
import { FC, ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <>
      <Image
        src="/Lines.svg"
        alt="Lines"
        width={768}
        height={768}
        className="absolute top-0 z-[-100] rounded-full opacity-[4%]"
      />
      <div className="w-[360px] h-[578px] flex justify-top items-center flex-col mt-24">
        <Image
          src="/Logo.svg"
          alt="Logo"
          width={48}
          height={48}
          className="mb-6"
        />
        <div className="w-full">{children}</div>
      </div>
    </>
  );
};

export default AuthLayout;
