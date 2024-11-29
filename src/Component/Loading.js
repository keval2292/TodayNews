import React, { Component } from 'react';

export default class Loading extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center align-items-center m-5">
                <div className="spinner-border text-dark spinner-lg" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }
}
