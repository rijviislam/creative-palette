import { Link } from "react-router-dom";

export default function ArtCraftCategoryCrad({ item }) {
  const { image, price, name, subcategory_Name } = item;
  return (
    <Link
      to={`/craftitemCategory/:${subcategory_Name}`}
      className="card w-96 bg-base-100 shadow-xl "
    >
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="badge badge-secondary">{subcategory_Name}</div>
      </div>
    </Link>
  );
}
