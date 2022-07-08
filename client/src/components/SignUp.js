import React, {useState} from 'react';
import ReactDom from 'react-dom'
import Errors from './Errors'
import './LogIn.css'

function SignUp ({open, onClose, setUser, errors, setErrors}) {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        image: "",
        username: "",
        password: "",
        password_confirmation: ""
    })

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
                username: "",
                password: "",
                password_confirmation: ""
            })
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
                <div id="main-wrapper" class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-10">
                            <div class="card border-0">
                                <div class="card-body p-0">
                                    <div class="row no-gutters">




                                    <div class="col-lg-6 d-none d-lg-inline-block">
                                            <div class="account-block rounded-left">
                                                <div class="overlay rounded-left"></div>
                                                <div class="account-testimonial">
                                                    <h4 class="text-white mb-4">Find restaurants and write reviews!</h4>
                                                    <p class="lead text-white">"I get hanrgry when I get bad service at restaurants"</p>
                                                    <p>- Gay Seltzer Master</p>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="col-lg-6">
                                            <div class="p-5">
                                                <div class="mb-4">
                                                    <h3 class="h4 font-weight-bold text-theme">Sign Up</h3>
                                                </div>

                                                <form onSubmit={handleSignup}>

                                                    <div class="form-group">
                                                        <label htmlFor="exampleInputUsername">First Name</label>
                                                        <input type="text" name="first_name" class="form-control" id="exampleInputFirstName" value={formData.first_name} onChange={handleOnChange} />
                                                    </div>

                                                    <div class="form-group">
                                                        <label htmlFor="exampleInputUsername">Last Name</label>
                                                        <input type="text" name="last_name" class="form-control" id="exampleInputLastName" value={formData.last_name} onChange={handleOnChange}/>
                                                    </div>

                                                    <div class="form-group">
                                                        <label htmlFor="exampleInputUsername">Image</label>
                                                        <input type="text" name="image" class="form-control" id="exampleInputImage" value={formData.image} onChange={handleOnChange}/>
                                                    </div>

                                                    <div class="form-group">
                                                        <label htmlFor="exampleInputUsername">Username</label>
                                                        <input type="text" name="username" class="form-control" id="exampleInputUsername" value={formData.username} onChange={handleOnChange}/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label htmlFor="exampleInputPassword">Password</label>
                                                        <input type="password" name="password" class="form-control" id="exampleInputPassword" value={formData.password} onChange={handleOnChange}/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label htmlFor="exampleInputPasswordConfirmation">Confirm Password</label>
                                                        <input type="password" class="form-control" id="exampleInputPasswordConfirmation" name='password_confirmation' value={formData.password_confirmation} onChange={handleOnChange}/>
                                                    </div>

                                                    <button type="submit" class="btn btn-theme">Login</button>
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
                {/* <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
                    <span aria-hidden="true">&times;</span>
                </button>
    


                        <div class="row justify-content-md-center">
                            <label class="col-sm-2 col-form-label" htmlFor="image">Image</label>
                            <div class="col-auto">
                                <input
                                class="form-control"
                                type="text"
                                id="img"
                                autoComplete="off"
                                placeholder='profile image url'
                                name='img'
                                value={formData.image}
                                onChange={handleOnChange}
                                />
                            </div>
                        </div>

                        <div class="form-group">
                            <label htmlFor="username">Username</label>
                            <input 
                            type="text" 
                            name="username" 
                            class="form-control" 
                            id="username" 
                            aria-describedby="usernameHelp" 
                            placeholder="Enter Username"
                            value={formData.username}
                            onChange={handleOnChange}/>
                        </div>
    
                        <hr class="hr-or"/>

                        <div class="form-group">
                            <label htmlFor="password">Password</label>
                            <input 
                            type="password" 
                            name="password" 
                            d="password"  
                            class="form-control" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter Password" 
                            autoComplete="current-password"
                            value={formData.password}
                            onChange={handleOnChange}
                            />
                        </div>

                        <div class="row justify-content-md-center">
                            <label class="col-sm-2 col-form-label" htmlFor="password">Confirm Password</label>
                            <div class="col-auto">
                                <input
                                class="form-control"
                                type="password"
                                id="password_confirmation"
                                autoComplete="current-password"
                                placeholder='password confirmation'
                                name='password_confirmation'
                                value={formData.password_confirmation}
                                onChange={handleOnChange}
                                />
                            </div>
                        </div>

                        <hr class="hr-or"/>

                        <div class="col-md-12 text-center ">
                            <button type="submit" class=" btn btn-block mybtn btn-primary tx-tfm">Login</button>
                            { errors.length !== 0 ? <Errors key={errors} errors={errors} /> : null}
                        </div>

                    </form>
                </div> */}
            </div>
        </div>,
        document.getElementById('portal')
        )
    }

export default SignUp