"use client";
import Header from "@/components/header/header";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import ImageFuiDeCep from "../../../../public/images/fui-de-cep.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Projeto() {
  const [fullscreen, setFullscreen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openFullscreen = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setFullscreen(true);
  };

  const closeFullscreen = () => {
    setSelectedImage("");
    setFullscreen(false);
  };

  const projectHeader = [
    {
      title: "Fui de CEP",
      description: "Desbloqueie o caminho para a precisão na busca de CEPs!",
      imagePreview: ImageFuiDeCep,
      link: "https://fui-de-cep.vercel.app/",
      linkGithub: "https://github.com/euvitordev/fui-de-cep",
      nameVisit: "Visitar",
      nameDeploy: "Código-fonte",
      data: "2023",
      linkPage: "/projetos/fui-de-cep",
    },
  ];
  const projectMain = [
    {
      image: ImageFuiDeCep,
      description: "Em breve, a descrição estará disponível.",
    },
    {
      image: ImageFuiDeCep,
      description: "Em breve, a descrição estará disponível.",
    },
    {
      image: ImageFuiDeCep,
      description: "Em breve, a descrição estará disponível.",
    },
    {
      image: ImageFuiDeCep,
      description: "Em breve, a descrição estará disponível.",
    },
    {
      image: ImageFuiDeCep,
      description: "Em breve, a descrição estará disponível.",
    },
  ];

  return (
    <main className="flex min-h-screen w-full flex-col items-center p-8 dark:bg-zinc-900">
      <Header />
      <div className="animate-fadeAndSlideUp flex w-full max-w-5xl flex-col gap-16 max-lg:mt-4">
        {projectHeader.map((item, index) => (
          <div
            key={index}
            className="mt-20 flex w-full flex-col justify-start gap-4"
          >
            <div className="flex items-center gap-2">
              <span className="">{item.data}</span>
              <span className="">•</span>
              <a
                target="_blank"
                href={item.link}
                className="group flex cursor-pointer items-center gap-2 font-bold text-green-600 underline-offset-8 opacity-80 hover:underline hover:opacity-100 dark:text-green-500"
              >
                Visite o projeto
                <ChevronRight
                  size={18}
                  className="opacity-50 transition-all delay-75 duration-300 ease-in-out group-hover:opacity-100"
                />
              </a>
            </div>

            <h1 className="text-4xl font-bold max-lg:text-2xl">{item.title}</h1>
            <p className="text-lg max-lg:text-base">{item.description}</p>
          </div>
        ))}
        {projectMain.map((item, index) => (
          <div key={index} className="flex flex-col gap-10">
            <div className="flex w-full items-center justify-center rounded-2xl border-2 border-zinc-100 bg-zinc-50 p-1 dark:border-zinc-800 dark:bg-zinc-800/50">
              <Image
                onClick={() => openFullscreen(item.image)}
                width={1080}
                alt="Exemplo do projeto"
                src={item.image}
                className="rounded-2xl shadow-2xl shadow-white/10 transition-all delay-75 duration-500 ease-in-out hover:cursor-zoom-in lg:hover:scale-110"
              />
            </div>
            <div className="flex w-full items-center justify-center p-2">
              <span className="max-w-xl text-center">{item.description}</span>
            </div>
            {fullscreen && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90 dark:bg-black"
                onClick={closeFullscreen}
              >
                <div className="relative max-h-screen max-w-screen-2xl overflow-hidden rounded-xl">
                  <Button
                    variant={"destructive"}
                    size={"icon"}
                    className="absolute left-2/4 right-2/4 top-0 z-50 my-4 rounded-2xl"
                    onClick={closeFullscreen}
                  >
                    <X />
                  </Button>
                  <Image
                    src={selectedImage}
                    alt="Imagem em tela cheia"
                    className="h-full w-full"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
        <Link
          href={"/projetos"}
          className="group mb-10 flex cursor-pointer items-center gap-2 font-bold text-green-600 underline-offset-8 opacity-80 hover:underline hover:opacity-100 dark:text-green-500"
        >
          <ChevronLeft
            size={18}
            className="opacity-50 transition-all delay-75 duration-300 ease-in-out group-hover:opacity-100"
          />
          Todos os projetos
        </Link>
      </div>
    </main>
  );
}
