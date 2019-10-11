import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page page--home">
        <Navigation />
        <Hero />
        <Footer />
      </div>
    )
  }
}

export default withRouter(Home);
