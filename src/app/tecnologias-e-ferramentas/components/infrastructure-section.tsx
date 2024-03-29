import IconVercel from "../../../../public/techs/vercel.svg";
import IconDocker from "../../../../public/techs/docker.svg";
import Image from "next/image";

export default function InfrastructureSection() {
  const infrastructureTechs = [
    {
      text: "Vercel",
      icon: IconVercel,
      color: "rgb(49,49,51)",
      cardColor: "rgb(49,49,51, 0.2)",
      link: "https://vercel.com/",
    },
    {
      text: "Docker",
      icon: IconDocker,
      color: "rgb(30,42,48)",
      cardColor: "rgb(30,42,48, 0.2)",
      link: "https://www.docker.com/",
    },
  ];

  return (
    <>
      <div className="flex w-full flex-col justify-start gap-4">
        <h2 className="text-2xl font-bold">Infraestrutura</h2>
        <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2">
          {infrastructureTechs.map((item, index) => (
            <a
              href={item.link}
              target="_blank"
              key={index}
              className="flex items-center gap-4 rounded-lg border-2 border-zinc-200 p-4 text-base font-bold transition-all delay-75 duration-500 ease-in-out hover:border-zinc-950 max-lg:p-2 max-lg:text-sm lg:hover:scale-110 dark:border-zinc-600/10 dark:hover:border-zinc-50"
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
