import React from "react";
import { Select } from "../components/Select";
import { Input } from "../components/Input";
import iconAdd from "../assets/iconAdd.png";
import { cadastroAluno } from "../data/dadosComponents.jsx";
import { Campi } from "../data/dadosComponents.jsx";
import { Ensino } from "../data/dadosComponents.jsx";

export function CadastroAluno() {
    return(
        <main className="flex-1 mx-auto px-4 py-6 justify-center">
            <div className=" flex flex-col bg-white w-full md:w-[1200px] rounded-xl p-8 mt-4 mb-4">
                <h1 className="text-4xl font-bold pb-10">Cadastrar aluno</h1>
                <div className="flex gap-4 items-center pb-4">
                    <img src={iconAdd} alt="Adicionando aluno" />
                    <h2 className="text-lg font-semibold">Insira os dados do aluno</h2>
                </div>
                <form className="flex flex-col">
                    <Input lista={cadastroAluno} className="md:w-[700px]"/>
                    <div className="flex flex-col mt-5">
                        <label htmlFor="">Campi</label>
                        <Select lista={Campi} placeholder="Selecione o campi do aluno" className="md:w-[700px]"/>
                    </div>
                    <div className="flex flex-col mt-5">
                        <label htmlFor="">Ensino</label>
                        <Select lista={Ensino} placeholder="Selecione seu grau de instrução" className="md:w-[700px]"/>
                    </div>
                </form>
            </div>
        </main>
    );
}