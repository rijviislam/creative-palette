export default function MyArtAndCraftListCard({ data }) {
  const {
    image,
    name,
    price,
    processing_time,
    rating,
    shortdescription,
    stockStatus,
    subcategory_Name,
    customization,
  } = data;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{price}</p>
          <p>{processing_time}</p>
          <p>{rating}</p>
          <p>{shortdescription}</p>
          <p>{stockStatus}</p>
          <p>{subcategory_Name}</p>
          <p>{customization}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Update</button>
            <button className="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
