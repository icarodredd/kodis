import { Button } from "@/components/ui/button";
import Image from "next/image";
import png from "@/public/pngwing.com.png";

export default function Home() {
  return (
    <div className="h-screen">
      <h1 className="font-bold text-7xl text-center">
        Unleash your inspiration for
      </h1>
      <h1 className="font-bold text-7xl text-center">new projects</h1>
      <p className="font-medium text-gray-500 text-center mt-12 text-xl">
        Say goodbye to the lack of ideas and references for your projects.
      </p>
      <div className="flex justify-center">
        <Button className="mt-12 rounded-full font-bold w-40">
          Join Waitlist
        </Button>
      </div>
      <div className="flex justify-center mt-8">
        <Image className="" src={png} alt="Tela de iphone" />
      </div>
    </div>
  );
}
