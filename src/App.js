import React from 'react'
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
