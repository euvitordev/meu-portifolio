import Header from "@/components/header/header";
import FrontEndSection from "./components/front-end-section";
import BackEndSection from "./components/back-end-section";
import DataBaseSection from "./components/database-section";
import VersionControlSection from "./components/version-control-section";
import InfrastructureSection from "./components/infrastructure-section";
import AnalysisToolsSection from "./components/analysis-tools-section";
import ApplicationsSection from "./components/applications-section";

export default function Page() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center p-8 dark:bg-zinc-900">
      <Header />

      <div className="animate-fadeAndSlideUp flex w-full max-w-5xl flex-col gap-16 max-lg:mt-4">
        <div className="mt-8 flex w-full flex-col justify-start gap-4">
          <h1 className="text-4xl font-bold max-lg:text-2xl">
            Tecnologias e Ferramentas
          </h1>
          <p className="text-lg max-lg:text-base">
            Seleciono e uso cuidadosamente ferramentas para criar soluções
            eficientes, priorizando a experiência do usuário.
          </p>
        </div>
        <FrontEndSection />
        <BackEndSection />
        <DataBaseSection />
        <VersionControlSection />
        <InfrastructureSection />
        <AnalysisToolsSection />
        <ApplicationsSection />
      </div>
    </main>
  );
}
