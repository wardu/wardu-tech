"use client";

import React, { useState } from "react";
import Image from "next/image";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    // Here you would generally send the data to your server, or to some sort of service like emailjs, Formspree, etc.
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
      <Image src='/gixxer.png' alt='Next.js Logo' width={200} height={160} />
    </>
  );
};

export default Contact;
