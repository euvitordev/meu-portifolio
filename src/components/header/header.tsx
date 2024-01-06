"use client";
import Link from "next/link";
import { Coffee, PanelLeft, Settings } from "lucide-react";
import { DropdownMenuDemo } from "../components-ui/dropdown-menu-demo";
import { HeaderSheet } from "../components-ui/header-sheet";
import { useState, useEffect } from "react";

export default function Header() {
  const [currentPath, setCurrentPath] = useState("");
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    setCurrentPath(window.location.pathname);

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Função para verificar se a URL atual corresponde à página de Projetos
  const isProjectsPage = (path) => {
    return path.includes("/projetos");
  };

  const navLinks = [
    {
      name: "Início",
      link: "/",
    },
    {
      name: "Sobre",
      link: "#",
    },
    {
      name: "Projetos",
      link: "/projetos",
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
      <div
        className={`flex w-full max-w-5xl items-center justify-between gap-2 max-md:w-full ${
          isHeaderFixed
            ? "left-50 right-50 fixed top-0 z-50 w-full max-w-6xl bg-white px-16 py-4 max-lg:px-8 dark:bg-zinc-900"
            : ""
        }`}
      >
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
                className={`cursor-pointer font-bold underline-offset-8 transition-all delay-75 duration-300 ease-in-out hover:underline hover:opacity-100 ${
                  isProjectsPage(currentPath) && item.name === "Projetos"
                    ? "underline underline-offset-8 opacity-100"
                    : currentPath === item.link
                      ? "underline underline-offset-8 opacity-100"
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
                className="transition-all delay-100 duration-500 ease-in-out group-hover:-rotate-180"
              />
            </DropdownMenuDemo>
            <HeaderSheet>
              <PanelLeft size={18} />
            </HeaderSheet>
          </div>
        </div>
      </div>
    </>
  );
}
