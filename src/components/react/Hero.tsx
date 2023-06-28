/** @jsxImportSource react */

import { css } from '../../../styled-system/css'
import { Box, Center } from '../../../styled-system/react'

export const Hero: React.FC = () => {
  return (
    <Center h="100dvh" color="white" textAlign="center">
      <h1 className={css({ fontSize: '8xl' })}>Saved Scroller</h1>
      {/* position arrow at bottom */}
      <Box
        position="absolute"
        fontSize="60px"
        bottom="20px"
        animation="bounce 1s infinite"
      >↓
      </Box>
    </Center>
  )
}
