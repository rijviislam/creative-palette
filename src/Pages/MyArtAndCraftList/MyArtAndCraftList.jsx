import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyArtAndCraftListCard from "../../Components/MyArtAndCraftListCard/MyArtAndCraftListCard";

export default function MyArtAndCraftList() {
  const { user } = useContext(AuthContext);
  const { email } = user;
  const load = useLoaderData();
  const filterData = load.filter((item) => item.email === email);

  // useEffect(() => {
  //   fetch(`http://localhost:5000/craftitem_category`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, [user]);
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl">My Art And Craft List</h2>

      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          Click
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-3 gap-5 place-content-center">
        {filterData?.map((data) => (
          <MyArtAndCraftListCard key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
}
