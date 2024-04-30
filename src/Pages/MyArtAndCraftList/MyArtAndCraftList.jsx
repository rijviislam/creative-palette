import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyArtAndCraftListCard from "../../Components/MyArtAndCraftListCard/MyArtAndCraftListCard";

export default function MyArtAndCraftList() {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const load = useLoaderData();
  const [item, setItem] = useState(load);
  const filterData = item.filter((item) => item.email === email);
  const [finalData, setFinalData] = useState(filterData);

  const filterItems = (category) => {
    const filterUpdate = filterData.filter((fItem) => {
      return fItem.customization === category;
    });
    setFinalData(filterUpdate);
  };
  console.log(item);
  // console.log(finalData);
  return (
    <div className="flex flex-col items-center min-h-screen">
      <h2 className="text-3xl font-semibold">My Art And Craft List</h2>

      <details className="dropdown">
        <summary className="m-1 mt-5 btn" onClick={() => setItem(filterData)}>
          Select Your Category
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 ">
          <li>
            <Link onClick={() => filterItems("Yes")}>Yes</Link>
          </li>
          <li>
            <Link onClick={() => filterItems("No")}>No</Link>
          </li>
        </ul>
      </details>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 place-content-center my-10 px-4">
        {finalData?.map((data) => (
          <MyArtAndCraftListCard
            key={data._id}
            data={data}
            finalData={finalData}
            setFinalData={setFinalData}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}
