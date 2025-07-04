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
    if (pair[0] === "" || pair[1] === "") return;
    const timer = setTimeout(() => {
      if (isMatch(pair[0], pair[1])) {
        const first = pair[0];
        const second = pair[1];
        let newNames = [...names];
        newNames = newNames.filter((x) => x != first && x != second);
        setNames(newNames);
      }
      setPair(["", ""]);
    }, 1000);
    return () => clearTimeout(timer);
  }, [names, pair]);

  function handleClick(x: string) {
    console.log(x);
    if (pair[0] === "") {
      const newPair = [x, ""];
      setPair(newPair);
    } else if (pair[1] === "") {
      const newPair = [...pair];
      newPair[1] = x;
      setPair(newPair);
    }
  }

  const color =
    pair[0] != "" && pair[1] === ""
      ? "bg-slate-300"
      : isMatch(pair[1], pair[0])
      ? "bg-green-600"
      : "bg-red-600";

  return (
    <>
      {names.map((x, i) => (
        <button
          className={pair[0] === x || pair[1] === x ? color : ""}
          key={i}
          onClick={() => handleClick(x)}
        >
          {x}
        </button>
      ))}
    </>
  );
}
