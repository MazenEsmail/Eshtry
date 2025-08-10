import { Link } from "react-router-dom";
function About() {
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
            <main className="ContactUs container">
                <h1>About Eshtry</h1>
                <p>Welcome to <strong>Eshtry</strong> – your go-to online shopping destination that brings convenience, quality,
                    and trust together in one place.</p>
                <h2>What We Offer</h2>
                <p>
                    At Eshtry, we offer a wide selection of carefully curated products that suit every style and need, including:
                </p>
                <ul>
                    <li>Fashion and clothing</li>
                    <li>Electronics and gadgets</li>
                    <li>Home essentials</li>
                    <li>Personal care items</li>
                    <li>And much more...</li>
                </ul>
                <h2>Why Choose Eshtry?</h2>
                <p>
                    We are committed to delivering an exceptional shopping experience:
                </p>
                <ul>
                    <li>Fast and reliable delivery across Egypt</li>
                    <li>Multiple secure payment options</li>
                    <li>Flexible return and exchange policy</li>
                    <li>Friendly and responsive customer support</li>
                    <li>Exclusive deals and discounts</li>
                </ul>
                <h2>Our Vision</h2>
                <p>
                    Our goal is to make online shopping simple, enjoyable, and accessible to everyone. Every day, we work to improve
                    our services, expand our product range, and stay ahead of your expectations.
                </p>
                <p style={{ marginTop: 30 }}>
                    Thank you for choosing <strong>Eshtry</strong> – we're here to make your shopping easier than ever.
                </p>
            </main>
            <footer>
                <div className="footer-main">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-12 mainFooter">
                                <a href="">Privacy</a>
                                <a href="">Terms</a>
                                <a href="">Contact Us</a>
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

export default About;
