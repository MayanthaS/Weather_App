import { useQuery } from "@tanstack/react-query";
import { getWeather } from "./api";
import Card from "./components/cards/card";
import WindCards from "./components/cards/windCards";

function App() {
  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 10, lon: 50 }),
  })

  return (
    <>
      <div className=" flex flex-col  gap-4">
        <Card title="Weather">{JSON.stringify(data?.weather ?? []).slice(0, 100)}</Card>
        <Card title="Main">{JSON.stringify(data?.main ?? {}).slice(0, 100)}</Card>
        <WindCards wind={data?.wind} />
      </div>
    </>
  )
}

export default App
