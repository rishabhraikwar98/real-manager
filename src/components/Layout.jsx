import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
const Layout = ({children}) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 overflow-y-auto bg-base-100">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
