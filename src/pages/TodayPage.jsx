import { useState, useContext } from "react";
import Layout from "../components/Layout"
import { IoMdAdd } from "react-icons/io";
import CreateTask from "../components/CreateTask";
import {TaskContext} from "../context/Tasks";


const TodayPage = () => {
  const {tasks, setTasks} = useContext(TaskContext)

  const[isOpen, setIsOpen] = useState(false);

  return (
    <Layout>
      <div className="flex flex-col gap-4">
        <h2 className="font-bold p-2 text-2xl">Today</h2>
        <div className="px-5">
          <button className="flex gap-2 items-center cursor-pointer text-gray-500 hover:text-black transition-all duration-200" onClick={()=>{setIsOpen(!isOpen)}}>
            <IoMdAdd className="text-black" />
            <p className="">Add New Task</p>
          </button>
        </div>
        <ul>
          {
            tasks.map((task, idx)=>{
              return (
                <li key={idx} className="flex gap-3 mx-3 px-2 py-3 hover:bg-blue-100 rounded border-b border-gray-200" >
                  <input type="checkbox" id={idx+"task"} />
                  <label htmlFor={idx+"task"} className="cursor-pointer">{task.taskTitle}</label>
                </li>
              )
            })
          }
        </ul>
        <CreateTask isOpen={isOpen} setIsOpen={setIsOpen} />
        
      </div>
    </Layout>
  )
}

export default TodayPage