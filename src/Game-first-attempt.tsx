import { useEffect, useState } from "react";
import DATA from "./data";

const names: string[] = [];
for (const [key, val] of Object.entries(DATA)) {
  names.push(key);
  names.push(val);
}

export function Game() {
  const [allNames, setAllNames] = useState(() =>
    
    names.sort(() => Math.random() - 0.5)
  );
  const [pair, setPair] = useState(["", ""]);
  const [first, second] = pair;
  const isMatch =
    (first in DATA && DATA[first] === second) ||
    (second in DATA && DATA[second] === first);

  console.log(pair);
  console.log(allNames);

  useEffect(() => {
    if (first === "" || second === "") return;

    const timer = setTimeout(() => {
      if (isMatch) {
        setAllNames(allNames.filter((x) => x !== first && x !== second));
      }
      setPair(["", ""]);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [second, first, allNames, isMatch]);

  function handleClick(name: string) {
    const [first, second] = [...pair];

    if (first === "") {
      setPair([name, second]);
    } else if (second === "") {
      setPair([first, name]);
    }
  }

  return (
    <main>
      {allNames.map((name: string) => (
        <button
          key={name}
          className={
            !pair.includes(name)
              ? ""
              : second === ""
              ? "bg-slate-400"
              : !isMatch
              ? "bg-red-400"
              : "bg-green-400"
          }
          onClick={() => handleClick(name)}
        >
          {name}
        </button>
      ))}
    </main>
  );
}
