import React from "react";
import { SobreposicaoImagens } from "../components/SobreposicaoImagens";
import simboloEntrar from "../assets/simboloEntrar.png";
import { Select } from "../components/Select";

export function Login () {
    const lista2 = ['aluno', 'administrador'];

    return (
        <main className="flex-1 mx-auto px-4 py-6 justify-center">
            <div className="flex relative h-auto w-250 bg-white rounded-xl top-10">
                <SobreposicaoImagens/>
                <div>
                    <div className="flex gap-4 justify-center items-center">
                        <img src={simboloEntrar} alt="Simbolo de acesso ao sistema" className="w-12"/>
                        <p className="text-xl font-semibold">Acessar o sistema</p>
                    </div>
                    <Select lista={lista2} placeholder="Selecione o tipo de perfil para entrar"/>
                </div>
            </div>
        </main>
    );
}