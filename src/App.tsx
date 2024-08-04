import DATA from "./data";
import { Game } from "./Game";

export default function App() {
  return (
    <main>
      <Game data={DATA} />
    </main>
  );
}
