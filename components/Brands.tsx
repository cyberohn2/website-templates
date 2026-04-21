import { Separator } from "@/components/ui/separator"
import audiLogo from "@/assets/img/audi.png"
import ferrariLogo from "@/assets/img/ferrari.png"
import hondaLogo from "@/assets/img/honda.png"
import teslaLogo from "@/assets/img/tesla.png"
import toyotaLogo from "@/assets/img/toyota.png"
import Image from "next/image"

const Brands = () => {
  return (
    <section className="py-16">
      <div className="mb-15 flex items-center gap-6 text-(--body-1)">
        <Separator className="flex-1" />
        <p>Brands</p>
        <Separator className="flex-1" />
      </div>
      <div className="flex items-center justify-between">
        <Image
          src={audiLogo}
          alt="Audi Logo"
          width={152}
          height={130}
          className="h-10! w-11! md:h-16.25! md:w-19! lg:h-32.5! lg:w-38! object-contain"
        />
        <Image
          src={ferrariLogo}
          alt="Ferrari Logo"
          width={152}
          height={130}
          className="h-10! w-11! md:h-16.25! md:w-19! lg:h-32.5! lg:w-38! object-contain"
        />
        <Image
          src={hondaLogo}
          alt="Honda Logo"
          width={152}
          height={130}
          className="h-10! w-11! md:h-16.25! md:w-19! lg:h-32.5! lg:w-38!"
        />
        <Image
          src={teslaLogo}
          alt="Tesla Logo"
          width={152}
          height={130}
          className="h-10! w-11! md:h-16.25! md:w-19! lg:h-32.5! lg:w-38! object-contain"
        />
        <Image
          src={toyotaLogo}
          alt="Toyota Logo"
          width={152}
          height={130}
          className="h-10! w-11! md:h-16.25! md:w-19! lg:h-32.5! lg:w-38! object-contain"
        />
      </div>
    </section>
  );
}

export default Brands
