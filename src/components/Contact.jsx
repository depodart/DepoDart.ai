import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Switch } from "@headlessui/react";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import "../index.css";
import { navLinks } from "../constants";

// Environment variables (with fallbacks)
const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID || "default_service_id";
const EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID || "default_template_id";
const EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY || "default_public_key";
const EMAIL_RECIPIENT = import.meta.env.VITE_EMAIL_RECIPIENT || "default@example.com";
const EMAIL_RECIPIENT_NAME = import.meta.env.VITE_EMAIL_RECIPIENT_NAME || "Default Name";

// Improved email regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const TEXT = {
  sectionSubText: "Get in touch",
  sectionHeadText: "Contact Sales",
  firstNameLabel: "First Name",
  firstNamePlaceholder: "",
  lastNameLabel: "Last Name",
  lastNamePlaceholder: "",
  companyLabel: "Company",
  companyPlaceholder: "",
  emailLabel: "Email Address",
  emailPlaceholder: "",
  phoneLabel: "Phone Number",
  phonePlaceholder: "123-456-7890",
  messageLabel: "Message",
  messagePlaceholder: "",
  privacyLabel: "Agree to our privacy policy",
  sendButton: "Let's talk",
  sendingButton: "Sending...",
  firstNameError: "First name is required.",
  emailError: "Please enter a valid email address.",
  agreementError: "You must agree to our privacy policy.",
  successMessage:
    "Thank you for your message. Our team will review and respond within 1-2 business days.",
  errorMessage: "Something went wrong. Please try again. :/",
};

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  message: "",
  agreed: false,
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

  const handleSwitchChange = (value) => {
    setForm((prev) => ({ ...prev, agreed: value }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!form.firstName.trim()) {
      newErrors.firstName = TEXT.firstNameError;
    }
    if (!EMAIL_REGEX.test(form.email)) {
      newErrors.email = TEXT.emailError;
    }
    if (!form.agreed) {
      newErrors.agreed = TEXT.agreementError;
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    setConfirmation("");

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    // Combine first name and last name
    const fullName = form.firstName + (form.lastName ? " " + form.lastName : "");

    // Create a combined message with additional details
    const combinedMessage = `Company: ${form.company}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`;

    emailjs
      .send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        {
          from_name: fullName,
          to_name: EMAIL_RECIPIENT_NAME,
          from_email: form.email,
          message: combinedMessage,
        },
        EMAIL_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setConfirmation(TEXT.successMessage);
        setForm(INITIAL_FORM_STATE);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setConfirmation(TEXT.errorMessage);
      });
  };

  return (
    <div className="xl:mt-12 flex justify-center xl:flex-row flex-col-reverse gap-10 overflow-hidden relative">
      {/* Background gradient (from the second snippet) */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-400 to-purple-400 opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>

      {/* Left: Contact form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>{TEXT.sectionSubText}</p>
        <h3 className={styles.sectionHeadText}>{TEXT.sectionHeadText}</h3>
        <form ref={formRef} onSubmit={handleSubmit} className="mx-auto mt-12 max-w-xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {/* First Name */}
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold text-white">
                {TEXT.firstNameLabel}
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="firstName"
                  type="text"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder={TEXT.firstNamePlaceholder}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400"
                />
                {errors.firstName && (
                  <span className="text-red-500 text-sm">{errors.firstName}</span>
                )}
              </div>
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold text-white">
                {TEXT.lastNameLabel}
              </label>
              <div className="mt-2.5">
                <input
                  id="last-name"
                  name="lastName"
                  type="text"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder={TEXT.lastNamePlaceholder}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Company */}
            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-sm font-semibold text-white">
                {TEXT.companyLabel}
              </label>
              <div className="mt-2.5">
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange}
                  placeholder={TEXT.companyPlaceholder}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Email */}
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold text-white">
                {TEXT.emailLabel}
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={TEXT.emailPlaceholder}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400"
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
              </div>
            </div>

            {/* Phone Number */}
            <div className="sm:col-span-2">
              <label htmlFor="phone-number" className="block text-sm font-semibold text-white">
                {TEXT.phoneLabel}
              </label>
              <div className="mt-2.5">
                <input
                  id="phone-number"
                  name="phone"
                  type="text"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder={TEXT.phonePlaceholder}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold text-white">
                {TEXT.messageLabel}
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder={TEXT.messagePlaceholder}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* //? Privacy Policy Switch */}
            {/* <div className="sm:col-span-2 flex items-center gap-x-4">
              <Switch
                checked={form.agreed}
                onChange={handleSwitchChange}
                className={`${
                  form.agreed ? "bg-indigo-600" : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  className={`${
                    form.agreed ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
              <span className="text-sm text-white">
                {TEXT.privacyLabel}
                {errors.agreed && (
                  <span className="text-red-500 ml-2 text-xs">{errors.agreed}</span>
                )}
              </span>
            </div> */}
          </div>

          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              {loading ? TEXT.sendingButton : TEXT.sendButton}
            </button>
          </div>
          {confirmation && <p className="mt-4 text-center text-green-500">{confirmation}</p>}
        </form>
      </motion.div>

      {/* Right: Earth Canvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(ContactSales, navLinks[2].id);
