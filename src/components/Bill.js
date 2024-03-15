import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';

export default function Bill() {

  const [bill, setBill] = useState({});

  let { id } = useParams();


  function gettingData() {
    axios.get("https://6597e356668d248edf239ed4.mockapi.io/Saletable/" + id)
      .then((res) => {
        console.log(res.data);
        setBill(res.data)
      })
  }
  React.useEffect(() => {
    if (id) {
      gettingData();
    }
  }, [bill])

  const componentPDF = useRef();


  const generatePdf = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "bill",
    onafterprint: () => alert("Data saved in pdf")
  });

  return (
    <div>
      <div className="container">
        <card>
          <h2 className='text-center text-decoration-underline'>Invoice Form </h2>
          <div ref={componentPDF} style={{ width: "100%" }}>
            <b class="h4" className='text-decoration-underline fs-4' >Customer Name:- {bill?.personaldata?.customer}</b><br />
            <b class="h4" className='text-decoration-underline fs-4' >Mobile No:-  {bill?.personaldata?.mobileno}</b><br />
            <b class="h4" className='text-decoration-underline fs-4' >Date:- {bill?.personaldata?.date}</b>
            
            <hr />
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Sr No</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>

                {
                  bill.products && bill.products.map((eachData, i) => {
                    return (
                      <tr key={i}>
                        <th scope="row">{i + 1}</th>
                        <td>{eachData.selectedproduct.name}</td>
                        <td>{eachData.quantity}</td>
                        <td>{eachData.selectedproduct.price}</td>
                      </tr>
                    )
                  })
                }



                {/* <tr >
                  <th scope="row"></th>
                  <td>{bill.totalprice}</td>
                  <td>{bill.totalgst}</td>
                  <td>{bill.overalltotal}</td>
                </tr> */}



              </tbody>
            </table>

            <p class="h4">Total:- {bill?.overalltotal}</p><br />

            <button className='btn btn-info' variant='contained' color='primary' style={{ marginBottom: "40px", marginLeft: "20px" }} onClick={generatePdf}>Print</button>

          </div>
        </card>
      </div>
    </div>
  )
}
