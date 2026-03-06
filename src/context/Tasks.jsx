import { createContext, useState } from "react"

export const TaskContext = createContext(null);

const Tasks = ({children}) => {
  const [tasks, setTasks] = useState([{taskTitle: "testing", tag:null}, {taskTitle: "testing2", tag:null}])
  return (
    <TaskContext.Provider value={{tasks, setTasks}}>
      {children}
    </TaskContext.Provider>
  )
}

export default Tasks