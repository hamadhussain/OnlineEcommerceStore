import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { invoices } from "@/app/Utils"; // <-- keep the import

export default function TableDemo() {
  return (
    <div className="p-24">
      <h1 className="text-2xl font-bold mb-6">CheckOut Cart</h1>
      <Table>
        <TableCaption>Your Total Products List</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">SD</TableHead>
            <TableHead>ID</TableHead>
            <TableHead>Product</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <div className="py-10 flex justify-between">
        <Link href="/">
          <Button
            variant="outline"
            className="bg-green-400 gap-3 hover:scale-125 transition-all duration-500 text-white"
          >
            <FaArrowLeft />
            Go Back
          </Button>
        </Link>
        <Link href="/">
          <Button
            variant="outline"
            className="bg-blue-400 gap-3 hover:scale-125 transition-all duration-500 text-white"
          >
            Payment Method <FaArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  );
}





// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Button } from "@/components/ui/button";
// import { FaArrowLeft } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa";
// import Link from "next/link";
// import { invoices } from "@/app/Utils";


// export default function TableDemo() {
//   const invoices = invoices

//     return (
//       <>
//         <div className="p-24">
//           <h1 className="text-2xl font-bold mb-6">CheckOut Cart</h1>
//           <Table>
//             <TableCaption>Your Total Products List</TableCaption>
//             <TableHeader>
//               <TableRow>
//                 <TableHead className="w-[100px]">SD</TableHead>
//                 <TableHead>ID</TableHead>
//                 <TableHead>Product</TableHead>
//                 <TableHead className="text-right">Amount</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {invoices.map((invoice) => (
//                 <TableRow key={invoice.invoice}>
//                   <TableCell className="font-medium">{invoice.invoice}</TableCell>
//                   <TableCell>{invoice.paymentStatus}</TableCell>
//                   <TableCell>{invoice.paymentMethod}</TableCell>
//                   <TableCell className="text-right">
//                     {invoice.totalAmount}
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//             <TableFooter>
//               <TableRow>
//                 <TableCell colSpan={3}>Total</TableCell>
//                 <TableCell className="text-right">$2,500.00</TableCell>
//               </TableRow>
//             </TableFooter>
//           </Table>
//           <div className="py-10 flex justify-between">
//             <Link href="/">
//               <Button
//                 variant="outline"
//                 className="bg-green-400 gap-3 hover:scale-125 transition-all duration-500 text-white"
//               >
//                 <FaArrowLeft />
//                 Go Back
//               </Button>
//             </Link>
//             <Link href="/">
//               <Button
//                 variant="outline"
//                 className="bg-blue-400 gap-3 hover:scale-125 transition-all duration-500 text-white"
//               >
//                 Payment Method <FaArrowRight />
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </>
//     );
//   }
  