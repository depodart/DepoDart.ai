import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import "../index.css";

const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
const EMAIL_RECIPIENT = import.meta.env.VITE_EMAIL_RECIPIENT;
const EMAIL_RECIPIENT_NAME = import.meta.env.VITE_EMAIL_RECIPIENT_NAME;
const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const TEXT = {
  sectionSubText: "Get in touch",
  sectionHeadText: "Contact US",
  nameLabel: "First Name",
  namePlaceholder: "Insert Your First Name here...",
  emailLabel: "Email Address", 
  emailPlaceholder: "What's your email address?",
  messageLabel: "Your Message",
  messagePlaceholder: "What you want to say...?",
  sendButton: "Send",
  sendingButton: "Sending...",
  nameError: "Name is required.",
  emailError: "Please enter a valid email address.",
  successMessage: "Thank you for your message. Our team will review and respond to your inquiry within 1-2 business days.",
  errorMessage: "Something went wrong. Please try again. :/"
};

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  message: ""
};

const InputField = ({ label, value, onChange, placeholder, name, type }) => (
  <label className="flex flex-col">
    <span className="text-white font-medium mb-4">{label}</span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
    />
  </label>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState(INITIAL_FORM_STATE);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    return EMAIL_REGEX.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setNameError("");
    setConfirmation("");

    if (!validateEmail(form.email)) {
      setEmailError(TEXT.emailError);
      return;
    }

    if (!form.name.trim()) {
      setNameError(TEXT.nameError);
      return;
    }

    setLoading(true);

    emailjs
      .send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: EMAIL_RECIPIENT_NAME,
          from_email: form.email,
          to_email: EMAIL_RECIPIENT,
          message: form.message,
        },
        EMAIL_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setConfirmation(TEXT.successMessage);
          setForm(INITIAL_FORM_STATE);
        }
      )
      .catch((error) => {
        setLoading(false);
        console.error(error);
        setConfirmation(TEXT.errorMessage);
      });
  };

  return (
    <div className={`xl:mt-12 flex justify-center xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>{TEXT.sectionSubText}</p>
        <h3 className={styles.sectionHeadText}>{TEXT.sectionHeadText}</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <InputField
            label={TEXT.nameLabel}
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder={TEXT.namePlaceholder}
            type="text"
          />
          {nameError && <span className="text-red-500">{nameError}</span>}

          <InputField
            label={TEXT.emailLabel}
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder={TEXT.emailPlaceholder}
            type="email"
          />
          {emailError && <span className="text-red-500">{emailError}</span>}

          <InputField
            label={TEXT.messageLabel}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder={TEXT.messagePlaceholder}
            type="text"
          />

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? TEXT.sendingButton : TEXT.sendButton}
          </button>
          {confirmation && <p className="text-green-500">{confirmation}</p>}
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
