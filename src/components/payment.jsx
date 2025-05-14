import React, { useState, useEffect } from "react";
import { format, addDays, addWeeks } from "date-fns";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/authContext";

const basePrices = {
  standard: 150,
  premium: 200,
  deluxe: 300,
};

const securityDeposit = {
  standard: 250,
  premium: 300,
  deluxe: 500,
};

const bikeLabels = {
  standard: "VeloScoot",
  premium: "VeloBike",
  deluxe: "VeloPro",
};

const BookingPage = () => {
  const [mode, setMode] = useState("daily");
  const [pickupDate, setPickupDate] = useState("");
  const [weeks, setWeeks] = useState(1);
  const [days, setDays] = useState(1);
  const [bikeType, setBikeType] = useState("standard");
  const [dropoffDate, setDropoffDate] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!pickupDate) return;

    const basePrice = basePrices[bikeType];
    const deposit = securityDeposit[bikeType];
    const totalDays = mode === "daily" ? days : weeks * 7;
    const newDrop =
      mode === "daily"
        ? addDays(new Date(pickupDate), days)
        : addWeeks(new Date(pickupDate), weeks);

    setDropoffDate(format(newDrop, "dd-MM-yyyy"));
    setPrice(totalDays * basePrice + deposit);
  }, [pickupDate, days, weeks, bikeType, mode]);

  const handleBooking = async () => {
    if (!user || !user.name || !user.email) {
      alert("Please log in to continue with booking.");
      navigate("/Login");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/api/payment", {
        pickupDate,
        dropoffDate,
        mode,
        duration: mode === "daily" ? days : weeks,
        bikeType,
        baseAmount:
          (mode === "daily" ? days : weeks * 7) * basePrices[bikeType],
        securityDeposit: securityDeposit[bikeType],
        price,
        name: user.name,
        email: user.email,
      });

      const options = {
        key: res.data.key_id,
        amount: res.data.amount,
        currency: "INR",
        name: res.data.name,
        description: `${mode} booking from ${pickupDate} to ${dropoffDate}`,
        order_id: res.data.order_id,
        handler: function (response) {
          alert("Payment Successful!");
          navigate("/payment-success");
        },
        prefill: {
          name: res.data.name,
          email: res.data.email,
          contact: res.data.contact,
        },
        theme: {
          color: "#FF3D3D",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error Response:", error.response);
      console.error("Error Message:", error.message);
      alert("Something went wrong while booking.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-xl p-8 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-zinc-800">
        <h1 className="text-3xl font-bold mb-6 text-[#FF3D3D] text-center">
          Let's Book Our VeloRide
        </h1>

        {/* Mode Switch */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setMode("daily")}
            className={`px-4 py-2 border rounded-l-full transition font-medium ${
              mode === "daily"
                ? "bg-[#FF3D3D] text-white"
                : "border-[#FF3D3D] text-[#FF3D3D] hover:bg-[#FF3D3D] hover:text-white"
            }`}
          >
            Daily
          </button>
          <button
            onClick={() => setMode("weekly")}
            className={`px-4 py-2 border rounded-r-full transition font-medium ${
              mode === "weekly"
                ? "bg-[#FF3D3D] text-white"
                : "border-[#FF3D3D] text-[#FF3D3D] hover:bg-[#FF3D3D] hover:text-white"
            }`}
          >
            Weekly
          </button>
        </div>

        {/* Bike Selection */}
        <select
          value={bikeType}
          onChange={(e) => setBikeType(e.target.value)}
          className="w-full mb-4 border px-3 py-2 rounded-lg dark:bg-zinc-800 dark:text-white dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#FF3D3D] focus:border-[#FF3D3D]"
        >
          <option value="standard">VeloScoot</option>
          <option value="premium">VeloBike</option>
          <option value="deluxe">VeloPro</option>
        </select>

        {/* Pickup & Duration */}
        <input
          type="date"
          className="w-full mb-4 border px-3 py-2 rounded-lg dark:bg-zinc-800 dark:text-white dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#FF3D3D] focus:border-[#FF3D3D]"
          value={pickupDate}
          onChange={(e) => setPickupDate(e.target.value)}
        />
        {mode === "daily" ? (
          <input
            type="number"
            min="1"
            className="w-full mb-4 border px-3 py-2 rounded-lg dark:bg-zinc-800 dark:text-white dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#FF3D3D] focus:border-[#FF3D3D]"
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
          />
        ) : (
          <input
            type="number"
            min="1"
            className="w-full mb-4 border px-3 py-2 rounded-lg dark:bg-zinc-800 dark:text-white dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#FF3D3D] focus:border-[#FF3D3D]"
            value={weeks}
            onChange={(e) => setWeeks(Number(e.target.value))}
          />
        )}

        {/* Summary */}
        {pickupDate && (
          <div className="bg-[#FF3D3D]/10 dark:bg-[#FF3D3D]/20 p-4 rounded-lg mb-6 border border-[#FF3D3D]/30 dark:border-[#FF3D3D]/40 text-black dark:text-white">
            <p>
              <strong>Vehicle:</strong> {bikeLabels[bikeType]}
            </p>
            <p>
              <strong>Drop-off Date:</strong> {dropoffDate}
            </p>
            <p>
              <strong>Base Price per day:</strong> ₹{basePrices[bikeType]}
            </p>
            <p>
              <strong>Security Deposit:</strong> ₹{securityDeposit[bikeType]}
            </p>
            <p>
              <strong>Total Price:</strong> ₹{price}
            </p>
          </div>
        )}

        {/* Submit Button */}
        <button
          onClick={handleBooking}
          disabled={!pickupDate}
          className={`w-full py-3 rounded-full font-semibold border transition duration-200 ${
            pickupDate
              ? "border-[#FF3D3D] text-[#FF3D3D] bg-transparent hover:bg-[#FF3D3D] hover:text-white"
              : "bg-gray-300 dark:bg-zinc-700 text-gray-500 cursor-not-allowed"
          }`}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookingPage;
