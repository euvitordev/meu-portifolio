import Header from "@/components/header/header";
import Main from "@/components/home/main";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center p-8 dark:bg-zinc-900">
      <Header />
      <Main />
    </main>
  );
}
