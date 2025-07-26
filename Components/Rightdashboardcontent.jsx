import { useState } from "react";
import OrderCard from "./OrderCard";
import LineChart from "./salechart";

function Rightdashboardcontent() {
  const [products, setproducts] = useState(10);
  const [users, setUsers] = useState(0);
  const [orders, setorders] = useState(0);
  const [revenue, setrevenue] = useState(0);
  const [productssold, setproductssold] = useState(0);

  return (
    <div className="rightdashboardarea">
      <div className="dashboardwrappewr">
        <h4 style={{ marginBotttom: "0px" }}>Dashboard</h4>
      </div>
      <div className="dashboardcontent">
        <div className="matrix w-100">
          <div className="matrix-left">
            <div className="dashbox">
              Total Users : <b>{users}</b>
            </div>
            <div className="dashbox">
              Total Products : <b>{products}</b>
            </div>
            <div className="dashbox">
              Total Orders : <b>{orders}</b>
            </div>
          </div>
          <div className="matrix-right">
            <div className="dashchart">
              <p>
                Total Products Sold : <b>{productssold}</b>
              </p>
              <p>
                Total Revenue : <b>{revenue} </b>
              </p>
              <div>
                <LineChart />
              </div>
            </div>
          </div>
        </div>
        <div className="lastorders p-3">
          <h4>Recent Orders</h4>
          <OrderCard />
        </div>
      </div>
    </div>
  );
}

export default Rightdashboardcontent;
