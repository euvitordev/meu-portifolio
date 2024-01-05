import IconJs from "../../../../public/techs/javascript.svg";
import IconTs from "../../../../public/techs/typescript.svg";
import IconNode from "../../../../public/techs/nodejs.svg";
import IconJava from "../../../../public/techs/java.svg";
import IconPrisma from "../../../../public/techs/prisma.svg";
import Image from "next/image";

export default function BackEndSection() {
  const backEndTechs = [
    {
      text: "JavaScript",
      icon: IconJs,
      color: "#5B542A",
      cardColor: "rgb(93,86,43, 0.2)",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      text: "Typescript",
      icon: IconTs,
      color: "#234359",
      cardColor: "rgb(34,73,100, 0.2)",
      link: "https://www.typescriptlang.org/",
    },
    {
      text: "NodeJS",
      icon: IconNode,
      color: "rgb(37,47,29)",
      cardColor: "rgb(37,47,29, 0.2)",
      link: "https://nodejs.org/en/",
    },
    {
      text: "Java",
      icon: IconJava,
      color: "rgb(53,53,55)",
      cardColor: "rgb(69,36,31, 0.2)",
      link: "https://www.java.com/pt-BR/",
    },
    {
      text: "Prisma",
      icon: IconPrisma,
      color: "rgb(54,54,56, 0.3)",
      cardColor: "rgb(54,54,56, 0.1)",
      link: "https://www.prisma.io/",
    },
  ];

  return (
    <>
      <div className="flex w-full flex-col justify-start gap-4">
        <h2 className="text-2xl font-bold">Back-end</h2>
        <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2">
          {backEndTechs.map((item, index) => (
            <a
              href={item.link}
              target="_blank"
              key={index}
              className="flex items-center gap-4 rounded-lg p-4 text-lg font-bold shadow-2xl transition-all delay-75 duration-500 ease-in-out lg:hover:scale-110"
              style={{ backgroundColor: item.cardColor }}
            >
              <div
                className={`rounded-md p-2`}
                style={{ backgroundColor: item.color }}
              >
                <Image width={30} alt="" src={item.icon} className="" />
              </div>

              {item.text}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
