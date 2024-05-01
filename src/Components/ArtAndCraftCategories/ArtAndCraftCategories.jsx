import { useEffect, useState } from "react";
import ArtCraftCategoryCrad from "../ArtCraftCategoryCrad/ArtCraftCategoryCrad";

export default function ArtAndCraftCategories() {
  // const load = useLoaderData();
  const [artandcraft, setArtandcraft] = useState();
  useEffect(() => {
    fetch(
      "https://ph-assignment-10-arts-and-craft-server.vercel.app/artandcraft"
    )
      .then((res) => res.json())
      .then((data) => {
        setArtandcraft(data);
      });
  }, []);
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl my-5 font-semibold">Art And Craft Categories</h2>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center px-4">
        {artandcraft?.map((item) => (
          <ArtCraftCategoryCrad key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
