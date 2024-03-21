"use client";

import Image from "next/image";
import { Button } from "./button";

export default function GoogleButton() {
  return (
    <Button className="w-full flex items-center gap-3 font-semibold text-gray-800 text-base border-gray-300 border bg-white hover:text-white">
      <Image src="/Google.svg" alt="Google" width={24} height={24} />
      Google
    </Button>
  );
}
