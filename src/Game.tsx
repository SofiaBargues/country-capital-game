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

  console.log(pair);
  console.log(names);

  useEffect(() => {
    const newNames = setTimeout(() => {
      if (pair[0] === "" && pair[1] === "") return;
      if (isMatch([pair[0], pair[1]]) && pair[1] != "") {
        const newNames = names.filter((x) => x != pair[1] && x != pair[0]);
        setNames(newNames);
        console.log(newNames);
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

  return (
    <>
      {names.map((x) => (
        <button className="p-2" onClick={() => handleClick(x)} key={x}>
          {x}
        </button>
      ))}
    </>
  );
}
