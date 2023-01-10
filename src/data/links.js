import {
  AiFillBook,
  AiFillHome,
  AiFillStar,
  AiOutlineAppstoreAdd,
  AiOutlineTransaction,
} from "react-icons/ai";
import {
  FaBuffer,
  FaFileInvoiceDollar,
  FaMoneyCheckAlt,
  FaRegChartBar,
  FaUsers,
  FaUsersCog,
} from "react-icons/fa";
import {
  MdComputer,
  MdOutlineNetworkCheck,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import {
  GiWifiRouter,
  GiGrass,
  GiReceiveMoney,
  GiPayMoney,
  GiCash,
} from "react-icons/gi";
import {
  RiBillLine,
  RiFocus2Line,
  RiProductHuntFill,
  RiSettings5Fill,
  RiUserLocationFill,
} from "react-icons/ri";
import { SiReactrouter, SiReadthedocs } from "react-icons/si";
import { TiTicket } from "react-icons/ti";

import {
  BsCalendarWeek,
  BsFillHddNetworkFill,
  BsMailbox2,
} from "react-icons/bs";

export const links = [
  {
    title: "Dashboard",
    icon: <AiFillHome />,
    to: "#",
    links: [],
  },

  {
    title: "Gestion de red",
    icon: <MdComputer />,
    links: [
      {
        name: "Routers",
        to: "routers",
        icon: <GiWifiRouter />,
      },
      {
        name: "Redes IPv4",
        to: "redipv4",
        icon: <SiReactrouter />,
      },
      {
        name: "Monitoreo",
        to: "monitoreo",
        icon: <GiGrass />,
      },
      {
        name: "Cajas Nap",
        to: "boxnap",
        icon: <AiFillBook />,
      },
    ],
  },
  {
    title: "Servicios",
    icon: <AiFillStar />,
    links: [
      {
        name: "Internet",
        to: "internet",
        icon: <MdOutlineNetworkCheck />,
      },
      {
        name: "Personalizado",
        to: "personalizado",
        icon: <FaBuffer />,
      },
    ],
  },
  {
    title: "Clientes",
    icon: <FaUsersCog />,
    links: [
      {
        name: "Usuarios",
        to: "usuarios",
        icon: <FaUsers />,
      },
      {
        name: "Mapa de clientes",
        to: "mapaclientes",
        icon: <RiUserLocationFill />,
      },
      {
        name: "Instalaciones",
        to: "instalaciones",
        icon: <BsFillHddNetworkFill />,
      },
      {
        name: "Contratos",
        to: "contratos",
        icon: <SiReadthedocs />,
      },
      {
        name: "Correos",
        to: "correos",
        icon: <BsMailbox2 />,
      },
    ],
  },
  {
    title: "Finanzas",
    icon: <GiReceiveMoney />,
    links: [
      {
        name: "Facturas",
        to: "facturas",
        icon: <RiBillLine />,
      },
      {
        name: "Registrar pago",
        to: "addpago",
        icon: <GiPayMoney />,
      },
      {
        name: "Transacciones",
        to: "transacciones",
        icon: <AiOutlineTransaction />,
      },
      {
        name: "Otros ingresos & egresos",
        to: "otros",
        icon: <GiCash />,
      },

      {
        name: "Factura electrónica",
        to: "facturaelectronica",
        icon: <FaFileInvoiceDollar />,
      },
      {
        name: "Reportes de pago",
        to: "reportesdepago",
        icon: <FaMoneyCheckAlt />,
      },
      {
        name: "Estadisticas",
        to: "estadisticas",
        icon: <FaRegChartBar />,
      },
    ],
  },
  {
    title: "Almacen",
    icon: <AiOutlineAppstoreAdd />,
    links: [
      {
        name: "Tipos de productos",
        to: "typeproducts",
        icon: <MdOutlineProductionQuantityLimits />,
      },

      {
        name: "Productos",
        to: "productos",
        icon: <RiProductHuntFill />,
      },
    ],
  },
  {
    title: "Tickets",
    icon: <TiTicket />,
    links: [
      {
        name: "Esperando respuesta",
        to: "tickets/open",
        icon: <RiFocus2Line />,
      },
      {
        name: "Contestados",
        to: "tickets/reply",
        icon: <RiFocus2Line />,
      },
      {
        name: "Cerrados",
        to: "tickets/close",
        icon: <RiFocus2Line />,
      },
    ],
  },
  {
    title: "Ajustes",
    to: "ajustes",
    icon: <RiSettings5Fill />,
    links: [],
  },
];
