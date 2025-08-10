import { Link } from "react-router-dom";
function ContactUs() {
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
                <div className="cards container">
                    <div className="row">
                        <div className="col-3 card1">
                            <div className="icon">
                                <i className="fa-solid fa-location-dot" />
                            </div>
                            <div className="content">
                                <h4>Our Address</h4>
                                <p>1842 Maple Avenue, Portland, Oregon 97204</p>
                            </div>
                        </div>
                        <div className="col-3 card2">
                            <div className="icon">
                                <i className="fa-regular fa-envelope" />
                            </div>
                            <div className="content">
                                <h4>Email Address</h4>
                                <p>info@example.com</p>
                            </div>
                        </div>
                        <div className="col-3 card3">
                            <div className="icon">
                                <i className="fa-solid fa-headset" />
                            </div>
                            <div className="content">
                                <h4>Hours of Operation</h4>
                                <div className="paragraph">
                                    <p>Sunday-Fri: 9 AM - 6 PM</p>
                                    <p>Saturday: 9 AM - 4 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container form">
                    <div className="row">
                        <div className="col-10">
                            <form action="" >
                                <h2>Get in Touch</h2>
                                <div className="row gy-3">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <div className="input-with-icon">
                                                <i className="fa-regular fa-user" />
                                                <input type="text" className="form-control" placeholder="First Name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <div className="input-with-icon">
                                                <i className="fa-regular fa-envelope" />
                                                <input type="text" className="form-control" placeholder="Email Address" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <div className="input-with-icon">
                                                <i className="fa-solid fa-align-left" />
                                                <input type="text" className="form-control" placeholder="Subject" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <div className="input-with-icon textareaDiv">
                                                <i className="fa-regular fa-message" />
                                                <textarea style={{height:180}} type="text" className="form-control" placeholder="Write Message" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <div className="button">
                                                <button type="button" className="btn">
                                                    SEND MESSAGE 
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
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

export default ContactUs;