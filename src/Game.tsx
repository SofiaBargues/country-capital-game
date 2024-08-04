export function Game({ data }: { data: Record<string, string> }) {
  const arrData = Object.entries(data).flat();
  const shuffledArray = arrData.sort(() => 0.5 - Math.random());
  return (
    <div>
      <div
        className="text-sm
     flex gap-4 flex-wrap p-11"
      >
        {shuffledArray.map((name) => (
          <button className="flex p-2 px-4 rounded-sm bg-slate-200 border border-black">
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}
