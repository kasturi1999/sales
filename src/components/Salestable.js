import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Salestable() {

    const [newData, setNewData] = useState([]);
    const [data, setData] = useState([]);
    const [id, setId] = useState(undefined);

    let navigate = useNavigate();


    function loadData() {
        axios.get("https://6597e356668d248edf239ed4.mockapi.io/Saletable")
            .then((res) => {
                // console.log(res.data.row.selectedproduct.gst);
                setNewData(res.data);
                console.log(res.data);
            })

    };

    useEffect(() => {
        loadData();
    }, [])

    function handleDelete(e, id) {
        e.preventDefault();
        axios.delete("https://6597e356668d248edf239ed4.mockapi.io/Saletable/" + id)
            .then((res) => {
                console.log(res.data);
                loadData();
            })
    };

    // function handleUpdate(e, id) {
    //     e.preventDefault();
    //     setId(id)
    //     axios.get(`https://6597e356668d248edf239ed4.mockapi.io/Saletable/${id}`)
    //         .then((res) => {
    //             console.log(res.data);
    //             setData({
    //                 date: res.data.date,
    //                 customer: res.data.customer,
    //                 mobileno: res.data.mobileno
    //             })
    //         })

    //         navigate("/sales")
    // }

    // function handlebill(e , id){
    //     e.preventDefault();
    //     setId(id)
    //     axios.get(`https://6597e356668d248edf239ed4.mockapi.io/React/${id}`)
    //     .then((res) => {
    //         console.log(res.data);
    //         setData({
    //             name: res.data.name,
    //             quantity: res.data.quantity,
    //             gst: res.data.gst,
    //             price: res.data.price
    //         })
    //     })
    //     navigate("/bill")
    // }

    return (
        <div>
            <Navbar />
            <section className="vh-100 gradient-custom">
                <div className="row">
                    <div className="col-lg-2">
                        <Sidebar />
                    </div>

                    <div className="col-lg-10">
                        <div className="container">
                            <div className="mt-5">
                                <div className="row">
                                    <div className="col-lg-6 mt-3">
                                        <nav aria-label="breadcrumb ">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item" ><h2 href="#" style={{ color: "white" }}>Sales Expense Data</h2></li>
                                            </ol>
                                        </nav>
                                    </div>



                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Id</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Customer Name</th>
                                                <th scope="col">Mobile No</th>
                                                <th scope="col">Total Price</th>
                                                <th scope="col">Total GST</th>
                                                <th scope="col">Overall Subtotal</th>
                                                <th scope="col">Action</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                newData.map((eachData, i) => {
                                                    return (
                                                        <tr key={i}>
                                                            <th scope="row">{i + 1}</th>
                                                            <td>{eachData.personaldata.date}</td>
                                                            <td>{eachData.personaldata.customer}</td>
                                                            <td>{eachData.personaldata.mobileno}</td>
                                                            <td>{eachData.totalprice}</td>
                                                            <td>{eachData.totalgst}</td>
                                                            <td>{eachData.overalltotal}</td>

                                                            <td>
                                                                {/* <button onClick={(e) => handleUpdate(e, eachData.id)} className='btn btn-primary'>Edit</button> */}

                                                                <button onClick={(e) => handleDelete(e, eachData.id)} className='btn btn-danger m-2'>Delete</button>

                                                                <Link to={"/bill/"+eachData.id}><button className='btn btn-info'>Bill</button></Link>
                                                                
                                                                {/* <button onClick={(e) => handleView(e, eachData.id)} className='btn btn-light'>print</button> */}
                                                            </td>

                                                        </tr>
                                                    )
                                                })

                                            }



                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
