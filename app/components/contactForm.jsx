"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    if (!name || !email || !message) {
      toast.error("Please fill in all fields!");
      return;
    }

    const botToken = process.env.NEXT_PUBLIC_BOT_TOKEN;
    const telegramChatID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

  
    if (!botToken || !telegramChatID) {
      toast.error("Bot token or chat ID is missing!");
      return;
    }

    const formattedMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(formattedMessage);


    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${telegramChatID}&text=${encodedMessage}`;

    // Fetch request to send message
    try {
      const response = await fetch(telegramUrl);
      const data = await response.json();
      if (response.ok) {
        toast.success("Your message has been sent!");
      } else {
        console.error("Error from Telegram API:", data);
        toast.error("Failed to send message!");
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error("Failed to send message!");
    }


    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 rounded-md shadow-md bg-white">
      <h2 className="text-2xl text-gray-800 mb-4">Contact Me</h2>
      <div className="flex flex-col mb-4">
        <label className="text-gray-700 mb-2">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 rounded-md border border-gray-300 text-black"
          required
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-gray-700 mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 rounded-md border border-gray-300 text-black"
          required
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-gray-700 mb-2">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-2 rounded-md border border-gray-300 text-black"
          required
        />
      </div>
      <button type="submit" className="bg-[#4CAF50] text-white p-2 rounded-md hover:bg-[#45a049] transition-colors">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
