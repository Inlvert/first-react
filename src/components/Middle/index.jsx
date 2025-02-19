import React from 'react'

function MiddleComp (props) {
  const {...restProps} = props
  console.log(restProps)
  return (
    <h1 {...restProps}>MiddleComp</h1>
  )
}

export default MiddleComp