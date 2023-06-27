/** @jsxImportSource solid-js */

import type { Component } from 'solid-js'
import { createSignal } from 'solid-js'
import { Box } from '../../styled-system/solid'

const Solid: Component = () => {
  const [count, setCount] = createSignal(0)
  return <Box bg="lightgreen" onClick={() => setCount(count() + 1)}>Hello from Solid {count()}</Box>
}

export default Solid
