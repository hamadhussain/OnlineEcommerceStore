import ProductCard from "./../../Home/ProductCard/Product/page";

const product = [
  { id: '1', title: "Cool Gadget",src:"Hoody", price: "$234.56",linkname:"Client/Shop/Hoodies/Hoody"},
  { id: '2', title: "Stylish Watch",src:"Hoody", price: "$123.45" ,linkname:"Client/Shop/Hoodies/Hoody"},
  { id: '3', title: "Amazing Headphones",src:"Hoody", price: "$89.99",linkname:"Client/Shop/Hoodies/Hoody" },
  { id: '4', title: "Innovative Laptop",src:"Hoody", price: "$450.23",linkname:"Client/Shop/Hoodies/Hoody" },
  { id: '5', title: "Durable Backpack",src:"Hoody", price: "$305.67",linkname:"Client/Shop/Hoodies/Hoody" },
  { id: '6', title: "Smartphone Pro",src:"Hoody", price: "$98.76",linkname:"Client/Shop/Hoodies/Hoody" },
  { id: '7', title: "High-Quality Camera",src:"Hoody", price: "$299.99" ,linkname:"Client/Shop/Hoodies/Hoody"},
  { id: '8', title: "Wireless Mouse",src:"Hoody", price: "$175.50",linkname:"Client/Shop/Hoodies/Hoody" },
  { id: '9',  title: "Portable Charger",src:"Hoody", price: "$30.00" ,linkname:"Client/Shop/Hoodies/Hoody"},];

const Hoodies = () => (
  <section className="p-4 flex justify-center flex-col items-center space- py-24 bg-slate-10">
    <h2 className="text-2xl font-bold  text-center w-fit py-3 border-b-4  border-blue-300 ">
       Hoodies  Collections
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
