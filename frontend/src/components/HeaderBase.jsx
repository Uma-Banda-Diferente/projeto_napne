import React from 'react';
import logoIF from '../assets/logoIF.png';

export function HeaderBase({ children }) {
    return (
        <header className='bg-white flex items-center h-25'>
            <div className="m-2 md:m-20">
                <img src={logoIF} alt="Logo do IFCE" className='h-20'/>
            </div>
            {children && (<div className="flex-1 flex justify-end">{children}</div>)}
        </header>
    );
}