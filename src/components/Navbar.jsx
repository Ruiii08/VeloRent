import React, { useContext, useState } from "react";
import { BiSolidSun, BiSolidMoon, BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const NavLinks = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Bookings", link: "/booking" },
  { id: 3, name: "About", link: "#about" },
];

const Navbar = ({ theme, setTheme }) => {
  const { user, logout } = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);
  let timeoutId;

  return (
    <nav className="shadow-md bg-white dark:bg-dark dark:text-white duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div>
            <h1 className="text-4xl font-bold font-serif ml-4">VeloRent</h1>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NavLinks.map((data) => (
              <Link
                key={data.id}
                to={data.link}
                className="py-2 text-lg font-medium hover:text-primary hover:border-b-2 border-primary transition duration-300"
              >
                {data.name}
              </Link>
            ))}

            {user ? (
              <div 
              className="relative"
              onMouseEnter={() => {
                clearTimeout(timeoutId);
                setShowMenu(true);
              }}
              onMouseLeave={() => {
                timeoutId = setTimeout(() => setShowMenu(false), 300); // 👈 delay
              }}
            >
              <BiUserCircle className="text-3xl text-[#FF3D3D] cursor-pointer" />
            
              {showMenu && (
                <div className="absolute mt-2 right-[-10px] bg-white dark:bg-zinc-800 border dark:border-zinc-700 rounded-lg shadow-lg p-3 w-48 z-50 transition-all duration-200">
                  <p className="text-sm text-gray-800 dark:text-white mb-2">Hi, {user.name}</p>
                  <button
                    onClick={logout}
                    className="w-full text-left text-[#FF3D3D] dark:hover:text-white hover:text-black transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>            
            ) : (
              <Link
                to="/Signup"
                className="text-[#FF3D3D] border border-[#FF3D3D] px-4 py-1 rounded-full hover:bg-[#FF3D3D] hover:text-white transition"
              >
                Sign Up
              </Link>
            )}

            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
