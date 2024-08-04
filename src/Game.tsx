import { useState } from "react";

export function Game({ data }: { data: Record<string, string> }) {
  const arrData = Object.entries(data).flat();
  const shuffledArray = arrData.sort(() => 0.5 - Math.random());
  let [selected, setSelected] = useState("");
  let [selected1, setSelected1] = useState("");

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
        {shuffledArray.map((name) => (
          <button
            onClick={handleClick}
            className="flex p-2 px-4 rounded-md bg-slate-200 border border-black"
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}
