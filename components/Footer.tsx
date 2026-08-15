import { MailIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-12 md:py-16 text-white! ">
      <div className="grid md:grid-cols-2 gap-10 border-t border-[#9999994b] pb-12">
        <div className="md:col-span-2 lg:col-span-1">
          <Image src="/img/logo.png" alt="Logo" width={100} height={50} />
          <p className="mt-4 max-w-md leading-relaxed text-[#999999]">
            Creating Designs that sells, speaks and structures.
          </p>
        </div>
        <div className="flex items-center gap-4 md:justify-end">
          <Link className="block" href="https://instagram.com/graphical_ralph">
            <img src="/img/icon-instagram.svg" alt="" />
          </Link>
          <Link className="block" href={"https://pin.it/65gxLNKAw"}>
            <img src="/img/icon-pinterest.svg" alt="" />
          </Link>
          <Link className="block" href={"https://x.com/graphicalralph"}>
            <img src="/img/icon-twitter.svg" alt="" />
          </Link>
          <Link className="block" href={"mailto:graphicalralph@gmail.com"}>
            <MailIcon className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer
