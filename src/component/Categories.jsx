import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loadingCats, setLoadingCats] = useState(true);
  const [error, setError] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [productError, setProductError] = useState(null);

  // Fetch categories on mount
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setCategories(data);
        } else if (Array.isArray(data.categories)) {
          setCategories(data.categories);
        } else {
          setCategories([]);
        }
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setLoadingCats(false);
      });
  }, []);

  // Fetch products when a category is selected
  useEffect(() => {
    if (!selectedCategory) return;

    setLoadingProducts(true);
    setProductError(null);

    fetch(`https://dummyjson.com/products/category/${selectedCategory}`)
      .then(res => res.json())
      .then(data => {
        if (data.products) {
          setProducts(data.products);
        } else {
          setProducts([]);
        }
      })
      .catch(err => {
        setProductError(err.message);
      })
      .finally(() => {
        setLoadingProducts(false);
      });
  }, [selectedCategory]);

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <nav className="top-nav">
          <div className="icon">
            <h1>ESHTRY</h1>
          </div>
          <div className="content">
            <form>
              <div className="search">
                <input type="text" name="search" placeholder="Search Here" id="search" />
                <label htmlFor="search">
                  <i className="fa-solid fa-magnifying-glass" />
                </label>
              </div>
            </form>
            <div className="icons">
              <Link to="/login" className="loginIcon"><i className="fa-solid fa-user" />
              </Link>
              <i className="fa-regular fa-heart" />
              <i className="fa-solid fa-cart-shopping" />
            </div>
          </div>
        </nav>
        <nav className="links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/product/1">Product Details</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="categories">
        {/* Sidebar */}
        <div className="sideBar">
          <h2>Categories</h2>

          {loadingCats && <p>Loading categories...</p>}
          {error && <p className="error">Error: {error}</p>}

          <ul>
            {categories.map((cat, i) => (
              <li
                key={i}
                onClick={() => setSelectedCategory(typeof cat === "string" ? cat : cat.slug)}
              >
                {typeof cat === "string" ? cat : cat.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div className="products">
          <h2>
            {selectedCategory ? `Products in ${selectedCategory}` : "Select a category to see products"}
          </h2>

          {loadingProducts && <p>Loading products...</p>}
          {productError && <p className="error">Error: {productError}</p>}

          <div className="product-grid">
            {products.map(product => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="product-card"
              >
                <img src={product.thumbnail} alt={product.title} />
                <h4>{product.title}</h4>
                <p>${product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="footer-main">
        <div className="mainFooter">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="secFooter">
          &copy; All Rights Reserved.
        </div>
      </footer>
    </>
  );
}

export default Categories;
