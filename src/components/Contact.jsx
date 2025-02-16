import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import GlobeElevatedPolygonsCanvas from "./canvas/GlobeElevatedPolygons";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import "../index.css";
import { CONTACT_TEXT, INITIAL_FORM_STATE , navLinks} from "../constants";
import { contactStyles } from "../style";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const FormInput = ({ label, id, name, type = "text", value, onChange, error, textarea }) => {
  return (
    <div className={`${name === "firstName" || name === "lastName" ? "" : "sm:col-span-2"}`}>
      <label htmlFor={id} className={contactStyles.formLabel}>
        {label}
      </label>
      <div className="mt-2.5">
        {textarea ? (
          <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className={contactStyles.formInput}
            rows={4}
          />
        ) : (
          <input
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            className={contactStyles.formInput}
          />
        )}
        {error && <span className={contactStyles.validationError}>{error}</span>}
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
    if (!form.firstName.trim()) newErrors.firstName = CONTACT_TEXT.firstNameError;
    if (!EMAIL_REGEX.test(form.email)) newErrors.email = CONTACT_TEXT.emailError;
    if (!form.agreed) newErrors.agreed = CONTACT_TEXT.agreementError;
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
        CONTACT_TEXT.EMAIL_SERVICE_ID,
        CONTACT_TEXT.EMAIL_TEMPLATE_ID,
        {
          from_name: fullName,
          to_name: CONTACT_TEXT.EMAIL_RECIPIENT_NAME,
          from_email: form.email,
          message: combinedMessage
        },
        CONTACT_TEXT.EMAIL_PUBLIC_KEY
      )
      .then(() => {
        setForm(INITIAL_FORM_STATE);
        setConfirmation(CONTACT_TEXT.successMessage);
      })
      .catch(() => setConfirmation(CONTACT_TEXT.errorMessage))
      .finally(() => setLoading(false));
  };

  return (
    <div className={contactStyles.contactContainer}>
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className={contactStyles.backgroundGradientContainer}
      >
        <div
          className={contactStyles.backgroundGradientElement}
          style={{
            clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          }}
        />
      </div>

      {/* Contact Form */}
      <motion.div  variants={slideIn("left", "tween", 0.2, 1)}className={contactStyles.contactFormContainer}
        style={{ maxWidth: '500px' }}
      >
        <p className={styles.sectionSubText}>{CONTACT_TEXT.sectionSubText}</p>
        <h3 className={styles.sectionHeadText}>{CONTACT_TEXT.sectionHeadText}</h3>
        
        <form ref={formRef} onSubmit={handleSubmit} className={contactStyles.contactForm}>
          <div className={contactStyles.formFieldsGrid}>
            <FormInput
              label={CONTACT_TEXT.firstNameLabel}
              id="first-name"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              error={errors.firstName}
            />

            <FormInput
              label={CONTACT_TEXT.lastNameLabel}
              id="last-name"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />

            <FormInput
              label={CONTACT_TEXT.companyLabel}
              id="company"
              name="company"
              value={form.company}
              onChange={handleChange}
            />

            <FormInput
              label={CONTACT_TEXT.emailLabel}
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
            />

            <FormInput
              label={CONTACT_TEXT.phoneLabel}
              id="phone-number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />

            <FormInput
              label={CONTACT_TEXT.messageLabel}
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              textarea={true}
            />
          </div>

          <div className={contactStyles.submitButtonWrapper}>
            <button
              type="submit"
              disabled={loading}
              className={contactStyles.submitButton}
            >
              {loading ? CONTACT_TEXT.sendingButton : CONTACT_TEXT.sendButton}
            </button>
          </div>
          
          {confirmation && (
            <p className={confirmation === CONTACT_TEXT.successMessage ? contactStyles.successMessage : contactStyles.errorMessage}>
              {confirmation}
            </p>
          )}
        </form>
      </motion.div>

      {/* Globe Container */}
      <motion.div  variants={slideIn("right", "tween", 0.2, 1)} className={contactStyles.globeVisualizationContainer}>
        <GlobeElevatedPolygonsCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(ContactSales, navLinks[2].id);
