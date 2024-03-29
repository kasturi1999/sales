import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Login() {
    
    let navigate = useNavigate(); 

    const[data, setData] = useState({
        username: "",
        password: ""        
    });

    function handleChange(e){
        e.preventDefault();
        setData({...data, [e.target.id]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        // console.log(data);

        if(data.username === "admin" && data.password === "admin"){

            // console.log(data);
            setData({
                username: "",
                password: ""
            })

            let Credential = JSON.stringify(data)
            localStorage.setItem("data",Credential);

            navigate("/home")
            window.location.reload();
        }else{
            alert("Invalid Credentical ");
        }
    }


    return (
        <div>
            <div className="conatiner">
                <div className="col-lg-12">
                    <div className="row">
                        <section className="vh-100 gradient-custom">
                            <div className="container h-100">
                                <div className="row d-flex justify-content-center align-items-center h-100">
                                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                        <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                                            <div className="card-body p-5 text-center">

                                                <div className="mb-md-5 mt-md-4 pb-5">

                                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                                    <div className="form-outline form-white mb-4">
                                                        <input value={data.username} onChange={(e) => handleChange(e)} type="text" id="username" className="form-control form-control-lg" />
                                                        <label className="form-label" for="typeEmailX">Name</label>
                                                    </div>

                                                    <div className="form-outline form-white mb-4">
                                                        <input value={data.password} onChange={(e) => handleChange(e)} type="password" id="password" className="form-control form-control-lg" />
                                                        <label className="form-label" for="typePasswordX">Password</label>
                                                    </div>

                                                    <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                                                    <button onClick={(e) => handleSubmit(e)} className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

                                                </div>

                                                <div>
                                                    <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Register</a>
                                                    </p>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
