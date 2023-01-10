import { BsCurrencyDollar, BsShield } from "react-icons/bs";
import { FiCreditCard } from "react-icons/fi";

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: "Mi perfil",
    desc: "Account Settings",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
  {
    icon: <BsShield />,
    title: "My Inbox",
    desc: "Messages & Emails",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
  },
  {
    icon: <FiCreditCard />,
    title: "My Tasks",
    desc: "To-do and Daily Tasks",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
];
export const days = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28,
];
export const smsN = [
  "Desactivado",
  "Correo",
  "SMS",
  "Telegram",
  "Correo + Telegram" + "+ SMS",
];
