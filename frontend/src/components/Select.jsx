import React from "react";

export function Select({ lista, placeholder }) {
    return (
        <select defaultValue="">
            {placeholder && (<option value="" disabled hidden>{placeholder}</option>)}
            {lista.map((item, index) => {
                let textoFormatado = item.replaceAll("_", " ").replace(/^\w/, (c) => c.toUpperCase());
                return (
                    <option key={index} value={item}>{textoFormatado}</option>
                );
            })}
        </select>
    );
}