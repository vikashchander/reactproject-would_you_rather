import React, { Component, Fragment } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Footer from './footer';
import Header from './header';
import AddQuestion from './addQuestion';
import LeaderBoard from './leaderBoard';
import { connect } from 'react-redux';
import Home from './home';
import NotFound from './NotFound';
import Login from './login';
import { handleInitialData } from '../actions/data';
import QuestionView from './questionView';


class MainContent extends Component {
    componentDidMount() {
        const { handleInitialData } = this.props;
        handleInitialData();
    }
    render() {
        const { authedUser } = this.props;
        console.log(authedUser);

    if (!authedUser) {
      return (
        <BrowserRouter>
          <Switch>
                  <Route path="/">
                      <Login/>
                      </Route>
          </Switch>
        </BrowserRouter>
      );
    }

        return (
            <Fragment> 
                <Header/>
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/newquestion">
                       <AddQuestion/>
                        </Route>
            <Route path="/questions/:id"><QuestionView/></Route>
            <Route path="/leaderboard"><LeaderBoard/></Route>
              <Route path="/404"><NotFound/></Route>
              <Route path="*"><NotFound/></Route>
                </Switch>
                <Footer/> 
                </Fragment>
        )
    }
}

const mapStateToProps = state => {
  return { authedUser: state.setAuthedUser };
};


export default connect(mapStateToProps, { handleInitialData })(MainContent);