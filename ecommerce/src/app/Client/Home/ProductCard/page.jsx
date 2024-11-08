import { ProductDetailData } from "@/app/Utils";
import ProductCard from "./Product/page";

const product = ProductDetailData

const FeaturedCollections = () => (
  <section className="p-4 flex justify-center flex-col items-center space-y-4 py-24 bg-slate-">
    <h2 className="text-2xl font-bold mb-4 text-center w-fit py-3 border-b-4  border-blue-300 ">
      Featured Collections
    </h2>
    <div className="grid gap-0 grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3">
      {product.map((product) => (
        <div key={product.id} className=" ">
          <ProductCard
            price={product.price}
            title={product.title}
            src={`${product.src}${product.id}`}
            linkname={`${product.linkname}${product.id}`}
          />
        </div>
      ))}
    </div>
  </section>
);

export default FeaturedCollections;
