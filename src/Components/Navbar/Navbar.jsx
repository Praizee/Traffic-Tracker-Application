import { Link } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";

const Navbar = () => {

    return (
        <div className="navbar bg-transparent z-50 fixed top-0 text-[#011750] py-4 lg:px-12 md:px-8 px-4">
            <div className="navbar-start">
                <Link to="/" className="text-xl font-semibold">
                    Traffic Tracker
                </Link>
            </div>
            <div className="navbar-end">
                <Link to="/" className="">
                    <GoHomeFill className="w-8 h-8" />
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
