import { Link } from "react-router-dom";

function Terms() {
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
            <main id="TermsMain">
                <h2>Introduction</h2>
                <p>Welcome to the Employee Management System (EMS). By accessing or using this system, you agree to comply with the following Terms and Conditions. Please read them carefully.</p>
                <h2>1. User Responsibilities</h2>
                <ol>
                    <li>You agree to provide accurate and up-to-date information when using the EMS.</li>
                    <li>It is your responsibility to maintain the confidentiality of your login credentials.</li>
                    <li>You agree not to share or distribute your access to the system without authorization.</li>
                </ol>
                <h2>2. System Usage</h2>
                <ol>
                    <li>The EMS is intended for use by authorized employees only.</li>
                    <li>You agree to use the system only for its intended purpose, which is to manage employee data, records, and related activities.</li>
                    <li>Any misuse, including but not limited to altering or deleting unauthorized data, is strictly prohibited.</li>
                </ol>
                <h2>3. Privacy and Security</h2>
                <ol>
                    <li>We take your privacy seriously and are committed to protecting your personal information in accordance with our privacy policy.</li>
                    <li>By using the EMS, you consent to the collection and use of your data for administrative purposes as outlined in our privacy policy.</li>
                    <li>We implement various security measures to protect user data, but cannot guarantee absolute security.</li>
                </ol>
                <h2>4. Termination of Access</h2>
                <ol>
                    <li>Access to the EMS may be terminated if you violate any of these terms or if your employment status changes.</li>
                    <li>We reserve the right to suspend or revoke access to the system at our discretion, without prior notice, in cases of security threats or policy violations.</li>
                </ol>
                <h2>5. Liability</h2>
                <ol>
                    <li>We are not liable for any damages or losses arising from the use of the EMS, including but not limited to data loss, unauthorized access, or system downtime.</li>
                    <li>By using the system, you accept full responsibility for your actions within the EMS.</li>
                </ol>
                <h2>6. Changes to Terms</h2>
                <p>We reserve the right to update or modify these Terms and Conditions at any time. Users will be notified of significant changes, and continued use of the system constitutes acceptance of the updated terms.</p>
                <h2>Contact Information</h2>
                <p>If you have any questions about these Terms and Conditions, please contact the HR department or the system administrator.</p>
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

export default Terms;
