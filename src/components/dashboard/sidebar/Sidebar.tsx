import { Button } from "@/components/ui/button"
import { CgProfile } from "react-icons/cg"
import { AiOutlineSafety, AiOutlineTeam } from "react-icons/ai"
import { IoNotificationsOutline } from "react-icons/io5"
import { HiMiniQrCode } from "react-icons/hi2"
import { HiOutlineMail } from "react-icons/hi"
import Link from "next/link"

const menuItems = [
  {
    title: "Profile",
    path: "/dashboard/profile",
    icon: <CgProfile />,
  },
  {
    title: "Security",
    path: "/dashboard/security",
    icon: <AiOutlineSafety />,
  },
  {
    title: "Notification",
    path: "/dashboard/notification",
    icon: <IoNotificationsOutline />,
  },
  {
    title: "Preferences",
    path: "/dashboard/preferences",
    icon: <HiMiniQrCode />,
  },
  {
    title: "Team",
    path: "/dashboard/team",
    icon: <AiOutlineTeam />,
  },
  {
    title: "Email",
    path: "/dashboard/email",
    icon: <HiOutlineMail />,
  },
]

const Sidebar = () => {
  return (
    <div className='w-[304px] border-r-[1px] pt-12 flex flex-col px-6 gap-3'>
      <h3 className='text-gray-400 font-semibold text-[12px] leading-6'>
        Settings
      </h3>
      <div className='flex flex-col gap-3'>
        <ul>
          {menuItems.map((cat) => (
            <li key={cat.title}>
              <Button variant='ghost' className='w-full'>
                <Link
                  href={cat.path}
                  className='w-full flex justify-start gap-2'
                >
                  {cat.icon}
                  {cat.title}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
