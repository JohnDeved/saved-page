/** @jsxImportSource solid-js */

import { createSignal } from "solid-js"
import { Box } from "../../styled-system/solid-jsx"

export default function Solid() {
  const [count, setCount] = createSignal(0)
  return <Box bg="lightgreen" onClick={() => setCount(count() + 1)}>Hello from Solid {count()}</Box>
}