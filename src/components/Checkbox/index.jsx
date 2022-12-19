import { useGlobalContext } from "../../GlobalContexts"
import {v4 as uuidv4, validate} from 'uuid';
import "./index.css"
import { useState } from "react";
import { useTabContext } from "../Tabs/TabsContext";
import Droplist from "../Droplist";
import BtnIcon from "../BtnIcon";


const Checkbox = ({children}) => {
    const allGlobalContext = useGlobalContext()
    const { tasksDatabase, setTasksDataBase } = allGlobalContext
    let filteredData = tasksDatabase

    const allTabContext = useTabContext()
    const { activeTab } = allTabContext
    
    const [dropvisible, setDropVisible] = useState(null)
    const [dropBoolean, setDropBoolean] = useState(true)

    switch(activeTab){
        case "To Do":
            filteredData = tasksDatabase.filter((elem)=> elem.status.isTodo || elem.status.isDone)
            break;
        case "Done":
            filteredData = tasksDatabase.filter((elem)=> elem.status.isDone)
            break;
        case "Trash":
            filteredData = tasksDatabase.filter((elem)=> elem.status.isTrash)
            break;
        default:
            filteredData = tasksDatabase
            break;
    }

    
    const handleChangeChecked = (id, event) => {
        const statusedData = tasksDatabase.map((value)=>{
            if(value.id === id){
                return {
                    id: value.id,
                    status: {
                        isDone: event.target.checked,
                        isTrash: false,
                        isTodo: !value.status.isTodo
                    },
                    content: value.content
                }
            } else{
                return value
            }
        })
        setTasksDataBase((lastState)=>{
            return lastState = statusedData
        })

    }

    const handleIconClick = (taskid) => {
        setDropVisible(taskid)
        setDropBoolean((lastState) => !lastState)
    }

    const handleDropClick = ( event, taskid ) => {
        if (event.target.innerText.indexOf("Move To Trash") >= 0) {
            const task = tasksDatabase.find(task => task.id === taskid);
            if (task) {
              task.status.isDone = false;
              task.status.isTrash = true;
              task.status.isTodo = false;
            }
          } else if (event.target.innerText.indexOf("Move Back To To Do") >= 0) {
            const task = tasksDatabase.find(task => task.id === taskid);
            if (task) {
              task.status.isDone = false;
              task.status.isTrash = false;
              task.status.isTodo = true;
            }
          }  else if (event.target.innerText.indexOf("Delete Forever") >= 0) {
            const taskIndex = tasksDatabase.findIndex(task => task.id === taskid);
            
            if (taskIndex<=0) {
              tasksDatabase.splice(taskIndex, 1);
            }
        }        
          setTasksDataBase(tasksDatabase);
          setDropVisible(lastState => !lastState);
        }        

    
    
    return(
        
        <>
        <div className="checkbox-list">
            {filteredData.map((task)=>{
                return(
                    <>

                        <div className="checkbox-container" key={task.id}>
                                <BtnIcon handleClick={()=>handleIconClick(task.id)}/>
                                <input type={"checkbox"} 
                                    className={task.status.isDone ? "checkbox-m-checked" : "checkbox-m"} 
                                    onClick={(event)=>handleChangeChecked(task.id, event)}
                                    
                                    />
                                <label className={`body-m-16 ${task.status.isDone ? "check-value" : ""}`}>{task.content}</label>
                            </div>
                            {dropvisible === task.id ? <Droplist dropBoolean={dropBoolean} dropItemClick={(event)=>handleDropClick(event, task.id)}/> : ""}
                    </>
                )
            })}
        </div>

        </>
    )
}

export default Checkbox