import React, { Fragment } from 'react';
import MainContent from './components/mainContent';
import {BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
    <Fragment>
      <Router>
        <MainContent />
      </Router>
    </Fragment>
  );
}

export default App;
