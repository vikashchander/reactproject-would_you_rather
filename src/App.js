import React, { Fragment } from 'react';
import Header from './components/header';
import MainContent from './components/mainContent';
import AddQuestion from './components/addQuestion';
import Footer from './components/footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <MainContent />
      </Router>
      <Footer />
    </Fragment>
  );
}

export default App;
