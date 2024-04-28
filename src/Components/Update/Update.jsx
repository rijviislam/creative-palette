import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

export default function Update() {
  const loadData = useLoaderData();
  const {
    _id,
    image,
    name,
    price,
    processing_time,
    rating,
    shortdescription,
    // stockStatus,
    subcategory_Name,
    // customization,
  } = loadData;

  const handleSubmit = (e) => {
    e.preventDefault();
    const image = e.target.image.value;
    const shortdescription = e.target.shortdescription.value;
    const subcategory_Name = e.target.subcategory_Name.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const processing_time = e.target.processing_time.value;
    const allData = {
      image,
      shortdescription,
      subcategory_Name,
      price,
      rating,
      processing_time,
    };
    fetch(`http://localhost:5000/craftitemupdate/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(allData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Updated!",
            text: "Your Product has been updated.",
            icon: "success",
          });
        }
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200 my-5">
        <div className="flex lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-screen-md shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="flex gap-5 w-full">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Item Name</span>
                  </label>
                  <input
                    type="text"
                    name="itemname"
                    placeholder="Item name"
                    className="input input-bordered"
                    defaultValue={name}
                    // {...register("itemname", { required: true })}
                  />
                  {/* {errors.itemname && (
                    <span className="text-red-500">This field is required</span>
                  )} */}
                </div>
                {/* {errors.processingTime && (
                  <span className="text-red-500">This field is required</span>
                )} */}
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Image URL</span>
                  </label>
                  <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    className="input input-bordered"
                    defaultValue={image}
                    // {...register("imageurl", { required: true })}
                  />
                  {/* {errors.imageurl && (
                    <span className="text-red-500">This field is required</span>
                  )} */}
                </div>
              </div>
              <div className="flex gap-5 w-full">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Short Description</span>
                  </label>
                  <input
                    type="text"
                    name="shortdescription"
                    placeholder="Short Description"
                    className="input input-bordered"
                    defaultValue={shortdescription}
                    // {...register("itemname", { required: true })}
                  />
                  {/* {errors.itemname && (
                    <span className="text-red-500">This field is required</span>
                  )} */}
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text"> Subcategory Name</span>
                  </label>
                  <input
                    type="text"
                    name="subcategory_Name"
                    placeholder="Subcategory Name"
                    className="input input-bordered"
                    defaultValue={subcategory_Name}
                    // {...register("subcategoryName", { required: true })}
                  />
                  {/* {errors.subcategoryName && (
                    <span className="text-red-500">This field is required</span>
                  )} */}
                </div>
              </div>
              <div className="flex gap-5 w-full">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    className="input input-bordered"
                    defaultValue={price}
                    // {...register("price", { required: true })}
                  />
                  {/* {errors.price && (
                    <span className="text-red-500">This field is required</span>
                  )} */}
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                    type="text"
                    name="rating"
                    placeholder="Rating"
                    className="input input-bordered"
                    defaultValue={rating}
                    // {...register("rating", { required: true })}
                  />
                  {/* {errors.rating && (
                    <span className="text-red-500">This field is required</span>
                  )} */}
                </div>
              </div>
              <div className="flex w-full gap-10">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Processing Time</span>
                  </label>
                  <input
                    type="text"
                    name="processing_time"
                    placeholder="Processing Time"
                    className="input input-bordered"
                    defaultValue={processing_time}
                    //   {...register("processingTime", { required: true })}
                  />
                  {/* {errors.processingTime && (
                  <span className="text-red-500">This field is required</span>
                )} */}
                </div>
              </div>

              <input
                type="submit"
                placeholder="Update Product"
                className="btn btn-square"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
