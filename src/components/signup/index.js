import React,{ Component } from 'react';
import './signup.css'

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
            error: ""
        }
    }
    onChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {password, confirmPassword} = this.state;
        if(password !== confirmPassword){
            const error = "Password must match..";
            this.setState({
                error
            });
        }else{
            this.setState({
                error: ""
            });
            this.props.history.push('/');
        }
    }
    render() {
        const {error} = this.state;
        return (
            <div className="signup">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input onChange={this.onChange} type="email" className="form-control" id="email" name="email" placeholder="Enter your email..." required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input onChange={this.onChange} type="text" className="form-control" id="username" name="username" aria-describedby="emailHelp" placeholder="Enter username" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input onChange={this.onChange} type="password" className="form-control" id="password" name="password" placeholder="Password" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input onChange={this.onChange} type="password" className="form-control" id="confirmPassword" name="confirmPassword" placeholder="Confirm password" required/>
                        <small id="passwordHelpBlock" className="form-text text-danger">{error ? error : ""}</small>
                    </div>
                    <button type="submit" className="btn btn-primary">Sign up</button>
                </form>
            </div>
        );
    }
}

export default index;