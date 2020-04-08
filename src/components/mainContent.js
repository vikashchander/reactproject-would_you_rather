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
import { allUsers } from '../actions/users';
import { _getUsers } from '../utils/_Data';



class MainContent extends Component {

    componentDidMount() {
        _getUsers().then(data => this.props.allUsers(data))
    }

    render() {
        //  this.props.allUsers(this.state.data);
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
const mapStateToProps = ({ allUsers }) => {
    return { allUsers };
};

export default connect(mapStateToProps, { allUsers })(MainContent);