/* eslint-disable react/prop-types */
import "../styles/index.css";
import { Link } from "react-router-dom";

export default function Produto({ produto }) {
  return (
    <div className="product">
      <Link to= "/Clothes1">
     <img src={produto.image} alt={`produto${produto.id}`} /> 
      </Link>
      <p className="product-name">{produto.name}</p>
      <p className="rate">{produto.rate}</p>
      <p className="product-price">{produto.price}</p>
    </div>
  );
}
