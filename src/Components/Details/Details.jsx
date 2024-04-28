import { Link, useLoaderData } from "react-router-dom";

export default function Details() {
  const loadedDetails = useLoaderData();
  console.log(loadedDetails);
  const {
    subcategory_Name,
    stockStatus,
    shortdescription,
    rating,
    processing_time,
    price,
    name,
    image,
  } = loadedDetails;
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="py-6">{shortdescription}</p>
          <div className="flex flex-col space-y-3">
            <p>Sub Category Name: {subcategory_Name}</p>
            <p>Stock Status: {stockStatus}</p>
            <p>Product Rating: {rating}</p>
            <p>Product Price: {price}</p>
            <p>Prcessing Time: {processing_time}</p>
          </div>
          <Link to="/" className="btn btn-primary">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
