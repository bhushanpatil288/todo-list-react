const RenderTasks = ({tasks, setTasks}) => {

  const toggleTaskStatus = (taskId) =>{
    let taskIndex = tasks.findIndex(task=>task.id === taskId);
    let newTasks = [...tasks];
    newTasks[taskIndex].complete = !newTasks[taskIndex].complete
    setTasks(newTasks)
  }

  return (
    <ul>
      {
        tasks.map(task => {
          return (
            <li key={task.id} className="flex gap-3 mx-3 px-2 py-3 hover:bg-blue-100 rounded border-b border-gray-200">
              <input type="checkbox" id={task.id + "task"} onChange={()=>{toggleTaskStatus(task.id)}} />
              <label htmlFor={task.id + "task"} className={`cursor-pointer ${task.complete ? "line-through": ""}`}>{task.taskTitle}</label>
            </li>
          )
        })
      }
    </ul>
  )
}

export default RenderTasks