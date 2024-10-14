// components/Layout.js
import VerticalNavbar from "./Nav/page";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-ro h-fit overflow-hiddn">
      <div className="sticy top0 h-fll overflowauto scrollmt-40 z-30">
        <VerticalNavbar />
      </div>
      <div className="flex-1 overflow-auto fixed h-screen w-screen top20  z-0 border-black">
        {children}
      </div>
    </div>
  );
};

export default Layout;
