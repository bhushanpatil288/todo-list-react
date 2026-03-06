import { BsFillPatchCheckFill } from "react-icons/bs";
import { LuBadgeCheck } from "react-icons/lu";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";

const NavbarHeading = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <BsFillPatchCheckFill className="text-blue-500" size={20} />
        <p>PlanFast</p>
      </div>
      <div>
        <TbLayoutSidebarLeftCollapseFilled className="text-blue-500" size={22} />
      </div>
    </div>
  )
}

export default NavbarHeading