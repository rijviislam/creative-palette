import { Link, useLoaderData } from "react-router-dom";

export default function Details() {
  const loadedDetails = useLoaderData();
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
    <div className="hero min-h-[600px] ">
      <div className="hero-content items-center justify-center lg:gap-20 flex-col lg:flex-row-reverse w-[360px] md:w-[500px] lg:w-3/6 ">
        <img
          src={image}
          className="lg:h-[450px] lg:w-[500px] md:w-full w-full h-[300px] rounded-lg shadow-2xl"
        />
        <div className="w-[360px] lg:w-full md:w-[500px] p-3">
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="py-6 lg:w-[500px] w-[360px] md:w-full">
            {shortdescription}
          </p>
          <div className="flex flex-col space-y-3">
            <p>
              <strong>Sub Category Name:</strong> {subcategory_Name}
            </p>
            <p>
              <strong>Stock Status: </strong>
              {stockStatus}
            </p>
            <p>
              <strong>Product Rating: </strong> {rating}
            </p>
            <p>
              <strong>Product Price:</strong> {price}
            </p>
            <p>
              <strong>Prcessing Time:</strong> {processing_time}
            </p>
          </div>
          <Link to="/" className="btn mt-10 bg-cyan-900">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
