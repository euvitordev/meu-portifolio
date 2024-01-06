import { ChevronRight } from "lucide-react";
import htmlIcon from "../../../public/icons/html5-icon.svg";
import CssIcon from "../../../public/icons/css-icon.svg";
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

export default function FirstSession() {
  const tabLinks = [
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/vitordeev/",
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
      name: "HTML5",
      icon: htmlIcon,
      link: "",
    },
    {
      name: "CSS3",
      icon: CssIcon,
      link: "",
    },
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

        <p className="text-start text-lg font-medium">
          Sou engenheiro de software focado em React para desenvolvimento
          front-end, com experiência em Java. Trabalhei como freelancer nos
          últimos 12 meses.
        </p>

        <div className="animate-fadeAndSlideUp flex w-full items-center gap-4">
          <a href="mailto:dev.vitorlucas@gmail.com">
            <Button className="font-bold" variant="default">
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
        {/*  */}
        <div className="animate-fadeAndSlideUp mt-12 flex w-full max-w-md flex-col items-start justify-start gap-8">
          <div className="flex w-full items-center justify-between gap-4">
            <span className="text-xl font-bold">💻 Tecnologias</span>
            <Link
              href="/tecnologias-e-ferramentas"
              className="flex cursor-pointer items-center gap-2 font-bold text-green-500 underline-offset-8 opacity-80 transition-all delay-75 duration-300 ease-in-out hover:underline hover:opacity-100"
            >
              Mostrar tudo <ChevronRight size={18} />
            </Link>
          </div>
          <div className="flex w-full gap-4">
            {skills.map((item, index) => (
              <Image
                key={index}
                src={item.icon}
                width={50}
                height={50}
                alt="exemplo"
                className="cursor-pointer rounded-xl shadow-2xl shadow-white/5 transition-all delay-75 duration-300 ease-in-out hover:scale-125 max-lg:w-10"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
