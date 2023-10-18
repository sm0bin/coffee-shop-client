import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (

        <nav className="navbar bg-[url('/images/15.jpg')]">
            {
                user &&
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle  text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/users">Users</NavLink></li>
                            <li><button onClick={handleSignOut}>Sign Out</button></li>

                        </ul>
                    </div>
                </div>
            }
            <div className="navbar-center mx-auto">
                <Link to="/">
                    <div className="flex justify-center items-center gap-4">
                        <img className="h-5 md:h-24 " src="/images/logo1.png" alt="" />
                        <h2 className="font-rancho text-lg md:text-6xl text-white">Espresso Emporium</h2>
                    </div>
                </Link >
            </div>
            {
                user &&
                <div className="navbar-end  text-white">

                    <div tabIndex={0} className="btn btn-ghost btn-circle avatar mr-2">
                        <div className="w-10 rounded-full">
                            <img src={user.photoURL} />
                        </div>
                    </div>

                    <button onClick={handleSignOut} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                    </button>
                </div>
            }
        </nav>
    );
};

export default Header;