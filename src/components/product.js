import { Link } from "react-router-dom";
import data from "../list.json";

function Product() {
  return (
    <>
      <div className="container mb-10">
        <div className="d-flex flex-wrap justify-content-center">
          {data.map((item) => (
            <Link to={"/details/" + item.id} className="text-dark">
              <div className="card-product">
                <img className="img-product" src={item.image} alt="img" />
                <h4 className="card-title">{item.name}</h4>
                <h5 className="price">{item.price}</h5>
                <h5 className="country">{item.country}</h5>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
