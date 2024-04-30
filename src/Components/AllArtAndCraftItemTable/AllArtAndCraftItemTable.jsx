import { Link } from "react-router-dom";

export default function AllArtAndCraftItemTable({ allData }) {
  const { _id, name, subcategory_Name, displayName, email, userImage } =
    allData;

  return (
    <tr className=" w-[350px]">
      <th className="hidden lg:visible">
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12 ">
              <img
                className="hidden lg:visible"
                src="/tailwind-css-component-profile-2@56w.png"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="lg:font-bold text-start">{displayName}</div>
            <div className="text-sm opacity-50 hidden lg:visible">{email}</div>
          </div>
        </div>
      </td>
      <td>
        {name}
        <br />
        <span className="badge badge-ghost badge-sm ">{subcategory_Name}</span>
      </td>
      <th>
        <Link to={`/details/${_id}`} className="btn text-xs">
          View Details
        </Link>
      </th>
    </tr>
  );
}
