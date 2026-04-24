import cleaningBrush from "@/assets/img/brush.png"
import toiletPaper from "@/assets/img/tissue.png"
import washMachine from "@/assets/img/washing-machine.png"
import Image from "next/image";


const Services = () => {
  return (
    <div className="py-16">
      <div className="text-center mb-10 space-y-5">
        <h2 className="md:text-3xl text-xl font-bold">What we offer</h2>
        <p className="text-sm text-[#838B95]">
          We Offer a wide range of cleaning services to suit your cleaning needs
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-7">
        {[
          {
            serv: "Office Cleaning",
            desc: "Awesome  site. on the top advertising a business online includes assembling Having the most keep.",
            img: cleaningBrush,
          },
          {
            serv: "Toilet Cleaning",
            desc: "Awesome  site. on the top advertising a business online includes assembling Having the most keep.",
            img: toiletPaper,
          },
          {
            serv: "Laundry Cleaning",
            desc: "Awesome  site. on the top advertising a business online includes assembling Having the most keep.",
            img: washMachine,
          },
        ].map((serv) => (
          <div key={serv.serv} className="p-8 rounded-[1rem] bg-white shadow-lg hover:bg-primary group">
            <div className="bg-white/40 rounded-full w-22 aspect-square mb-5">
              <Image src={serv.img} alt={serv.serv} />
            </div>
            <div className="space-y-2.5 group-hover:text-white!">
              <p className="text-[20px] font-bold ">{serv.serv}</p>
              <p className="text-sm text-[#838B95] group-hover:text-white!">
                {serv.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services
