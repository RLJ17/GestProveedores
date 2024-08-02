'use client'
import usuarios from '@/api/usuarios'
import { useRouter } from 'next/router';

const handleSalir = async() =>{
    await usuarios.get("logout");
    window.location.href = '/';
}

export default function Layout({ children }){
    return(
        <>
            <div className="bg-gray-800 text-white text-2xl font-bold p-4 flex justify-between">
                <p>Gestión de Proveedores</p>
                <button className="bg-amber-300 hover:bg-amber-400 py-1 px-2 rounded-lg text-xl" onClick={handleSalir}>Salir</button>    
            </div>
            <div className="py-6 px-8">{ children }</div>
        </>
        
    )
    
}