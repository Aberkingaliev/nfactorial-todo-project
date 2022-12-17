import "./index.css"
import { useTabContext } from "../Tabs/TabsContext"

const TasksHead = () => {
    const allTabContext = useTabContext()
    const {activeTab} = allTabContext
    return ( 
    <div className="task-list-container">
            <section className="task-head">
                <h3>{activeTab}</h3>
                <div className="divider"/>
            </section>
    </div>
     );
}
 
export default TasksHead;