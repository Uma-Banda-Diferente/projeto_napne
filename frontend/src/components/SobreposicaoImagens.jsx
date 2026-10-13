import React from "react";
import logoNapne from "../assets/logoNapne.svg";
import fundoNapne from "../assets/fundoNapne.png";

export function SobreposicaoImagens() {
  return (
    <div>
        <div className="bg-[url(./assets/fundoNapne.png)]  bg-cover bg-center bg-no-repeat w-120 h-120 rounded-xl shadow-md">
            {/* <img src= {fundoNapne} alt="Paisagem de fundo"
            className="relative w-120 h-120 object-cover rounded-xl shadow-md right-4 bottom-1"
            /> */}
            <img
              src= {logoNapne} alt="Logo do napne"
              className=" flex justify-center items-center w-120 h-111"
            />
        </div>
    </div>
  );
}