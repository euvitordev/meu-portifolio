import IconVsCode from "../../../../public/techs/vscode.svg";
import IconIntellijIDEA from "../../../../public/techs/intellij.svg";
import IconPyCharmIDEA from "../../../../public/techs/pycharm.svg";
import IconPostman from "../../../../public/techs/postman.svg";
import IconNotion from "../../../../public/techs/notion.svg";
import IconSpotify from "../../../../public/techs/spotify.svg";
import IconYouTubeMusic from "../../../../public/techs/youtube-music.svg";
import IconDiscord from "../../../../public/techs/discord.svg";
import IconGoogleChrome from "../../../../public/techs/google-chrome.svg";
import Image from "next/image";

export default function ApplicationsSection() {
  const applicationsTechs = [
    {
      text: "Visual Studio Code",
      icon: IconVsCode,
      color: "rgb(25,43,56)",
      cardColor: "rgb(25,43,56, 0.2)",
      link: "https://code.visualstudio.com/",
    },
    {
      text: "Intellij IDEA",
      icon: IconIntellijIDEA,
      color: "rgb(49,35,41)",
      cardColor: "rgb(49,35,41, 0.2)",
      link: "https://www.jetbrains.com/idea/",
    },
    {
      text: "PyCharm IDEA",
      icon: IconPyCharmIDEA,
      color: "rgba(55,217,132,0.20)",
      cardColor: "rgba(55,217,132, 0.1)",
      link: "https://www.jetbrains.com/pycharm/",
    },
    {
      text: "Postman",
      icon: IconPostman,
      color: "rgb(80,50,38)",
      cardColor: "rgb(80,50,38, 0.2)",
      link: "https://www.postma",
    },
    {
      text: "Notion",
      icon: IconNotion,
      color: "rgb(67,67,69)",
      cardColor: "rgb(67,67,69, 0.2)",
      link: "https://www.notion.so/",
    },
    {
      text: "Spotify",
      icon: IconSpotify,
      color: "rgb(27,77,46)",
      cardColor: "rgb(27,77,46, 0.2)",
      link: "https://www.spotify.com/",
    },
    {
      text: "YouTube Music",
      icon: IconYouTubeMusic,
      color: "rgb(78,44,30)",
      cardColor: "rgb(78,44,30, 0.2)",
      link: "https://music.youtube.com/",
    },
    {
      text: "Discord",
      icon: IconDiscord,
      color: "rgb(39,41,68)",
      cardColor: "rgb(39,41,68, 0.2)",
      link: "https://discord.com/",
    },
    {
      text: "Google Chrome",
      icon: IconGoogleChrome,
      color: "rgb(254,247,224, 0.3)",
      cardColor: "rgb(232,240,254, 0.1)",
      link: "https://www.google.com/chrome/",
    },
  ];

  return (
    <>
      <div className="flex w-full flex-col justify-start gap-4">
        <h2 className="text-2xl font-bold">Aplicativos</h2>
        <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2">
          {applicationsTechs.map((item, index) => (
            <a
              href={item.link}
              target="_blank"
              key={index}
              className="flex items-center gap-4 rounded-lg p-4 text-base font-bold shadow-2xl transition-all delay-75 duration-500 ease-in-out max-lg:p-2 max-lg:text-sm lg:hover:scale-110"
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
