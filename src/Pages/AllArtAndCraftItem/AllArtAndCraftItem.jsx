import { useLoaderData } from "react-router-dom";
import AllArtAndCraftItemTable from "../../Components/AllArtAndCraftItemTable/AllArtAndCraftItemTable";

export default function AllArtAndCraftItem() {
  const loadedAllArtandCraftItem = useLoaderData();
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl font-semibold">All Art And Craft Item</h2>
      <div className="overflow-x-auto my-10 w-[350px] lg:w-full flex items-center justify-center md:w-[800px]">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Email</th>
                <th>Category</th>
                <th>Detsils</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {loadedAllArtandCraftItem?.map((allData, idx) => (
                <AllArtAndCraftItemTable
                  key={allData._id}
                  idx={idx + 1}
                  allData={allData}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
