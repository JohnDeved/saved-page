/** @jsxImportSource react */

import { css } from '../../../styled-system/css'
import { Container } from '../../../styled-system/react'

export const Navigation: React.FC = () => {
  // needs 2 buttons: "new" and "random"
  return (
    <Container
      py="15px"
      display="flex"
      gap={3}
      // sticky
      top={0}
      bg="rgba(0,0,0,0.8)"
      justifyContent="center"
      alignItems="center"
      position="sticky"
      backdropFilter="blur(5px)"
      zIndex={1}
    >
      <button className={css({
        color: 'white',
        fontSize: '4xl',
        lineHeight: 0.6,
        padding: '15px 20px',
        border: '3px solid #fff',
      })}
      >new
      </button>
      <button className={css({
        color: 'white',
        fontSize: '4xl',
        lineHeight: 0.6,
        padding: '15px',
        border: '3px solid #fff',
      })}
      >random
      </button>
    </Container>
  )
}
