import React, { Component } from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import AddQuestion from './addQuestion';
import LeaderBoard from './leaderBoard';
import PrivateRoute from './PrivateRoutes';
import { connect } from 'react-redux';
import Home from './home';
import NotFound from './NotFound';
import Login from './login';
import { handleInitialData } from '../actions/data'


class MainContent extends Component {

    componentDidMount() {
        const { handleInitialData } = this.props;
        handleInitialData();
    }
    render() {
        return (
            <Switch>
                <Route exact path="/login">
                    <Login />
                </Route>
                <PrivateRoute exact path="/">
                    <Home />
                </PrivateRoute>
                <PrivateRoute exact path="/newquestion">
                    <AddQuestion />
                </PrivateRoute>
                <PrivateRoute exact path="/leaderboard">
                    <LeaderBoard />
                </PrivateRoute>
                <PrivateRoute exact path="*">
                    <NotFound />
                </PrivateRoute>
            </Switch>
        )
    }
}


export default connect(null, { handleInitialData })(MainContent);