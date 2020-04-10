import React, { Component } from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import AddQuestion from './addQuestion';
import LeaderBoard from './leaderBoard';
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
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/newquestion">
                    <AddQuestion />
                </Route>
                <Route exact path="/leaderboard">
                    <LeaderBoard />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="*">
                    <NotFound />
                </Route>
            </Switch>
        )
    }
}


export default connect(null, { handleInitialData })(MainContent);