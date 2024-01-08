"use client";
import { ChevronUp } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

export default function TopToButton() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adicionando um comportamento suave de scroll
    });
  };

  // Event listener para mostrar o botão quando a página é rolada para baixo
  window.onscroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  return (
    <div className="">
      {showButton && (
        <Button
          variant={"secondary"}
          size={"icon"}
          onClick={scrollToTop}
          className="scroll-to-top-button"
        >
          <ChevronUp size={24} />
        </Button>
      )}
    </div>
  );
}
