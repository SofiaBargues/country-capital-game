import { useEffect, useState } from "react";
import DATA from "./data";

function isMatch([first, second]: string[]) {
  if (DATA[first] === second || DATA[second] === first) {
    return true;
  }
  return false;
}

export function Game() {
  const [names, setNames] = useState(Object.entries(DATA).flat());
  // .sort(() => 0.5 - Math.random());
  const [pair, setPair] = useState(["", ""]);
  console.log(names);
  console.log(pair);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("hi");
      if (pair[0] === "" || pair[1] === "") return;
      if (isMatch([pair[0], pair[1]])) {
        setNames(names.filter((x) => x != pair[0] && x != pair[1]));
      }
      setPair(["", ""]);
    }, 1000);
    return () => clearTimeout(timer);
  }, [names, pair]);

  function handleClick(x: string) {
    if (pair[0] === "") {
      const newPair = [...pair];
      newPair[0] = x;
      setPair(newPair);
    } else if (pair[0] != "" && pair[1] === "" && x != pair[0]) {
      const newPair = [...pair];
      newPair[1] = x;
      setPair(newPair);
    }
  }

  const color =
    pair[0] != "" && pair[1] === ""
      ? " border"
      : isMatch([pair[0], pair[1]])
      ? "bg-green-400"
      : "bg-red-400";

  return (
    <>
      {" "}
      {names.map((x) => (
        <button
          onClick={() => handleClick(x)}
          className={"p-2 " + (pair[0] === x || pair[1] === x ? color : "")}
          key={x}
        >
          {x}
        </button>
      ))}{" "}
    </>
  );
}
