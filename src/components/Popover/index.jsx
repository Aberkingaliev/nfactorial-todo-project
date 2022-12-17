import "./index.css"
import { useGlobalContext } from "../../GlobalContexts"
import {v4 as uuidv4} from 'uuid';
import { useState } from "react";

const Popover = () => {
    const allGlobalContext = useGlobalContext()
    const {popoverToggle, filteredTodo, setTasksDataBase} = allGlobalContext

    const [valueFromTask, setValueFromTask] = useState("")

    const handleAddTask = () => {
        const newTask = {
          id: uuidv4(),
          status: {
            isDone: false,
            isTrash: false,
            isTodo: true
          },
          content: valueFromTask
        };
        // console.log(newTask);
      
        setTasksDataBase(tasks => [...tasks, newTask]);
        setValueFromTask("");
      };
      

    return ( 
        <>
            <div className={popoverToggle ? "popover-container" : "popover-container-none"}>
                <p className="body-b-16">Add New To Do</p>
                <div className="form-task-add">
                    <textarea type="text" placeholder="Your Text" className="body-m-16 textarea-task-add" onChange={(event)=>setValueFromTask(event.target.value)} value={valueFromTask}/>
                </div>
                <button type="sumbit" className="btn-dark body-b-14" onClick={handleAddTask}>Add</button>
            </div>
        </>
     );
}
 
export default Popover;