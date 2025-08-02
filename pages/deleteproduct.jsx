import { Button } from "@mui/material";
function DeleteProduct() {
  return (
    <div className="rightdashboardarea">
      <div className="dashboardwrappewr">
        <h4 style={{ marginBottom: "0px" }}>Delete Product</h4>
      </div>

      <div className="dashboardcontent">
        <div className="w-100 pinfo">
          <div className="basicinfo">
            <div className="W-100 d-flex">
              <h5>Product Id : </h5>
              <input
                type="text"
                placeholder="Enter Product Id"
                style={{
                  paddinLeft: "15px",
                  marginLeft: "5px",
                  outline: "none",
                  border: "none",
                  borderBottom: "1px solid black",
                }}
              />
            </div>

            <Button>Delete Product</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteProduct;
