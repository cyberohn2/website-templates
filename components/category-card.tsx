import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function CategoryCard({title, description, images}: {title: string, description: string, images: string[],}) {
  const router = useRouter()
  return (
    <CardContainer className="w-full h-full">
      <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/10 bg-black border-white/20  h-full rounded-xl p-6 border  ">
        <CardItem translateZ="50" className="text-xl font-bold  text-white">
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <div
            className="grid grid-cols-2 gap-1 group relative isolate "
          >
            <div>
              <img
                src={images[0]}
                height="1000"
                width="1000"
                className="absolute top-0 left-0 w-[50%]! transition-[width] group-hover:w-full! duration-500 z-10 h-60 object-cover object-top rounded-xl group-hover:shadow-2xl group-hover:shadow-emerald-500/10"
                alt="thumbnail"
              />
            </div>
            <img
              src={images[1]}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover object-top rounded-xl"
              alt="thumbnail"
            />
            <img
              src={images[2]}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover object-top rounded-xl"
              alt="thumbnail"
            />
            <img
              src={images[3]}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover object-top rounded-xl"
              alt="thumbnail"
            />
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
