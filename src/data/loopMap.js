export const loopNp = (items) => {
  let bdg = [];
  for (const key in items) {
    if (Object.hasOwnProperty.call(items, key)) {
      const element = items[key];

      if (element.not) {
        bdg.push(
          <span
            key={element.it}
            className={
              " bg-indigo-100 text-indigo-800 text-xs font-semibold text-center w-4  mr-1 rounded dark:bg-indigo-200 dark:text-indigo-900 "
            }
          >
            {element.it}
          </span>
        );
      } else {
        bdg.push(
          <span
            key={element.it}
            className="bg-red-100 text-red-800 text-xs font-semibold text-center w-4 mr-1 rounded dark:bg-red-200 dark:text-red-900"
          >
            {element.it}
          </span>
        );
      }
    }
  }
  return bdg;
};
export const daysBA = () => {
  let bdg = [];
  for (let i = 1; i <= 25; i++) {
    bdg.push(
      <option value={i} key={i}>
        {i} Dias Despues
      </option>
    );
  }
  for (let i = 1; i <= 25; i++) {
    bdg.push(
      <option value={-i} key={-i}>
        {i} Dias Antes
      </option>
    );
  }
  return bdg;
};

export const getSelProp = (items,name="nodo") => {
  let rou = [{value:0,label:"Todos"}];
  for (const key in items) {
    if (Object.hasOwnProperty.call(items, key)) {
      const e = items[key];
      rou.push({ value: e.id, label: e[name] });
    }
  }
  return rou;
};
