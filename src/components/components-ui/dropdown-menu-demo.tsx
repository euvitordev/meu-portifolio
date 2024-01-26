"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AppWindowIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export function DropdownMenuDemo({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: "system", name: "Padrão", icon: <AppWindowIcon size={18} /> },
    { id: "light", name: "Claro", icon: <SunIcon size={18} /> },
    { id: "dark", name: "Escuro", icon: <MoonIcon size={18} /> },
  ];

  const colors = [
    {
      id: "zinc",
      name: "Zinco",
      icon: "⚪",
    },
    {
      id: "blue",
      name: "Azul",
      icon: "🔵",
    },
    {
      id: "green",
      name: "Verde",
      icon: "🟢",
    },
    {
      id: "orange",
      name: "Laranja",
      icon: "🟠",
    },
    {
      id: "dracula",
      name: "Dracula",
      icon: "🟣",
    },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size={"icon"} className="group">
          {children}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44">
        <DropdownMenuLabel>Em breve</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Tema</DropdownMenuLabel>
        <DropdownMenuGroup>
          {themes.map((item, index) => (
            <DropdownMenuItem
              key={index}
              onClick={() => setTheme(item.id)}
              className={
                theme === item.id
                  ? "active-theme cursor-pointer bg-black/80 font-bold text-white dark:bg-zinc-100 dark:text-black"
                  : "cursor-pointer"
              }
            >
              {item.name}
              <DropdownMenuShortcut>{item.icon}</DropdownMenuShortcut>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        {/*  */}
        <DropdownMenuLabel className="flex items-center justify-between">
          Cores <span className="font-light">( Em Breve )</span>
        </DropdownMenuLabel>
        <DropdownMenuGroup>
          {colors.map((item, index) => (
            <DropdownMenuItem key={index} disabled>
              {item.name}
              <DropdownMenuShortcut>{item.icon}</DropdownMenuShortcut>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
