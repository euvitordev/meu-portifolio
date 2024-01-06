import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  Youtube,
  ChevronRight,
} from "lucide-react";

import Link from "next/link";

export function HeaderSheet({ children }: { children: React.ReactNode }) {
  const navLinks = [
    {
      name: "Página inicial",
      link: "/",
    },
    {
      name: "Sobre min",
      link: "#",
    },
    {
      name: "Projetos",
      link: "#",
    },
    {
      name: "Tecnologias",
      link: "/tecnologias-e-ferramentas",
    },
    {
      name: "Setup",
      link: "#",
    },
    {
      name: "Wallpapers",
      link: "#",
    },
  ];
  const contactMe = [
    {
      text: "E-mail (Geral)",
      link: "mailto:dev.vitorlucas@gmail.com",
      icon: <Mail />,
    },
    {
      text: "Parcerias",
      link: "mailto:dev.vitorlucas@gmail.com",
      icon: <Mail />,
    },
    {
      text: "YouTube (Em Breve)",
      link: "#",
      icon: <Youtube />,
    },
    {
      text: "GitHub",
      link: "https://github.com/euvitordev",
      icon: <Github />,
    },
    {
      text: "Instagram",
      link: "https://www.instagram.com/vitordeev",
      icon: <Instagram />,
    },
    {
      text: "Linkedin",
      link: "https://www.linkedin.com/in/euvtitordev/",
      icon: <Linkedin />,
    },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="hidden max-lg:flex">
          {children}
        </Button>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="flex flex-col items-start justify-start"
      >
        <SheetHeader>
          <SheetTitle className="text-3xl font-bold">Menu</SheetTitle>
        </SheetHeader>
        <div className="mt-8 flex w-full flex-col gap-2">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="group flex items-center justify-between text-2xl font-bold underline-offset-8 opacity-50 transition-all delay-75 duration-300 ease-in-out hover:underline hover:opacity-100"
            >
              {item.name}
              <ChevronRight className=" invisible group-hover:visible" />
            </Link>
          ))}
        </div>

        <div className="mt-10 flex w-full  flex-col gap-4">
          <h2 className="text-2xl font-bold">Meios de contato</h2>
          {contactMe.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              className="group flex items-center justify-between text-2xl font-bold underline-offset-8 opacity-50 transition-all delay-75 duration-300 ease-in-out hover:underline hover:opacity-100"
            >
              <div className="flex items-center gap-2">
                {item.icon}
                {item.text}
              </div>
              <ChevronRight className=" invisible group-hover:visible" />
            </a>
          ))}
        </div>
        <SheetFooter>
          <div className=""></div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
