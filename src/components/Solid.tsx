/** @jsxImportSource solid-js */

import { createSignal } from "solid-js"

export default function Solid() {
  const [count, setCount] = createSignal(0)
  return <p onclick={() => setCount(count() + 1)}>Hello from Solid {count()}</p>
}