import React, { useState } from "react";
import olhoSenha from "../assets/eye.png";
import olhoFechado from "../assets/eye-closed.png";

const formatarId = (texto) => {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase()).replace(/[^a-zA-Z0-9]/g, '');
};

const ajustarAltura = (e) => {
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`; 
};

export function Input({ lista, className }) {
    const [mostrarVisivel, setMostrarVisivel] = useState(false);
    function mostrarSenha(){
        setMostrarVisivel(!mostrarVisivel);
    };
    return (
        lista.map((item) => {
            const idFormatado = formatarId(item.nome);
            
            return item.tipo === "text" ? (
                <div key={idFormatado} className={`flex flex-col w-full mt-5 ${className}`}>
                    <label htmlFor={idFormatado} className="mb-1 font-medium text-gray-700">{item.nome}</label>
                    <textarea name={idFormatado} id={idFormatado} rows="1" onInput={ajustarAltura} className="overflow-hidden resize-none w-full appearance-none border border-gray-300 rounded-lg p-3 pl-3 outline-none"/>
                </div>
            ) : item.tipo === "password" ? (
                <div key={idFormatado} className={`flex flex-col w-full mt-5 ${className}`}>
                    <label htmlFor="senha">Senha</label>
                    <input type={mostrarVisivel ? "text" : "password"} name="senha" id="senha" className="w-105 md:w-120 h-12 border border-gray-300 rounded-lg p-2 pl-3"/>
                    <div onClick={mostrarSenha} className="cursor-pointer">
                        <img src={mostrarVisivel ? olhoFechado : olhoSenha} alt="Mostrar senha" className="w-8 relative left-[380px] md:left-[435px] bottom-[40px]"/>
                    </div>
                </div>
            ) : (
                <div key={idFormatado} className={`flex flex-col w-full mt-5 ${className}`}>
                    <label htmlFor={idFormatado} className="mb-1 font-medium text-gray-700">{item.nome}</label>
                    <input type={item.tipo} name={idFormatado} id={idFormatado} className="w-105 md:w-120 h-12 border border-gray-300 rounded-lg p-2 pl-3 appearance-none outline-none" />
                </div>
            );
        })
    );
}