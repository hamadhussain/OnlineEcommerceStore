// import { Button } from "@/components/ui/button";
// import { FaCashRegister, FaPaypal, FaCreditCard } from "react-icons/fa";

// export default function PaymentMethods() {
//   return (
//     <div className="p-24">
//       <h1 className="text-2xl font-bold mb-6">Select Your Payment Method</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="border rounded-lg p-6 flex flex-col items-center shadow-md">
//           <FaCashRegister className="text-4xl mb-4 text-green-500" />
//           <h2 className="text-lg font-semibold">Cash</h2>
//           <p className="text-gray-500 mb-4">Pay with cash upon delivery.</p>
//           <Button variant="outline" className="bg-green-400 text-white">
//             Select
//           </Button>
//         </div>

//         <div className="border rounded-lg p-6 flex flex-col items-center shadow-md">
//           <FaPaypal className="text-4xl mb-4 text-blue-600" />
//           <h2 className="text-lg font-semibold">PayPal</h2>
//           <p className="text-gray-500 mb-4">Secure payments via PayPal.</p>
//           <Button variant="outline" className="bg-blue-400 text-white">
//             Select
//           </Button>
//         </div>

//         <div className="border rounded-lg p-6 flex flex-col items-center shadow-md">
//           <FaCreditCard className="text-4xl mb-4 text-yellow-500" />
//           <h2 className="text-lg font-semibold">Credit/Debit Card</h2>
//           <p className="text-gray-500 mb-4">Pay with your credit or debit card.</p>
//           <Button variant="outline" className="bg-yellow-400 text-white">
//             Select
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }
























import { Button } from "@/components/ui/button";
import { FaCashRegister, FaPaypal, FaCreditCard, FaApple, FaGooglePay } from "react-icons/fa";

const paymentMethods = [
  {
    id: 1,
    icon: <FaCashRegister className="text-5xl mb-4 text-green-500" />,
    title: "Cash",
    description: "Pay with cash upon delivery.",
    buttonClass: "bg-green-400 text-white hover:bg-green-500",
  },
  {
    id: 2,
    icon: <FaPaypal className="text-5xl mb-4 text-blue-600" />,
    title: "PayPal",
    description: "Secure payments via PayPal.",
    buttonClass: "bg-blue-400 text-white hover:bg-blue-500",
  },
  {
    id: 3,
    icon: <FaCreditCard className="text-5xl mb-4 text-yellow-500" />,
    title: "Credit/Debit Card",
    description: "Pay with your credit or debit card.",
    buttonClass: "bg-yellow-400 text-white hover:bg-yellow-500",
  },
  {
    id: 4,
    icon: <FaApple className="text-5xl mb-4 text-black" />,
    title: "Apple Pay",
    description: "Fast and secure payments using Apple Pay.",
    buttonClass: "bg-gray-800 text-white hover:bg-gray-900",
  },
  {
    id: 5,
    icon: <FaGooglePay className="text-5xl mb-4 text-blue-500" />,
    title: "Google Pay",
    description: "Pay easily with Google Pay.",
    buttonClass: "bg-blue-600 text-white hover:bg-blue-700",
  },
  // {
  //   id: 6,
  //   icon: <FaBank className="text-5xl mb-4 text-gray-700" />,
  //   title: "Bank Transfer",
  //   description: "Transfer funds directly from your bank.",
  //   buttonClass: "bg-gray-700 text-white hover:bg-gray-800",
  // },
];

export default function PaymentMethods() {
  return (
    <div className="p-10 md:p-24 bg-gray-50 rounded-lg h-screen shadow-lg">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Select Your Payment Method</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {paymentMethods.map((method) => (
          <div key={method.id} className="border border-gray-300 rounded-lg p-6 flex flex-col items-center shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
            {/* {method.icon} */}
            <h2 className="text-xl font-semibold text-gray-800">{method.title}</h2>
            <p className="text-gray-600 mb-4 text-center">{method.description}</p>
            <Button variant="outline" className={method.buttonClass}>
              Select
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
