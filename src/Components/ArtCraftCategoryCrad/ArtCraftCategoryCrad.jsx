export default function ArtCraftCategoryCrad({ item }) {
  //   console.log(item);
  const { image, price, name, subcategory_Name } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="badge badge-secondary">{subcategory_Name}</div>
      </div>
    </div>
  );
}
