/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { CgProfile } from "react-icons/cg";
import "../components/settings/Settings.css";
import { IoExitOutline } from "react-icons/io5";
import "../styles/ProductForm.css";
import ProductList from "../components/ProductList";
// Simulando conexão com banco de dados.
import produtos from "../data/produtos.js";
import LogoutModal from "../components/settings/LogoutModal.jsx";

let initialProducts = [...produtos];

const deleteProduct = (products, id) => {
  return products.filter((product) => product.id !== id);
};

export default function ProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0.0);
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [category, setCategory] = useState("Outros");
  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  const [products, setProducts] = useState(initialProducts);

  const handleAdd = (newProduct) => {
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
  };

  const handleDelete = (id) => {
    const updatedProducts = deleteProduct(products, id);
    setProducts(updatedProducts);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAdd({
      id: products.length + 1, // Simplistic ID generation
      name: name,
      price: `R$${price.toFixed(2)}`,
      category: category,
      description: description,
      stock: stock,
      images: images[0], // Assuming single image for simplicity
    });
    setName("");
    setPrice(0.0);
    setDescription("");
    setCategory("Outros");
    setStock(0);
    setImages([]);
    setImagePreviews([]);
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setImages(files);

    const previews = files.map((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      return new Promise((resolve) => {
        reader.onload = () => resolve(reader.result);
      });
    });

    Promise.all(previews).then((urls) => setImagePreviews(urls));
  };

  const handleLogoutConfirm = () => {
    setOpenLogoutModal(false);
    // lógica de logout
  };

  return (
    <>
      <Navbar />
      <section className="product-form">
        <div className="column1">
          <div className="profiles">
            <div className="profileIcons">
              <CgProfile className="CgProfile" />
            </div>
            <div className="profileInfos">
              <h3>Administrador</h3>
            </div>
          </div>
          <div className="container1-icons">
            <div className="icons">
             
            </div>
    
            <div className="icons">
              <IoExitOutline className="IoExitOutline"/>
              <p>Sair da Conta</p>
            </div>
          </div>
        </div>

        <div className="column2">
          <h1>ADICIONAR NOVO PRODUTO</h1>
          <form action="" className="form-anuncio" onSubmit={handleSubmit}>
            <div className="form-anuncio__column1">
              <label htmlFor="name">Nome do Produto</label>
              <input
                className="input__products"
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
              <div className="form-anuncio__column1__row1">
                <div className="form-anuncio__column1__price">
                  <label htmlFor="price">Preço (R$)</label>
                  <input
                    className="input__products"
                    type="number"
                    format="currency"
                    step="0.01"
                    min="0.00"
                    name="price"
                    id="price"
                    value={price}
                    onChange={(event) =>
                      setPrice(parseFloat(event.target.value))
                    }
                    required
                  />
                </div>
                <div>
                  <label htmlFor="category">Categoria</label>
                  <input
                    className="input__products"
                    name="category"
                    id="category"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                  />
                </div>
                <div className="form-anuncio__column1__stock">
                  <label htmlFor="stock">Quantidade</label>
                  <input
                    className="input__products"
                    type="number"
                    name="stock"
                    id="stock"
                    value={stock}
                    onChange={(event) => setStock(event.target.value)}
                    min={1}
                    max={100}
                    required
                  />
                </div>
              </div>
              <label htmlFor="description">Descrição</label>
              <textarea
                name="description"
                id="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                required
              />
              <button
                type="submit"
                className="product-list__button submit-button">
                Adicionar Produto
              </button>
            </div>
            <div className="form-anuncio__column2">
              <label htmlFor="images">Imagens</label>
              <input
                className="input__products"
                type="file"
                name="images"
                id="images"
                multiple
                onChange={(event) => handleImageChange(event)}
              />
              <div className="image-preview">
                {imagePreviews.map((url, index) => (
                  <img
                    className="form-anuncio__image-preview"
                    key={index}
                    src={url}
                    alt={`Preview ${index}`}
                  />
                ))}
              </div>
            </div>
          </form>

          <hr />

          <h1>PRODUTOS ANUNCIADOS</h1>
          <div className="product-list">
            <ProductList data={products} btnHandle={handleDelete} />
         
          </div>
          <div>
        <LogoutModal 
              isOpen={openLogoutModal} 
              onClose={() => setOpenLogoutModal(false)} 
              onConfirm={handleLogoutConfirm} />
        </div>
        </div>
        
      </section>
      <Footer />
    </>
  );
}
