import React from 'react'
import Child from './Child'

function Parent({user}) {
  return (
    <div style={{padding: '20px', border: '2px solid white'}}>
      <h2>Parent</h2>
      <Child />
    </div>
  )
}

export default Parent