import { useLoaderData } from "react-router-dom";

export default function Categories() {
  const load = useLoaderData();
  console.log(load);
  return (
    <div>
      <h2 className="text-3xl font-semibold">Categories</h2>
    </div>
  );
}
