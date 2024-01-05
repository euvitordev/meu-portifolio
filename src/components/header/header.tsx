import Link from "next/link";
import { AlignRight, Coffee, Settings } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenuDemo } from "../components-ui/dropdown-menu-demo";

export default function Header() {
  const navLinks = [
    {
      name: "Sobre min",
      link: "#",
    },
    {
      name: "Projetos",
      link: "#",
    },
    {
      name: "Tecnologias e Ferramentas",
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
  return (
    <>
      <div className="flex w-full max-w-5xl items-center justify-between gap-2 max-md:w-full">
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-4 text-xl font-bold underline-offset-8 opacity-50 transition-all delay-75 duration-300 ease-in-out hover:underline hover:opacity-100"
        >
          Vitor
          <Coffee size={16} className="" />
        </Link>

        <div className="flex items-center justify-between gap-8">
          <nav className="flex items-center gap-6 max-lg:hidden">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="cursor-pointer underline-offset-8 opacity-50 transition-all delay-75 duration-300 ease-in-out hover:underline hover:opacity-100"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <DropdownMenuDemo>
              <Settings
                size={18}
                className="transition-all delay-100 duration-500 ease-in-out hover:rotate-180"
              />
            </DropdownMenuDemo>
            <Button variant="ghost" size="icon" className="hidden max-lg:flex">
              <AlignRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
