import React, { useContext } from 'react'
import { globaldata } from '../contextApi/context'

const Sidebar2 = () => {
    const {data, setdata}=useContext(globaldata)
    console.log(data)
  return (
    <>
      <div className="sidebar2conatiner">
        <div className="sidebar2conatinerinsidepart">
            {data && data.answer }
            <img src={data && data.imgsrc } alt="" />      
            <img src={data && data.imgsrc1 } alt="" />      
        </div>
      </div>
    </>
  )
}

export default Sidebar2
