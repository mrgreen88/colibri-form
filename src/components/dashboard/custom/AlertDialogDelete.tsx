import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Avatar from "@/assets/images/Avatar.webp"
import Close from "@/assets/images/icons/Close.svg"

const AlertDialogDelete = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="destructive"
          className="text-[#dc2626] text-sm font-semibold px-[6px] py-[2px] h-5"
        >
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="flex flex-col gap-8">
        <AlertDialogHeader>
          <Image
            src={Avatar}
            alt="Your Photo"
            width={1000}
            height={640}
            className="rounded-full aspect-square object-cover w-11 h-11 mb-4"
          />
          <AlertDialogCancel className="absolute top-0 right-5 border-none hover:bg-transparent p-0">
            <Image src={Close} alt="Close" width={12} height={12} />
          </AlertDialogCancel>
          <AlertDialogTitle className="font-semibold text-gray-900 mb-1">
            Remove profile photo
          </AlertDialogTitle>
          <AlertDialogDescription className="text-gray-600 text-sm">
            Are you sure you want to remove your photo? We’ll replace it with a
            default Colibri avatar.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex w-full gap-3 text-sm text-gray-900">
          <AlertDialogCancel className="w-full">Cancel</AlertDialogCancel>
          <AlertDialogAction className="w-full">
            Yes, Remove photo
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AlertDialogDelete
