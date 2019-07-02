import React, { Component } from 'react';
import Axios from 'axios';


export class LoginForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username:'',
            email:'',
            password : '',
        }
    }

    changehandler = e => {
        this.setState({[e.target.name]:e.target.value})
    }
    submithandler = e =>{

        e.preventDefault()
        Axios.post('http://127.0.0.1:8000/api/login',this.state)
        // Axios.post('http://192.168.1.39:8000/application/login',this.state)
        .then(Response => {
            console.log(Response)
            this.setState({posts: Response.data})
        })
        .catch(Error => {
            this.setState({errorMsg: 'Failed to send data'})
        })
        
        console.log(this.state)
    }
  render() {
    const {username, email, password} = this.state
    return (
      <div>
          <h1>SignIn form </h1>
          <form>
            {/* <input 
                type="text"
                name="username"
                value={username}
                onChange={this.changehandler}>
              </input><br/> */}

              <input 
                type="text"
                name="email"
                value={email}
                onChange={this.changehandler}>
              </input><br/>

              <input 
                type="password"
                name="password"
                value={password}
                onChange={this.changehandler}>
              </input><br/>
              <button
                type="submit"
                onClick={this.submithandler}>Submit
                </button>
          </form>
        
      </div>
    );
  }
}

export default LoginForm;
