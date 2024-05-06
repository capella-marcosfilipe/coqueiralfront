import Produto from "./Produto.jsx";
import produtos from "../data/produtos.js";
import "../styles/index.css";

// eslint-disable-next-line react/prop-types
export default function ProdutosContainer({ title }) {
  return (
    <div>
      <div className="page-inner-content">
        <h3 className="section-title">{title}</h3>
        <div className="subtitle-underline" />
      </div>
      <div className="cols cols-4">
        {produtos.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}
