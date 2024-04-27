import { useLoaderData } from "react-router-dom";

export default function Details() {
  const loadedDetails = useLoaderData();
  console.log(loadedDetails);
  return (
    <div>
      <h2 className="text-3xl">Details: {loadedDetails._id}</h2>
    </div>
  );
}
