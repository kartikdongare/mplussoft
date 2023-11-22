/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductApi,getProductApi1 } from "../../ApiCalling";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { category_id,product_unit_id} = useParams();
  console.log(category_id)
  const navTo = useNavigate();
  const [pdata, setPdata] = useState("");

  const productData = async () => {
    const res = await getProductApi(import.meta.env.VITE_PRODUCTVIEW,category_id);
    const x = res.data.similar_products;
    const productDetails = x.filter(
      (ele, index) => ele.product_unit_id === parseInt(product_unit_id)
    );
    setPdata(productDetails[0]);
  };
  useEffect(() => {
    productData();
  }, [category_id]);

  return (
    <div>
      <div className="product-details">
        <img src={pdata.product_image_path} className="product-img" />
        <div className="details">
          <h5>{pdata.product_name}</h5>
          <p>
            price:-{pdata.mrp_price}
            <i className="fa fa-inr" aria-hidden="true"></i>
          </p>
          <p>discount:-{pdata.discount_percentage}</p>
          <p>unit:-{pdata.unit}</p>
          <button
            type="button"
            className="btn btn-primary "
            onClick={() => navTo("/")}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
