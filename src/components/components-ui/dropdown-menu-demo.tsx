import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoonIcon, SunIcon } from "lucide-react";

export function DropdownMenuDemo({ children }: { children: React.ReactNode }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size={"icon"}>
          {children}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44">
        <DropdownMenuLabel>Em breve</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Tema</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem disabled>
            Escuro
            <DropdownMenuShortcut>
              <MoonIcon size={18} />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            Claro
            <DropdownMenuShortcut>
              <SunIcon size={18} />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        {/*  */}
        <DropdownMenuLabel>Cores</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem disabled>
            Zinco
            <DropdownMenuShortcut>⚪</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            Azul
            <DropdownMenuShortcut>🔵</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            Verde
            <DropdownMenuShortcut>🟢</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            Laranja
            <DropdownMenuShortcut>🟠</DropdownMenuShortcut>
          </DropdownMenuItem>

          <DropdownMenuItem disabled>
            Dracula
            <DropdownMenuShortcut>🟣</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
