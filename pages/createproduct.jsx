//name
//images - 3
// description
// price
// brand

// producttype
// weight
// keyfeatures
// category - select
// Instock - true or false
import { Button } from "@mui/material";

function CreateProduct() {
  return (
    <div className="rightdashboardarea">
      <div className="dashboardwrappewr">
        <h4 style={{ marginBottom: "0px" }}>Create Product</h4>
      </div>

      <div className="dashboardcontent">
        <div className="w-100 pinfo">
          <div className="basicinfo">
            <div className="W-100 d-flex">
              <h5>Product Name : </h5>
              <input
                type="text"
                placeholder="Enter Name"
                style={{
                  paddinLeft: "15px",
                  marginLeft: "5px",
                  outline: "none",
                  border: "none",
                  borderBottom: "1px solid black",
                }}
              />
            </div>
            <div className="W-100 ">
              <h5>Product Description : </h5>
              <textarea
                name="Enter product description"
                style={{ width: "350px", outline: "none" }}
                placeholder="Enter product description"
                id=""
              ></textarea>
            </div>
            <div className="W-100 ">
              <h5>Image Urls : </h5>
              <input
                type="text"
                placeholder="Url 1"
                style={{
                  paddinLeft: "15px",
                  marginLeft: "5px",
                  outline: "none",
                  border: "none",
                  borderBottom: "1px solid black",
                }}
              />
              <input
                type="text"
                placeholder="Url 2"
                style={{
                  paddinLeft: "15px",
                  marginLeft: "5px",
                  outline: "none",
                  border: "none",
                  borderBottom: "1px solid black",
                }}
              />
              <input
                type="text"
                placeholder="Url 3"
                style={{
                  paddinLeft: "15px",
                  marginLeft: "5px",
                  outline: "none",
                  border: "none",
                  borderBottom: "1px solid black",
                }}
              />
            </div>
            <div className="W-100 d-flex">
              <h5>Price : </h5>
              <input
                type="text"
                placeholder="Enter Price"
                style={{
                  paddinLeft: "15px",
                  marginLeft: "5px",
                  outline: "none",
                  border: "none",
                  borderBottom: "1px solid black",
                }}
              />
            </div>

            <div className="W-100 d-flex">
              <h5>Brand : </h5>
              <input
                type="text"
                placeholder="Enter Brand"
                style={{
                  paddinLeft: "15px",
                  marginLeft: "5px",
                  outline: "none",
                  border: "none",
                  borderBottom: "1px solid black",
                }}
              />
            </div>

            <div className="W-100 d-flex">
              <h5 for="category">Category : </h5>

              <select
                id="category"
                name="category"
                style={{ marginLeft: "10px" }}
              >
                <option value="Beverage">Beverage</option>
                <option value="Dairy Products ">Dairy Products</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Fruits">Fruits</option>
                <option value="Grocery">Grocery</option>
                <option value="Personal Care">Personal Care</option>
                <option value="Stationary">Stationary</option>
                <option value="Hosehold">Hosehold</option>
              </select>
            </div>
            <div className="W-100 d-flex">
              <h5 for="category">In Stock : </h5>

              <select id="category" name="category">
                <option value="Grocery">True</option>
                <option value="Daily ">False</option>
              </select>
            </div>
            <div className="W-100 d-flex">
              <h5>Product Type : </h5>
              <input
                type="text"
                placeholder="Enter Product Type"
                style={{
                  paddinLeft: "15px",
                  marginLeft: "5px",
                  outline: "none",
                  border: "none",
                  borderBottom: "1px solid black",
                }}
              />
            </div>
            <div className="W-100 d-flex">
              <h5>Weight : </h5>
              <input
                type="text"
                placeholder="Enter Product wt in Kg"
                style={{
                  paddinLeft: "15px",
                  marginLeft: "5px",
                  outline: "none",
                  border: "none",
                  borderBottom: "1px solid black",
                }}
              />
            </div>
            <div className="W-100 d-flex">
              <h5>Key Features : </h5>
              <input
                type="text"
                placeholder="Enter Key features"
                style={{
                  paddinLeft: "15px",
                  marginLeft: "5px",
                  outline: "none",
                  border: "none",
                  borderBottom: "1px solid black",
                }}
              />
            </div>

            <Button>Create Product</Button>
          </div>
          <div className="preview"></div>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
