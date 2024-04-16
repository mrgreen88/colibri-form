import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Avatar from "@/assets/images/Avatar.webp"
import AlertDialogDelete from "@/components/dashboard/custom/AlertDialogDelete"

const Profile = () => {
  return (
    <div className="w-full py-12 px-8">
      <div>
        <h3 className="font-semibold text-gray-900">Profile</h3>
        <p className="text-sm text-gray-600">
          This information will be displayed publicly so be careful what you
          share.
        </p>
        <Separator className="bg-separator mt-5 mb-6" />
      </div>

      <div className="text-sm text-gray-900">
        <div className="flex items-center gap-8 w-full">
          <p className="w-[200px] min-w-[200px] text-sm font-medium text-gray-800">
            Your photo
          </p>
          <Image
            src={Avatar}
            alt="Your Photo"
            width={1000}
            height={640}
            className="rounded-full aspect-square object-cover w-16 h-16"
          />
          <div className="flex gap-2 w-full justify-end items-center">
            <AlertDialogDelete />
            <Button
              variant="destructive"
              className="text-primary text-sm font-semibold px-[6px] py-[2px] h-5"
            >
              Update
            </Button>
          </div>
        </div>

        <Separator className="bg-separator my-5" />

        <div className="flex items-center gap-8 w-full h-8">
          <p className="w-[200px] min-w-[200px] text-sm font-medium text-gray-800">
            Full name
          </p>
          <p className="w-[266px] min-w-[266px]">Taetu Ivan</p>
          <div className="flex gap-2 w-full justify-end items-center">
            <Button
              variant="destructive"
              className="text-primary text-sm font-semibold px-[6px] py-[2px] h-5"
            >
              Update
            </Button>
          </div>
        </div>

        <Separator className="bg-separator my-5" />

        <div className="flex items-center gap-8 w-full h-8">
          <p className="w-[200px] min-w-[200px] text-sm font-medium text-gray-800">
            Email address
          </p>
          <p className="w-[266px] min-w-[266px]">nelu.taetu@explore.md</p>
          <div className="flex gap-2 w-full justify-end items-center">
            <Button
              variant="destructive"
              className="text-primary text-sm font-semibold px-[6px] py-[2px] h-5"
            >
              Update
            </Button>
          </div>
        </div>

        <Separator className="bg-separator mt-5 mb-6" />

        <div className="flex items-center gap-8 w-full h-8">
          <p className="w-[200px] min-w-[200px] text-sm font-medium text-gray-800">
            Role
          </p>
          <p className="w-[266px] min-w-[266px]">Data processing manager</p>
          <div className="flex gap-2 w-full justify-end items-center">
            <Button
              variant="destructive"
              className="text-primary text-sm font-semibold px-[6px] py-[2px] h-5"
            >
              Update
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
