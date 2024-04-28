import { useEffect, useState } from "react";
import ArtCraftCategoryCrad from "../ArtCraftCategoryCrad/ArtCraftCategoryCrad";

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
  return (
    <div className="w-full flex items-center flex-col justify-center">
      {artandcraft?.map((item) => (
        <ArtCraftCategoryCrad key={item._id} item={item} />
      ))}
      <h2 className="text-3xl my-5">Art And Craft Categories</h2>
    </div>
  );
}
