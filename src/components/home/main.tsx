import FirstSession from "./first-session";
import ProjectSession from "./project-session";
import ContactSession from "./contact-session";
import MyProfile from "../../../public/img/my_profile.jpg";
import Image from "next/image";
export default function Main() {
  return (
    <>
      <div className="animate-fadeAndSlideUp mt-16 flex max-w-5xl flex-col gap-16 max-lg:mt-4">
        <div className="animate-fadeAndSlideUp mt-6 flex items-start gap-6 max-md:flex-col">
          <FirstSession />
          <div className="">
            <Image
              width={500}
              height={500}
              alt="Minha imagem de perfil"
              src={MyProfile}
              className="rounded-2xl shadow-2xl shadow-white/10 transition-all delay-75 duration-500 ease-in-out lg:hover:scale-110"
            />
          </div>
        </div>
        <ProjectSession />
        <ContactSession />
      </div>
    </>
  );
}
