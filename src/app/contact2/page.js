"use client";

import { useState } from "react";
import { sendContactForm } from "../lib/api/route.js";

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

export default function Contact2() {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) => {
    console.log(`Setting ${target.name} to ${target.value}`);

    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  };

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      alert("Message sent.");
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <div>
      <h1>Contact</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        <label>Name</label>
        <input
          type='text'
          name='name'
          style={{
            borderColor: touched.name && !values.name ? "red" : undefined,
          }}
          value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
        />
        {touched.name && !values.name && (
          <p style={{ color: "red" }}>Required</p>
        )}
      </div>

      <div>
        <label>Email</label>
        <input
          type='email'
          name='email'
          style={{
            borderColor: touched.email && !values.email ? "red" : undefined,
          }}
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
        />
        {touched.email && !values.email && (
          <p style={{ color: "red" }}>Required</p>
        )}
      </div>

      <div>
        <label>Subject</label>
        <input
          type='text'
          name='subject'
          style={{
            borderColor: touched.subject && !values.subject ? "red" : undefined,
          }}
          value={values.subject}
          onChange={handleChange}
          onBlur={onBlur}
        />
        {touched.subject && !values.subject && (
          <p style={{ color: "red" }}>Required</p>
        )}
      </div>

      <div>
        <label>Message</label>
        <textarea
          type='text'
          name='message'
          rows={4}
          style={{
            borderColor: touched.message && !values.message ? "red" : undefined,
          }}
          value={values.message}
          onChange={handleChange}
          onBlur={onBlur}
        />
        {touched.message && !values.message && (
          <p style={{ color: "red" }}>Required</p>
        )}
      </div>

      <button
        disabled={
          !values.name || !values.email || !values.subject || !values.message
        }
        onClick={onSubmit}
      >
        {isLoading ? "Loading..." : "Submit"}
      </button>
    </div>
  );
}
