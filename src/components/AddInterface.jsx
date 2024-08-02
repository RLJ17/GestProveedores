import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import proveedores from '@/api/proveedores';

export default function AddInterface({ onClose, onSave }) {
  const [newProveedor, setNewProveedor] = useState({
    razonSocial: '',
    nombreComercial: '',
    identificacionTributaria: '',
    numeroTelefonico: '',
    correoElectronico: '',
    sitioWeb: '',
    direccionFisica: '',
    pais: '',
    facturacionAnual: '',
    fechaUltimaEdicion: new Date().toISOString(),
  });

  const [errors, setErrors] = useState({});

  const isValid = () => {
    return (
      newProveedor.razonSocial &&
      newProveedor.nombreComercial &&
      newProveedor.identificacionTributaria &&
      newProveedor.numeroTelefonico &&
      newProveedor.correoElectronico &&
      newProveedor.sitioWeb &&
      newProveedor.direccionFisica &&
      newProveedor.pais &&
      newProveedor.facturacionAnual
    );
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateURL = (url) => {
    const re = /^(https?:\/\/)/;
    return re.test(String(url).toLowerCase());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProveedor({
      ...newProveedor,
      [name]: value,
    });
  };

  const handleSave = async (event) => {
    event.preventDefault();

    const currentErrors = {};

    if (!validateEmail(newProveedor.correoElectronico)) {
      currentErrors.correoElectronico = true;
    }

    if (!validateURL(newProveedor.sitioWeb)) {
      currentErrors.sitioWeb = true;
    }

    setErrors(currentErrors);

    if (Object.keys(currentErrors).length === 0) {
      try {
        const proveedorData = {
          ...newProveedor,
          facturacionAnual: parseFloat(newProveedor.facturacionAnual),
          fechaUltimaEdicion: new Date().toISOString(),
        };
        const resp = await proveedores.post('', proveedorData);
        console.log('respuesta', resp);
        if (resp?.status === 201) {
          await onSave();
          onClose();
        }
      } catch (error) {
        alert('Error al guardar.');
        console.error('Error en el registro de proveedor:', error);
      }
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
      <div className="bg-white p-12 rounded-md shadow-lg">
        <p className="text-3xl font-semibold mb-4">Registro de un proveedor</p>
        <form noValidate autoComplete="off" onSubmit={handleSave}>
          <div className="grid grid-cols-1 gap-4">
            <TextField
              label="Razón Social"
              name="razonSocial"
              value={newProveedor.razonSocial}
              onChange={handleChange}
              required={true}
              fullWidth
            />
            <TextField
              label="Nombre Comercial"
              name="nombreComercial"
              value={newProveedor.nombreComercial}
              onChange={handleChange}
              required={true}
              fullWidth
            />
            <TextField
              label="Identificación Tributaria"
              name="identificacionTributaria"
              value={newProveedor.identificacionTributaria}
              onChange={handleChange}
              required={true}
              type="number"
              fullWidth
            />
            <TextField
              label="Número Telefónico"
              name="numeroTelefonico"
              value={newProveedor.numeroTelefonico}
              onChange={handleChange}
              required={true}
              type="number"
              inputProps={{ step: 0 }}
              fullWidth
            />
            <TextField
              label="Correo Electrónico"
              name="correoElectronico"
              value={newProveedor.correoElectronico}
              onChange={handleChange}
              required={true}
              type="email"
              error={!!errors.correoElectronico}
              helperText={errors.correoElectronico ? 'Formato de correo incorrecto' : ''}
              fullWidth
            />
            <TextField
              label="Sitio Web"
              name="sitioWeb"
              value={newProveedor.sitioWeb}
              onChange={handleChange}
              required={true}
              error={!!errors.sitioWeb}
              helperText={errors.sitioWeb ? 'Debe comenzar con http:// o https://' : ''}
              fullWidth
            />
            <TextField
              label="Dirección Física"
              name="direccionFisica"
              value={newProveedor.direccionFisica}
              onChange={handleChange}
              required={true}
              fullWidth
            />
            <TextField
              label="País"
              name="pais"
              value={newProveedor.pais}
              onChange={handleChange}
              required={true}
              fullWidth
            />
            <TextField
              label="Facturación Anual"
              name="facturacionAnual"
              value={newProveedor.facturacionAnual}
              onChange={handleChange}
              required={true}
              type="number"
              fullWidth
            />
          </div>
          <div className="flex justify-end space-x-3 mt-4">
            <Button
              variant="contained"
              sx={{ backgroundColor: 'red', '&:hover': { backgroundColor: 'darkred' } }}
              onClick={onClose}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={!isValid()}
            >
              Guardar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

