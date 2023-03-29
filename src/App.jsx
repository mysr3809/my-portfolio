import React from 'react';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About.jsx';
import Experiences from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact.jsx';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experiences />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
