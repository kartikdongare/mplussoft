/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getProductApi } from "../../ApiCalling";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data1, setData1] = useState([]);
  const [cate, setCate] = useState([]);
  const [cateId, setCateId] = useState();
  const navTo = useNavigate();
  const productData = async (id) => {
    const res = await getProductApi(import.meta.env.VITE_CATEGORY, id);
    setCate(res.data.all_category_list);
    setData1(res.data.product_list);
    cateId(res.data.product_list.category_id)
    console.log(res.data.product_list,'sd')
  };
  const handleChange = (e) => {
    const id = e.target.value;
    setCateId(id);
  };
  console.log(data1);
  useEffect(() => {
    productData(cateId);
  }, [cateId]);
  return (
    <div>
      <div className="select-cate">
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={handleChange}
        >
          <option selected>Select Category</option>
          {cate.map((ele, index) => (
            <option value={ele.id} key={index}>
              {ele.category_name}
            </option>
          ))}
        </select>
      </div>
      <div className="main-card">
        {data1.map((ele, index) => (
          <div
            key={index}
            onClick={() =>
              navTo(
                `/product-details/${ele.category_id}/${ele.product_unit_id}`
              )
            }
          >
            <div
              className="card "
              style={{ width: "18rem", padding: "1rem", height: "25rem" }}
            >
              <img
                src={ele.product_image_path}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{ele.product_name}</h5>
                <p className="card-text">Unit:-{ele.unit}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
