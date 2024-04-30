import { Link } from "react-router-dom";

export default function AllArtAndCraftItemTable({ allData, idx }) {
  const { _id, name, subcategory_Name, displayName, email, userImage } =
    allData;

  return (
    <tr>
      <th>{idx}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{subcategory_Name}</td>
      <td>
        <Link to={`/details/${_id}`} className="btn text-xs">
          View Details
        </Link>
      </td>
    </tr>
  );
}
