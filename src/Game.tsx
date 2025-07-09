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
    setTimeout(
      () => console.log("hi"),

      1000
    );
  }, [names]);

  function handleClick(x: string) {
    if (pair[0] === "") {
      const newPair = [...pair];
      newPair[0] = x;
      setPair(newPair);
    } else if (pair[0] != x && pair[1] === "") {
      const newPair = [...pair];
      newPair[1] = x;
      setPair(newPair);
      if (isMatch(newPair)) {
        const newNames = names.filter(
          (x) => x != newPair[0] && x != newPair[1]
        );
        setNames(newNames);
      }
      setPair(["", ""]);
    }
  }

  return names.map((x) => (
    <button onClick={() => handleClick(x)} key={x} className="p-2">
      {x}
    </button>
  ));
}
