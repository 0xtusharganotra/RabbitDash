import Searchbox from "../Components/searchbox";
import ProductTable from "../Components/ProductTable";

function UserDetails() {
  return (
    <>
      <div className="rightdashboardarea">
        <div className="dashboardwrappewr">
          <h4 style={{ marginBotttom: "0px" }}>All Users</h4>
        </div>

        <div className="dashboardcontent">
          <div className="matrix w-100">
            <div className="dashbox">Total Users: 0</div>
          </div>
          <div className="allproducts">
            <Searchbox text="Search Users by User Id" />

            <ProductTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDetails;
