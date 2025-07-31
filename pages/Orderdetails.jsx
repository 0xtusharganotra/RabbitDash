import Searchbox from "../Components/searchbox";
import ProductTable from "../Components/ProductTable";
import OrderTable from "../Components/OrderTable";

function OrderDetails() {
  return (
    <>
      <div className="rightdashboardarea">
        <div className="dashboardwrappewr">
          <h4 style={{ marginBotttom: "0px" }}>All Orders</h4>
        </div>

        <div className="dashboardcontent">
          <div className="matrix w-100">
            <div className="dashbox">Total Orders: 0</div>
          </div>
          <div className="allproducts">
            <Searchbox text="Search Orders by Order Id" />

            <OrderTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderDetails;
