import { Link } from "react-router-dom";

export default function AllArtAndCraftItemTable({ allData }) {
  const { _id, name, subcategory_Name } = allData;
  console.log(allData);

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src="/tailwind-css-component-profile-2@56w.png"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">Hart Hagerty</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{subcategory_Name}</td>
      <th>
        <Link
          to={`/details/${_id}`}
          className="badge-info px-3 py-2 rounded-lg"
        >
          View Details
        </Link>
      </th>
    </tr>
  );
}
