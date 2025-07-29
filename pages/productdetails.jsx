import Searchbox from "../Components/searchbox";
import ProductTable from "../Components/ProductTable";

function ProductDetails() {
  return (
    <>
      <div className="rightdashboardarea">
        <div className="dashboardwrappewr">
          <h4 style={{ marginBotttom: "0px" }}>All Products</h4>
        </div>

        <div className="dashboardcontent">
          <div className="matrix w-100">
            <div className="dashbox">Total Products Uploaded: 0</div>
          </div>
          <div className="allproducts">
            <Searchbox text="Search Products by Product Id" />

            <ProductTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
