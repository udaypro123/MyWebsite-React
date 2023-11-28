import React, { Fragment, useContext } from 'react'
import { globaldata } from '../contextApi/context'
import { menuData } from './menudata'

const Menusidebar = () => {

    const { menu , setmenu, setSubjectdata,selcteditem, setSelcteditem} = useContext(globaldata)

    const sendsubjectdata=(ele,item)=>{
        setSubjectdata(ele)
        setSelcteditem(item)
    }

  

    return (
        <>
            {
                menu ? <>
                    <div className="menusidebarcontainer">
                        <img src="https://cdn-icons-png.flaticon.com/128/3416/3416079.png" onClick={()=>setmenu(!menu)} alt="" />
                        {
                            menuData && menuData.map((menuItem,i)=>{
                                return <Fragment key={i}>
                                <p onClick={()=>sendsubjectdata(menuItem.questionlist,menuItem)} style={{color:selcteditem && selcteditem.id === menuItem.id ? "orangered":"blue"}}>{menuItem.sub}</p>
                                </Fragment>
                            })
                        }

                     
                    </div>
                </> : <>
                    <div className="menusidebarcontainer1">

                    </div>
                </>
            }
        </>
    )
}

export default Menusidebar;
