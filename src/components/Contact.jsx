import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import GlobeElevatedPolygonsCanvas from "./canvas/GlobeElevatedPolygons";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import "../index.css";
import { navLinks } from "../constants";

const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID || "default_service_id";
const EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID || "default_template_id";
const EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY || "default_public_key";
const EMAIL_RECIPIENT = import.meta.env.VITE_EMAIL_RECIPIENT || "default@example.com";
const EMAIL_RECIPIENT_NAME = import.meta.env.VITE_EMAIL_RECIPIENT_NAME || "Default Name";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const TEXT = {
  sectionSubText: "Get in touch",
  sectionHeadText: "Contact Sales",
  firstNameLabel: "First Name",
  lastNameLabel: "Last Name",
  companyLabel: "Company",
  emailLabel: "Email Address",
  phoneLabel: "Phone Number",
  phonePlaceholder: "123-456-7890",
  messageLabel: "Message",
  privacyLabel: "Agree to our privacy policy",
  sendButton: "Let's talk",
  sendingButton: "Sending...",
  firstNameError: "First name is required.",
  emailError: "Please enter a valid email address.",
  agreementError: "You must agree to our privacy policy.",
  successMessage: "Thank you for your message. Our team will review and respond within 1-2 business days.",
  errorMessage: "Something went wrong. Please try again."
};

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  message: "",
  agreed: false
};

const FormInput = ({ label, id, name, type = "text", value, onChange, error, textarea }) => {
  const inputClasses = "block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400";
  
  return (
    <div className={`${name === "firstName" || name === "lastName" ? "" : "sm:col-span-2"}`}>
      <label htmlFor={id} className="block text-sm font-semibold text-white">
        {label}
      </label>
      <div className="mt-2.5">
        {textarea ? (
          <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className={inputClasses}
            rows={4}
          />
        ) : (
          <input
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            className={inputClasses}
          />
        )}
        {error && <span className="text-red-500 text-sm">{error}</span>}
      </div>
    </div>
  );
};

const ContactSales = () => {
  const formRef = useRef();
  const [form, setForm] = useState(INITIAL_FORM_STATE);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [confirmation, setConfirmation] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = TEXT.firstNameError;
    if (!EMAIL_REGEX.test(form.email)) newErrors.email = TEXT.emailError;
    if (!form.agreed) newErrors.agreed = TEXT.agreementError;
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    const fullName = `${form.firstName}${form.lastName ? ` ${form.lastName}` : ''}`;
    const combinedMessage = `Company: ${form.company}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`;

    emailjs
      .send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        {
          from_name: fullName,
          to_name: EMAIL_RECIPIENT_NAME,
          from_email: form.email,
          message: combinedMessage
        },
        EMAIL_PUBLIC_KEY
      )
      .then(() => {
        setForm(INITIAL_FORM_STATE);
        setConfirmation(TEXT.successMessage);
      })
      .catch(() => setConfirmation(TEXT.errorMessage))
      .finally(() => setLoading(false));
  };

  return (
    <div className="relative xl:mt-12 flex flex-col-reverse md:flex-row gap-10 overflow-hidden">
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          className="relative left-1/2 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-400 to-purple-400 opacity-30 sm:w-[72.1875rem]"
          style={{
            clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          }}
        />
      </div>

      {/* Contact Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-1 bg-black-100 p-8 rounded-2xl relative z-10"
        style={{ maxWidth: '500px' }}
      >
        <p className={styles.sectionSubText}>{TEXT.sectionSubText}</p>
        <h3 className={styles.sectionHeadText}>{TEXT.sectionHeadText}</h3>
        
        <form ref={formRef} onSubmit={handleSubmit} className="mx-auto mt-12 max-w-4xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <FormInput
              label={TEXT.firstNameLabel}
              id="first-name"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              error={errors.firstName}
            />

            <FormInput
              label={TEXT.lastNameLabel}
              id="last-name"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />

            <FormInput
              label={TEXT.companyLabel}
              id="company"
              name="company"
              value={form.company}
              onChange={handleChange}
            />

            <FormInput
              label={TEXT.emailLabel}
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
            />

            <FormInput
              label={TEXT.phoneLabel}
              id="phone-number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />

            <FormInput
              label={TEXT.messageLabel}
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              textarea={true}
            />
          </div>

          <div className="mt-10">
            <button
              type="submit"
              disabled={loading}
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 disabled:opacity-50"
            >
              {loading ? TEXT.sendingButton : TEXT.sendButton}
            </button>
          </div>
          
          {confirmation && (
            <p className={`mt-4 text-center ${confirmation === TEXT.successMessage ? 'text-green-500' : 'text-red-500'}`}>
              {confirmation}
            </p>
          )}
        </form>
      </motion.div>

      {/* Globe Container */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="absolute top-0 right-[-7rem] -translate-y-1/2 z-0"
      >
        <GlobeElevatedPolygonsCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(ContactSales, navLinks[2].id);
