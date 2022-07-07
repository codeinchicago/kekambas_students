import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav(props) {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.brand}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    <Link className="nav-link" to="/standings">Standings</Link>
                    <Link className="nav-link" to="/register">Register</Link>
                    {props.loggedIn ? (
                        <>
                            <Link className="nav-link" to="/" onClick={props.logout}>Logout</Link>
                            <Link className="nav-link" to="/create-post">Create Post</Link>
                        </>
                        ) : (
                        <Link className="nav-link" to="/login">Login</Link>
                    )}
                    
                </div>
                </div>
            </div>
        </nav>
    )
}
