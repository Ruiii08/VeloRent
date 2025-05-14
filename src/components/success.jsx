import React, { useEffect, useState } from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-black text-center p-6 transition-colors duration-300">
      <IoCheckmarkCircleSharp size={80} className="text-[#FF3D3D]" />
      
      <h1 className="text-3xl font-bold mt-4 text-black dark:text-white">
        Payment Successful!
      </h1>
      
      <p className="text-gray-700 dark:text-gray-300 mt-2">
        Redirecting in {formatTime(timeLeft)}
      </p>

      <button
        className="mt-6 px-6 py-2 bg-[#FF3D3D] hover:bg-[#ff2a2a] text-white font-semibold rounded-full shadow-md transition-colors duration-300"
        onClick={() => navigate("/")}
      >
        Go to Homepage Now
      </button>
    </div>
  );
};

export default PaymentSuccess;
