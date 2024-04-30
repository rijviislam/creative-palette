import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { register } from "swiper/element";

export default function Update() {
  const loadData = useLoaderData();
  const [subcategoryName, setSubcategory_Name] = useState();
  const {
    _id,
    image,
    price,
    name,
    processing_time,
    rating,
    shortdescription,
    stockStatus,
    subcategory_Name,
    customization,
  } = loadData;
  console.log(loadData);
  const handleSubmit = (e) => {
    e.preventDefault();
    const image = e.target.image.value;
    const shortdescription = e.target.shortdescription.value;
    const subcategory_Name = e.target.subcategory_Name.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const processing_time = e.target.processing_time.value;
    const customization = e.target.radio1.value;
    const stockStatus = e.target.radio2.value;
    const name = e.target.name.value;
    const allData = {
      image,
      name,
      shortdescription,
      subcategory_Name,
      price,
      rating,
      processing_time,
      stockStatus,
      customization,
    };
    fetch(`http://localhost:5000/craftitemupdate/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(allData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
          <div className="card shrink-0 w-full max-w-screen-md shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="flex gap-5 w-full">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Item Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Item Name"
                    className="input input-bordered"
                    defaultValue={name}
                    {...register("name", { required: true })}
                  />
                </div>
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
                    {...register("image", { required: true })}
                  />
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
                    {...register("itemname", { required: true })}
                  />
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
                    {...register("price", { required: true })}
                  />
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
                    {...register("rating", { required: true })}
                  />
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
                    {...register("processingTime", { required: true })}
                  />
                  {/* {errors.processingTime && (
                  <span className="text-red-500">This field is required</span>
                )} */}
                </div>
                <div className="flex flex-col w1/2">
                  <h2 className="text-sm">Subcategory Name</h2>
                  <select
                    id="fruits"
                    defaultValue="Select Subcategory"
                    name="subcategory_Name"
                    className="bg-white p-2 outline-none rounded-md text-gray-500"
                    onChange={(e) => setSubcategory_Name(e.target.value)}
                    {...register("subcategory_Name", { required: true })}
                  >
                    <option value="Landscape Painting">
                      Landscape Painting
                    </option>
                    <option value="Portrait Drawing">Portrait Drawing</option>
                    <option value="Watercolour Painting">
                      Watercolour Painting
                    </option>
                    <option value="Oil Painting">Oil Painting</option>
                    <option value="Charcoal Sketching">
                      Charcoal Sketching
                    </option>
                    <option value="Cartoon Drawing">Cartoon Drawing</option>
                  </select>
                </div>
              </div>
              <div className="flex w-full lg:gap-10">
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="customization" className="text-sm">
                      customization
                    </label>
                  </div>
                  <div className="flex gap-3 lg:gap-8 flex-col lg:flex-row md:flex-row">
                    <div className="flex items-center gap-2">
                      <label
                        htmlFor="customization"
                        className="text-sm font-semibold"
                      >
                        Yes
                      </label>
                      <input
                        id="Yes"
                        type="radio"
                        value="Yes"
                        name="radio1"
                        className="radio radio-primary"
                        {...register("customization")}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <label
                        htmlFor="customization"
                        className="text-sm font-semibold"
                      >
                        No
                      </label>
                      <input
                        id="No"
                        type="radio"
                        value="No"
                        name="radio1"
                        className="radio radio-primary"
                        {...register("customization")}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="stockStatus" className="text-sm">
                      Stock Status
                    </label>
                  </div>
                  <div className="flex gap-3 lg:gap-8 flex-col lg:flex-row md:flex-row">
                    <div className="flex items-center gap-2">
                      <label
                        htmlFor="stockStatus"
                        className="text-sm font-semibold"
                      >
                        In Stock
                      </label>
                      <input
                        id="in_stock"
                        type="radio"
                        value="in stock"
                        name="radio2"
                        className="radio radio-primary"
                        {...register("stockStatus")}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <label
                        htmlFor="stockStatus"
                        className="text-sm font-semibold"
                      >
                        Made to Order
                      </label>
                      <input
                        id="made_to_order"
                        type="radio"
                        value="made to order"
                        name="radio2"
                        className="radio radio-primary"
                        {...register("stockStatus")}
                      />
                    </div>
                  </div>
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
