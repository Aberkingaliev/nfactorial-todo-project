import "./index.css"
import MaterialIcon, {colorPalette} from 'material-icons-react';
import { useEffect, useState } from "react";
import { useTabContext } from "../Tabs/TabsContext";


const Droplist = ({visible, dropItemClick}) => {
    const allTabContext = useTabContext()
    const {activeTab, handleChangeTab} = allTabContext
    const [actionsList, setActionsList] = useState([
        {
            Action: "Move To Trash",
            Icon: "delete"
        },
        {
            Action: "Delete Forever",
            Icon: "delete"
        },
        {
            Action: "Move Back To To Do",
            Icon: "library_add_check"
        }
    ])

    let filteredActionList = actionsList

    switch(activeTab){
        case "To Do":
            filteredActionList = actionsList.filter((elem)=>{
                return elem.Action === "Move To Trash"
            })
            break;
        case "Done":
            filteredActionList = actionsList.filter((elem)=>{
                return elem.Action === "Move To Trash"
            })
            break;
        case "Trash":
            filteredActionList = actionsList.filter((elem)=>{
                return elem.Action === "Delete Forever" || elem.Action === "Move Back To To Do"
            })
            break;
    }

    return ( 
        <>
            <div className={visible ? "droplist-container drop-active" : "droplist-container"} >
            {filteredActionList.map((value)=>(
                <div className="body-m-14 droplist-item" onClick={dropItemClick}>
                    <MaterialIcon icon={value.Icon} size="20px" color={"#353535"}/>
                    {value.Action}
                </div>
            ))}
            </div>
        </>
     );
}
 
export default Droplist;