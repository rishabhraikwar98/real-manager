import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const Navbar = () => {
  const [title, setTitle] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case "/dashboard":
        setTitle("Dashboard");
        break;
      case "/projects":
        setTitle("Projects");
        break;
      case "/tasks":
        setTitle("Tasks");
        break;
      default:
        setTitle("Dashboard");
    }
  }, [pathname]);

  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      <div className="flex-1">
        <span className="text-xl font-semibold">{title}</span>
      </div>
    </div>
  );
};

export default Navbar;
