const API_KEY = import.meta.env.VITE_API_KEY

export async function getWeather({ lat, lon }: { lat: number; lon: number }) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&hourly&daily&lang=en&appid=${API_KEY}`,
  )
  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message ?? `Weather request failed: ${res.status}`)
  }

  return data
}
