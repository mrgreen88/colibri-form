import Image from "next/image"
import Menu from "@/assets/images/Menu.svg"
import Logo from "@/assets/images/Logo.svg"
import Avatar from "@/assets/images/Avatars.svg"
import { Button } from "../../ui/button"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="w-full h-[56px] flex items-center justify-between px-6 py-[10px] border-b-[1px] z-10">
      <div className="flex gap-10 items-center">
        <div className="flex items-center justify-center gap-[17px]">
          <Image src={Menu} alt="Menu" width={22} height={22} />
          <Link href="/dashboard" className="flex items-center gap-[10px]">
            <Image src={Logo} alt="Logo" width={24} height={24} />
            <p className="text-xl font-bold text-gray-900">COLIBRI</p>
          </Link>
        </div>
        <div className="flex gap-8">
          <Button variant="ghost" size="icon">
            Bookings
          </Button>
          <Button variant="ghost" size="icon">
            Marketing
          </Button>
          <Button variant="ghost" size="icon">
            Contability
          </Button>
          <Button variant="ghost" size="icon">
            My details
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Image src={Avatar} alt="Avatar" width={24} height={24} />
        <p className="text-gray-900">Taetu Ivan</p>
      </div>
    </div>
  )
}

export default Navbar
