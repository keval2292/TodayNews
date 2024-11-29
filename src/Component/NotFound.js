import React, { Component } from 'react'
import { Link } from 'react-router-dom'; 

export default class NotFound extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <h1 className="display-4 text-danger">404</h1>
                        <h2 className="mb-4">Page Not Found</h2>
                        <p className="lead mb-4">
                            Oops! The page you are looking for does not exist.
                        </p>
                        <Link to="/" className="btn btn-dark btn-lg mb-5">
                            Go Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
