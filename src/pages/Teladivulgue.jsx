import React from 'react';
import '../styles/divulgue.css';
import Divulgue from "../components/Divulgue";
import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';
import Footer from '../components/Footer';


const Teladivulgue = () => {
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

export default Teladivulgue;
