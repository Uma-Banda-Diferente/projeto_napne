import React, { useState } from "react";
import { SobreposicaoImagens } from "../components/SobreposicaoImagens";
import simboloEntrar from "../assets/simboloEntrar.png";
import { Select } from "../components/Select";
import olhoSenha from "../assets/eye.png";
import olhoFechado from "../assets/eye-closed.png"

export function Login () {
    const tipoDePerfil = [
        {
            nome: 'Professor',
            valor: 'professor'
        },
        {
            nome: 'Administrador',
            valor: 'administrador'
        }
    ];
    const [mostrarVisivel, setMostrarVisivel] = useState(false);
    function mostrarSenha(){
        setMostrarVisivel(!mostrarVisivel);
    };

    return (
        <main className="flex-1 mx-auto px-4 py-6 justify-center">
            <div className="flex relative h-auto w-250 bg-white rounded-xl top-10">
                <SobreposicaoImagens/>
                <div className="relative top-10 ml-5">
                    <div className="flex gap-4 justify-center items-center relative right-37 mb-10">
                        <img src={simboloEntrar} alt="Simbolo de acesso ao sistema" className="w-12"/>
                        <p className="text-xl font-semibold">Acessar o sistema</p>
                    </div>
                    <Select lista={tipoDePerfil} placeholder="Selecione o tipo de perfil para entrar"/>
                    <div className="mt-5">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" id="email" className="w-120 h-12 border border-gray-300 rounded-lg p-2 pl-3"/>
                    </div>
                    <div className="mt-5">
                        <label htmlFor="senha">Senha</label>
                        <input type={mostrarVisivel ? "text" : "password"} name="senha" id="senha" className="w-120 h-12 border border-gray-300 rounded-lg p-2 pl-3"/>
                        <div onClick={mostrarSenha} className="cursor-pointer">
                            <img src={mostrarVisivel ? olhoFechado : olhoSenha} alt="Mostrar senha" className="w-8 relative left-[435px] bottom-[40px]"/>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-[#24a838] text-white text-lg font-semibold w-70 p-2 mt-5 rounded-full cursor-pointer">Entrar</button>
                    </div>
                </div>
            </div>
        </main>
    );
}