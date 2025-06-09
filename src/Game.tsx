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
  console.log(pair);
  console.log(allNames);

  function handleClick(name: string) {
    // let newPair = pair;
    let [first, second] = [...pair];

    if (first === "") {
      first = name;
      setPair([first, second]);
    } else if (second === "") {
      second = name;
      setPair([first, second]);
    }

    setTimeout(() => {
      if (
        (first in DATA && DATA[first] === second) ||
        (second in DATA && DATA[second] === first)
      ) {
        const newAllNames = [...allNames];
        setAllNames(newAllNames.filter((x) => x !== first && x !== second));
      } else if (first && second) {
        setPair(["", ""]);
      }
    }, 2000);
  }

  return (
    <main>
      {allNames.map((name: string) => (
        <button
          className={pair[0] === name || pair[1] === name ? "bg-slate-400" : ""}
          onClick={() => handleClick(name)}
        >
          {name}
        </button>
      ))}
    </main>
  );
}
