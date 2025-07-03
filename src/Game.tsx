import { useEffect, useState } from "react";
import DATA from "./data";

function isMatch(first: string, second: string) {
  if (DATA[first] === second || DATA[second] === first) return true;
  else return false;
}

export function Game() {
  const [names, setNames] = useState([...Object.entries(DATA).flat()]);
  const [pair, setPair] = useState(["", ""]);

  useEffect(() => {
    if (pair[0] != "" && pair[1] != "") {
      if (isMatch(pair[0], pair[1])) {
        const first = pair[0];
        const second = pair[1];
        let newNames = [...names];
        newNames = newNames.filter((x) => x != first && x != second);
        setNames(newNames);
      }
      setPair(["", ""]);
    }
  }, [names, pair]);

  function handleClick(x: string) {
    console.log(x);
    if (pair[0] === "") {
      const newPair = [x, ""];
      setPair(newPair);
    } else {
      const newPair = [...pair];
      newPair[1] = x;
      setPair(newPair);
    }
  }

  return (
    <>
      {names.map((x, i) => (
        <button key={i} onClick={() => handleClick(x)}>
          {x}
        </button>
      ))}
    </>
  );
}
