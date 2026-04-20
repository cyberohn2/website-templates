
const Footer = () => {
  return (
    <footer className="py-12 md:py-16">
      <div className="grid grid-cols-1 gap-10 border-b border-[#9999994b] pb-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
        <div className="md:col-span-2 lg:col-span-1">
          <h2 className="text-[20px] font-medium">LexureDetails</h2>
          <p className="mt-4 max-w-md leading-relaxed text-[#999999]">
            Experience the prestige of a professionally detailed car, radiating
            elegance and refinement at every turn.
          </p>
        </div>

        <div>
          <p className="mb-5 text-[#999999]">Website</p>
          <ul className="space-y-3">
            <li className="hover:text-[#cccccc] transition-colors">Services</li>
            <li className="hover:text-[#cccccc] transition-colors">Pricing</li>
            <li className="hover:text-[#cccccc] transition-colors">About</li>
          </ul>
        </div>

        <div>
          <p className="mb-5 text-[#999999]">Contact</p>
          <ul className="space-y-3">
            <li className="hover:text-[#cccccc] transition-colors">
              Get a quote
            </li>
            <li className="hover:text-[#cccccc] transition-colors">
              Contact form
            </li>
            <li className="hover:text-[#cccccc] transition-colors">Email us</li>
          </ul>
        </div>

        <div>
          <p className="mb-5 text-[#999999]">Social Media</p>
          <ul className="space-y-3">
            <li className="hover:text-[#cccccc] transition-colors">Facebook</li>
            <li className="hover:text-[#cccccc] transition-colors">
              Instagram
            </li>
            <li className="hover:text-[#cccccc] transition-colors">Twitter</li>
            <li className="hover:text-[#cccccc] transition-colors">Youtube</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-5 text-sm md:mt-10 md:flex-row md:items-center md:justify-between md:text-base">
        <h2 className="text-[18px] font-medium md:text-[20px]">
          LexureDetails &copy; 2026
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
    </footer>
  );
}

export default Footer
