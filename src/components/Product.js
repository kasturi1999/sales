import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import axios, { Axios } from 'axios';




export default function Product() {

    const [data, setData] = useState({
        name: "",
        gst: "",
        price: ""
    });

    const [newData, setNewData] = useState([]);
    const [id, setId] = useState(undefined);

    function handleChange(e) {
        setData({ ...data, [e.target.id]: e.target.value });
        // console.log(data);
    }

    function handleSubmit() {
        // e.preventDefault();
        console.log(data);
        if (id === undefined) {

            axios.post("https://6597e356668d248edf239ed4.mockapi.io/React", data)
                .then((res) => {
                    console.log(res.data);
                    loadData();
                });

            setData({
                name: "",
                gst: "",
                price: ""
            })

        } else {
            axios.put("https://6597e356668d248edf239ed4.mockapi.io/React/" + id, data)
                .then((res) => {
                    console.log(res.data);
                    loadData();
                });

            setData({
                name: "",
                gst: "",
                price: ""
            })
        }

    };

    function loadData() {
        axios.get("https://6597e356668d248edf239ed4.mockapi.io/React")
            .then((res) => {
                console.log(res.data);
                setNewData(res.data);
            })

    };

    useEffect(() => {
        loadData();
    }, [])

    function handleDelete(e, id) {
        e.preventDefault();
        axios.delete("https://6597e356668d248edf239ed4.mockapi.io/React/" + id)
            .then((res) => {
                console.log(res.data);
                loadData();
            })
    };

    function handleUpdate(e, id) {
        e.preventDefault();
        setId(id)
        axios.get(`https://6597e356668d248edf239ed4.mockapi.io/React/${id}`)
            .then((res) => {
                console.log(res.data);
                setData({
                    name: res.data.name,
                    gst: res.data.gst,
                    price: res.data.price
                })
            })
    }


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
                                                <li className="breadcrumb-item" ><h2 href="#" style={{ color: "white" }}>Product</h2></li>
                                                {/* <li className="breadcrumb-item active" style={{color: "white"}} aria-current="page">home</li> */}
                                            </ol>
                                        </nav>
                                    </div>
                                    <div className="col-lg-6 d-flex justify-content-end mt-3">
                                        <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Add</button>
                                    </div>

                                    {/* <!-- Modal --> */}
                                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">

                                                    <div className="mb-3">
                                                        <label className="form-label"> Name</label>
                                                        <input id='name' value={data.name} type="text" onChange={handleChange} className="form-control" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label">GST</label>
                                                        <input id='gst' value={data.gst} type="text" onChange={handleChange} className="form-control" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label">Price</label>
                                                        <input id='price' value={data.price} type="text" onChange={handleChange} className="form-control" />
                                                    </div>

                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" className="btn btn-primary" onClick={() => handleSubmit()} data-bs-dismiss="modal">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    {/* ********** table ****** */}

                                    
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">GST</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Action</th>


                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                newData.map((eachData, i) => {
                                                    return (
                                                        <tr key={i}>
                                                            <th scope="row">{i + 1}</th>
                                                            <td>{eachData.name}</td>
                                                            <td>{eachData.gst}</td>
                                                            <td>{eachData.price}</td>

                                                            <td>
                                                                <button onClick={(e) => handleUpdate(e, eachData.id)} className='btn btn-primary m-2' data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>

                                                                <button onClick={(e) => handleDelete(e, eachData.id)} className='btn btn-danger'>Delete</button>
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
