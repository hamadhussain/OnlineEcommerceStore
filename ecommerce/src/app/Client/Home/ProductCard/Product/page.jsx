import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MdAddShoppingCart } from "react-icons/md";

const ProductCard = ({ price, src, title ,linkname}) => (
  <div className=" bordergray-200 orde rounded-lg p-14 flex flex-col justify-center  items-cente w- overflow-0 ">
    <img
      // id="grad"
      src={`/${src}.png`}
      alt={title}
      className="w-96 rounded-lg borde-2   h-96 "
    />
    <div className="p-4 flex justify-between ">
      <div className=" space-y-4 text-">
        <h3 className="text-lg font-semibold">{title}</h3>
        <h3 className="">{price}</h3>
      </div>
      <Link href={`/${linkname}`}>
      <Button variant="outline">
        <MdAddShoppingCart />
      </Button></Link>
    </div>
  </div>
);

export default ProductCard;
