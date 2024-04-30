import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
export default function ArtCraftCategoryCrad({ item }) {
  const { loader } = useContext(AuthContext);
  const { image, shortdescription, name, subcategory_Name } = item;
  if (loader) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <span className="loading loading-spinner text-info loading-lg"></span>
      </div>
    );
  }
  return (
    <Link className="card lg:w-[400px] lg:h-[450px] md:h-[350px] bg-base-100 shadow-xl border border-gray-600">
      <figure className="w-full h-[250px]">
        <img src={image} className="w-full h-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title flex justify-between">
          {name}
          <div className="bg-cyan-600 text-sm text-black px-2 rounded-2xl">
            {subcategory_Name}
          </div>
        </h2>
        <p>{shortdescription}</p>
      </div>
    </Link>
  );
}

ArtCraftCategoryCrad.propTypes = {
  item: PropTypes.object,
};
