import { useEffect, useState } from "react";
import DATA from "./data";

function isMatch(pair: string[]) {
  const [first, second] = pair;
  if (DATA[first] === second || DATA[second] === first) return true;
  return false;
}

export function Game() {
  const [names, setNames] = useState(
    Object.entries(DATA).flat()
    // .sort(() => 0.5 - Math.random())
  );
  const [pair, setPair] = useState(["", ""]);
  console.log(pair);
  console.log(names);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (pair[1] === "" && pair[0] === "") return;
      if (isMatch(pair)) {
        const newNames = names.filter((x) => x != pair[0] && x != pair[1]);
        setNames(newNames);
      }
      if (pair[1] != "" && pair[0] != "") {
        setPair(["", ""]);
      }
      clearTimeout(timer);
      // console.log("hi");
    }, 1000);
  }, [names, pair]);

  function handleClick(x: string) {
    if (pair[0] === "") {
      const newPair = [...pair];
      newPair[0] = x;
      setPair(newPair);
    } else if (pair[0] != x && pair[1] === "") {
      const newPair = [...pair];
      newPair[1] = x;
      setPair(newPair);
    }
  }

  const color =
    pair[0] != "" && pair[1] === ""
      ? " border"
      : isMatch(pair)
      ? " bg-green-400"
      : " bg-red-400";

  return names.map((x) => (
    <button
      onClick={() => handleClick(x)}
      key={x}
      className={"p-2" + (pair[0] === x || pair[1] === x ? color : "")}
    >
      {x}
    </button>
  ));
}
