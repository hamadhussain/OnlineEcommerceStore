import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MdAddShoppingCart } from "react-icons/md";
import { ProductDetailData } from "@/app/Utils";

const ProductCard = ({ price, src, title ,linkname}) => {
//   const product = ProductDetailData
// console.log(product);
// console.log(src);

  return (
    <div className=" bordergray-200  orde rounded-lg p-14 flex flex-col justify-center  items-cente w- overflow-0 ">
    <div className="w-96 rounded-lg border-4 bg-gra-100  p-7 h-96 "> <Image
      src={`/Images/${src}.png`}
      overrideSrc={`/Images/${src}.png`} 
      className="kll"
      alt={title}
      width={300}
      height={200}
    /></div>
   
    <div className="p-4 flex justify-between ">
      <div className=" space-y-2 text-">
        <h3 className="text-lg font-semibold uppercase">{title}</h3>
        <span className="flex space-x-2 items-center">Price :        <h3 className=" border-double bg-teal-300 p-1 px-2 mx-2 rounded-lg w-fit text-white border-black"> {price}</h3>
        </span>
      </div>
      <Link href={`/${linkname}`}>
      <Button variant="outline">
        <MdAddShoppingCart />
      </Button></Link>
    </div>
  </div>
  )
}

export default ProductCard
