import data from "../list.json";

function Product() {
  return (
    <>
        <h3>Group Tour</h3>
        <div className="container-d-flex-wrap">
        {data.map(item => (
            <div className="card-product">
                <img className="img-product" src={item.image} alt="img" />
                <h4 className="card-title">{item.name}</h4>
                <h5 className="price">{item.price}</h5>
                <h5 className="country">{item.country}</h5>
            </div>
        ))}
        </div>
    </>
  );
}

export default Product;