import footerLogo from "@/assets/img/footer-logo.webp"
import Image from "next/image"

const Footer = () => {
  return (
    <div className="py-20 bg-(--dark-blue) text-white! px-4">
      <div className="container mx-auto">
        <div className=" grid lg:grid-cols-6 md:grid-cols-3 gap-6">
          <div className="space-y-4 lg:col-span-2 md:col-span-3">
            <Image src={footerLogo} alt="footer logo" />
            <p className="text-[#8b8b8b]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem dolores libero iure, magnam architecto perferendis?
            </p>
          </div>
          <div>
            <p className="font-bold text-[18px] mb-4">Company</p>
            <ul className="space-y-4">
              <li className="text-[#8b8b8b] text-sm ">About Us</li>
              <li className="text-[#8b8b8b] text-sm ">Services</li>
              <li className="text-[#8b8b8b] text-sm ">Community </li>
              <li className="text-[#8b8b8b] text-sm ">Testimonial</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-[18px] mb-4">Support</p>
            <ul className="space-y-4">
              <li className="text-[#8b8b8b] text-sm ">Help Center</li>
              <li className="text-[#8b8b8b] text-sm ">Tweet @ us</li>
              <li className="text-[#8b8b8b] text-sm ">Webinars</li>
              <li className="text-[#8b8b8b] text-sm ">Feedbacks</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-[18px] mb-4">Links</p>
            <ul className="space-y-4">
              <li className="text-[#8b8b8b] text-sm ">Work with us</li>
              <li className="text-[#8b8b8b] text-sm ">All in one</li>
              <li className="text-[#8b8b8b] text-sm ">Company </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-[18px] mb-4">Contact Us</p>
            <ul className="space-y-4">
              <li className="text-[#8b8b8b] text-sm ">+234 901 081 7543</li>
              <li className="text-[#8b8b8b] text-sm ">sample@mail.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-5 text-sm md:mt-10 md:flex-row md:items-center md:justify-between md:text-base border-t pt-4">
          <h2 className="text-[18px] font-medium md:text-[20px]">
            Cleaning &copy; 2026
          </h2>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[#999999]">
            <li className="hover:text-[#cccccc] transition-colors">
              Cookie Policy
            </li>
            <li className="hover:text-[#cccccc] transition-colors">
              Terms of service
            </li>
            <li className="hover:text-[#cccccc] transition-colors">
              Privacy policy
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer
