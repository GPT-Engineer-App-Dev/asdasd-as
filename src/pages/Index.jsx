import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">MyWebsite</div>
          <div className="space-x-4">
            <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
          </div>
        </div>
      </nav>
      <div className="flex-grow flex items-center justify-center">
        {/* Blank page with no content */}
      </div>
    </div>
  );
};

export default Index;