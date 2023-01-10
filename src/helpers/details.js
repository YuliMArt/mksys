export const getLetters = (name) => {
  if (name === null) return 'AG';
  let nm;
  const arrN = name.split(" ");
  if (arrN.length > 1) {
    const cad = `${arrN[0]}`;
    const cad2 = `${arrN[1]}`;
    nm = cad.charAt(0) + cad2.charAt(0);
  } else {
    nm = arrN[0].charAt(0) + arrN[0].charAt(1);
  }
  return nm;
};

export const porcentA = (total, us) => {
  const t = parseInt(total);
  const u = parseInt(us);
  const porcent = (u / t) * 100;
  return porcent.toFixed(1);
};
export const porcetColor = (por) => {
  if (por < 50) {
    return "bg-blue-700";
  }
  if (por > 50 && por < 80) {
    return "bg-yellow-400";
  }
  if (por > 80) {
    return "bg-red-700";
  }
};
