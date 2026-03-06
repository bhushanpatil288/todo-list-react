import Layout from "../components/Layout"
import { IoMdAdd } from "react-icons/io";

const TodayPage = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-4">
        <h2 className="font-bold p-2 text-2xl">Today</h2>
        <div className="px-5">
          <div className="flex gap-2 items-center">
            <IoMdAdd />
            <p className="text-gray-500">Add New Task</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TodayPage