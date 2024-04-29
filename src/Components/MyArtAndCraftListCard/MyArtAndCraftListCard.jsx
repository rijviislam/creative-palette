import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function MyArtAndCraftListCard({ data }) {
  const {
    _id,
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
  console.log(data);
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/craftitem/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Product has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl border border-silver">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{price}</p>
          <p>{processing_time}</p>
          <p>{rating}</p>
          <p>{shortdescription}</p>
          <p>Stock Status: {stockStatus}</p>
          <p>{subcategory_Name}</p>
          <p>{customization}</p>
          <div className="card-actions justify-end">
            <Link to={`/update/${_id}`} className="btn btn-primary">
              Update
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-primary"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
