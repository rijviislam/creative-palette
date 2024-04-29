import { useEffect, useState } from "react";

export default function Canvas() {
  const [canvas, setCanvas] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/canvas")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCanvas(data);
      });
  }, []);
  return (
    <div className="flex flex-col items-center mb-5">
      <hh2 className="text-3xl font-semibold my-10">Canvas</hh2>
      <div className="grid grid-cols-3 w-full place-items-center">
        {canvas?.map((canva) => (
          <>
            <div
              key={canva._id}
              className="card w-[400px] h-[550px] bg-base-100 shadow-xl"
            >
              <figure>
                <img src={canva.canvas_image} alt="Canva" />
              </figure>
              <div className="p-5">
                <h2 className="card-title">{canva.canvas_name}</h2>
                <p>
                  <strong>Size:</strong> {canva.canvas_size}
                </p>
                <p>
                  <strong>Price:</strong> {canva.price}
                </p>
                <p>
                  <strong>Rating:</strong> {canva.rating}
                </p>
                <p>
                  <strong>Stock Status:</strong> {canva.stock_status}
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
