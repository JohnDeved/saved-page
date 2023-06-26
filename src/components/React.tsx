/** @jsxImportSource react */

import { signal } from "@preact/signals-react"
import { Box } from '../../styled-system/jsx'

const count = signal(0)

const React: React.FC = () => {
  return <Box bg="lightblue" onClick={() => count.value++}>Hello from React {count}</Box>
}

export default React