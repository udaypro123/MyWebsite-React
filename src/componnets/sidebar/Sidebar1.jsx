import React, { Fragment, useContext } from 'react'
import { globaldata } from '../contextApi/context'
import Menusidebar from '../sidebar/Menusidebar'
import { datalist } from './data'
const Sidebar1 = () => {

  const { data, setdata, subjectdata } = useContext(globaldata)

  const handleshareanswer = (ele) => {
    setdata(ele)
  }

  

  return (
    <>
      <div className="sidebar1conatiner">
        {
          subjectdata ? <>
            {
              subjectdata && subjectdata.map((ele, i) => {

                return <Fragment key={i}>
                  <div className="questionscard" style={{backgroundColor: data && data.id === ele.id ? "aqua":"white" }} onClick={() => handleshareanswer(ele)} >
                    <h4>{ele.tag}</h4>
                    <p>{ele.questions}</p>
                  </div>
                </Fragment>
              })
            }

          </> : <>
            {
              datalist && datalist.map((ele, i) => {
                return <Fragment key={i}>
                  <div className="questionscard" style={{backgroundColor: data && data.id === ele.id ? "aqua":"white" }} onClick={() => handleshareanswer(ele)} >
                    <h4>{ele.tag}</h4>
                    <p>{ele.questions}</p>
                  </div>
                </Fragment>
              })
            }

          </>
        }

        <Menusidebar />
      </div>
    </>
  )
}

export default Sidebar1;
