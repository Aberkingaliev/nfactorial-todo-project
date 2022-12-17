import React from 'react';
import { useEffect, useContext, useState } from 'react';
import './index.css'
import TabsContext, {useTabContext} from './TabsContext';





const Tabs = () => {

    const tabList = ["To Do", "Done", "Trash"]
    const allTabContext = useTabContext()
    const {activeTab, handleChangeTab} = allTabContext


    return ( 
        <>
            <nav className="tab-nav">
                {tabList.map((tabItem, tabIndex)=>{ return(
                <button className={`${activeTab === tabItem ? "tab-active" : ""} tab body-m-14`}
                key={tabIndex}
                onClick={()=>handleChangeTab(tabItem)}>
                    {tabItem}
                </button>
                ) })}
            </nav>
        </>
 
     );
}
 
export default Tabs;