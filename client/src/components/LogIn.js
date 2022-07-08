import React, {useState} from 'react'
import ReactDom from 'react-dom'
import Errors from './Errors'
import './LogIn.css'

function LogIn ({open, onClose, setUser, errors, setErrors}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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
            setUsername("")
            setPassword("")
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
        <div id="main-wrapper" class="container">
            <div class="row justify-content-center">
                <div class="col-xl-10">
                    <div class="card border-0">
                        <div class="card-body p-0">
                            <div class="row no-gutters">
                                <div class="col-lg-6">
                                    <div class="p-5">
                                        <div class="mb-5">
                                            <h3 class="h4 font-weight-bold text-theme">Login</h3>
                                        </div>

                                        <h6 class="h5 mb-0">Welcome back!</h6>
                                        <p class="text-muted mt-2 mb-5">Enter your username and password to access everything.</p>

                                        <form onSubmit={handleLogin}>
                                            <div class="form-group">
                                                <label htmlFor="exampleInputUsername">Username</label>
                                                <input type="text" name="username" class="form-control" id="exampleInputUsername" value={username} onChange={(e) => setUsername(e.target.value)}/>
                                            </div>
                                            <div class="form-group mb-5">
                                                <label htmlFor="exampleInputPassword1">Password</label>
                                                <input type="password" class="form-control" id="exampleInputPassword" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                            </div>
                                            <button type="submit" class="btn btn-theme">Login</button>
                                            { errors.length !== 0 ? <Errors key={errors} errors={errors} /> : null}
                                        </form>

                                    </div>
                                </div>

                                <div class="col-lg-6 d-none d-lg-inline-block">
                                    <div class="account-block rounded-right">
                                        <div class="overlay rounded-right"></div>
                                        <div class="account-testimonial">
                                            <h4 class="text-white mb-4">Find restaurants and write reviews!</h4>
                                            <p class="lead text-white">"I get hanrgry when I get bad service at restaurants"</p>
                                            <p>- Gay Seltzer Master</p>
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