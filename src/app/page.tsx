import dynamic from "next/dynamic"

const App = dynamic(
  () => import("@/components/containers/App")
    .then((mod) => mod.App),
  { ssr: true }
)

export default function HomePage() {
  return (
    <div className="bg-black relative h-dvh w-dvw overflow-hidden">
      <App />
    </div>
  )
}