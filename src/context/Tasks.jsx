import { createContext, useState } from "react"

export const TaskContext = createContext(null);

const Tasks = ({children}) => {
  const [tasks, setTasks] = useState([{id: 1, taskTitle: "testing", complete:false, tag:null}, {id: 2, taskTitle: "testing2", complete:false, tag:null}])
  return (
    <TaskContext value={{tasks, setTasks}}>
      {children}
    </TaskContext>
  )
}

export default Tasks