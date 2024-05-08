import React, { useContext } from 'react'
import {counterContext} from '../context/usecontext'


const Component1 = () => {
  const value = useContext(counterContext)
  return (
    <div>
    {value.count}
    </div>
  )
}

export default Component1