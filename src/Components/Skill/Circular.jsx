import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import React from 'react'

const Circular = ({value,color,text}) => {
  return (
      <CircularProgress value={value} color={color} size={{base:"100px",sm:"120px",md:"150px",lg:"180px"}} thickness={"3px"}>
          <CircularProgressLabel>{text}</CircularProgressLabel>
    </CircularProgress>
  )
}

export default Circular