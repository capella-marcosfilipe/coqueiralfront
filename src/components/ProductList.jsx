/* eslint-disable react/prop-types */
export default function ProductList({ data, btnHandle }) {
  return (
    <>
      {data.map((product) => (
        <div className="product-item" key={product.id}>
          <img src={product.image} alt={`produto${product.id}`} />
          <p className="product-item__name">{product.name}</p>
          <p className="product-item__price">{product.price}</p>
          <button
            className="product-list__button"
            onClick={() => btnHandle(product.id)}>
            Apagar
          </button>
        </div>
      ))}
    </>
  );
}
