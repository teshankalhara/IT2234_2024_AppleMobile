import React, { useEffect } from "react";
import { FaRegCircleUser, FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import ROLE from "../api/role";

const AdminPanel = () => {
    const user = useSelector((state) => state?.user?.user);
    const navigate = useNavigate()
    useEffect(() => {
        if(user?.role !== ROLE.ADMIN) {
            navigate("/")
        }
        
    },[user])
    return (
        <div className="min-h-[calc(100hv-120px)] md-flex hidden">

            <aside className="bg-white min-full w-full max-w-60 customShadow">
                <div className="h-32 flex justify-center items-center">
                    <div className='text-3xl cursor-pointer relative flex justify-center'>
                    {
                        user?.profilePic ? (
                        <img src={user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name} />
                        ) : (
                        <FaRegCircleUser />
                        )
                    }
                    </div>
                    <p className="capitalize text-lg font-semibold">{user?.name}</p>
                    <p className="text-sm">{user?.role}</p>
                </div>
                {/*navigation*/}
                <div>
                    <nav>
                        <Link to = {'all-users'} className="px-2 py-1 hover:bg-slate-100">All Users</Link>
                        <Link to = {'all-products'} className="px-2 py-1 hover:bg-slate-100">All Products</Link>
                    </nav>
                </div>
            </aside>

            <main className="w-full h-full p-2">
                <Outlet/>
            </main>
        </div>
    )
}

export default AdminPanel;