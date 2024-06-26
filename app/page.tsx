"use client";
import { Button } from "@/components/ui/button";
import WaitlistModal from "@/components/WaitlistModal";
import k from "@/public/k.jpg";
import png from "@/public/pngwing.com.png";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [click, setClick] = useState(false);

  return (
    <>
      <div className="max-lg:mt-8">
        <h1 className="font-bold text-7xl text-center max-lg:text-3xl">
          Unleash your inspiration for
        </h1>
        <h1 className="font-bold text-7xl text-center max-lg:text-3xl">
          new projects
        </h1>
        <p className="font-medium text-gray-500 text-center mt-12 text-xl max-lg:text-sm">
          Say goodbye to the lack of ideas and references for your projects.
        </p>
        <div className="flex justify-center">
          <Button
            onClick={() => setClick(true)}
            className="mt-12 rounded-full font-bold w-40"
          >
            Join Waitlist
          </Button>
        </div>
        <div className="relative flex justify-center mt-8 items-end">
          <Image src={png} alt="Tela de iphone" />
          <Image
            className="absolute inset-y-2/4 rounded-full size-40 animate-pulse"
            src={k}
            alt="Kodis Logo"
          />
        </div>
      </div>
      {click && <WaitlistModal setClick={setClick} />}
    </>
  );
}
