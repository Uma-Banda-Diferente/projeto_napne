import React from 'react';
import logoIF from '../assets/logoIF.png';

export function HeaderBase({ children }) {
    return (
        <header className='bg-white flex items-center h-25'>
            <div className="m-20">
                <img src={logoIF} alt="Logo do IFCE" class='h-20'/>
            </div>
        </header>
    );
}