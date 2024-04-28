import { useLoaderData } from "react-router-dom";

export default function Categories() {
  // const [category, setCategory] = useState();
  // const category = useLoaderData();
  // console.log(typeof category);
  // const {
  //   subcategory_Name,
  //   stockStatus,
  //   shortdescription,
  //   rating,
  //   processing_time,
  //   price,
  //   name,
  //   image,
  // } = category;
  // console.log(name);
  // useEffect(() => {
  //   fetch("http://localhost:5000/craftitem")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       // setCategory(data);
  //     });
  // }, []);
  // const load = useLoaderData();
  // console.log(load);

  // const filter =
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <h2 className="text-3xl">Categories : {name}</h2>
    </div>
  );
}
