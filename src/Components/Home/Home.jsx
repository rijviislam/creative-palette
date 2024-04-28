import { useLoaderData } from "react-router-dom";
import ArtAndCraftCategories from "../ArtAndCraftCategories/ArtAndCraftCategories";
import CraftItems from "../CraftItems/CraftItems";

export default function Home() {
  const loadedCraft = useLoaderData();
  return (
    <div>
      <CraftItems loadedCraft={loadedCraft} />
      <ArtAndCraftCategories loadedCraft={loadedCraft} />
    </div>
  );
}
