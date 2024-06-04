import React from 'react';

import Divulgue from "../components/DivulgueSemLogin";
import Navbar from '../components/NavbarSemLogin';
import Searchbar from '../components/Searchbar';
import Footer from '../components/Footer';


const TeladivulgueSemLogin = () => {
  console.log("Teladivulgue component is rendering");

  return (
    <div className="App">
      <Navbar />
      <Searchbar/>
      <Divulgue />
      <Footer />

    </div>
  );
}

export default TeladivulgueSemLogin;
