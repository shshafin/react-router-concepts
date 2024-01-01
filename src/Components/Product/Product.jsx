import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { id, title, description, thumbnail } = product || {};

  const navigate = useNavigate();

  const handleLink = () => {
    navigate(`/Products/${id}`);
  };
  return (
    <div className=" container flex flex-row ">
      <div className="card card-compact flex flex-grow  bg-base-100 shadow-xl">
        <figure>
          <img className="w-96 h-60" src={thumbnail} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button onClick={handleLink} className="btn btn-primary">
              View details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
