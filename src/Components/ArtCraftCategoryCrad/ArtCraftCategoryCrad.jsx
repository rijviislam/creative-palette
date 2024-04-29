import { Link } from "react-router-dom";

export default function ArtCraftCategoryCrad({ item }) {
  const { image, price, name, subcategory_Name } = item;
  return (
    <Link
      to={`/craftitemCategory/:${subcategory_Name}`}
      className="card w-[400px] h-[450px] bg-base-100 shadow-xl border border-gray-600"
    >
      <figure className="h-[350px] w-full">
        <img src={image} className="h-full w-full object-cover" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="badge badge-error font-semibold py-3 px-2">
          {subcategory_Name}{" "}
        </div>
      </div>
    </Link>
  );
}
