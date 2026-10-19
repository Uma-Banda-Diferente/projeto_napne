import React, {useState} from 'react';
import { HeaderBase } from './HeaderBase';
import { Link } from 'react-router-dom';
import fotoPerfil from '../assets/fotoPerfil.png';
import saidaIcon from '../assets/saidaIcon.png';

export function HeaderAvancado({ temBotaoExtra = false}) {
    const [mostrarVisivel, setMostrarVisivel] = useState(false);
    function mostrarMenu(){
        setMostrarVisivel(!mostrarVisivel);
    };
    return(
        <HeaderBase>
            <div className='flex w-full justify-end mr-12 ml-8'>
                <nav className='flex gap-10 text-sm md:text-base md:gap-20 items-center'>
                    <Link to="/home">Home</Link>
                    <Link to="/">Painel de alunos</Link>
                    <Link to="/">Painel de professores</Link>
                    {temBotaoExtra && (
                        <Link to="/" >Painel de funcionários</Link>
                    )}
                    <img src={fotoPerfil} alt="Foto do usuario" onClick={mostrarMenu} className='relative left-6 md:left-0 cursor-pointer'/>
                    {mostrarVisivel && (
                        <div className='index-1 absolute right-3 md:right-10 top-25 flex flex-col bg-white w-20 p-3 w-25 gap-2 rounded-lg border-t-5 border-[#24a838]'>
                            <Link to="/">Perfil</Link>
                            <Link to="/" className='flex gap-2'>Sair <img src={saidaIcon} alt="Icone de saida" className='w-4 h-4 relative top-1' /></Link>
                        </div>
                    )}
                </nav>
            </div>
        </HeaderBase>
    );
}