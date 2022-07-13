import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import ReactDom from 'react-dom'
import Errors from './Errors'
import './LogIn.css'

function SignUp ({open, onClose, setUser, errors, setErrors, setIsLoggedIn}) {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        image: "",
        bio: "",
        phone: "",
        email: "",
        username: "",
        password: "",
        password_confirmation: ""
    })
    const history = useHistory()

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSignup = (e) => {
        e.preventDefault();
        setErrors([]);
        fetch("/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        }).then((r) => {
        if (r.ok) {
            r.json().then((user) => setUser(user));
            setFormData({
                first_name: "",
                last_name: "",
                image: "",
                bio: "",
                phone: "",
                email: "",
                username: "",
                password: "",
                password_confirmation: ""
            })
            setIsLoggedIn(true)
            history.push("/restaurants")
        } else {
            r.json().then((err) => 
                setErrors(err.errors)
            )}
        });   
    }

    const Overlay = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, .7)',
    }
      
    const Modal_Style = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%'
    }
    
    if (!open) return null

    return ReactDom.createPortal(
        
        <div className='overlay' style={Overlay}>
            <div className='modal-style' style={Modal_Style}>
                <div id="main-wrapper" className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="card border-0">
                                <div className="card-body p-0">
                                    <div className="row no-gutters">

                                    <div className="col-lg-6 d-none d-lg-inline-block">
                                            <div className="account-block rounded-left">
                                                <div className="overlay rounded-left"></div>
                                                    <div className="account-testimonial">
                                                        <h4 className="text-white mb-4">Sign up to see all the restaurants and their workers!<br />Write reviews and don't forget to tip.</h4>
                                                        <p className="lead text-white">"I get hanrgry when I get bad service at restaurants"</p>
                                                        <p className="lead text-white">- Gay Seltzer Master</p>
                                                    </div>
                                            </div>
                                        </div>


                                        <div className="col-lg-6">
                                            <div className="p-5">
                                                <div className="mb-4">
                                                    <h3 className="h4 font-weight-bold text-theme">Sign Up</h3>
                                                </div>

                                                <form onSubmit={handleSignup}>

                                                <div className="mb-3">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputUsername">First Name</label>
                                                        <input type="text" name="first_name" className="form-control" id="exampleInputFirstName" value={formData.first_name} onChange={handleOnChange} />
                                                    </div>
                                                </div>

                                                <div className="mb-3">

                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputUsername">Last Name</label>
                                                        <input type="text" name="last_name" className="form-control" id="exampleInputLastName" value={formData.last_name} onChange={handleOnChange}/>
                                                    </div>

                                                </div>


                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputUsername">Image</label>
                                                        <input type="text" name="image" className="form-control" id="exampleInputImage" value={formData.image} onChange={handleOnChange}/>
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputUsername">Username</label>
                                                        <input type="text" name="username" className="form-control" id="exampleInputUsername" value={formData.username} onChange={handleOnChange}/>
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputPassword">Password</label>
                                                        <input type="password" name="password" className="form-control" id="exampleInputPassword" value={formData.password} onChange={handleOnChange}/>
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputPasswordConfirmation">Confirm Password</label>
                                                        <input type="password" className="form-control" id="exampleInputPasswordConfirmation" name='password_confirmation' value={formData.password_confirmation} onChange={handleOnChange}/>
                                                    </div>


                                                    <button type="submit" className="btn btn-theme">Login</button>
                                                    { errors.length !== 0 ? <Errors key={errors} errors={errors} /> : null}
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>,
        document.getElementById('portal')
        )
    }

export default SignUp