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
    <div>
      <h2 className="text-3xl">My Art And Craft List</h2>

      <div className="grid grid-cols-3 place-content-center">
        {filterData?.map((data) => (
          <MyArtAndCraftListCard key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
}
