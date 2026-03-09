import { BrowserRouter, Routes, Route } from "react-router-dom"
import UpcomingPage from "./pages/UpcomingPage"
import TodayPage from "./pages/TodayPage"
import NotesPage from "./pages/NotesPage"
import SettingsPage from "./pages/SettingsPage"
import TaskContextProvider from "./context/TaskContextProvider"
import NavbarContextProvider from "./context/NavbarContextProvider"

const App = () => {
  return (
    <TaskContextProvider>
      <NavbarContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TodayPage />} />
            <Route path="/upcoming" element={<UpcomingPage />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </BrowserRouter>
      </NavbarContextProvider>
    </TaskContextProvider>
  )
}

export default App