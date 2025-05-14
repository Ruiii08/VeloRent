import React, { useState, useContext } from "react"; // <-- Add useContext here
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { AuthContext } from "../context/authContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  console.log("AuthContext:", setUser); // Should not be undefined

  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/Login", {
        email,
        password,
      });
      if (res.data.Status === "Success") {
        setUser(res.data.user);
        navigate("/");
      } else {
        alert(res.data);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black">
      <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-lg w-full max-w-md border border-gray-200 dark:border-zinc-800">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#FF3D3D]">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full px-4 py-2 mb-4 border rounded-lg dark:bg-zinc-800 dark:text-white dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#FF3D3D] focus:border-[#FF3D3D]"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative mb-6">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="w-full px-4 py-2 border rounded-lg dark:bg-zinc-800 dark:text-white dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#FF3D3D] focus:border-[#FF3D3D]"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <IoEyeOutline size={20} />
              ) : (
                <IoEyeOffOutline size={20} />
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 border border-[#FF3D3D] text-[#FF3D3D] bg-transparent hover:bg-[#FF3D3D] hover:text-white rounded-full font-semibold transition"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="mt-4 text-center dark:text-white">
          Don't have an account?
        </p>
        <Link
          to="/Signup"
          className="block mt-2 w-full text-center py-2 rounded-full text-[#FF3D3D] bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 border border-gray-300 dark:border-zinc-700 transition"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Login;
