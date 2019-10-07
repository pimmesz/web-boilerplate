import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Header from '../components/Navigation.jsx';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page page--home">
        <Header />
      </div>
    )
  }
}

export default withRouter(Home);
