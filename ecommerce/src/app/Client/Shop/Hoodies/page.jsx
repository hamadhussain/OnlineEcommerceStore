import { ProductDetailDataHoodies } from "@/app/Utils";
import ProductCard from "./../../Home/ProductCard/Product/page";

const product = ProductDetailDataHoodies


const Hoodies = () => (
  <section className="p-4 flex justify-center flex-col items-center space- py-24 bg-slate-10">
    <h2 className="text-2xl font-bold  text-center w-fit py-3 border-b-4  border-blue-300 ">
      Hoodies Collections
    </h2>
    <div className="grid gap-0 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
      {product.map((product) => (
        <div key={product.id}>
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

export default Hoodies;
