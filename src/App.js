import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header'
import Services from './Components/Services'
import Business from './Components/Business'
import Bottom from './Components/Bottom'

function App() {
  return (
    <div>
        <Navbar />
        <Header />
        <Services />
        <Business />
        <Bottom />
    </div>
  );
}

export default App;
