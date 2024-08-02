'use client'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from 'react';
import Box from '@mui/material/Box';
import { useState } from "react"
import { useRouter } from 'next/navigation';
import usuarios from '@/api/usuarios'
import riskList from '@/api/riskList'
export default function login() {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const User = {
      user: correo,
      password: contrasena
    };
    const riskToken = await riskList.post("login", {
      "username": "admin",
      "password": "password"
    })
    console.log("risktoken",riskToken)
    try {
      const response = await usuarios.post("login", User);
      console.log("Login", response)
      if (response?.status == 200) {
        router.push('/home')
      }
      else {
        alert("Credenciales incorrectas X")
      }
    } catch (error) {
      console.error('Error:', error.message);
      alert('Error al conectar');
    }
  };
  return (
    <div className="bg-slate-500 h-screen">
      <form onSubmit={handleSubmit}>
        <div className="formulario absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-white rounded-lg">
          <Box
            sx={{
              '& .MuiTextField-root': { m: 1, width: '30ch' },
              ml: 1,
              mt: 3,
              mb: 2,
            }}
            noValidate
            autoComplete="off"
          >
            <div className="text-center pb-3 pt-3">
              <TextField
                id="outlined-basic"
                label="Correo"
                variant="outlined"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>
            <div className="text-center pb-3">
              <TextField
                id="outlined-basic"
                label="Contraseña"
                variant="outlined"
                type="password"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
              />
            </div>
          </Box>
          <div className="flex justify-center pb-3">
            <button
              type="submit"
              className="bg-slate-700 hover:bg-slate-800 text-white font-bold rounded-md text-xl py-1 px-2"
            >
              Iniciar sesión
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}