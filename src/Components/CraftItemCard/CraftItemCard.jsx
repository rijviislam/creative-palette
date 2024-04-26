export default function CraftItemCard({ craftItem }) {
  console.log(craftItem);
  const {
    image,
    name,
    price,
    processing_time,
    stockStatus,
    subcategory_Name,
    shortdescription,
  } = craftItem;
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
        <p>{shortdescription}</p>
        <div className="card-actions justify-end">
          <p>
            <strong>Price: </strong>
            {price}
          </p>
          <p>
            <strong>Processing Time: </strong>
            {processing_time}
          </p>
          <p>
            <strong>Stock Status: </strong>
            {stockStatus}
          </p>
        </div>
        <button className="btn">View Details</button>
      </div>
    </div>
  );
}
