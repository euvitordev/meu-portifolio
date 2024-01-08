import Header from "@/components/header/header";
import { ChevronLeft, ChevronRight, Github } from "lucide-react";
import Image from "next/image";
import ImageFuiDeCep from "../../../public/images/fui-de-cep.png";
import Link from "next/link";

export default function Projeto() {
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
            <div className="flex w-full items-center justify-center rounded-xl border-2 border-zinc-100 bg-zinc-50 p-14 dark:border-zinc-800 dark:bg-zinc-800/50">
              <Image
                width={700}
                alt="Minha imagem de perfil"
                src={item.image}
                className="rounded-2xl shadow-2xl shadow-white/10 transition-all delay-75 duration-500 ease-in-out hover:cursor-zoom-in lg:hover:scale-150"
              />
            </div>
            <div className="flex w-full items-center justify-center p-2">
              <span className="max-w-xl text-center">{item.description}</span>
            </div>
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
