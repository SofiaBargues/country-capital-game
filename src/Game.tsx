import { useEffect, useState } from "react";

export function Game({ data }: { data: Record<string, string> }) {
  const arrData = Object.entries(data).flat();
  const shuffledArray = () => arrData.sort(() => 0.5 - Math.random());
  // estados que guardan  los botones seleccionados
  const [selected, setSelected] = useState("");
  const [selected1, setSelected1] = useState("");
  //Paises que siguen en juego
  const [countries, setCountries] = useState(shuffledArray);

  const isComplete = selected && selected1;
  const isError = selected != data[selected1] && selected1 != data[selected];
  const isCorrect = selected == data[selected1] || selected1 == data[selected];

  useEffect(() => {
    if (isComplete) {
      setTimeout(() => {
        if (isCorrect) {
          const newCountries = countries.filter(
            (item) => item !== selected && item !== selected1
          );
          setCountries(newCountries);
        }
        setSelected("");
        setSelected1("");
      }, 1000);
    }
  }, [isComplete, isCorrect]);

  console.log([selected, selected1]);
  console.log(isCorrect);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    // @ts-expect-error has inner text
    const value = e.target.innerText;
    if (!selected) {
      setSelected(value);
    } else if (!selected1 && value !== selected) {
      setSelected1(value);
    }
  }

  return countries.length != 0 ? (
    <div className="text-sm flex gap-4 flex-wrap p-11">
      {/* mapeo todos los paices y capitales trransformandolo en un boton  */}
      {countries.map((name) => (
        <button
          onClick={handleClick}
          className={
            "flex p-2 px-4 rounded-md  border border-black" +
            " " +
            (!isComplete && selected == name
              ? " bg-blue-500 border "
              : isComplete &&
                (selected1 == name || selected == name) &&
                isCorrect
              ? " bg-lime-600 border "
              : isComplete && (selected1 == name || selected == name) && isError
              ? "bg-red-700"
              : " bg-slate-200 ")
          }
        >
          {name}
        </button>
      ))}
    </div>
  ) : (
    <div className="bg-green-400 h-screen  flex justify-center items-center text-white text-5xl font-bold animate-pulse">
      Congratulations!
    </div>
  );
}
