"use client";

import { Button } from "./button";
import Image from "next/image";

export default function FacebookButton() {
  return (
    <Button className="w-full flex items-center gap-3 font-semibold text-gray-800 text-base border-gray-300 border bg-white hover:text-white">
      <Image src="/Facebook.svg" alt="Google" width={24} height={24} />
      Facebook
    </Button>
  );
}
