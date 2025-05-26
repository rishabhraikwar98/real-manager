import { NavLink } from "react-router";
import { FaTachometerAlt,FaTasks , FaProjectDiagram, FaSignOutAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logoutUser } from "../features/auth/authSlice";
const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <aside className="w-64 bg-base-200 h-screen p-4 hidden md:block">
      <div className="text-xl font-bold mb-8 px-2">🚀 My Dashboard</div>
      <ul className="space-y-4">
        <li>
          <NavLink to="/dashboard" className="flex items-center gap-3 p-2 rounded hover:bg-base-300">
            <FaTachometerAlt /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className="flex items-center gap-3 p-2 rounded hover:bg-base-300">
            <FaProjectDiagram /> Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/tasks" className="flex items-center gap-3 p-2 rounded hover:bg-base-300">
            <FaTasks/> Tasks
          </NavLink>
        </li>
        <li className="mt-auto">
          <button
            onClick={() => dispatch(logoutUser())}
            className="flex items-center gap-3 p-2 rounded hover:bg-red-500 hover:text-white w-full"
          >
            <FaSignOutAlt /> Logout
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
