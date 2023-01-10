import { AiFillClockCircle, AiFillSetting, AiFillTool } from "react-icons/ai";
import { FaDatabase, FaUser } from "react-icons/fa";
import { GiDirectionSigns } from "react-icons/gi";
import { RiListSettingsFill, RiUserShared2Line } from "react-icons/ri";

export const lnksSet = [
  {
    title: "General",
    icon: <AiFillSetting />,
    to: "/settings",
  },
  {
    title: "Gestión personal",
    icon: <FaUser />,
    to: "/agentes",
  },
  {
    title: "Portal del cliente",
    icon: <RiUserShared2Line />,
    to: "#",
  },
  {
    title: "Ubicaciones",
    icon: <GiDirectionSigns />,
    to: "/zonas",
  },
  {
    title: "Crontab",
    icon: <AiFillClockCircle />,
    to: "#",
  },
  {
    title: "Base de datos",
    icon: <FaDatabase />,
    to: "#",
  },
  {
    title: "Logs",
    icon: <RiListSettingsFill />,
    to: "#",
  },
  {
    title: "Sistema",
    icon: <AiFillTool />,
    to: "#",
  },
];
