import React from 'react'
import Parent from './Parent'


function Tree({user}) {
  return (
    <div style={{padding: '20px', border: '2px solid white'}}>
      <h2>Tree</h2>
      <Parent />
    </div>
  )
}

export default Tree