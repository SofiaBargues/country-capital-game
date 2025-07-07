import { useEffect, useState } from "react";
import DATA from "./data";

function isMatch(pair: string[]) {
  const [first, second] = pair;
  if (first != "" && (DATA[second] === first || DATA[first] === second)) {
    return true;
  }
  return false;
}

export function Game() {
  const [names, setNames] = useState(Object.entries(DATA).flat());
  const [pair, setPair] = useState(["", ""]);

  // console.log(isMatch(pair), pair);
  function handleClick(place: string) {
    const [first, second] = [...pair];
    
    if (first === "") {
      setPair([place, ""]);
    } else if (second === "") {
      const newPair = [...pair];
      newPair[1] = place;
      setPair(newPair);
      if (isMatch(newPair)) {
        const newNames = [...names].filter(
          (x) => x != newPair[0] && x != newPair[1]
        );
        setNames(newNames);
        console.log(newNames);
        setPair(["", ""]);
      }
    }
  }
  return (
    <>
      {names.map((x) => (
        <button onClick={() => handleClick(x)} key={x} className="p-2">
          {x}
        </button>
      ))}
    </>
  );
}
