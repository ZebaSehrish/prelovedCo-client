import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';
import Home from '../../Home/Home/Home';
import { AuthContext } from '../../../contexts/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useSeller from '../../../hooks/useSeller';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const menuItems =
        <React.Fragment>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/blogs'>Blogs</Link></li>
            {
                (user?.uid &&
                    <>
                        <li><Link to='/dashboard/myOrders'>Dashboard</Link></li>
                        <li><button onClick={handleLogOut}>Log Out</button></li>

                    </>)
                ||
                (isAdmin &&

                    <>
                        <li><Link to='/dashboard/allSellers'>Dashboard</Link></li>

                    </>
                )
                ||
                (isSeller &&

                    <>
                        <li><Link to='/dashboard/myProducts'>Dashboard</Link></li>

                    </>
                )
                ||
                <>
                    <li><Link to='login'><AiOutlineUser />Login </Link></li>
                    <li><Link><BiShoppingBag /></Link></li>
                </>
            }
        </React.Fragment>
    return (
        <div className=''>
            <div className="navbar bg-rose-100 p-5 flex sm:justify-between lg:justify-center ">
                <div >
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52" style={{ 'fontFamily': 'serif' }}>
                            {menuItems}
                        </ul>

                    </div>

                    <Link to='/' className=" text-2xl" style={{ 'fontFamily': 'fantasy' }}>PreLoved Co.</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 " style={{ 'fontFamily': 'serif' }}>
                        {menuItems}
                    </ul>
                </div>

                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>

    );
};

export default Header;