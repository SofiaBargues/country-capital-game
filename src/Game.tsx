export function Game({ data }: { data: Record<string, string> }) {
  return <div className="text-2xl text-cyan-700">hello.{data[1]}</div>;
}
