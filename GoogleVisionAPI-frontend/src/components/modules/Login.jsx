import React, { Component } from 'react'
import AuthentificationService from './AuthentificationService.js'


class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
             username: 'kalydo',
             password: '',
             hasLoginFaild: false,
        }
        this.loginClicked = this.loginClicked.bind(this)
        this.handlerChange = this.handlerChange.bind(this)
    }


    handlerChange(event) {
        console.log(this.state.title)
        this.setState({[event.target.name]: event.target.value})
    }

    loginClicked() {
        AuthentificationService
        .executeJwtAuthenticationService(this.state.username, this.state.password)
        .then((response) => {
            AuthentificationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
            this.props.history.push(`/`)
        }).catch(() => {
            this.setState({ hasLoginFailed: true })
        })
    }
    
    render(){
        return(
            <div>
                <h1>Login</h1>
            <div className="container">
                {this.state.hasLoginFaild && <div className="alert alert-warning">Invalid Credentials</div>}
                Username: <input type="text" name="username" value={this.state.username} onChange={this.handlerChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handlerChange}/>
                <button onClick={this.loginClicked}>Login</button>
            </div>
        </div>
        )
    }  
}

export default Login