import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const details = useLoaderData();
  console.log(details);

  const { category, description, price, rating, thumbnail, title } = details;

  return (
    <div>
      <div className="flex h-screen flex-col  justify-center  items-center">
        <h1 className="text-center  mb-16 text-4xl  ">{category}</h1>
        <div className="card flex  card-side bg-base-100 shadow-xl">
          <figure>
            <img src={thumbnail} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <h1 className="text-xl font-bold">Price: {price} Tk</h1>
            <h1 className=" font-semibold">Rating: {rating}</h1>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">Add to cart</button>
              <Link to={`/products`}>
                <button className="btn btn-primary">Go back</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
