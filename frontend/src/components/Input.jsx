import React, { useState } from "react";
import olhoSenha from "../assets/eye.png";
import olhoFechado from "../assets/eye-closed.png";

function InputSenha({ item, tamanho }) {
    const [mostrarVisivel, setMostrarVisivel] = useState(false);
    function mostrarSenha(){
        setMostrarVisivel(!mostrarVisivel);
    };

    return (
        <div key={item.id} className={`flex flex-col w-full mt-5 ${tamanho}`}>
            <label htmlFor={item.id} className="mb-1 font-medium text-gray-700">{item.nome}</label>
            <div className="relative w-full">
                <input type={mostrarVisivel ? "text" : "password"} id={item.id} className="w-full h-12 border border-gray-300 rounded-lg p-2 pl-3"/>
                <div onClick={mostrarSenha} className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer flex items-center">
                    <img src={mostrarVisivel ? olhoFechado : olhoSenha} alt="Mostrar senha" className="bg-white w-8 h-8"/>
                </div>
            </div>
        </div>
    );
}

export function Input({ lista, tamanho }) {
    const [nomeArquivo, setNomeArquivo] = useState("");
    
    function lidarComMudanca(e) {
        const arquivo = e.target.files[0];
        if (arquivo) {
            setNomeArquivo(arquivo.name);
        } else {
            setNomeArquivo("");
        }
    }

    const ajustarAltura = (e) => {
        const textarea = e.target;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`; 
    }; 

    return (
        lista.map((item) => {
            
            return item.tipo === "text" ? (
                <div key={item.id} className={`flex flex-col w-full mt-5 ${tamanho}`}>
                    <label htmlFor={item.id} className="mb-1 font-medium text-gray-700">{item.nome}</label>
                    <textarea id={item.id} rows="1" onInput={ajustarAltura} className="overflow-hidden resize-none w-full appearance-none border border-gray-300 rounded-lg p-3 pl-3 outline-none"/>
                </div>
            ) : item.tipo === "password" ? (
                <InputSenha key={item.id} item={item} tamanho={tamanho} />
            ) : item.tipo === "file" ? (
                <div key={item.id} className={`flex flex-col w-full mt-5`}>
                    <label htmlFor={item.id} className="mb-1 font-medium text-gray-700">{item.nome}</label>
                    <label className="w-70 md:w-80 truncate h-12 border border-gray-300 rounded-lg p-2 pl-3 cursor-pointer">
                        <input type={item.tipo} id={item.id} className="hidden" onChange={lidarComMudanca} />
                        {nomeArquivo ? (
                            <span title={nomeArquivo} className="text-gray-800 text-sm">{nomeArquivo}</span>
                        ) : (
                            <div className="flex justify-center">
                                <p>{item.legenda}</p>
                            </div>
                        )}
                    </label>
                </div>
            ) : (
                <div key={item.id} className={`flex flex-col w-full mt-5 ${tamanho}`}>
                    <label htmlFor={item.id} className="mb-1 font-medium text-gray-700">{item.nome}</label>
                    <input type={item.tipo} id={item.id} className="w-full h-12 border border-gray-300 rounded-lg p-2 pl-3 appearance-none outline-none" />
                </div>
            );
        })
    );
}