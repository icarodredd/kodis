import Image from "next/image";
import k from "@/public/k.jpg";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <section className="flex justify-between p-8 items-center">
      <Image
        className="rounded-full size-14 shadow-xl hover:shadow-none"
        src={k}
        alt="Kodis Logo"
      />
      <Button className="rounded-full font-bold w-40">Join Waitlist</Button>
    </section>
  );
}
