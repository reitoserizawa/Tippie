import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/TippieLogo.jpg'
import LogIn from './LogIn'
import SignUp from './SignUp'
import './NavBar.css'

function NavBar ({user, setUser, handleLogout, errors, setErrors, isLoggedIn, setIsLoggedIn}) {
    const [openLogIn, setOpenLogIn] = useState(false)
    const [openSignUp, setOpenSignUp] = useState(false)

    let buttons

    if (isLoggedIn) {
        buttons = 
        <>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
                <NavLink to='/profile' exact>
                    <button type="button" className="btn btn-sm btn-outline-warning" style={{margin:"10px"}}><i className="fa-solid fa-user"></i></button>
                </NavLink>
                <button type="button" className="btn btn-sm btn-outline-warning" style={{margin:"10px"}} onClick={handleLogout}><i className="fa-solid fa-arrow-right-from-bracket"></i> Log Out</button>
            </li>
        </ul>
        </>
    } else {
        buttons = 
        <>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
                <button type="button" className="btn btn-sm btn-outline-warning" onClick={() => setOpenLogIn(!openLogIn)} style={{margin:"10px"}}><i className="fa-solid fa-arrow-right-to-bracket"></i> Log In</button>
                <LogIn  open={openLogIn} onClose={() => setOpenLogIn(false)} setUser={setUser} errors={errors} setErrors={setErrors} setIsLoggedIn={setIsLoggedIn}/>
                <button type="button" className="btn btn-sm btn-outline-warning" onClick={() => setOpenSignUp(!openSignUp)} style={{margin:"10px"}}><i className="fa-solid fa-user-plus"></i> Sign Up</button>
                <SignUp  open={openSignUp} onClose={() => setOpenSignUp(false)} setUser={setUser} errors={errors} setErrors={setErrors} setIsLoggedIn={setIsLoggedIn}/>
            </li>
        </ul>
        </>
    }

    return (
    <>
    <nav className="navbar fixed-top navbar-light bg-white" style={{boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)"}}>
        <div className="container">
            {isLoggedIn ? 
            <NavLink to='/restaurants' exact>
                <img src={logo} alt=""  width="66" height="37"/>
            </NavLink> : 
            <>
            <img src={logo} alt=""  width="66" height="37" onClick={() => setOpenLogIn(!openLogIn)}/>
            <LogIn  open={openLogIn} onClose={() => setOpenLogIn(false)} setUser={setUser} errors={errors} setErrors={setErrors}/>
            </>
            }
            <ul className="navbar-nav mr-auto"> 
                <form className="form-inline my-8 my-lg-3" style={{margin:"10px"}}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button type="button" className="btn btn-light"><i className="fas fa-search"></i></button>
                </form>
            </ul>
        </div>
        {buttons}                
    </nav>
    </>
    )

}

export default NavBar