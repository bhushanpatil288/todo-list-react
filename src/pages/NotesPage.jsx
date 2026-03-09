import Layout from "../components/Layout"
import { IoMdAdd } from "react-icons/io";

const NotesPage = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-4">
        <h2 className="font-bold p-2 text-2xl">Notes</h2>
        <div className="px-5">
          <IoMdAdd />
        </div>
      </div>
    </Layout>
  )
}

export default NotesPage