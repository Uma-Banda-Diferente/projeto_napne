import React, { useState } from "react";

export function InputMultiplosArquivos({ item, tamanho }) {
    const [arquivos, setArquivos] = useState([]);

    function lidarComMudanca(e) {
        const novosArquivos = Array.from(e.target.files);
        if (novosArquivos.length > 0) {
            setArquivos((prev) => [...prev, ...novosArquivos]);
        }
        e.target.value = "";
    }

    function removerArquivo(indexParaRemover) {
        setArquivos((prev) => prev.filter((_, index) => index !== indexParaRemover));
    }

    return (
        <div className={`flex flex-col w-full mt-5 ${tamanho}`}>
            <label htmlFor={item.id} className="mb-1 font-medium text-gray-700">{item.nome}</label>
            <label className="w-70 shrink-0 md:w-80 truncate h-12 border border-gray-300 rounded-lg p-2 pl-3 cursor-pointer flex items-center bg-white">
                <input type="file" id={item.id} className="hidden" onChange={lidarComMudanca} />
                <div className="flex justify-center w-full">
                    <p>{item.legenda || "Adicionar arquivo"}</p>
                </div>
            </label>
            {arquivos.length > 0 && (
                <div className="flex flex-col gap-2 mt-3 w-70 md:w-80 max-h-[445px] overflow-y-auto pr-1">
                    {arquivos.map((arquivo, index) => (
                        <div key={index} className="flex items-center justify-between h-10 border border-gray-200 bg-gray-50 rounded-lg px-3">
                            <span title={arquivo.name} className="text-gray-800 text-sm truncate max-w-[70%]">{arquivo.name}</span>
                            <button type="button" onClick={() => removerArquivo(index)}className="text-red-500 w-2 font-semibold ml-2 cursor-pointer">X</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}