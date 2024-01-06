import Header from "@/components/header/header";
import { ArrowUpRight, ChevronRight, Github } from "lucide-react";
import Image from "next/image";
import ImageFreeCalc from "../../../public/images/free-calc-home.png";
import ImageMimoCep from "../../../public/images/mimo-cep.png";
import ImageHabits from "../../../public/images/habits.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Projetos() {
  const projectPreview = [
    {
      title: "FreeCalc",
      description:
        "O FreeCalc é um aplicativo web intuitivo focado em cálculos financeiros precisos e rápidos.",
      imagePreview: ImageFreeCalc,
      link: "https://free-calc.vercel.app/",
      linkGithub: "https://github.com/euvitordev/FreeCalc",
      nameVisit: "Visitar",
      data: "2023",
      linkPage: "/projetos/free-calc",
      nameDeploy: "Código-fonte",
    },
    {
      title: "Mimo CEP",
      description: "Descubra a nova era da busca de CEP com o Mimo CEP.",
      imagePreview: ImageMimoCep,
      link: "https://mimo-cep.vercel.app/",
      linkGithub: "https://github.com/euvitordev/mimo-cep",
      nameVisit: "Visitar",
      data: "2023",
      linkPage: "/projetos/mimo-cep",
      nameDeploy: "Código-fonte",
    },
    {
      title: "Habits",
      description:
        "O Habits é um aplicativo web desenvolvido para acompanhar e manter o rastreamento de suas rotinas diárias e hábitos",
      imagePreview: ImageHabits,
      link: "https://euvitordev.github.io/habit-tracker/",
      linkGithub: "https://github.com/euvitordev/habit-tracker",
      nameVisit: "Visitar",
      data: "2021",
      linkPage: "/projetos/habits",
      nameDeploy: "Código-fonte",
    },
  ];

  return (
    <main className="flex min-h-screen w-full flex-col items-center p-8 dark:bg-zinc-900">
      <Header />
      <div className="animate-fadeAndSlideUp flex w-full max-w-5xl flex-col gap-16 max-lg:mt-4">
        <div className="mt-20 flex w-full flex-col justify-start gap-4">
          <h1 className="text-4xl font-bold max-lg:text-2xl">Projetos</h1>
          <p className="text-lg max-lg:text-base">
            Aqui estão alguns dos projetos em que trabalhei.
          </p>
        </div>

        {/*  */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-10">
            {projectPreview.map((item, index) => (
              <div key={index} className="flex flex-col border-b pb-10">
                <div className="flex items-center gap-8 max-lg:flex-col">
                  <Image
                    width={500}
                    alt="Minha imagem de perfil"
                    src={item.imagePreview}
                    className="rounded-2xl shadow-2xl shadow-white/10 transition-all delay-75 duration-500 ease-in-out hover:cursor-zoom-in lg:hover:scale-110"
                  />
                  <div className="flex w-full flex-col gap-6 p-8">
                    <div className="flex items-center justify-between ">
                      <div className="flex items-center gap-2">
                        <a
                          target="_blank"
                          href={item.link}
                          className="text-xl font-bold underline-offset-8 transition-all delay-75 duration-300 ease-in-out hover:underline"
                        >
                          {item.title}
                        </a>
                        •<span className="">{item.data}</span>
                      </div>

                      <Link
                        href={item.linkPage}
                        className="flex cursor-pointer items-center gap-2 font-bold text-green-600 underline-offset-8 opacity-80 transition-all delay-75 duration-300 ease-in-out hover:underline hover:opacity-100 dark:text-green-500"
                      >
                        Mostrar mais <ChevronRight size={18} />
                      </Link>
                    </div>
                    <p className="font-medium opacity-90">{item.description}</p>
                    <div className="flex items-center gap-4">
                      <a href={item.link} target="_blank" className="">
                        <Button
                          variant="ghost"
                          className="flex items-center gap-2 border-2 border-black font-bold transition-all delay-100 duration-300 ease-in-out hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
                        >
                          <ArrowUpRight size={18} />
                          Visitar
                        </Button>
                      </a>
                      <a href={item.linkGithub} target="_blank" className="">
                        <Button
                          variant="ghost"
                          className="flex items-center gap-2"
                        >
                          <Github size={18} /> Código-fonte
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
