export const tblHIpv4 = [
  "id",
  "nombre",
  "red",
  "uso ips",
  "cidr",
  "router",
  "tipo",
];
export const tblHRouter = [
  "id",
  "nombre",
  "ip",
  "modelo",
  "version",
  "clientes",
  "estado",
];
export const tblHMonit = [
  "id",
  "nombre",
  "equipo",
  "ip",
  "estado",
  "online",
  "activos",
  "suspendidos",
];
export const tblHNap = [
  "id",
  "nombre",
  "ubicación",
  "coordenadas",
  "puertos",
  "detalles",
];
export const tbHeadSerUs = [
  "ID",
  "Plan",
  "Costo",
  "Ip",
  "Router",
  "Instalado",
  "Estado",
];
export const tbHeadEqUs = [
  "ID",
  "No. Serie",
  "No. MAC",
  `Equipo`,
  "Fecha",
  "Estado",
];
export const tbHpSer = [
  "ID",
  "Producto",
  "Monto",
  "No. serie",
  "No. MAC",
  "Fecha inicio",
  "Factura",
  "Estado",
];
export const tbPlanes = [
  "ID",
  "Nombre",
  "Descarga kbps",
  "subida kbps",
  "precio",
  "activos",
  "suspendidos",
];
export const TblHPersonali = [
  "ID",
  "Nombre",
  "precio",
  "impuesto",
  "activos",
  "suspendidos",
  "retirados",
];
export const TblHUser = ["ID", "Nombre", "ip", "estatus", "plan"];

export const tblInstallR = [
  "ID",
  "Cliente",
  "Ubicación",
  "Fecha",
  "Fecha instalación",
  "Móvil",
  "Dirección",
];
export const tblInstall = [
  "ID",
  "Cliente",
  "Ubicación",
  "Fecha",
  "Fecha instalación",
  "Móvil",
  "Estado",
];
export const tblTyPro = [
  "id",
  "Producto",
  "descripción",
  "tipo",
  "impuesto (%)",
  "disponibles",
];
export const tblProducts = [
  "id",
  "Producto",
  "No. MAC",
  "costo",
  "estado",
  "cliente",
  "INGRESO",
  "SALIDA",
];
export const tblTickOpen = [
  "Nº",
  "Remitente",
  "asunto",
  "fecha",
  "abierto por",
];
export const tblTickOthers = ["Nº", "asunto", "fecha", "estado", "abierto por"];
export const tblHZones = ["ID", "ubicación", "activos", "suspendidos"];

export const tblHAge = ["nombre", "usuario", "correo", "rol"];

export const tblMyBills = [
  "N° FACTURA",
  "EMITIDO",
  "ESTADO",
  "TOTAL",
  "IMPUESTO",
  "TIPO",
  "PAGADO",
  "FECHA PAGO",
  "FORMA PAGO",
];
