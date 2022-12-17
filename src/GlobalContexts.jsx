import React, { useContext, useEffect, useState } from "react";
import TasksDatabase from "./data/TasksDatabase";


const GlobalContext = React.createContext()

const useGlobalContext = () => {
    return useContext(GlobalContext)
}

const GlobalContextProvider = ({ children }) => {
    let [tasksDatabase, setTasksDataBase] = useState(TasksDatabase)
    const [popoverToggle, setPopoverToggle] = useState(false)
    let [filteredTodo, setFilteredTodo] = useState(TasksDatabase)

    useEffect(()=>{
        if(filteredTodo.length > 3){
            tasksDatabase = tasksDatabase
        } else{
            tasksDatabase = filteredTodo
        }
    }, [filteredTodo])


    return ( 
        <GlobalContext.Provider value={{
            tasksDatabase: tasksDatabase,
            popoverToggle: popoverToggle,
            filteredTodo: filteredTodo,
            setPopoverToggle,
            setTasksDataBase,
            setFilteredTodo
        }}>
            { children }
        </GlobalContext.Provider>
     );
}
 
export { useGlobalContext }
export default GlobalContextProvider;