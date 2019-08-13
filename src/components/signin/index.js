import React, { Component } from 'react';
import "./signin.css";

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errors: ""
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
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="signin">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" name="username" aria-describedby="emailHelp" placeholder="Enter username" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" name="password" placeholder="Password" />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary mt-4">Sign in</button>
                </form>
            </div>
        );
    }
}

export default index;