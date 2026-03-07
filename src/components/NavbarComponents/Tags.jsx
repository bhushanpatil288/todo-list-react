import { useContext, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import CreateTag from "../CreateTag";
import { TaskContext } from "../../context/Tasks";
import RenderTags from "./RenderTags";


const Tags = () => {

  const [isCreateTaskOpen, setIsCreateTaskOpen] = useState(false);
  const { tags } = useContext(TaskContext);
  return (
    <div className="flex flex-col gap-3 relative">
      <h3>TAGS</h3>
      {tags &&
        <RenderTags tags={tags} />
      }
      <button
        onClick={() => setIsCreateTaskOpen(!isCreateTaskOpen)}
        className="flex items-center gap-3 cursor-pointer"
      >
        <IoMdAdd />
        <p>Add New Tag</p>
      </button>
      {isCreateTaskOpen &&
        <CreateTag setIsCreateTaskOpen={setIsCreateTaskOpen} />
      }
    </div >
  )
}

export default Tags