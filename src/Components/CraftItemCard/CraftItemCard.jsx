import { Link } from "react-router-dom";

export default function CraftItemCard({ craftItem }) {
  const { _id, image, name, price, stockStatus, subcategory_Name } = craftItem;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title flex justify-between">
          {name}
          <div className="badge badge-info">{subcategory_Name}</div>
        </h2>
        <div className="card-actions justify-end">
          <p>
            <strong>Price: </strong>
            {price}
          </p>
          <div className="badge badge-info font-semibold">{stockStatus}</div>
        </div>
        <Link to={`/details/${_id}`} className="btn">
          View Details
        </Link>
      </div>
    </div>
  );
}
