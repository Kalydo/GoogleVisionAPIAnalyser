import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import AuthentificationService from './AuthentificationService.js'

class HeaderComponent extends Component{
    render(){
        const isUserLoggedIn = AuthentificationService.isUserLoggedIn();
        return(
            <div className="header">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <span className="navbar-brand text">Google Vision API</span>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-md-0">
                            {isUserLoggedIn && <li className="nav-item"><Link className="nav-link" to="/my">Google Vision</Link></li>}
                            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        </ul>
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            {!isUserLoggedIn && <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>}
                            {isUserLoggedIn && <li className="nav-item"><Link className="nav-link" to="/logout" onClick={AuthentificationService.logout}>Logout</Link></li>}  
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default withRouter(HeaderComponent);