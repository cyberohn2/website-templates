import { ArrowUpRight } from "lucide-react";
import Link from "next/link";


const Cta = () => {
  return (
    <div className="py-[3.75rem]">
      <div
        className="rounded-lg border-b bg-cover bg-center bg-no-repeat px-10 py-20"
        style={{ backgroundImage: "url('/img/car-img-5.jpg')" }}
      >
        <h2 className="text-[2rem] lg:text-[3rem] font-medium !mb-10 leading-[3.5rem]">Book your luxury <br />car detailing today</h2>
        <p className="text-[#cccccc] font-medium mb-12 ">Click the link below. Fill out the details and <br /> we'll get back to you in less than 24 hours.</p>
        <Link
            href="/contact"
            className="inline-block mt-2 hover:underline underline-offset-2 font-medium text-[20px] "
        >
            <span>Get a Quote Now</span> <ArrowUpRight className="ml-2 inline" />
        </Link>
      </div>
    </div>
  );
}

export default Cta
