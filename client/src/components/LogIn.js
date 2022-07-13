import React, {useState} from 'react'
import {useHistory} from "react-router-dom";
import ReactDom from 'react-dom'
import Errors from './Errors'
import './LogIn.css'

function LogIn ({open, onClose, setUser, errors, setErrors, setIsLoggedIn}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory()

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

    function handleLogin(e) {
        e.preventDefault();
        fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        }).then((r) => {
        if (r.ok) {
            r.json().then((user) => {
                setUser(user)
            });
            onClose()
            setIsLoggedIn(true)
            setUsername("")
            setPassword("")
            history.push("/restaurants")
        } else {
            r.json().then((err) => {
                setErrors(err.errors)
            });
        }
        });
        
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
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="mb-5">
                                            <h3 className="h4 font-weight-bold text-theme">Login</h3>
                                        </div>

                                        <h6 className="h5 mb-0">Welcome back!</h6>
                                        <p className="text-muted mt-2 mb-5">Enter your username and password to access everything.</p>

                                        <form onSubmit={handleLogin}>
                                            <div className="form-group">
                                                <label>Username</label>
                                                <input type="text" name="username" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)}/>
                                            </div>
                                            <div className="form-group mb-5">
                                                <label>Password</label>
                                                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                            </div>
                                            <button type="submit" className="btn btn-theme">Login</button>
                                            { errors.length !== 0 ? <Errors key={errors} errors={errors} /> : null}
                                        </form>

                                    </div>
                                </div>

                                <div className="col-lg-6 d-none d-lg-inline-block">
                                    <div className="account-block rounded-right">
                                        <div className="overlay rounded-right"></div>
                                        <div className="account-testimonial">
                                            <h4 className="text-white mb-4">Check restaurants and workers.</h4>
                                            <p className="lead text-white">"I get hanrgry when I get bad service at restaurants"</p>
                                            <p className="lead text-white">- Gay Seltzer Master</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    ,document.getElementById('portal')
    )
}

export default LogIn