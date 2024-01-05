import IconHtml from "../../../../public/techs/html.svg";
import IconCss from "../../../../public/techs/css.svg";
import IconJs from "../../../../public/techs/javascript.svg";
import IconReact from "../../../../public/techs/react.svg";
import IconTailwind from "../../../../public/techs/tailwindcss.svg";
import IconNext from "../../../../public/techs/nextjs.svg";
import IconTs from "../../../../public/techs/typescript.svg";
import IconVite from "../../../../public/techs/vite.svg";

import Image from "next/image";

export default function FrontEndSection() {
  const frontEndTechs = [
    {
      text: "HTML",
      icon: IconHtml,
      color: "#4C332D",
      cardColor: "rgb(89,61,53, 0.2)",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      text: "CSS",
      icon: IconCss,
      color: "#2C3D4A",
      cardColor: "rgb(46,65,78, 0.2)",
      link: "https://developer.mozilla.org/en-US/docs",
    },
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
      text: "React",
      icon: IconReact,
      color: "#222F35",
      cardColor: "rgb(35,50,56, 0.2)",
      link: "https://react.dev/",
    },
    {
      text: "TailwindCSS",
      icon: IconTailwind,
      color: "#1C2932",
      cardColor: "rgb(28,41,50, 0.2)",
      link: "https://tailwindcss.com/",
    },
    {
      text: "NextJS",
      icon: IconNext,
      color: "#3E3E41",
      cardColor: "rgb(63,63,64, 0.2)",
      link: "https://nextjs.org/",
    },
    {
      text: "Vite",
      icon: IconVite,
      color: "#372D32",
      cardColor: "rgb(59,48,54, 0.2)",
      link: "https://vitejs.dev/",
    },
  ];

  return (
    <>
      <div className="flex w-full flex-col justify-start gap-4">
        <h2 className="text-2xl font-bold">Front-end</h2>
        <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2">
          {frontEndTechs.map((item, index) => (
            <a
              href={item.link}
              target="_blank"
              key={index}
              className="flex items-center gap-4 rounded-lg p-4 text-lg font-bold shadow-2xl transition-all delay-75 duration-500 ease-in-out max-lg:p-2 max-lg:text-sm lg:hover:scale-110"
              style={{ backgroundColor: item.cardColor }}
            >
              <div
                className={`rounded-md p-2`}
                style={{ backgroundColor: item.color }}
              >
                <Image
                  width={30}
                  alt=""
                  src={item.icon}
                  className="max-lg:w-6"
                />
              </div>

              {item.text}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
