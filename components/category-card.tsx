import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function CategoryCard({title, description, imageUrl}: {title: string, description: string, imageUrl: string,}) {
  const router = useRouter()
  return (
    <CardContainer className="w-full h-full">
      <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/10 bg-black border-white/20  h-full rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold  text-white"
        >
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
          <img
            src={imageUrl}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover object-top rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
