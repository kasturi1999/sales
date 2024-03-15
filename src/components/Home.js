import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import axios from 'axios'

export default function Home() {

    const [product,setproduct] =useState([])
    const [customer,setcustomer] =useState([])

    useEffect (()=>{
        axios.get("https://6597e356668d248edf239ed4.mockapi.io/React")
        .then((res)=>{
            setproduct(res.data.length)
        })
    },[])
    console.log(product);

    useEffect (()=>{
        axios.get("https://6597e356668d248edf239ed4.mockapi.io/Saletable")
        .then((res)=>{
            setcustomer(res.data.length)
        })
    },[])
    console.log(customer);

    return (
        <div>
            <Navbar />


            <section className="vh-100 gradient-custom">
                <div className="row">

                    <div className="col-lg-2">
                        <Sidebar />
                    </div>
                    <div className="col-lg-10">
                        <div className="conatiner">
                            <div className="mt-5">
                                <div className="row">
                                    <div className="col-lg-6 mt-3">
                                        <nav aria-label="breadcrumb ">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item" ><h2 href="#" style={{ color: "white" }}>Home</h2></li>
                                                {/* <li className="breadcrumb-item active" style={{color: "white"}} aria-current="page">home</li> */}
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>

                            <div className="row">

                                <div className="col-lg-4">
                                    <div className="card" >
                                        <div className="card-body">
                                            <h5 className="card-title">Products</h5>
                                            <h1 className="d-flex justify-content-around">
                                                <i className="fa-solid fa-cart-shopping">{product}</i>
                                                <h3></h3>
                                            </h1>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="card" >
                                        <div className="card-body">
                                            <h5 className="card-title">Customer</h5>
                                            <h1 className="d-flex justify-content-around">
                                                <i className="fa-solid fa-cart-shopping">{customer}</i>
                                                <h3></h3>
                                            </h1>
                                        </div>
                                    </div>
                                </div>

                                
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            
        </div>
    )
}
