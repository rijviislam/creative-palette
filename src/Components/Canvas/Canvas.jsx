import { useEffect, useState } from "react";

export default function Canvas() {
  const [canvas, setCanvas] = useState();
  useEffect(() => {
    fetch("https://ph-assignment-10-arts-and-craft-server.vercel.app/canvas")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCanvas(data);
      });
  }, []);
  return (
    <div className="flex flex-col items-center mb-5">
      <hh2 className="text-3xl font-semibold my-10">Canvas</hh2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full place-items-center px-4  gap-3">
        {canvas?.map((canva, idx) => (
          <>
            <div
              key={idx}
              className="card  lg:w-[400px] md:h-[500px] lg:h-[450px] bg-base-100 shadow-xl border border-gray-600"
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
                  <button className="btn lg:mt-8 bg-teal-700 text-black">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
