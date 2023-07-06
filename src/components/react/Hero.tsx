/** @jsxImportSource react */

import { css } from '../../../styled-system/css'
import { Box, Center, styled } from '../../../styled-system/react'

export const Hero: React.FC = () => {
  return (
    <Center h="100dvh" color="white" textAlign="center">
      <styled.h1 fontSize="8xl">Saved Scroller</styled.h1>
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
