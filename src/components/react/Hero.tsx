/** @jsxImportSource react */

import { css } from '../../../styled-system/css'
import { Box, Center, styled } from '../../../styled-system/react'

export const Hero: React.FC<{ img: string }> = ({ img }) => {
  return (
    <Center
      h="100dvh"
      color="white"
      textAlign="center"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, .5), rgba(0, 0, 0, 1) ), url(${img})`,
      }}
    >
      <styled.h1 fontSize={['4xl', '6xl', '8xl']}>Saved Scroller</styled.h1>
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
