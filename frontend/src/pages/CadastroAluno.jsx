import React from "react";
import { Select } from "../components/Select";
import { Input } from "../components/Input";
import iconAdd from "../assets/iconAdd.png";
import { cadastroAluno, cadastroAlunoContinuacao, Campi, Ensino, cadastroAlunoMaterial, cadastroAlunoUltimoInput } from "../data/dadosComponents.jsx";
import fotoAluno from "../assets/foto_do_aluno.png";

export function CadastroAluno() {
    return(
        <main className="flex-1 mx-auto px-4 py-6 justify-center">
            <div className=" flex flex-col bg-white w-[670px] md:w-[1150px] rounded-xl p-8 mt-4 mb-4">
                <h1 className="text-4xl font-bold pb-10">Cadastrar aluno</h1>
                <div className="flex gap-4 items-center pb-4">
                    <img src={iconAdd} alt="Adicionando aluno" />
                    <h2 className="text-lg font-semibold">Insira os dados do aluno</h2>
                </div>
                <form className="flex">
                    <div className="flex flex-col">
                        <Input lista={cadastroAluno} tamanho="md:w-[700px]"/>
                        <div className="flex flex-col mt-5">
                            <label htmlFor="select_campi_aluno" className="mb-1 font-medium text-gray-700">Campi</label>
                            <Select id="select_campi_aluno" lista={Campi} placeholder="Selecione o campi do aluno" tamanho="md:w-[700px]"/>
                        </div>
                        <div className="flex flex-col mt-5">
                            <label htmlFor="select_ensino_aluno" className="mb-1 font-medium text-gray-700">Ensino</label>
                            <Select id="select_ensino_aluno" lista={Ensino} placeholder="Selecione seu grau de instrução" tamanho="md:w-[700px]"/>
                        </div>
                        <Input lista={cadastroAlunoContinuacao} tamanho="md:w-[700px]"/>
                    </div>
                    <div>
                        <img src={fotoAluno} alt="Foto do aluno" className="w-70 md:w-85 relative bottom-35 left-8" />
                        <div className="ml-4 relative bottom-16 md:bottom-6">
                            <label htmlFor="input_materias" className="font-medium text-gray-700 relative bottom-1">Materiais de Apoio</label>
                            <div className="md:w-[360px] h-[535px] border border-gray-300 rounded-lg pl-5 pr-5">
                                <Input id="input_materias" lista={cadastroAlunoMaterial}/>
                            </div>
                            <Input lista={cadastroAlunoUltimoInput} tamanho="md:w-[360px]"/>
                            <div className="flex justify-center relative top-[160px] left-2 md:top-14 md:left-12">
                                <button className="bg-[#24a838] text-white text-lg font-semibold w-80 p-3 rounded-full cursor-pointer">Cadastrar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}