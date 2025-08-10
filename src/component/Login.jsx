import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import photo from '../assets/login3.svg';

// Simple helper to set cookie (expires in 1 day)
function setCookie(name, value, days = 1) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const usersRes = await fetch(`https://dummyjson.com/users/search?q=${email}`);
      const usersData = await usersRes.json();

      const user = usersData.users.find(u => u.email.toLowerCase() === email.toLowerCase());

      if (!user) {
        alert("No user found with this email.");
        setLoading(false);
        return;
      }

      const loginRes = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: user.username,
          password,
          expiresInMins: 60
        })
      });

      const loginData = await loginRes.json();

      if (loginRes.ok) {
        // Store accessToken in cookie
        setCookie('accessToken', loginData.accessToken, 1);

        console.log("Login success:", loginData);

        // Redirect to home page
        navigate('/');
      } else {
        alert(`Login failed: ${loginData.message || "Invalid credentials"}`);
      }
    } catch (error) {
      alert("Error connecting to server.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rooot">
      <div className="container">
        <div className="row" style={{ margin: 50 }}>
          <div className="col-6">
            <div className="image">
              <img src={photo} alt="flower image" id="photo" />
            </div>
          </div>

          <div className="col-6 login">
            <h1 className="head">Welcome Back 👋</h1>
            <p className="para">
              Log in to track your orders, save your favorite products, and enjoy a faster checkout experience. We’re here to make your shopping simple, secure, and tailored to you.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="email">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="email" id="lable">Your Email</label>
              </div>
              <div className="pass">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="password" id="lable">Password</label>
              </div>
              <a href="/forgot-password" className="forgot-link">Forgot password?</a>
              <button type="submit" className="btn login_btn" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
            <p className="copyright">© 2025 Mazen Esmail. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
