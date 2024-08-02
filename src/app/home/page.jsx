import Layout from "@/components/Layout";
import ContentTable from "@/components/ContentTable";

export default function home() {
    const _rows = [
        {
            "id": 1,
            "razonSocial": "SAIR SAC",
            "nombreComercial": "Ferretería SAIR",
            "identificacionTributaria": 777666555,
            "numeroTelefonico": "935596212",
            "correoElectronico": "robertolpzj16@gmail.com",
            "sitioWeb": "www.SairSac.com",
            "direccionFisica": "Av. Manuel Olgin, Gamarra",
            "pais": "Perú",
            "facturacionAnual": 100000.5,
            "fechaUltimaEdicion": "2024-07-31T00:00:00"
        },
        {
            "id": 3,
            "razonSocial": "string",
            "nombreComercial": "string",
            "identificacionTributaria": 0,
            "numeroTelefonico": "9957797945",
            "correoElectronico": "user@example.com",
            "sitioWeb": "https://localhost:7125/swagger/index.html",
            "direccionFisica": "string",
            "pais": "string",
            "facturacionAnual": 0,
            "fechaUltimaEdicion": "2024-07-31T19:47:59.110322"
        },
        {
            "id": 4,
            "razonSocial": "Empresa S.A.C",
            "nombreComercial": "string",
            "identificacionTributaria": 0,
            "numeroTelefonico": "9957797945",
            "correoElectronico": "user@example.com",
            "sitioWeb": "https://localhost:7125/swagger/index.html",
            "direccionFisica": "string",
            "pais": "string",
            "facturacionAnual": 0,
            "fechaUltimaEdicion": "2024-07-31T15:00:49.6053607"
        },
        {
            "id": 5,
            "razonSocial": "Empresa S.A.C",
            "nombreComercial": "string",
            "identificacionTributaria": 0,
            "numeroTelefonico": "9957797945",
            "correoElectronico": "user@example.com",
            "sitioWeb": "https://localhost:7125/swagger/index.html",
            "direccionFisica": "string",
            "pais": "string",
            "facturacionAnual": 0,
            "fechaUltimaEdicion": "2024-07-31T15:00:49.6053607"
        },
        {
            "id": 6,
            "razonSocial": "Empresa S.A.C",
            "nombreComercial": "string",
            "identificacionTributaria": 0,
            "numeroTelefonico": "9957797945",
            "correoElectronico": "user@example.com",
            "sitioWeb": "https://localhost:7125/swagger/index.html",
            "direccionFisica": "string",
            "pais": "string",
            "facturacionAnual": 0,
            "fechaUltimaEdicion": "2024-07-31T15:00:49.6053607"
        },
        {
            "id": 7,
            "razonSocial": "Empresa S.A.C",
            "nombreComercial": "string",
            "identificacionTributaria": 0,
            "numeroTelefonico": "9957797945",
            "correoElectronico": "user@example.com",
            "sitioWeb": "https://localhost:7125/swagger/index.html",
            "direccionFisica": "string",
            "pais": "string",
            "facturacionAnual": 0,
            "fechaUltimaEdicion": "2024-07-31T15:00:49.6053607"
        },
        {
            "id": 8,
            "razonSocial": "Empresa S.A.C",
            "nombreComercial": "string",
            "identificacionTributaria": 0,
            "numeroTelefonico": "9957797945",
            "correoElectronico": "user@example.com",
            "sitioWeb": "https://localhost:7125/swagger/index.html",
            "direccionFisica": "string",
            "pais": "string",
            "facturacionAnual": 0,
            "fechaUltimaEdicion": "2024-07-31T15:00:49.6053607"
        },
        {
            "id": 9,
            "razonSocial": "SAIR SAC",
            "nombreComercial": "Ferretería SAIR",
            "identificacionTributaria": 777666555,
            "numeroTelefonico": "935596212",
            "correoElectronico": "robertolpzj16@gmail.com",
            "sitioWeb": "www.SairSac.com",
            "direccionFisica": "Av. Manuel Olgin, Gamarra",
            "pais": "Perú",
            "facturacionAnual": 100000.5,
            "fechaUltimaEdicion": "2024-07-31T00:00:00"
        },
        {
            "id": 10,
            "razonSocial": "string",
            "nombreComercial": "string",
            "identificacionTributaria": 0,
            "numeroTelefonico": "9957797945",
            "correoElectronico": "user@example.com",
            "sitioWeb": "https://localhost:7125/swagger/index.html",
            "direccionFisica": "string",
            "pais": "string",
            "facturacionAnual": 0,
            "fechaUltimaEdicion": "2024-07-31T19:47:59.110322"
        },
        {
            "id": 11,
            "razonSocial": "Empresa S.A.C",
            "nombreComercial": "string",
            "identificacionTributaria": 0,
            "numeroTelefonico": "9957797945",
            "correoElectronico": "user@example.com",
            "sitioWeb": "https://localhost:7125/swagger/index.html",
            "direccionFisica": "string",
            "pais": "string",
            "facturacionAnual": 0,
            "fechaUltimaEdicion": "2024-07-31T15:00:49.6053607"
        },
        {
            "id": 12,
            "razonSocial": "Empresa S.A.C",
            "nombreComercial": "string",
            "identificacionTributaria": 0,
            "numeroTelefonico": "9957797945",
            "correoElectronico": "user@example.com",
            "sitioWeb": "https://localhost:7125/swagger/index.html",
            "direccionFisica": "string",
            "pais": "string",
            "facturacionAnual": 0,
            "fechaUltimaEdicion": "2024-07-31T15:00:49.6053607"
        },
        {
            "id": 13,
            "razonSocial": "Empresa S.A.C",
            "nombreComercial": "string",
            "identificacionTributaria": 0,
            "numeroTelefonico": "9957797945",
            "correoElectronico": "user@example.com",
            "sitioWeb": "https://localhost:7125/swagger/index.html",
            "direccionFisica": "string",
            "pais": "string",
            "facturacionAnual": 0,
            "fechaUltimaEdicion": "2024-07-31T15:00:49.6053607"
        },
        {
            "id": 14,
            "razonSocial": "Empresa S.A.C",
            "nombreComercial": "string",
            "identificacionTributaria": 0,
            "numeroTelefonico": "9957797945",
            "correoElectronico": "user@example.com",
            "sitioWeb": "https://localhost:7125/swagger/index.html",
            "direccionFisica": "string",
            "pais": "string",
            "facturacionAnual": 0,
            "fechaUltimaEdicion": "2024-07-31T15:00:49.6053607"
        },
        {
            "id": 4,
            "razonSocial": "Empresa S.A.C",
            "nombreComercial": "string",
            "identificacionTributaria": 0,
            "numeroTelefonico": "9957797945",
            "correoElectronico": "user@example.com",
            "sitioWeb": "https://localhost:7125/swagger/index.html",
            "direccionFisica": "string",
            "pais": "string",
            "facturacionAnual": 0,
            "fechaUltimaEdicion": "2024-07-31T15:00:49.6053607"
        }
    ];
    return (
        <>
            <Layout>
                <ContentTable></ContentTable>
            </Layout>

        </>
    )
}