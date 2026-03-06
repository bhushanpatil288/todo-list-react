import NavbarHeading from "./NavbarComponents/NavbarHeading"
import ExploreList from "./NavbarComponents/ExploreList"
import Tags from "./NavbarComponents/Tags";
import { CiSettings } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-100 px-3 py-4 h-100 flex flex-col justify-between">
      <div>
        <NavbarHeading />

        <div className="mt-5">
          <ExploreList />
        </div>

        <div className="mt-5">
          <Tags />
        </div>
      </div>

      <NavLink to={"/Settings"} className={({ isActive }) => isActive ? "bg-blue-300 rounded flex gap-3 px-2 ps-5 py-1 items-center shadow transition-all transition-duration:200ms" : "flex gap-3 py-1 px-2 items-center hover:bg-blue-200 rounded transition-all transition-duration:200ms"}>
        <CiSettings size={20}/>
        Settings
      </NavLink>

    </div>
  )
}

export default Navbar