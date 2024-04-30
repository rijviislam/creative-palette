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
    console.log(_id);
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
            console.log(data);
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
      <div className="card  lg:w-[400px] lg:h-[700px] md:h-[650px] bg-base-100 shadow-xl border border-gray-600">
        <figure>
          <img src={image} alt="Shoes" className="w-full h-full object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <p>
            {" "}
            <strong>Description: </strong> {shortdescription}
          </p>
          <p>
            <strong>Price: </strong>
            {price}
          </p>
          <p>
            <strong>Processing Time: </strong>
            {processing_time}
          </p>
          <p>
            {" "}
            <strong>Rating: </strong> {rating}
          </p>
          <p>
            {" "}
            <strong>Stock Status: </strong> {stockStatus}
          </p>
          <p>
            <strong>Subcategory Name: </strong>
            {subcategory_Name}
          </p>
          <p>
            {" "}
            <strong>Customization: </strong> {customization}
          </p>
          <div className="card-actions justify-end">
            <Link to={`/update/${_id}`} className="btn bg-cyan-900">
              Update
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
