"use client";

import styles from "./page.module.css";
import Image from "next/image.js";
import { useState } from "react";
import { sendContactForm } from "../lib/api/route.js";

const initValues = {
  name: "",
  lName: "",
  email: "",
  bName: "",
  subject: "",
  message: "",
};

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
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.topTitle}>Now booking for September 2023</h1>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className={styles.inputWrapper}>
        <label className={styles.label}>First Name</label>
        <input
          className={styles.formInput}
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

      <div className={styles.inputWrapper}>
        <label className={styles.label}>Last Name</label>
        <input
          className={styles.formInput}
          type='text'
          name='lName'
          style={{
            borderColor: touched.name && !values.lName ? "red" : undefined,
          }}
          value={values.lName}
          onChange={handleChange}
          onBlur={onBlur}
        />
        {touched.name && !values.lName && (
          <p style={{ color: "red" }}>Required</p>
        )}
      </div>

      <div className={styles.inputWrapper}>
        <label className={styles.label}>Email</label>
        <input
          className={styles.formInput}
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

      <div className={styles.inputWrapper}>
        <label className={styles.label}>Your Business Name</label>
        <input
          className={styles.formInput}
          type='text'
          name='bName'
          style={{
            borderColor: touched.name && !values.bName ? "red" : undefined,
          }}
          value={values.bName}
          onChange={handleChange}
          onBlur={onBlur}
        />
        {touched.name && !values.bName && (
          <p style={{ color: "red" }}>Required</p>
        )}
      </div>

      <div className={styles.inputWrapper}>
        <label className={styles.label}>Subject</label>
        <input
          className={styles.formInput}
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

      <div className={styles.inputWrapper}>
        <label className={styles.label}>Message</label>
        <textarea
          className={styles.formTextArea}
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
        className={styles.formButton}
        disabled={
          !values.name || !values.email || !values.subject || !values.message
        }
        onClick={onSubmit}
      >
        {isLoading ? "Loading..." : "Submit    →"}
      </button>
    </div>
  );
}
