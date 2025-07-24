import Sidebar from "../Components/Sidebar";
import Rightdashboardcontent from "../Components/Rightdashboardcontent";

function Dashboard() {
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
          <Rightdashboardcontent />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
