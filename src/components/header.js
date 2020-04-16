import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import store from '../store/store';

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        let value = null;
        this.props.setAuthedUser(value);
        // console.log(this.props.setAuthedUser(value).payload);
        const { history } = this.props;
        (this.props.setAuthedUser(value).payload) ? history.push('/login') : history.push('/');

    }
    render() {

        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-info">

                    <NavLink className="navbar-brand" to='/'>Rather than You</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                        aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="basicExampleNav">
                        <ul className="navbar-nav mr-auto">
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
                        <ul className="navbar-nav mr-3">
                            <li className="nav-item text-uppercase">
                                {(store.getState().setAuthedUser) &&
                                    <div className="nav-link btn">Hi, {store.getState().setAuthedUser}</div>
                                }
                            </li>
                            <li className="nav-item ">
                                {(store.getState().setAuthedUser) &&
                                    <div className="nav-link btn" onClick={this.handleClick} >Sign Out</div>
                                }
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment >
        )
    }
}

const mapStateToProps = state => {
    return { ...state };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setAuthedUser: (data) => dispatch({ type: 'SET_STATE_USER', payload: data })
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));