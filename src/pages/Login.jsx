import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      setLoading(true)
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false)
      navigate("/")
    } catch (err) {
      setErr(true);
    }
    setLoading(false)
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat Hub</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          {loading ? <span>loading...</span> : <button>Sign in</button>}
          {err && <span>Something went wrong !</span>}
        </form>
        {!loading && <p>You don't have an account? <Link to="/register">Register</Link></p>}
      </div>
    </div>
  );
};

export default Login;