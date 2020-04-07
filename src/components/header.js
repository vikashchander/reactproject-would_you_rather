import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { NavLink, Link } from 'react-router-dom';

class Header extends Component {
    render() {

        return (
            <React.Fragment>
                <nav class="navbar navbar-expand-lg navbar-dark bg-info">

                    <NavLink class="navbar-brand" to='/'>Rather than You</NavLink>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                        aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="basicExampleNav">
                        <ul class="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/newquestion'>New Question</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/leaderboard'>Leaderboard</NavLink>
                            </li>
                        </ul>
                        <ul class="navbar-nav mr-3">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Sign In</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment >
        )
    }
}

export default Header;