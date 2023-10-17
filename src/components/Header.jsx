import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Link to="/">
            <div className="flex justify-center items-center gap-4 bg-[url('/images/15.jpg')] bg-center py-6">
                <img className="h-24" src="/images/logo1.png" alt="" />
                <h2 className="font-rancho text-6xl text-white">Espresso Emporium</h2>
            </div>
        </Link >
    );
};

export default Header;