"use client";
import React, { useState } from "react";
import Head from "next/head";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form Data Submitted:", formData);

    // try {
    //   // Optional: Send form data to an API endpoint
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });
    //   const result = await response.json();
    //   console.log('Response:', result);
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  };

  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className="relative min-h-screen bg-blue-600 overflow-hidden">
        {/* Slanted background */}
        <div className="absolute top-0 left-0 w-full h-full transform rotate-[-30deg] origin-top-left bg-blue-500"></div>
        
        <div className="relative px-8 py-12 sm:py-16 md:px-20">
          <h1 className="text-4xl font-bold text-center mb-8 text-white">
            Contact Us
          </h1>
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto  p-8shadow-lg z-10 h-full w-full  ">
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-lg font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-lg font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                rows={6}
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-white text-blue py-2 px-6 rounded-md hover:bg-blue-700 hover:text-white w-full"
              > 
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
