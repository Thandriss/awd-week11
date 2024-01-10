import React from 'react'
import MyHOC from './MyHOC'

function WrapComp({name}) {
  return (
    <div>
        Hello {name}!
    </div>
  )
}

export default MyHOC(WrapComp, "Kalle")