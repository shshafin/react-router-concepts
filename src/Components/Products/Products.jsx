import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <div className="pt-4">
     
      <div className=" grid grid-cols-1 md:gap-10 mb-10 mx-5   m-4 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {products?.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
