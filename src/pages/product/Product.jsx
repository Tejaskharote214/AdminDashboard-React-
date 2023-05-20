import { Link } from "react-router-dom"
import "./product.css"
import Charts from "../../components/charts/Charts";
import {productData} from "../../dummyData";
import { Publish } from "@mui/icons-material";

export default function Product() {
  return (
    <div className='products'>
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
            <button className="productAddButton">Create</button>
        </Link>
      </div>
    <div className="productTop">
        <div className="productTopLeft">
           <Charts data={productData} dataKey="Sales" title="Sales Performance" /> 
        </div>
        <div className="productTopRight">
            <div className="productInfoTop">
                <img src="https://tse4.mm.bing.net/th?id=OIP.3W4k7PO0CzL5f_19KYazMgHaEL&pid=Api&P=0&h=180" 
                alt="" className="productInfoImg" />
                <span className="productName">Apple Airpods</span>
            </div>
            <div className="productInfoBottom">
                <div className="productInfoitem">
                    <span className="productInfoKey">id:</span>
                    <span className="productInfoValue">123</span>
                </div>
                <div className="productInfoitem">
                    <span className="productInfoKey">Sales:</span>
                    <span className="productInfoValue">4567</span>
                </div>
                <div className="productInfoitem">
                    <span className="productInfoKey">Active:</span>
                    <span className="productInfoValue">Yes</span>
                </div>
                <div className="productInfoitem">
                    <span className="productInfoKey">In stock:</span>
                    <span className="productInfoValue">Yes</span>
                </div>
            </div>
        </div>
    </div>
    <div className="productBottom">
        <form  className="productForm">
            <div className="productFormLeft">
                <label>Product Name</label>
                <input type="text" placeholder="Apple Airpod" />
                <label>In Stock</label>
                <select name="inStock" id="idStock">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <label>Active</label>
                <select name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>

            </div>
            <div className="productFormRight">
                <div className="productUpload">
                <img src="https://tse4.mm.bing.net/th?id=OIP.3W4k7PO0CzL5f_19KYazMgHaEL&pid=Api&P=0&h=180" 
                alt="" className="productUploadImg" />
                <label for="file">
                <Publish/>
                </label>
                <input type="file" id="file" style={{display:"none"}} />
                </div>
                <button className="productButton">Update</button>
            </div>
        </form>
    </div>

    </div>
  )
}
