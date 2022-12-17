import React, {useContext, useEffect, useState} from "react"
import { useGlobalContext } from "../../GlobalContexts"


const TabContext = React.createContext()


const TabsContext = ({children}) => {
    const allGlobalContext = useGlobalContext()
    const { tasksDatabase, setTasksDataBase ,filteredTodo, setFilteredTodo } = allGlobalContext

    let [activeTab, setActiveTab] = useState("To Do")

    const handleChangeTab = (tabItem) => {
        setActiveTab((lastState) => lastState = tabItem)

    }

    return (
        <TabContext.Provider
            value={{
                activeTab: activeTab,
                handleChangeTab
            }}>

            {children}
        </TabContext.Provider>
    );
}

const useTabContext = () => {
    return useContext(TabContext)
}



export {useTabContext};

export default TabsContext;