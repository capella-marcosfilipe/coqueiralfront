import React from 'react';
import Etica from '../components/Etica';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Searchbar from '../components/Searchbar';


const Telaetica = () => {
  console.log("Telaetica component is rendering");

  return (
    <div className="App">
      <Navbar/>
      <Searchbar />
      <Etica />
      <Footer />
    </div>
  );
}

export default Telaetica;
