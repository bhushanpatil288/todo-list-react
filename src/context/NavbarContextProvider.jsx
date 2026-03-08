import { createContext, useState } from "react";

export const NavbarContext = createContext(true);

const NavbarContextProvider=({children})=>{
  const [isNavOpen, setIsNavOpen] = useState(true);
  return (
    <NavbarContext value={{isNavOpen, setIsNavOpen}}>
      {children}
    </NavbarContext>
  )
}

export default NavbarContextProvider