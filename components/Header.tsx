import Image from "next/image";
import k from "@/public/k.jpg";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <section className="flex justify-between p-8 items-center max-lg:h-10">
      <Image
        className="rounded-full size-14 shadow-xl hover:shadow-none max-lg:size-10"
        src={k}
        alt="Kodis Logo"
      />
    </section>
  );
}
