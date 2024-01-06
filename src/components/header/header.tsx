"use client";
import Link from "next/link";
import { Coffee, PanelRight, Settings } from "lucide-react";
import { DropdownMenuDemo } from "../components-ui/dropdown-menu-demo";
import { HeaderSheet } from "../components-ui/header-sheet";
import { useState, useEffect } from "react";

export default function Header() {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

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
                className={`cursor-pointer underline-offset-8 opacity-50 transition-all delay-75 duration-300 ease-in-out hover:underline hover:opacity-100 ${
                  currentPath === item.link
                    ? "underline underline-offset-8 opacity-100" // Aplica o sublinhado se for a página atual
                    : "opacity-50 hover:underline hover:opacity-100"
                }`}
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
            <HeaderSheet>
              <PanelRight size={18} />
            </HeaderSheet>
          </div>
        </div>
      </div>
    </>
  );
}
