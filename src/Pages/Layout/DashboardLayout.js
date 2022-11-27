import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile drawer-end">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {
                            !isAdmin && !isSeller &&
                            <>
                                <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                            </>
                        }
                        {isAdmin &&
                            <>
                                <li><Link to='/dashboard/allCustomers'>All Customers</Link></li>
                                <li><Link to='/dashboard/allSellers'>All Sellers</Link></li>
                                <li><Link to='/dashboard/reportedItems'>Reported Items</Link></li>
                            </>

                        }
                        {
                            isSeller &&
                            <>
                                <li><Link to='/dashboard/addProducts'>Add Product</Link></li>
                                <li><Link to='/dashboard/myProducts'>My Products</Link></li>

                            </>
                        }
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default DashboardLayout;