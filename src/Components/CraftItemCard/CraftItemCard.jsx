import { Link } from "react-router-dom";

export default function CraftItemCard({ craftItem }) {
  const { _id, image, name, price, stockStatus, subcategory_Name } = craftItem;
  return (
    <div className="card w-[400px] h-[450px] bg-base-100 shadow-xl border border-gray-600">
      <figure className="w-full h-[250px]">
        <img src={image} className="w-full h-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title flex justify-between">
          {name}
          <div className="bg-cyan-600 text-sm text-black px-2 rounded-2xl">
            {subcategory_Name}
          </div>
        </h2>
        <div className="card-actions justify-end">
          <p>
            <strong className="">Price: </strong>
            {price}
          </p>
          <div className="badge badge-info font-semibold">{stockStatus}</div>
        </div>
        <Link
          to={`/details/${_id}`}
          className="btn mt-8 bg-teal-700 text-black"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
