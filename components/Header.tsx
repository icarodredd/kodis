import Image from "next/image";
import k from "@/public/k.jpg";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="flex justify-between p-4">
      <Image
        className="rounded-full size-14 shadow-xl hover:shadow-none"
        src={k}
        alt="Kodis Logo"
      />
      <Button className="rounded-full font-bold">Join Waitlist</Button>
    </div>
  );
}
