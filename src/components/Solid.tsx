/** @jsxImportSource solid-js */

import { createSignal } from "solid-js"

// simple solidjs hello world component
export default function Solid() {
  // count signal
  const [count, setCount] = createSignal(0)
  return <p onclick={() => setCount(count() + 1)}>Hello from Solid {count()}</p>
}