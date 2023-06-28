/** @jsxImportSource react */

import { css } from '../../../styled-system/css'
import { Box } from '../../../styled-system/react'

export const Navigation: React.FC = () => {
  // needs 2 buttons: "new" and "random"
  return (
    <Box
      py="15px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={3}
      bg="rgba(0,0,0,0.8)"
      backdropFilter="blur(5px)"
      // sticky
      top={0}
      position="sticky"
      zIndex={1}
    >
      <button className={css({
        color: 'white',
        fontSize: 'xl',
        padding: '10px 15px',
        border: '3px solid #fff',
      })}
      >new
      </button>
      <button className={css({
        color: 'white',
        fontSize: 'xl',
        padding: '10px 15px',
        border: '3px solid #fff',
      })}
      >random
      </button>
    </Box>
  )
}
