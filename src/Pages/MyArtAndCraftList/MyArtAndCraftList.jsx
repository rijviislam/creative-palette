import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyArtAndCraftListCard from "../../Components/MyArtAndCraftListCard/MyArtAndCraftListCard";

export default function MyArtAndCraftList() {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const load = useLoaderData();
  const filterData = load.filter((item) => item.email === email);
  // const filterYesorNo = load.filter((data) => data.customization === select);

  // console.log(filterData);
  // console.log(select);
  // console.log(filterYesorNo);
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl">My Art And Craft List</h2>

      <div className="grid grid-cols-3 gap-5 place-content-center">
        {filterData?.map((data) => (
          // console.log(data)
          <MyArtAndCraftListCard key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
}
