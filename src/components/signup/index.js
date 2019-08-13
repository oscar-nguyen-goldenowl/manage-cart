import React from 'react';
import './signup.css'

const index = () => {
    return (
        <div className="signup">
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Email</label>
                    <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Enter your email..." />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Sign up</button>
            </form>
        </div>
    );
};

export default index;