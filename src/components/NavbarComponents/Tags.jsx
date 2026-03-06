import { IoMdAdd } from "react-icons/io";

const Tags = () => {
  return (
    <div className="flex flex-col gap-3">
      <h3>TAGS</h3>
      <div className="flex items-center gap-3 cursor-pointer">
        <IoMdAdd />
        <p>Add New Tag</p>
      </div>
    </div>
  )
}

export default Tags