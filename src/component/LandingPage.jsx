import { useState, useEffect } from "react";
import chair from '../assets/chair.webp'
import glass from '../assets/glass.webp'
import hels from '../assets/hels.webp'
import summer from '../assets/summerCollection.webp'
import men from '../assets/MenWear.webp'
import kid from '../assets/kidFashion.webp'
import acc from '../assets/accessories.webp'
import { Link } from "react-router-dom";

function LandingPage() {
    const [randomProducts, setRandomProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=100")
            .then((res) => res.json())
            .then((data) => {
                const shuffled = [...data.products].sort(() => 0.5 - Math.random());
                setRandomProducts(shuffled.slice(0, 4));
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching products:", err);
                setLoading(false);
            });
    }, []);

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

            <main>
                {/* Hero Section */}
                <section className="HeroSection">
                    <div className="hero-content">
                        <h1 className="heroTitle">Discover Amazing Products</h1>
                        <p className="heroP">Explore our curated collection of premium items designed to enhance your lifestyle. From fashion to tech, find everything you need with exclusive deals and fast shipping.</p>
                        <a className="shopNow" href="">Shop Now</a>
                    </div>
                    <div className="photos">
                        <div className="chair">
                            <p>Best Seller</p>
                            <img src={chair} alt="chair" />
                            <div className="desc">
                                <h5>Leather chair with wooden design</h5>
                                <h6>$215 <span>$315</span></h6>
                            </div>
                        </div>
                        <div className='TwoDivs'>
                            <div className="glass">
                                <img src={glass} alt="glass" />
                            </div>
                            <div className="hels">
                                <img src={hels} alt="he;s" />
                            </div>
                        </div>
                        <div className="icon1">
                            <i className="fa-regular fa-heart" />
                        </div>
                        <div className="icon2">
                            <i className="fa-solid fa-cart-shopping" />
                        </div>
                        <div className="icon3">
                            <i className="fa-solid fa-magnifying-glass" />
                        </div>
                    </div>
                </section>

                {/* Categories Section */}
                <section>
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-6 summer">
                                <div className="categoryDetails">
                                    <span>Trending Now</span>
                                    <h2>New Summer Collection</h2>
                                    <p>Discover our latest arrivals designed for the modern lifestyle. Elegant, comfortable, and sustainable fashion for every occasion.</p>
                                    <a href="" className='btnExplore'>
                                        Explore Collection
                                        <i className="fa-solid fa-arrow-right" />
                                    </a>
                                </div>
                                <div className="categoryImage">
                                    <img src={summer} alt="Sammer Collection" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row gy-4">
                                    <div className="col-xl-6 men">
                                        <div className="categoryDetails">
                                            <h4>Men's Wear</h4>
                                            <p>242 products</p>
                                            <a href="" className='btnExplore'>
                                                Shop Now
                                                <i className="fa-solid fa-arrow-right" />
                                            </a>
                                        </div>
                                        <div className="categoryImage">
                                            <img src={men} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 kids">
                                        <div className="categoryDetails">
                                            <h4>Men's Wear</h4>
                                            <p>242 products</p>
                                            <a href="" className='btnExplore'>
                                                Shop Now
                                                <i className="fa-solid fa-arrow-right" />
                                            </a>
                                        </div>
                                        <div className="categoryImage">
                                            <img src={kid} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 beauty">
                                        <div className="categoryDetails">
                                            <h4>Men's Wear</h4>
                                            <p>242 products</p>
                                            <a href="" className='btnExplore'>
                                                Shop Now
                                                <i className="fa-solid fa-arrow-right" />
                                            </a>
                                        </div>
                                        <div className="categoryImage">
                                            <img src={glass} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 acc">
                                        <div className="categoryDetails">
                                            <h4>Men's Wear</h4>
                                            <p>242 products</p>
                                            <a href="" className='btnExplore'>
                                                Shop Now
                                                <i className="fa-solid fa-arrow-right" />
                                            </a>
                                        </div>
                                        <div className="categoryImage">
                                            <img src={acc} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Random Products Section */}
                <section className="random-products">
                    <div className="container">
                        <h2>Featured Products</h2>
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            <div className="row gy-4">
                                {randomProducts.map((product) => (
                                    <div className="col-md-4 col-lg-3" key={product.id}>
                                        <Link to={`/product/${product.id}`}>
                                            <div className="product-card">
                                                <img src={product.thumbnail} alt={product.title} />
                                                <h4>{product.title}</h4>
                                                <p>${product.price}</p>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
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
    )
}

export default LandingPage;
