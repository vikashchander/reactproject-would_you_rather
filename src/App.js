import React, { Fragment } from 'react';
import Header from './components/header';
import AddQuestion from './components/addQuestion';
import Footer from './components/footer';


function App() {
  return (
    <Fragment>
      <Header />
      <AddQuestion />
      <Footer />
    </Fragment>
  );
}

export default App;
