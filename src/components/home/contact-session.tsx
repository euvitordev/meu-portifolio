import {
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Youtube,
} from "lucide-react";
export default function ContactSession() {
  const contactMe = [
    {
      text: "E-mail (Geral)",
      link: "mailto:dev.vitorlucas@gmail.com",
      icon: <Mail />,
    },
    {
      text: "Parcerias",
      link: "mailto:dev.vitorlucas@gmail.com",
      icon: <Mail />,
    },
    {
      text: "YouTube (Em Breve)",
      link: "#",
      icon: <Youtube />,
    },
    {
      text: "GitHub",
      link: "https://github.com/euvitordev",
      icon: <Github />,
    },
    {
      text: "Instagram",
      link: "https://www.instagram.com/euvitorll",
      icon: <Instagram />,
    },
    {
      text: "Linkedin",
      link: "https://www.linkedin.com/in/euvtitordev/",
      icon: <Linkedin />,
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-10">
        <h2 className="text-2xl font-bold">📧 Entre em contato</h2>
        <p className="text-base font-medium">
          Tem alguma dúvida ou apenas quer bater um papo? Fique a vontade para{" "}
          <a
            href="mailto:dev.vitorlucas@gmail.com"
            target="_blank"
            className="cursor-pointer text-blue-500 underline-offset-8 transition-all delay-75 duration-300 ease-in-out hover:underline hover:opacity-100"
          >
            me enviar um e-mail,{" "}
          </a>
          também estou disponível em{" "}
          <a
            href="https://www.instagram.com/euvitordev/"
            target="_blank"
            className="cursor-pointer text-blue-500 underline-offset-8 opacity-80 transition-all delay-75 duration-300 ease-in-out hover:underline hover:opacity-100"
          >
            @euvitordev.
          </a>
        </p>
        <div className="mt-4 grid grid-cols-2 gap-4 max-md:flex max-md:flex-col">
          {contactMe.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              className="ease-in-out-black flex w-full cursor-pointer items-center justify-between rounded-md border-2 border-zinc-300  p-2.5 underline-offset-8 opacity-50 transition-all delay-75 duration-300 hover:border-zinc-950 hover:underline hover:opacity-100 dark:border-zinc-600 dark:hover:border-zinc-50"
            >
              <div className="flex items-center gap-2">
                {item.icon}
                {item.text}
              </div>
              <ArrowUpRight className="h-4 w-5" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
