export default function AllArtAndCraftItemTable({ allData }) {
  const { name, subcategory_Name } = allData;

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
        <button className="btn badge-accent *: btn-xs">Details</button>
      </th>
    </tr>
  );
}
