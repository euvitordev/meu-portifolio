import IconGit from "../../../../public/techs/git.svg";
import IconGithub from "../../../../public/techs/github.svg";
import Image from "next/image";

export default function VersionControlSection() {
  const versionControlTechs = [
    {
      text: "Git",
      icon: IconGit,
      color: "rgb(75,40,35)",
      cardColor: "rgb(75,40,35, 0.2)",
      link: "https://git-scm.com/",
    },
    {
      text: "Github",
      icon: IconGithub,
      color: "rgb(44,52,61)",
      cardColor: "rgb(44,52,61, 0.2)",
      link: "https://github.com/",
    },
  ];

  return (
    <>
      <div className="flex w-full flex-col justify-start gap-4">
        <h2 className="text-2xl font-bold">Controle de versões</h2>
        <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2">
          {versionControlTechs.map((item, index) => (
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
                  className="max-lg:w-5"
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
