import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function MyArtAndCraftList() {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/craftitem_category`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, [user]);
  return (
    <div>
      <h2 className="text-3xl">My Art And Craft List</h2>
    </div>
  );
}
