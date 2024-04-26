import { useLoaderData } from "react-router-dom";
import AllArtAndCraftItemTable from "../../Components/AllArtAndCraftItemTable/AllArtAndCraftItemTable";

export default function AllArtAndCraftItem() {
  const loadedAllArtandCraftItem = useLoaderData();
  return (
    <div>
      <h2 className="text-3xl">All Art And Craft Item</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Product</th>
              <th>Category</th>
              <th>See Details</th>
            </tr>
          </thead>
          <tbody>
            {loadedAllArtandCraftItem?.map((allData) => (
              <AllArtAndCraftItemTable key={allData._id} allData={allData} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
