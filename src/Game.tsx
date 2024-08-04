import { useState } from "react";

export function Game({ data }: { data: Record<string, string> }) {
  const arrData = Object.entries(data).flat();
  const shuffledArray = () => arrData.sort(() => 0.5 - Math.random());
  // estados que guardan  los botones seleccionados
  const [selected, setSelected] = useState("");
  const [selected1, setSelected1] = useState("");
  //Paises que siguen en juego
  const [countries, setCountries] = useState(shuffledArray);

  //chequea que las opciones seleccionadas sean correctas por false o true
  function isCorrect([nombre, nombre1]: string[]) {
    if (nombre == data[nombre1] || nombre1 == data[nombre]) {
      return true;
    }
    return false;
  }
  console.log([selected, selected1]);
  console.log(isCorrect([selected, selected1]));

  function handleClick(e) {
    if (selected == "") {
      setSelected(e.target.innerText);
    } else {
      setSelected1(e.target.innerText);
    }
  }

  return (
    <div>
      <div
        className="text-sm
     flex gap-4 flex-wrap p-11"
      >
        {/* mapeo todos los paices y capitales trransformandolo en un boton  */}
        {countries.map((name) => (
          <button
            onClick={handleClick}
            className={
              "flex p-2 px-4 rounded-md  border border-black" +
              " " +
              (selected1 == name || selected == name
                ? " bg-lime-600 border "
                : " bg-slate-200 ")
            }
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}
