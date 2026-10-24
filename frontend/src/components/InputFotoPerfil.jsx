import { useState } from 'react';
import fotoAluno from "../assets/foto_do_aluno.png";
import iconSoma from "../assets/iconSoma.png";

export default function InputFotoPerfil({ onFotoChange }) {
    const [fotoPreview, setFotoPreview] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setFotoPreview(imageUrl);
            if (onFotoChange) {
                onFotoChange(file);
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="relative inline-block">
                <img src={fotoPreview || fotoAluno } alt="Foto de perfil" className="w-70 h-70 md:w-80 md:h-80 rounded-full object-cover border-2 border-gray-300" />
                <label htmlFor="foto-perfil" className="relative left-[195px] bottom-12 md:bottom-12 md:left-[230px] bg-[#24a838] hover:bg-[#1f8e30] transition-colors w-10 h-10 rounded-full flex items-center justify-center text-2xl cursor-pointer" title="Adicionar foto"><img src={iconSoma} alt="Adicione foto" className='brightness-0 invert' /></label>
                <input type="file" id="foto-perfil" name="foto" accept="image/*" className="hidden" onChange={handleFileChange}/>
            </div>
        </div>
    );
}