import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import ArtAndCraftCategories from "../ArtAndCraftCategories/ArtAndCraftCategories";
import Canvas from "../Canvas/Canvas";
import CraftItems from "../CraftItems/CraftItems";

export default function Home() {
  const loadedCraft = useLoaderData();
  return (
    <div>
      <Banner />
      <CraftItems loadedCraft={loadedCraft} />
      <ArtAndCraftCategories loadedCraft={loadedCraft} />
      <Canvas />
    </div>
  );
}
