import React from 'react'
import { TailSpin } from 'react-loader-spinner'

function HelpLineLoader({ color = '#FFF', height = 30, width = 30 }) {
  return (
    <>
      <TailSpin 
        height={height}
        width={height}
        color={color}
      />
    </>
  )
}

export default HelpLineLoader