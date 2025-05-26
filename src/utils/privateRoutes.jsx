import { useSelector } from "react-redux";
import { Navigate,Outlet} from "react-router";
import Layout from "../components/Layout";
import { useEffect } from "react";
function PrivateRoutes({children}) {
  const { userId } = useSelector((state) => state.auth);
  return userId ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/login" replace />
  );
}

export default PrivateRoutes;
