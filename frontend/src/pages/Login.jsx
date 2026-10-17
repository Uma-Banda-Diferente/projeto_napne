import React, { useState } from "react";
import { SobreposicaoImagens } from "../components/SobreposicaoImagens";
import simboloEntrar from "../assets/simboloEntrar.png";
import { Select } from "../components/Select";
import { Input } from "../components/Input";
import { tipoDePerfil } from "../data/dadosComponents.jsx";
import { inputLogin } from "../data/dadosComponents.jsx";

export function Login () {
    return (
        <main className="flex-1 mx-auto px-4 py-6 justify-center">
            <div className="flex relative h-130 md:h-full w-120 md:w-260 bg-white rounded-xl top-2">
                <SobreposicaoImagens/>
                <div className="relative top-10 ml-8 mr-8">
                    <div className="flex gap-4 justify-center items-center relative right-24 md:right-[135px] mb-10">
                        <img src={simboloEntrar} alt="Simbolo de acesso ao sistema" className="w-12"/>
                        <p className="text-xl font-semibold">Acessar o sistema</p>
                    </div>
                    <Select lista={tipoDePerfil} placeholder="Selecione o tipo de perfil para entrar" className="md:w-120"/>
                    <Input lista={inputLogin} className="w-[700px]"/>
                    <div className="flex justify-center mt-8">
                        <button className="bg-[#24a838] text-white text-lg font-semibold w-70 p-2 mt-5 rounded-full cursor-pointer">Entrar</button>
                    </div>
                </div>
            </div>
        </main>
    );
}