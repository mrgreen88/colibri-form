import Link from "next/link"
import { AiOutlineTeam } from "react-icons/ai"
import {
  HiOutlineUserCircle,
  HiMiniQrCode,
  HiOutlineBell,
} from "react-icons/hi2"
import { HiOutlineMail } from "react-icons/hi"
import { IoShieldCheckmarkOutline } from "react-icons/io5"

const menuItems = [
  {
    title: "Profile",
    path: "/dashboard/profile",
    icon: <HiOutlineUserCircle size={20} />,
  },
  {
    title: "Security",
    path: "/dashboard/security",
    icon: <IoShieldCheckmarkOutline size={20} />,
  },
  {
    title: "Notification",
    path: "/dashboard/notification",
    icon: <HiOutlineBell size={20} />,
  },
  {
    title: "Preferences",
    path: "/dashboard/preferences",
    icon: <HiMiniQrCode size={19} />,
  },
  {
    title: "Team",
    path: "/dashboard/team",
    icon: <AiOutlineTeam size={20} strokeWidth={1.5} />,
  },
  {
    title: "Email",
    path: "/dashboard/email",
    icon: <HiOutlineMail size={19} strokeWidth={1.5} />,
  },
]

const Sidebar = () => {
  return (
    <div className="w-[304px] min-w-[304px] border-r-[1px] pt-12 flex flex-col px-6 gap-3 bg-[#f9fafb]">
      <h3 className="text-gray-400 font-semibold text-[12px] leading-6">
        Settings
      </h3>
      <div className="flex flex-col gap-3">
        <ul className="flex gap-3 flex-col">
          {menuItems.map((cat) => (
            <li key={cat.title}>
              <Link
                href={cat.path}
                className="w-full flex justify-start items-center gap-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:text-primary focus:bg-accent px-3 py-2 rounded-md"
              >
                {cat.icon}
                {cat.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
