import { data } from "autoprefixer";

export const desMesage = (object) => {
  const obj = JSON.parse(object);
  const { header, body } = obj;
  const res = header + " " + body;
  return res;
};
export const desMesFormat = (object) => {
  const obj = JSON.parse(object);
  const { header, body } = obj;
  const res = header + "\n" + body;
  return res;
};
export const desMesBtns = (object) => {
  const obj = JSON.parse(object);
  return obj.btns;
};
