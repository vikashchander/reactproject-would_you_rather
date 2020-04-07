import React, { Component } from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import AddQuestion from './addQuestion';
import LeaderBoard from './leaderBoard';
import Home from './home';
import NotFound from './NotFound';
import Login from './login';



class MainContent extends Component {
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
export default MainContent;