import { useEffect, useState } from "react";
import DATA from "./data";

const names: string[] = [];
for (const [key, val] of Object.entries(DATA)) {
  names.push(key);
  names.push(val);
}

export function Game() {
  const [allNames, setAllNames] = useState(names);
  const [pair, setPair] = useState(["", ""]);
  const [first, second] = pair;

  console.log(pair);
  console.log(allNames);

  useEffect(() => {
    if (first === "" || second === "") return;

    const timer = setTimeout(() => {
      if (
        (first in DATA && DATA[first] === second) ||
        (second in DATA && DATA[second] === first)
      ) {
        setAllNames(allNames.filter((x) => x !== first && x !== second));
      }
      setPair(["", ""]);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [second, first, allNames]);

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
          className={pair[0] === name || pair[1] === name ? "bg-slate-400" : ""}
          onClick={() => handleClick(name)}
        >
          {name}
        </button>
      ))}
    </main>
  );
}
