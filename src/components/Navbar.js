import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
    
            <nav className="navbar fixed-top navbar-light bg-light">
                <div className="container-fluid">
                    <Link to ={"/"}><span className="navbar-brand mb-0 h1">Logo</span></Link>

                    <form className="d-flex">
                        
                        <Link to ={"/"}> <button className='btn btn-success'>Logout</button></Link>
                    </form>
                </div>
            </nav>
        </div>
    )
}
