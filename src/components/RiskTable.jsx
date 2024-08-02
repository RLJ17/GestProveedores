import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { useState } from 'react';

const Proveedores_col = [
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

const Offshore_col = [
    { id: 'Entity', label: 'Entidad', minWidth: 170 },
    { id: 'Jurisdiction', label: 'Jurisdiction', minWidth: 170 },
    { id: 'LinkedTo', label: 'Linked To', minWidth: 170 },
    { id: 'Data From', label: 'Data From', minWidth: 140 }
];



export default function RiskTable({ columns = Offshore_col, rows }) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(3);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const renderCell = (row, column) => {
        return (
          <TableCell key={column.id} align={column.align}>
            {column.format ? column.format(row[column.id]) : row[column.id]}
          </TableCell>
        );
      };

    return (
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
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.id || index}
                    >
                      {columns.map((column) => renderCell(row, column, index))}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[3, 10, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    )
}