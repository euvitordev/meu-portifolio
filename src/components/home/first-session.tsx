import * as React from "react";
import { ChevronRight } from "lucide-react";
import JsIcon from "../../../public/icons/javascript-icon.svg";
import TsIcon from "../../../public/icons/typescript-icon.svg";
import TailwindIcon from "../../../public/icons/tailwindcss-icon.svg";
import reactIcon from "../../../public/icons/reactjs-icon.svg";
import nextIcon from "../../../public/icons/nextjs-icon.svg";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function FirstSession() {
  const tabLinks = [
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/euvitorll/",
    },
    {
      icon: <GithubIcon />,
      link: "https://github.com/euvitordev",
    },
    {
      icon: <LinkedinIcon />,
      link: "https://www.linkedin.com/in/euvtitordev/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/euvitordev",
    },
  ];

  const skills = [
    {
      name: "JavaScript",
      icon: JsIcon,
      link: "",
    },
    {
      name: "TypeScript",
      icon: TsIcon,
      link: "",
    },
    {
      name: "TailwindCSS",
      icon: TailwindIcon,
      link: "",
    },
    {
      name: "ReactJS",
      icon: reactIcon,
      link: "",
    },
    {
      name: "NextJS",
      icon: nextIcon,
      link: "",
    },
  ];

  return (
    <>
      <div className="animate-fadeAndSlideUp flex max-w-xl flex-col gap-6">
        <div className="flex items-center gap-4 ">
          <span className="flex animate-pulse items-center justify-center rounded-full border border-green-500/10 bg-green-500/25 p-0.5">
            <span className="rounded-full bg-green-500 p-0.5"></span>
          </span>
          <span className="font-light opacity-50">
            Codificando coisas incriveis
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-6xl font-bold max-lg:text-5xl">
            Hey, I{"'"}m <br /> Vitor Lucas 👋
          </h1>
          <span className=" text-lg font-semibold opacity-80">
            Desenvolvedor Front End
          </span>
        </div>
        <p className="max-w-lg text-start text-lg font-medium">
          Sou engenheiro de software focado em NextJS para desenvolvimento
          front-end. Trabalhei como freelancer nos últimos 12 meses.
        </p>
        <div className="animate-fadeAndSlideUp flex w-full items-center gap-4">
          <a href="mailto:dev.vitorlucas@gmail.com">
            <Button
              className="flex items-center border-2 border-black font-bold transition-all delay-100 duration-300 ease-in-out hover:bg-transparent hover:text-black dark:border-white dark:hover:text-white"
              variant="default"
            >
              Entre em contato
            </Button>
          </a>
          {tabLinks.map((item, index) => (
            <a key={index} href={item.link} target="_blank" className="">
              <Button
                variant="ghost"
                size={"icon"}
                className="transition-all delay-75 duration-300 ease-in-out hover:scale-110"
              >
                {item.icon}
              </Button>
            </a>
          ))}
        </div>
        <div className="animate-fadeAndSlideUp mt-12 flex w-full max-w-md flex-col items-start justify-start gap-8">
          <div className="flex w-full items-center justify-between gap-4">
            <span className="text-xl font-bold">Habilidades</span>
            <Link href="/tecnologias-e-ferramentas" className="">
              <Button
                className="gap-1 rounded-full"
                variant={"secondary"}
                size={"sm"}
              >
                Mais <ChevronRight size={16} />
              </Button>
            </Link>
          </div>
          <Carousel className="w-full">
            <CarouselContent className="ml-0.5">
              {skills.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="flex h-16 basis-1/5 items-center "
                >
                  <Image
                    key={index}
                    src={item.icon}
                    width={50}
                    height={50}
                    alt="exemplo"
                    className="cursor-pointer rounded-xl shadow-2xl shadow-white/5 transition-all delay-75 duration-300 ease-in-out hover:scale-125"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </>
  );
}
