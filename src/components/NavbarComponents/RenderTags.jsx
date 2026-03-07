import { FaTrash } from "react-icons/fa6";
import { TaskContext } from "../../context/Tasks";
import { useContext } from "react";

const RenderTags = ({ tags }) => {

  const { deleteTag } = useContext(TaskContext)

  return (
    <ul>
      {tags.map((t, id) => {
        return (
          <li key={id} className="flex justify-between items-center">
            <button 
              className="flex gap-1 items-center w-100 rounded px-3 py-1 cursor-pointer"
            >
              <div className="bg-yellow-500 w-5 h-5 rounded"></div>
              <span>{t}</span>
            </button>
            <div>
              <button
                onClick={() => deleteTag(t)}
                className="p-2 w-6 h-6 flex justify-center items-center bg-linear-to-br from-red-400 to-red-500 rounded-md px-2 text-white shadow cursor-pointer hover:bg-linear-to-br hover:from-red-400 hover:to-red-600 transition-all transition-duration-300"
              >
                <FaTrash />
              </button>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default RenderTags