import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductDetails() {
    const { id } = useParams(); // get the id from URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching product:", err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!product) return <p>Product not found.</p>;

    return (
        <>
            <header>
                <nav>
                    <div className="icon">
                        <h1>ESHTRY</h1>
                    </div>
                    <div className="content">
                        <form action="">
                            <div className="search">
                                <input type="text" name="search" placeholder="Search Here" />
                                <label htmlFor="search">
                                    <a href="#">
                                        <i className="fa-solid fa-magnifying-glass" />
                                    </a>
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
            <main className="product-details container">
                <h1>{product.title}</h1>
                <img src={product.thumbnail} alt={product.title} style={{ maxWidth: "300px" }} />
                <p>{product.description}</p>
                <p><strong>Price:</strong> ${product.price}</p>
                <p><strong>Brand:</strong> {product.brand}</p>
                <p><strong>Category:</strong> {product.category}</p>
            </main>
            <footer>
                <div className="footer-main">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-12 mainFooter">
                                <Link to="/privacy">Privacy</Link>
                                <Link to="/terms">Terms</Link>
                                <Link to="/contact">Contact Us</Link>
                            </div>
                            <div className="col-12 secFooter">
                                &copy; All Rights Reserved .
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    );
}

export default ProductDetails;
