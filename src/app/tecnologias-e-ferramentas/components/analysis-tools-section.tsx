import IconVercel from "../../../../public/techs/vercel.svg";
import IconGoogleAnalytics from "../../../../public/techs/google-analytics.svg";
import Image from "next/image";

export default function AnalysisToolsSection() {
  const analysisToolsTechs = [
    {
      text: "Google Analytics",
      icon: IconGoogleAnalytics,
      color: "rgb(76,56,26)",
      cardColor: "rgb(76,56,26, 0.2)",
      link: "https://marketingplatform.google.com/about/analytics/",
    },
    {
      text: "Vercel Analytics",
      icon: IconVercel,
      color: "rgb(49,49,51)",
      cardColor: "rgb(49,49,51, 0.2)",
      link: "https://vercel.com/analytics",
    },
  ];

  return (
    <>
      <div className="flex w-full flex-col justify-start gap-4">
        <h2 className="text-2xl font-bold">Infraestrutura</h2>
        <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2">
          {analysisToolsTechs.map((item, index) => (
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
