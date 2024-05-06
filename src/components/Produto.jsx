/* eslint-disable react/prop-types */
import "../styles/index.css";

export default function Produto({ produto }) {
  return (
    <div className="product">
      <img src={produto.image} alt={`produto${produto.id}`} />
      <p className="product-name">{produto.name}</p>
      <p className="rate">{produto.rate}</p>
      <p className="product-price">{produto.price}</p>
    </div>
  );
}
