import React from "react";
import logoNapne from "../assets/logoNapne.svg";

export function SobreposicaoImagens() {
  return (
    <div className="bg-[url(./assets/fundoNapne.png)] bg-cover bg-center bg-no-repeat w-full md:w-130 hidden md:flex h-140 rounded-xl shadow-md">
        <img
          src= {logoNapne} alt="Logo do napne"
          className=" flex justify-center items-center w-full md:w-120 h-132"
        />
    </div>
  );
}