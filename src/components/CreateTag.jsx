import { useContext, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { TaskContext } from "../context/TaskContextProvider";

const CreateTag = ({ setIsCreateTaskOpen }) => {
  const { addTag } = useContext(TaskContext);
  const [ tagName, setTagName ] = useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    addTag(tagName);
    setTagName('');
    setIsCreateTaskOpen(false);
  }
  return (
    <div className="absolute left-40 bg-blue-100 shadow rounded px-5 py-5 z-5">
      <div className="text-end">
        <button
          type="button"
          className="cursor-pointer text-blue-500 hover:text-red-500 transition-all duration-200"
          onClick={() => { setIsCreateTaskOpen(false) }}
        >
          <IoIosCloseCircle className="t" size={20} />
        </button>
      </div>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <label htmlFor="createTag">Create Tag</label>
          <input 
            type="text" 
            placeholder="Enter tag name" 
            className="bg-white outline-none px-3 py-1 rounded" 
            onChange={(e)=>{setTagName(e.target.value)}}
          />
        </div>
        <div 
          className="text-center"
        >
          <button className="submit bg-blue-500 px-3 py-1 text-white rounded-2xl">Create</button>
        </div>
      </form>
    </div>
  )
}

export default CreateTag