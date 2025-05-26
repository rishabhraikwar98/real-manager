import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Signup from "./pages/Auth/Signup.jsx";
import Login from "./pages/Auth/Login.jsx";
import Layout from "./components/Layout.jsx";
import PrivateRoutes from "./utils/privateRoutes.jsx";

// private routes
import Dashboard from "./pages/Dashboard.jsx";
import Projects from "./pages/Projects.jsx";
import Tasks from "./pages/Tasks.jsx";

const App = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tasks" element={<Tasks />} />
        </Route>
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
};

export default App;
