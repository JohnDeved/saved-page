/** @jsxImportSource react */

import { signal } from "@preact/signals-react"

const count = signal(0)

const Home: React.FC = () => {
  return <div onClick={() => count.value++}>Hello from React {count}</div>
}

export default Home