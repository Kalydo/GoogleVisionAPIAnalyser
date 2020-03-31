import axios from 'axios'

export const SESSION_ATTRIBUTE = 'authenticatedUser'

class AuthentificationService{

    executeJwtAuthenticationService(username, password) {
        return axios.post(`http://localhost:8080/authenticate`, {
            username,
            password
        })
    }

    registerSuccessfulLoginForJwt(username, token) {
        sessionStorage.setItem(SESSION_ATTRIBUTE, username)
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }

    createJWTToken(token) {
        return 'Bearer ' + token
    }

    logout(){
        sessionStorage.removeItem(SESSION_ATTRIBUTE)
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem(SESSION_ATTRIBUTE)
        if (user===null) return false;
        return true;
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem(SESSION_ATTRIBUTE)
        if (user === null) return ''
        return user
    }

    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
}

export default new AuthentificationService()