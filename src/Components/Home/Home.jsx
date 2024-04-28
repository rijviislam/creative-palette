import { useLoaderData } from "react-router-dom";
import ArtAndCraftCategories from "../ArtAndCraftCategories/ArtAndCraftCategories";
import Canvas from "../Canvas/Canvas";
import CraftItems from "../CraftItems/CraftItems";
import PopularCategories from "../PopularCategories/PopularCategories";

export default function Home() {
  const loadedCraft = useLoaderData();
  return (
    <div>
      <CraftItems loadedCraft={loadedCraft} />
      <ArtAndCraftCategories loadedCraft={loadedCraft} />
      <PopularCategories />
      <Canvas />
    </div>
  );
}
