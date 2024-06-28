import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@/components/ui/navbar";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar>
        <NavbarBrand>
          <Link to="/">MyApp</Link>
        </NavbarBrand>
        <NavbarContent>
          <NavbarItem>
            <Link to="/">Home</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/about">About</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/contact">Contact</Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <div className="flex-grow flex items-center justify-center">
        {/* Blank page with no content */}
      </div>
    </div>
  );
};

export default Index;