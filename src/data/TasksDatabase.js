import {v4 as uuidv4} from 'uuid';


const TasksDatabase = [
    {
        id: uuidv4(),
        status: {
            isDone: false,
            isTrash: false,
            isTodo: true
        },
        content: "First task"
    }, {
        id: uuidv4(),
        status: {
            isDone: false,
            isTrash: false,
            isTodo: true
        },
        content: "Second task"
    }, {
        id: uuidv4(),
        status: {
            isDone: false,
            isTrash: true,
            isTodo: false
        },
        content: "Third task"
    }
]
export default TasksDatabase