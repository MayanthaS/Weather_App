import Card from "./card"

type Props = {
  wind?: unknown
}

export default function WindCards({ wind }: Props) {
  return (
    <Card title="Wind">{JSON.stringify(wind ?? {}).slice(0, 100)}</Card>
  )
}