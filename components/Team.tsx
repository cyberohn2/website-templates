import avrilLavigne from "@/assets/img/avril-lavigne.webp"
import alexaBliss from "@/assets/img/alexa-bliss.webp"
import steaveSmith from "@/assets/img/steven-smith.webp"
import jessica from "@/assets/img/jessica.webp"
import Image from "next/image"
const Team = () => {
  return (
    <div className="py-16">
      <div className="text-center mb-10 space-y-5">
        <h2 className="md:text-3xl text-xl font-bold">Meet Our Team</h2>
        <p className="text-sm text-[#838B95]">
          We Offer a wide range of cleaning services to suit your cleaning needs
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-7">
        {[
          {
            name: "Avril Lavigne",
            role: "Cleaner",
            img: avrilLavigne,
          },
          {
            name: "Alexa Bliss",
            role: "Manager",
            img: alexaBliss,
          },
          {
            name: "Steave Smith",
            role: "Owner",
            img: steaveSmith,
          },
          {
            name: "Jessica",
            role: "Cleaner",
            img: jessica,
          },
        ].map((team) => (
          <div key={team.name} className="min-h-75 relative  overflow-hidden isolate rounded-lg">
            <Image
              src={team.img}
              alt={team.name}
              className="absolute inset-0 object-cover -z-50  w-full"
            />
            <div className="p-4 absolute bg-white bottom-0 shadow-lg inset-x-0 rounded-lg z-50 text-center">
              <p className="font-bold text-lg">{team.name}</p>
              <p className="text-sm text-[#838B95]">{team.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team
