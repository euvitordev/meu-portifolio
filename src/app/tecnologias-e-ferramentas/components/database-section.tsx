import IconMongoDB from "../../../../public/techs/mongodb.svg";
import IconMySQL from "../../../../public/techs/mysql.svg";
import IconPostGreSQL from "../../../../public/techs/postgresql.svg";
import Image from "next/image";

export default function DataBaseSection() {
  const dataBaseTechs = [
    {
      text: "MongoDB",
      icon: IconMongoDB,
      color: "rgb(28,43,41)",
      cardColor: "rgb(28,43,41, 0.2)",
      link: "https://www.mongodb.com/pt-br",
    },
    // {
    //   text: "MySQL",
    //   icon: IconMySQL,
    //   color: "rgb(27,40,46)",
    //   cardColor: "rgb(27,40,46 0.2)",
    //   link: "https://www.mysql.com/",
    // },
    {
      text: "PostgreSQL",
      icon: IconPostGreSQL,
      color: "rgb(44,52,61)",
      cardColor: "rgb(44,52,61, 0.2)",
      link: "https://www.postgresql.org/",
    },
  ];

  return (
    <>
      <div className="flex w-full flex-col justify-start gap-4">
        <h2 className="text-2xl font-bold">Banco de dados</h2>
        <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2">
          {dataBaseTechs.map((item, index) => (
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
