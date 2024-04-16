import Navbar from "@/components/dashboard/navbar/Navbar"
import Sidebar from "@/components/dashboard/sidebar/Sidebar"
import { FC, ReactNode } from "react"

interface AuthLayoutProps {
  children: ReactNode
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-full bg-[#f0f4f9]">
      <div className="flex flex-col h-screen w-[1280px] m-auto bg-white">
        <Navbar />
        <div className="flex h-screen">
          <Sidebar />
          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
