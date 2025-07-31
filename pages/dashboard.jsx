import Sidebar from "../Components/Sidebar";
import Rightdashboardcontent from "../Components/Rightdashboardcontent";
import ProductDetails from "./productdetails";
import { Mycontext } from "../src/App";
import DailyTask from "./DailyTask";
import { useEffect, useContext } from "react";
import UserDetails from "./UserDetails";
import OrderDetails from "./Orderdetails";
import CreateProduct from "./createproduct";
import DeleteProduct from "./deleteproduct";
import UpdateProduct from "./updateproduct";

function Dashboard() {
  const {
    islogin,
    setislogin,
    rightsidecomponent,
    setrightsidecomponent,
    hidesidebar,
  } = useContext(Mycontext);

  useEffect(() => {
    setislogin(false);
  }, []);

  return (
    <div className="dashboardcontainer container">
      <div className={hidesidebar ? "sidebarContainer" : " nosidebar"}>
        <Sidebar />
      </div>
      <div className="rightdashboardcontainer">
        {rightsidecomponent[0] && <Rightdashboardcontent />}
        {rightsidecomponent[1] && <ProductDetails />}
        {rightsidecomponent[2] && <CreateProduct />}
        {rightsidecomponent[3] && <UpdateProduct />}
        {rightsidecomponent[4] && <DeleteProduct />}
        {rightsidecomponent[5] && <OrderDetails />}
        {rightsidecomponent[6] && <UserDetails />}
        {rightsidecomponent[7] && <DailyTask />}
      </div>
    </div>
  );
}

export default Dashboard;
