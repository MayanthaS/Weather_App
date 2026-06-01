import { type ReactNode } from "react"

type Props = {
  children:ReactNode
  title:string
}

export default function card({children, title}: Props) {
  return (
    <div className="p-4 rounded-xl bg-slate-600  text-white shadow-md  mt-3 flex flex-col gap-2">
         <h2 className="text-2xl font-semibold">{title}</h2>
        <div>{children}</div>
    </div>
  )
}
