import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const isValidPassword = (password) => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidPassword(password)) {
      alert(
        "Password must be at least 8 characters long, be alphanumeric and have one special character."
      );
      return;
    }
    axios
      .post("http://localhost:5000/Signup", { name, email, password })
      // eslint-disable-next-line no-unused-vars
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black">
      <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-lg w-full max-w-md border border-gray-200 dark:border-zinc-800">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#FF3D3D]">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            className="w-full px-4 py-2 mb-4 border rounded-lg dark:bg-zinc-800 dark:text-white dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#FF3D3D] focus:border-[#FF3D3D]"
            onChange={(e) => setName(e.target.value)}
          />
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
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center dark:text-white">
          Already have an account?
        </p>
        <Link
          to="/Login"
          className="block mt-2 w-full text-center py-2 rounded-full text-[#FF3D3D] bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 border border-gray-300 dark:border-zinc-700 transition"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;
