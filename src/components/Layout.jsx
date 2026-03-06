import Navbar from "./Navbar"

const Layout = ({children}) => {
  return (
    <div className="flex">
      <div className="overflow-hidden rounded w-1/5 shadow">
        <Navbar />
      </div>
      <div className="overflow-hidden mx-3 my-3 w-4/5">
        {children}
      </div>
    </div>
  )
}

export default Layout