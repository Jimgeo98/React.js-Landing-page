import React from 'react';
import './App.scss'
import Header from './Components/Header';
import Banner from './Components/Banner';
import About from './Components/About';
import Services from './Components/Services';
import Team from './Components/Team';
import Footer from './Components/Footer';
import Arrow from './Components/Arrow';
import Email from './Components/Email';

const App = () => {

  return (
    <div>

      <Header />
      <Banner />
      <About />
      <Services />
      <Team />
      <Email />
      <Footer />
      <Arrow />

    </div>

  )
}

export default App;
