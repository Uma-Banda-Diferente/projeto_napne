import React from "react";
import logoNapne from "../assets/logoNapne.svg";
import fundoNapne from "../assets/fundoNapne.png";

export function SobreposicaoImagens() {
  return (
    <div>
        <div className="relative top-1 left-4">
            <img src= {fundoNapne} alt="Paisagem de fundo"
            className="relative w-120 h-120 object-cover rounded-xl shadow-md right-4 bottom-1"
            />
            <img
              src= {logoNapne} alt="Logo do napne"
              className="absolute bottom-10 right-4 w-120 h-110"
            />
        </div>
    </div>
  );
}