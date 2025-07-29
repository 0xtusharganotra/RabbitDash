import Sidebar from "../Components/Sidebar";
import Rightdashboardcontent from "../Components/Rightdashboardcontent";
import ProductDetails from "./productdetails";
import { Mycontext } from "../src/App";
import DailyTask from "./DailyTask";
import { useEffect, useContext } from "react";
import UserDetails from "./UserDetails";
import OrderDetails from "./Orderdetails";

function Dashboard() {
  const { islogin, setislogin, rightsidecomponent, setrightsidecomponent } =
    useContext(Mycontext);

  useEffect(() => {
    setislogin(false);
  }, []);

  return (
    <div className="dashboardcontainer container">
      <div className="row w-100">
        <div
          style={{
            width: "20%",
            maxWidth: "20%",
            paddingLeft: "0px",
            paddinRight: "0px",
            borderRadius: "10px",
          }}
        >
          <Sidebar />
        </div>
        <div
          className="col-md-[80%]"
          style={{
            width: "80%",
            maxWidth: "80%",
            paddingLeft: "10px",
            paddinRight: "0px",
            borderRadius: "10px",
          }}
        >
          {rightsidecomponent[0] && <Rightdashboardcontent />}
          {rightsidecomponent[1] && <ProductDetails />}
          {rightsidecomponent[2] && <Rightdashboardcontent />}
          {rightsidecomponent[3] && <Rightdashboardcontent />}
          {rightsidecomponent[4] && <Rightdashboardcontent />}
          {rightsidecomponent[5] && <OrderDetails />}
          {rightsidecomponent[6] && <UserDetails />}
          {rightsidecomponent[7] && <DailyTask />}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
