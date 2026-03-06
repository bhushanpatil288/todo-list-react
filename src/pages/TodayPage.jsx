import { useState, useContext } from "react";
import Layout from "../components/Layout"
import { IoMdAdd } from "react-icons/io";
import CreateTask from "../components/CreateTask";
import {TaskContext} from "../context/Tasks";
import RenderTasks from "../components/TodayPageComponents/RenderTasks";


const TodayPage = () => {
  const {tasks, setTasks} = useContext(TaskContext)

  const[isOpen, setIsOpen] = useState(false);

  return (
    <Layout>

      <div className="flex flex-col gap-4 relative">
        <h2 className="font-bold p-2 text-2xl">Today</h2>
        <div className="px-5">
          <button className="flex gap-2 items-center cursor-pointer text-gray-500 hover:text-black transition-all duration-200" onClick={()=>{setIsOpen(!isOpen)}}>
            <IoMdAdd className="text-black" />
            <p className="">Add New Task</p>
          </button>
        </div>

        <RenderTasks tasks={tasks} setTasks={setTasks} />
      
        <CreateTask isOpen={isOpen} setIsOpen={setIsOpen} />
        
      </div>
    </Layout>
  )
}

export default TodayPage