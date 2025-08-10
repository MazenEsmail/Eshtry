import { Link } from "react-router-dom";
function Privacy() {
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
            <main id="container">
                <h2>Introduction</h2>
                <p>Welcome to the Employee Management System (EMS). This Privacy Policy outlines how we collect, use, and protect your personal information. By accessing or using EMS, you consent to the practices described in this policy.</p>
                <h2>1. Data Collection</h2>
                <ol>
                    <li>We collect personal information, such as name, contact details, and employment data, necessary for providing our services.</li>
                    <li>Data may also include usage information to enhance system functionality and user experience.</li>
                </ol>
                <h2>2. Use of Information</h2>
                <ol>
                    <li>We use your information for administrative tasks, employee management, and legal compliance.</li>
                    <li>Your data is not shared with third parties without explicit consent, except as required by law.</li>
                </ol>
                <h2>3. Data Security</h2>
                <ol>
                    <li>We implement robust security measures to safeguard your personal information.</li>
                    <li>Despite our efforts, we cannot guarantee absolute security; users are encouraged to report any security concerns promptly.</li>
                </ol>
                <h2>4. User Rights</h2>
                <ol>
                    <li>Users can request access, modification, or deletion of their personal data by contacting the HR department.</li>
                    <li>We strive to address all user rights requests in a timely manner.</li>
                </ol>
                <h2>5. Policy Updates</h2>
                <p>We reserve the right to update this Privacy Policy periodically. Significant changes will be communicated, and continued use of EMS indicates acceptance of these updates.</p>
                <h2>Contact Information</h2>
                <p>If you have any questions or concerns about this Privacy Policy, please contact the HR department or system administrator.</p>
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

export default Privacy;
