import Image from "next/image";
import { FC, ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="w-[360px] h-[578px] flex justify-center items-center flex-col mt-24">
      <Image
        src="/Logo.svg"
        alt="Logo"
        width={48}
        height={48}
        className="mb-6"
      />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default AuthLayout;
