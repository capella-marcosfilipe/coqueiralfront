import React, { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import "../components/settings/Settings.css";
import { IoExitOutline } from "react-icons/io5";
import "../styles/ProductForm.css";
import ProductList from "../components/ProductList";
import LogoutModal from "../components/settings/LogoutModal.jsx";
import { getProducts, addProduct, deleteProduct, updateProductName, updateProductDescription, updateProductPrice } from "../data/api.js";

export default function ProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("0.00");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [category, setCategory] = useState("Outros");
  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    };
    fetchProducts();
  }, []);

  const handleAdd = async (newProduct) => {
    const addedProduct = await addProduct(newProduct);
    setProducts([...products, addedProduct]);
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleEdit = (product) => {
    setName(product.name);
    setPrice(product.price.replace('R$', '').replace(',', '.'));
    setDescription(product.description);
    setCategory(product.category);
    setStock(product.stock);
    setImages([product.images]);
    setImagePreviews([product.images]);
    setEditingProduct(product.id);
  };

  const handleUpdate = async (updatedProduct) => {
    await updateProductName(editingProduct, updatedProduct.name);
    await updateProductDescription(editingProduct, updatedProduct.description);
    await updateProductPrice(editingProduct, updatedProduct.price);

    setProducts(products.map((product) =>
      product.id === editingProduct ? { ...product, ...updatedProduct } : product
    ));
    setEditingProduct(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      name,
      price: `R$${parseFloat(price).toFixed(2)}`,
      category,
      description,
      stock,
      images: images[0], // Assuming single image for simplicity
    };

    if (editingProduct) {
      handleUpdate(newProduct);
    } else {
      handleAdd(newProduct);
    }

    // Reset form
    setName("");
    setPrice("0.00");
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
            <div className="icons" onClick={() => setOpenLogoutModal(true)}>
              <IoExitOutline className="IoExitOutline"/>
              <p>Sair da Conta</p>
            </div>
          </div>
        </div>

        <div className="column2">
          <h1>{editingProduct ? "ATUALIZAR PRODUTO" : "ADICIONAR NOVO PRODUTO"}</h1>
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
                    onChange={(event) => setPrice(event.target.value)}
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
                {editingProduct ? "Atualizar Produto" : "Adicionar Produto"}
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
                onChange={handleImageChange}
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
            <ProductList data={products} btnHandle={handleDelete} onEdit={handleEdit} />
          </div>
          <div>
            <LogoutModal
              isOpen={openLogoutModal}
              onClose={() => setOpenLogoutModal(false)}
              onConfirm={handleLogoutConfirm} />
          </div>
        </div>
      </section>
     
    </>
  );
}
