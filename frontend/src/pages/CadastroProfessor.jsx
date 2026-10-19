import React from "react";
import { Select } from "../components/Select";
import { Input } from "../components/Input";
import iconAdd from "../assets/iconAdd.png";
import { Campi, cadastroInputProfessor, cadastroInputProfessorContinuacao } from "../data/dadosComponents.jsx";

export function CadastroProfessor() {
    return(
        <main className="flex-1 mx-auto px-4 py-6 justify-center">
            <div className=" flex flex-col bg-white w-[670px] md:w-[1150px] rounded-xl p-8 mt-4 mb-4">
                <h1 className="text-4xl font-bold pb-10">Cadastrar professor</h1>
                <div className="flex gap-4 items-center pb-4">
                    <img src={iconAdd} alt="Adicionando professor" />
                    <h2 className="text-lg font-semibold">Insira os dados do professor</h2>
                </div>
                <form className="flex flex-col">
                    <Input lista={cadastroInputProfessor} tamanho="md:w-[700px]"/>
                    <div className="flex flex-col mt-5">
                        <label htmlFor="select_campi_professor" className="mb-1 font-medium text-gray-700">Campi</label>
                        <Select id="select_campi_professor" lista={Campi} placeholder="Selecione o campi do professor" tamanho="md:w-[700px]"/>
                    </div>
                    <Input lista={cadastroInputProfessorContinuacao} tamanho="md:w-[700px]"/>
                    <div className="flex justify-center relative mt-6">
                        <button className="bg-[#24a838] text-white text-lg font-semibold w-80 p-3 rounded-full cursor-pointer relative top-4 md:left-[400px] md:top-4">Cadastrar</button>
                    </div>
                </form>
            </div>
        </main>
    );
}