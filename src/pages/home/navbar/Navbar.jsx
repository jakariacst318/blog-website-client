
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import logo from '../../../../public/logo.png'




const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }


    const NavItems = <>
        <li className="font-semibold"> <Link to='/'>Home </Link> </li>
        <li className="font-semibold"> <Link to='/add_blog'>Add Blog </Link> </li>
        <li className="font-semibold"> <Link to='/all_blogs'>All blogs</Link> </li>
        <li className="font-semibold"> <Link to='/featured_blogs'>Featured Blogs</Link> </li>
        <li className="font-semibold"> <Link to='/wishlist'> Wishlist</Link> </li>

    </>

    return (
        <div>
            <div className="navbar bg-slate-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            {
                                NavItems
                            }
                        </ul>
                    </div>
                    <Link to='/'><img className="w-28" src={logo} alt="logo" /> </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            NavItems
                        }
                    </ul>
                </div>
                <div className="navbar-end">


                    {
                        user &&
                        <div className="tooltip  tooltip-bottom " data-tip={user.email}>
                            <img className="rounded-full w-8 h-8 mr-2" src={user.photoURL} alt="img" />
                        </div>
                    }

                    {
                        user ?
                            <button onClick={handleSignOut} className="btn">Sign Out</button>
                            :
                            <Link to='/login'>
                                <button className="btn">Login</button>
                            </Link>
                    }

                </div>

            </div>
        </div>
    );
};

export default Navbar;