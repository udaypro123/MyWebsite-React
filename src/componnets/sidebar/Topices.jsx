import React, { Fragment, useContext } from 'react'
import { globaldata } from '../contextApi/context'
import { menuData } from './menudata'

const Topices = () => {

    const { menu, setmenu, setSubjectdata, selcteditem, setSelcteditem } = useContext(globaldata)

    const sendsubjectdata = (ele, item) => {
        setSubjectdata(ele)
        setSelcteditem(item)
    }



    return (
        <>
            <div className="relatedtopic">
            Related Topices ⬇️⬇️⬇️ 
            </div>
            <div className="topices">
                
                {
                    menuData && menuData.map((menuItem, i) => {
                        return <Fragment key={i}>
                            <p onClick={() => sendsubjectdata(menuItem.questionlist, menuItem)} style={{ color: selcteditem && selcteditem.id === menuItem.id ? "orangered" : "blue" }}>{menuItem.sub} </p><span>|</span>
                        </Fragment>
                    })
                }
            </div>

        </>
    )
}

export default Topices;
