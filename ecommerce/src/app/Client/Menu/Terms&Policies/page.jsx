import Link from "next/link";

const TermsAndPolicies = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-5xl font-bold mb-4 underline">Terms and Policies</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Terms of Service</h2>
        <p className="mb-2">
          Welcome to our online store. By using our services, you agree to comply with and be bound by the following terms and conditions.
        </p>
        <p className="mb-2">
          All orders are subject to availability. We reserve the right to cancel any order for reasons including but not limited to product availability, pricing errors, or fraud detection.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Privacy Policy</h2>
        <p className="mb-2">
          We respect your privacy and are committed to protecting your personal information. We collect personal data only when you place an order or subscribe to our newsletter.
        </p>
        <p className="mb-2">
          Your information will never be sold or shared with third parties without your consent, except as required by law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Return and Exchange Policy</h2>
        <p className="mb-2">
          We want you to be completely satisfied with your purchase. If you are not satisfied, you can return or exchange items within 30 days of receipt.
        </p>
        <p className="mb-2">
          To be eligible for a return, items must be unused, in their original packaging, and accompanied by a receipt or proof of purchase.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Shipping Policy</h2>
        <p className="mb-2">
          We offer standard and expedited shipping options. Shipping costs will be calculated at checkout.
        </p>
        <p className="mb-2">
          Please allow 3-5 business days for processing your order before it is shipped.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="mb-2">
          If you have any questions or concerns about our terms and policies, please contact us at:
        </p>
        <p className="mb-2">
          <Link href="mailto:bytecraft3@gmail.com" className="text-blue-600 hover:underline">
            bytecraft3@gmail.com
          </Link>
        </p>
      </section>

      <p className="text-sm text-gray-600">
        Last updated: Oct 2024
      </p>
    </div>
  );
};

export default TermsAndPolicies;
