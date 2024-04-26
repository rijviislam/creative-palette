import CraftItemCard from "../CraftItemCard/CraftItemCard";

export default function CraftItems({ loadedCraft }) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl font-bold my-5">Craft Item</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-5 md:gap-3 grid-cols-1 my-10 place-items-center">
        {loadedCraft?.map((craftItem) => (
          <CraftItemCard key={craftItem._id} craftItem={craftItem} />
        ))}
      </div>
    </div>
  );
}
