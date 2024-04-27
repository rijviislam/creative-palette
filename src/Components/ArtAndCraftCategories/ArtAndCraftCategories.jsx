import { useEffect, useState } from "react";

export default function ArtAndCraftCategories() {
  // const load = useLoaderData();
  const [artandcraft, setArtandcraft] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/artandcraft")
      .then((res) => res.json())
      .then((data) => {
        setArtandcraft(data);
      });
  }, []);
  console.log(artandcraft);
  return (
    <div className="w-full">
      <h2 className="text-3x">Art And Craft Categories</h2>
      <div className="grid grid-cols-3 gap-5 place-content-center w-full">
        {artandcraft?.map((card, idx) => (
          <>
            <div
              key={idx}
              className="card card-compact w-96 bg-base-100 shadow-xl"
            >
              <figure>
                <img src={card.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{card.subcategory_Name}</h2>
                <p>{card.stockStatus}</p>
                <p>{card.shortdescription}</p>
                <p>{card.price}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
