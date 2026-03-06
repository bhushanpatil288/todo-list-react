import { SlControlForward } from "react-icons/sl";
import { VscChecklist } from "react-icons/vsc";
import { FaRegNoteSticky } from "react-icons/fa6";

export const exploreList = [
  {
    title: "Today",
    link: "/",
    icon: VscChecklist
  },
  {
    title: "Upcoming",
    link: "/upcoming",
    icon: SlControlForward
  },
  {
    title: "Notes",
    link: "/notes",
    icon: FaRegNoteSticky
  }
]