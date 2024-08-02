'use client';
import {useState, useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import AddInterface from './AddInterface';
import proveedores from '@/api/proveedores';
import ConfirmAdvise from './ConfirmAdvise';
import EditInterface from './EditInterface';
import RiskInterface from './RiskInterface';

const columns = [
  { id: 'razonSocial', label: 'Razón Social', minWidth: 170 },
  { id: 'nombreComercial', label: 'Nombre Comercial', minWidth: 170 },
  { id: 'identificacionTributaria', label: 'Identificación Tributaria', minWidth: 170 },
  { id: 'numeroTelefonico', label: 'Número Telefónico', minWidth: 140 },
  { id: 'correoElectronico', label: 'Correo Electrónico', minWidth: 170 },
  { id: 'sitioWeb', label: 'Sitio Web', minWidth: 170 },
  { id: 'direccionFisica', label: 'Dirección Física', minWidth: 170 },
  { id: 'pais', label: 'País', minWidth: 70 },
  { id: 'facturacionAnual', label: 'Facturación Anual', minWidth: 140, align: 'right', format: (value) => value.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) },
  { id: 'fechaUltimaEdicion', label: 'Fecha Última Edición', minWidth: 170, format: (value) => new Date(value).toLocaleDateString() },
];

export default function ContentTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [editIdx, setEditIdx] = useState(-1);
  const [showAdd, setShowAdd] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showRisk, setShowRisk] = useState(false);
  const fetchData = async() =>{
    try {
      console.log("fetching data")
      const response = await proveedores.get("all")
      setRows(response.data)
    } catch (error) {
      console.log("Error al consultar los datos: ", error)
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRowClick = (row) => {
    setSelectedRow(row);
  };

  const handleDelete = async() => {
    try {
      const response = await proveedores.remove(`${selectedRow.id}`)
      console.log(response)
      fetchData()
      setSelectedRow(null)
      setShowConfirm(false)
    } catch (error) {
      alert("Error al eliminar entidad")
      console.log("Error al eliminar entidad: ", error)
    }
  }

  const renderCell = (row, column) => {
    if (column.id === 'sitioWeb') {
      return (
        <TableCell key={column.id} align={column.align}>
          <a href={row[column.id]} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            {row[column.id]}
          </a>
        </TableCell>
      );
    }
    return (
      <TableCell key={column.id} align={column.align}>
        {column.format ? column.format(row[column.id]) : row[column.id]}
      </TableCell>
    );
  };

  return (
    <>
      <div className="flex justify-between">
        <p className="text-xl font-semibold p-2">Lista de Proveedores</p>
        <div className="space-x-3">
          <button
            className="bg-green-500 hover:bg-green-600 text-white text-lg font-semibold py-1 px-3 rounded-md"
            onClick={() => setShowAdd(true)}
          >
            Add
          </button>
          {selectedRow &&
            <>
              <button
                className="bg-sky-500 hover:bg-sky-600 text-white text-lg font-semibold py-1 px-3 rounded-md"
                onClick={() => setShowEdit(true)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white text-lg font-semibold py-1 px-3 rounded-md"
                onClick={() => setShowConfirm(true)}
              >
                Delete
              </button>
              <button
                className="bg-slate-700 hover:bg-slate-800 text-white text-lg font-semibold py-1 px-3 rounded-md"
                onClick={() => setShowRisk(true)}
              >
                Risk List
              </button>
            </>
          }
        </div>
      </div>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 640 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    sx={{
                      backgroundColor: 'grey',
                      color: 'white',
                      fontWeight: 'bold',
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isSelected = selectedRow && selectedRow.id === row.id;
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.id}
                      onClick={() => handleRowClick(row)}
                      selected={isSelected}
                      sx={{ cursor: 'pointer', backgroundColor: isSelected ? '#f0f0f0' : 'inherit' }}
                    >
                      {columns.map((column) => renderCell(row, column, index))}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      {showAdd && <AddInterface onClose={() => setShowAdd(false)} onSave={() => fetchData()}/>}
      {showConfirm && <ConfirmAdvise onConfirm={()=> handleDelete()} onClose={()=> setShowConfirm(false)}/>}
      {showEdit && <EditInterface onClose={()=> setShowEdit(false)} onSave={() => fetchData()} proveedor={selectedRow}/>}
      {showRisk && <RiskInterface onClose={()=> setShowRisk(false)} entityName={selectedRow.razonSocial}/>}
    </>
  );
}
