"use client";
import { ChevronUp } from "lucide-react";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";

export default function TopToButton() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Adicionando um array vazio para executar o efeito apenas uma vez no montagem e desmontagem do componente

  return (
    <div className="">
      {showButton && (
        <Button
          onClick={scrollToTop}
          variant={"secondary"}
          size={"sm"}
          className="scroll-to-top-button gap-4"
        >
          Voltar ao topo
          <ChevronUp size={24} />
        </Button>
      )}
    </div>
  );
}
