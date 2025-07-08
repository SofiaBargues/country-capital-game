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

  useEffect(() => {
    // console.log("hi");
    // if (pair[0] === "" || pair[1] === "") return;
  }, 2000);
    const pairMatch = setTimeout(() => {
      if (isMatch(pair)) {
        const newNames = [...names].filter((x) => x != pair[0] && x != pair[1]);
        setNames(newNames);
        console.log(newNames);
      }
      setPair(["", ""]);
    return () => clearTimeout(pairMatch);
  }, [pair, names]);
  // console.log(isMatch(pair), pair);
  function handleClick(place: string) {
    const [first, second] = [...pair];

    if (first === "") {
      setPair([place, ""]);
    } else if (second === "") {
      const newPair = [...pair];
      newPair[1] = place;
      setPair(newPair);
    }
  }

  return (
    <>
      {names.map((x) => {
        let color = "";
        if (pair[0] === x && pair[1] === "") color = " border";
        else if (pair[0] === "" && pair[1] === "") "";
        else if (
          isMatch([pair[0], pair[1]]) &&
          (pair[1] === x || pair[0] === x)
        )
          color = "bg-green-300";
        else if (
          !isMatch([pair[0], pair[1]]) &&
          (pair[1] === x || pair[0] === x)
        )
          color = "bg-red-300";

        return (
          <button
            onClick={() => handleClick(x)}
            key={x}
            className={"p-2 " + color}
          >
            {x}
          </button>
        );
      })}
    </>
  );
}
