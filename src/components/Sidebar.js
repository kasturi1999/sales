import React from 'react'
import { Link } from 'react-router-dom'


export default function Sidebar() {
    return (
        <>
            <div>

                {/* <!--Main Navigation--> */}
                <header>
                    {/* <!-- Sidebar --> */}
                    <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
                        <div className="position-sticky">
                            <div className="list-group list-group-flush mx-3 mt-4">


                                <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                                    <i className="fas fa-chart-line fa-fw me-3"></i><Link className='text-link' to={"/home"}><span>Home</span></Link></a>
                                <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                                    <i className="fas fa-chart-pie fa-fw me-3"></i><Link className='text-link' to={"/product"}><span>Product</span></Link></a>
                                <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                                    <i className="fas fa-chart-bar fa-fw me-3"></i><Link className='text-link' to={"/sales"}><span>Sales</span></Link></a>
                                <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                                    <i className="fas fa-chart-bar fa-fw me-3"></i><Link className='text-link' to={"/salestable"}><span>Sales Table</span></Link></a>
                                <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                                    <i className="fas fa-globe fa-fw me-3"></i><Link className='text-link' to={"/"}><span>Logout</span></Link></a>

                            </div>
                        </div>
                    </nav>
                    {/* <!-- Sidebar --> */}


                </header>
                {/* <!--Main Navigation--> */}

            </div>

        </>
    )
}
