import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Navigation = () => { 
  return (
    <div className=" flex gap-4  bg-transparent tex">
         <Link href="/Client/Shop/Jackets">
          <p className="uppercase hover:border-b-2 transition-all duration-700 border-0 border-black">Leather-Jackets</p>
        </Link>
        <Link href="/Client/Shop/Hoodies">
          <p className="uppercase hover:border-b-2 transition-all duration-700 border-0 border-black">Hoodies</p>
        </Link>
        
    </div>
  );
};

export default Navigation;
