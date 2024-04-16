import Navbar from "@/components/dashboard/navbar/Navbar"
import Sidebar from "@/components/dashboard/sidebar/Sidebar"
import { FC, ReactNode } from "react"

interface AuthLayoutProps {
  children: ReactNode
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <div className='flex h-screen'>
        <Sidebar />
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
