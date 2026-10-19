import React, { useState } from "react";
import setinhaSelect from "../assets/setinhaSelect.png";

export function Select({ lista, placeholder, tamanho }) {
    const [valor, setValor] = useState("");
    return (
        <select value={valor} onChange={(e) => setValor(e.target.value)}
            style={{backgroundImage: `url(${setinhaSelect})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', backgroundSize: '30px'}}
            className={`w-full h-12 appearance-none border border-gray-300 rounded-lg p-2 pl-3 outline-none cursor-pointer ${tamanho} ${
                valor === "" ? "text-[#24a838]" : "text-gray-900"}`}>
            {placeholder && (<option value="" disabled hidden className="text-[#24a838]">{placeholder}</option>)}
            {Object.entries(lista).map(([index, item]) => {
                return (
                    <option key={index} value={item.valor} className="text-gray-900">{item.nome}</option>
                );
            })}
        </select>
    );
}