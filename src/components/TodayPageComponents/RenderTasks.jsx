import { FaTrash } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { useContext, useState } from "react";
import { TaskContext } from "../../context/TaskContextProvider";
import EditTask from "../EditTask";

const RenderTasks = ({ tasks, filter }) => {

  const { toggleTaskStatus, deleteTask, taskToEdit, setTaskToEdit } = useContext(TaskContext)

  return (
    <>
      {filter.length === 0 ?
        <ul>
          {
            tasks.map(task => {
              return (
                <li key={task.id} className="flex flex-col sm:flex-row justify-between mx-3 max-sm:gap-3 px-2 py-3 hover:bg-blue-100 rounded border-b border-gray-200">
                  <div className="flex flex-col gap-3 items-start">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" checked={task.complete} id={task.id + "task"} onChange={() => { toggleTaskStatus(task.id) }} />
                      <label htmlFor={task.id + "task"} className={`cursor-pointer ${task.complete ? "line-through" : ""}`}>{task.taskTitle}</label>
                    </div>
                    {task.tag &&
                      <span className="border rounded-md text-center px-2 bg-yellow-400 border-none shadow">
                        {task.tag}
                      </span>
                    }
                  </div>
                  <div className="flex justify-center items-center gap-3 flex-col sm:flex-row max-sm:flex-col-reverse">
                    {taskToEdit && taskToEdit.id === task.id &&
                      <EditTask taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} />
                    }

                    <div className="flex">
                      <button
                        onClick={() => setTaskToEdit(task)}
                        className="p-2 w-7.5 h-7.5 flex jufstify-center items-center rounded-md px-2 text-blue-500 cursor-pointer hover:bg-linear-to-br hover:from-blue-400 hover:to-blue-600 hover:text-white transition-all transition-duration-300"
                      >
                        <FiEdit />
                      </button>
                      <button
                        onClick={() => deleteTask(task.id)}
                        className="p-2 w-7.5 h-7.5 flex justify-center items-center rounded-md px-2 text-red-500 cursor-pointer hover:bg-linear-to-br hover:from-red-400 hover:to-red-600 hover:text-white transition-all transition-duration-300"
                      >
                        <FaTrash />
                      </button>
                    </div>

                  </div>
                </li>
              )
            })
          }
        </ul>
        :
        <ul>
          {
            filter.map(task => {
              return (
                <li key={task.id} className="flex justify-between mx-3 px-2 py-3 hover:bg-blue-100 rounded border-b border-gray-200">
                  <div className="flex flex-col gap-3 items-center">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" checked={task.complete} id={task.id + "task"} onChange={() => { toggleTaskStatus(task.id) }} />
                      <label htmlFor={task.id + "task"} className={`cursor-pointer ${task.complete ? "line-through" : ""}`}>{task.taskTitle}</label>
                    </div>
                    {task.tag &&
                      <span className="border rounded-md text-center px-2 bg-yellow-400 border-none shadow">
                        {task.tag}
                      </span>
                    }
                  </div>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="p-2 w-7.5 h-7.5 flex justify-center items-center rounded-md px-2 text-red-500 shadow cursor-pointer hover:bg-linear-to-br hover:from-red-400 hover:to-red-600 transition-all transition-duration-300"
                  >
                    <FaTrash />
                  </button>
                </li>
              )
            })
          }
        </ul>
      }
    </>
  )
}

export default RenderTasks