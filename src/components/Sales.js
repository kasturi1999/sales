import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Sales() {

  const [newData, setNewData] = useState([]);
  const [rows, setRows] = useState([{ quantity: 1 }])
  const [overalltotal, setOverallTotal] = useState(0)
  const [totalprice, setTotalprice] = useState(0)
  const [totalgst, setTotalgst] = useState(0)


  let navigate = useNavigate();

  const [personaldata, setPersonaldata] = useState({
    date: "",
    customer: "",
    mobileno: ""

  })

  function handleChange(id, index) {
    console.log(id);
    const dropdown = newData.find((e) => e.id === id)
    let copyRows = [...rows]
    copyRows[index].selectedproduct = dropdown
    setRows(copyRows)
  }
  console.log("latest", rows);


  useEffect(() => {
    let calculatetotal = 0
    let totalprice =0
    let totalgst=0
    for (let index = 0; index < rows.length; index++) {
      let row = rows[index];
      if (row.selectedproduct) {
        totalprice +=row.selectedproduct.price *row.quantity;
        totalgst +=row.selectedproduct.price * row.selectedproduct.gst /100
        calculatetotal += row.selectedproduct.price * row.selectedproduct.gst /100 * row.quantity + row.selectedproduct.price * row.quantity
      }
    }
    // console.log("totaoprice",totalprice);
    // console.log("totalgst",totalgst);
    setOverallTotal(calculatetotal)
    setTotalprice(totalprice)
    setTotalgst(totalgst)
  })

  function loadData() {
    axios.get("https://6597e356668d248edf239ed4.mockapi.io/React")
      .then((res) => {
        console.log(res.data);
        setNewData(res.data)
      })
  }

  function addrow() {
    let copyrows = [...rows]
    copyrows.push({ quantity: 1 })
    setRows(copyrows)
  }

  const quantitychange = (value, index) => {
    let copyRows = [...rows]
    copyRows[index].quantity = value
    setRows(copyRows)
  }

  useEffect(() => {
    loadData()
  }, [])

  function HandleData(e) {
    e.preventDefault()
    setPersonaldata({ ...personaldata, [e.target.id]: e.target.value })

  }

  function HandleSubmit(e) {

    const postdata = {
      personaldata: personaldata,
      overalltotal:overalltotal, 
      totalprice:totalprice,
      totalgst:totalgst, 
      products:rows
      
    };
    axios.post("https://6597e356668d248edf239ed4.mockapi.io/Saletable", postdata)
      .then((res) => {
        // console.log(res);
        setPersonaldata(res.data)
      })
      navigate("/salestable")

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
                        <li className="breadcrumb-item" ><h2 href="#" style={{ color: "white" }}>Sales</h2></li>
                        {/* <li className="breadcrumb-item active" style={{color: "white"}} aria-current="page">home</li> */}
                      </ol>
                    </nav>
                  </div>


                </div>
              </div>
              <div className="row">
                <div className="col-lg 4">
                  <label className="form-label" > Date</label><br />
                  <input type="date" className="form-control"id='date' onChange={(e) => HandleData(e)} value={personaldata.date} />
                </div>
                <div className="col-lg 4">
                  <label className="form-label" > Customer Name</label><br />
                  <input type="text" className="form-control" id='customer'onChange={(e) => HandleData(e)} value={personaldata.customer} />
                </div>
                <div className="col-lg 4">
                  <label className="form-label" > mobile</label><br />
                  <input type="number" className="form-control" id='mobileno'onChange={(e) => HandleData(e)} value={personaldata.mobileno} /><br />
                </div>
              </div>


              <button className='btn btn-light' onClick={addrow}>Add Row</button><br /><br />

              <table class="table  table-bordered">
                <thead>
                  <tr>
                    <th scope="col">N0.</th>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">GST</th>
                    <th scope="col">Price</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>

                  {rows.map((row, index) => {
                    return (

                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td><select onChange={((e) => handleChange(e.target.value, index))} class="form-select gradient-custom" aria-label="Default select example">
                          <option selected>Select</option>
                          {newData.map((eachData, i) => {
                            return (
                              <option key={i} value={eachData.id}>{eachData.name}</option>
                            )
                          })
                          }
                        </select></td>
                        <td><input type="number" className='form-control gradient-custom' value={row.quantity} onChange={((e) => quantitychange(e.target.value, index))} /></td>
                        <td><input type="text" className='form-control gradient-custom' value={row.selectedproduct ? row.selectedproduct.gst : ""} /></td>
                        <td><input type="text" className='form-control gradient-custom' value={row.selectedproduct ? row.selectedproduct.price : ""} /></td>
                        <td><input type="text" className='form-control gradient-custom' value={row.selectedproduct ?  row.selectedproduct.price * row.selectedproduct.gst /100 * row.quantity + row.selectedproduct.price * row.quantity : ""} /></td>
                        {/* <td><input type="text" className='form-control gradient-custom' value={row.selectedproduct ? row.selectedproduct.total + row.selectedproduct.total : ""} /></td> */}
                      </tr>
                    )
                  })}



                </tbody>
              </table>

              <div className="row">
                <div className="col-lg-6">
                  <button className='btn btn-light' onClick={((e) => HandleSubmit(e))}>Submit</button>
                </div>
                <div className="col-lg-6 d-flex justify-content-end">
                  <input type="text" value={overalltotal} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
