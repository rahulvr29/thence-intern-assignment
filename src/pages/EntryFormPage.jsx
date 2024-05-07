import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import Logo from "../assets/logo.png";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import Frame from "../assets/Frame.png";

const EntryFormPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else {
      setEmail(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() && !name.trim()) {
      setError("Please enter both fields.");
    } else if (!validateEmail(email)) {
      setError("Enter a valid email address.");
    } else {
      setError("");
      // Redirect to new page
      navigate('/form-success'); // Replace '/new-page' with the path of your new page
      // After 5 seconds, redirect back to the home page
    setTimeout(() => {
      navigate('/');
    }, 5000);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  return (
    <>
      <div className="p-5 pt-9">
        <div className="px-10 flex items-center justify-between">
          <div>
            <img src={Logo} alt="Logo" />
          </div>
          <Link to="/">
            <div className="text-2xl border border-[#CACACA] rounded-full font-normal p-2 cursor-pointer">
              <IoClose />
            </div>
          </Link>
        </div>
        <div className="py-10 flex flex-col items-center gap-10">
          <div>
            <p className="font-coveredByYourGrace font-normal text-center text-4xl text-[#2DA950]">
              Registration Form
            </p>
            <h1 className="font-manrope text-center font-normal text-5xl">
              Start your success <br /> Journey here!
            </h1>
          </div>
          <div className="w-[30%]">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={name}
                placeholder="Enter your name"
                onChange={handleChange}
                className="bg-[#EFEFEF] text-black p-5 rounded-full focus:bg-[#F5F8FF]"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="bg-[#EFEFEF] text-black p-5 rounded-full focus:bg-[#F5F8FF]"
                value={email}
                onChange={handleChange}
              />
              {error && (
                <div className="flex gap-3 ml-5" style={{ color: "red" }}>
                  <img className="w-6" src={Frame} alt="Frame" />
                  {error}
                </div>
              )}
              <button
                type="submit"
                className="bg-[#C9C9C9] text-white p-5 rounded-full hover:bg-black hover:text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EntryFormPage;
