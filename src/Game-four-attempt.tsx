import { useEffect, useState } from "react";
import DATA from "./data";

function isMatch(pair: string[]) {
  const first = pair[0];
  const second = pair[1];
  if (DATA[first] === second || DATA[second] === first) return true;
  return false;
}

export function Game() {
  const [names, setNames] = useState([...Object.entries(DATA)].flat());
  const [pair, setPair] = useState(["", ""]);
  
  useEffect(() => {
    const newNames = setTimeout(() => {
      if (pair[0] === "" && pair[1] === "") return;
      if (isMatch([pair[0], pair[1]]) ) {
        const newNames = names.filter((x) => x != pair[1] && x != pair[0]);
        setNames(newNames);
      }
      setPair(["", ""]);
    }, 1000);
    return () => clearTimeout(newNames);
  }, [names, pair]);

  function handleClick(name: string) {
    if (pair[0] === "") {
      const newPair = [...pair];
      newPair[0] = name;
      setPair(newPair);
    } else if (pair[0] != "" && pair[1] === "" && name != pair[0]) {
      const newPair = [...pair];
      newPair[1] = name;
      setPair(newPair);
    }
  }

  const color =
    pair[0] != "" && pair[1] === ""
      ? " border "
      : pair[0] != "" && pair[1] != "" && isMatch([pair[0], pair[1]])
      ? " bg-green-400"
      : " bg-red-400";

  return (
    <>
      {names.map((x) => (
        <button
          className={"p-2 " + (x === pair[1] || x === pair[0] ? color : "")}
          onClick={() => handleClick(x)}
          key={x}
        >
          {x}
        </button>
      ))}
    </>
  );
}
