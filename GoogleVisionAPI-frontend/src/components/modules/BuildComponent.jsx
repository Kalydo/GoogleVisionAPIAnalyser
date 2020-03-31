import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import BodyComponent from './BodyComponent';
import FooterComponent from './FooterComponent';
import ErrorExeption from './ErrorExeption';
import AuthenticatedRoute from './AuthenticatedRoute';
import Logout from './Logout';
import Login from './Login';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GoogleVision from './GoogleVision';

class BuildComponent extends Component{
    render(){
        return (
            <div className="page">
                <Router>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={BodyComponent}/>
                        <Route path="/login" component={Login}/>
                        <AuthenticatedRoute path="/logout" component={Logout}/>
                        <AuthenticatedRoute path="/my" component={GoogleVision}/>
                        <Route component={ErrorExeption}/>
                    </Switch>
                    <div className="fixed-bottom">
                        <FooterComponent/>
                    </div>  
                </Router>
                
            </div>
        )
    }
}

export default BuildComponent