import { useLoaderData } from "react-router-dom";
import ArtAndCraftCategories from "../ArtAndCraftCategories/ArtAndCraftCategories";
import Banner from "../Banner/Banner";
import CraftItems from "../CraftItems/CraftItems";

export default function Home() {
  const loadedCraft = useLoaderData();
  return (
    <div>
      <Banner />
      <CraftItems loadedCraft={loadedCraft} />
      <ArtAndCraftCategories loadedCraft={loadedCraft} />
    </div>
  );
}
