// Contact.jsx
import React, { useState, useRef, useEffect, useCallback, memo } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import GlobeElevatedPolygonsCanvas from "../../components/canvas/GlobeElevatedPolygons";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import "../../index.css";
import { CONTACT_TEXT, INITIAL_FORM_STATE, navLinks } from "../../constants";
import { contactStyles, defaultSectionStyles } from "../../style";
import { isMobile } from "../../utils/screensize";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const FormInput = memo(
  ({ label, id, name, type = "text", value, onChange, error, textarea, placeholder, required = false }) => {
    return (
      <div className={`${name === "firstName" || name === "lastName" ? "" : "sm:col-span-2"}`}>
        <label htmlFor={id} className={contactStyles.formLabel}>
          {label} {required && <span className="text-red-500">*</span>}
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
              placeholder={placeholder}
              required={required}
            />
          ) : (
            <input
              id={id}
              name={name}
              type={type}
              value={value}
              onChange={onChange}
              className={contactStyles.formInput}
              placeholder={placeholder}
              required={required}
            />
          )}
          {error && <span className={contactStyles.validationError}>{error}</span>}
        </div>
      </div>
    );
  }
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState(INITIAL_FORM_STATE);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [confirmation, setConfirmation] = useState("");
  const [showGlobe, setShowGlobe] = useState(!isMobile());

  useEffect(() => {
    const handleResize = () => {
      setShowGlobe(!isMobile());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = useCallback((e) => {
    const { name, type, value, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setForm((prev) => ({ ...prev, [name]: newValue }));
    
    // Clear specific field error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    
    console.log(`Field ${name} updated to: ${newValue}`);
  }, [errors]);

  const validateForm = useCallback(() => {
    const newErrors = {};
    
    // Required field validations
    if (!form.firstName.trim()) {
      newErrors.firstName = CONTACT_TEXT.firstNameError || "First name is required";
    }
    
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!EMAIL_REGEX.test(form.email)) {
      newErrors.email = CONTACT_TEXT.emailError || "Please enter a valid email address";
    }
    
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    // console.log("Form validation results:", { 
    //   form, 
    //   errors: newErrors, 
    //   isValid: Object.keys(newErrors).length === 0 
    // });
    
    return newErrors;
  }, [form]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // console.log("Form submission started", { formData: form });
      
      // Clear previous errors and confirmation messages
      setErrors({});
      setConfirmation("");
      
      const validationErrors = validateForm();
      if (Object.keys(validationErrors).length > 0) {
        console.log("Form validation failed:", validationErrors);
        setErrors(validationErrors);
        return;
      }

      setLoading(true);
      console.log("Form passed validation, sending email...");

      const fullName = `${form.firstName}${form.lastName ? ` ${form.lastName}` : ""}`;
      const combinedMessage = `Company: ${form.company || "Not provided"}\nPhone: ${form.phone || "Not provided"}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;

      // Validate EmailJS configuration
      if (!CONTACT_TEXT.EMAIL_SERVICE_ID || !CONTACT_TEXT.EMAIL_TEMPLATE_ID || !CONTACT_TEXT.EMAIL_PUBLIC_KEY) {
        console.error("EmailJS configuration missing:", {
          serviceId: !!CONTACT_TEXT.EMAIL_SERVICE_ID,
          templateId: !!CONTACT_TEXT.EMAIL_TEMPLATE_ID,
          publicKey: !!CONTACT_TEXT.EMAIL_PUBLIC_KEY
        });
        setConfirmation("Email configuration error. Please contact support.");
        setLoading(false);
        return;
      }

      // console.log("EmailJS parameters:", {
      //   serviceId: CONTACT_TEXT.EMAIL_SERVICE_ID,
      //   templateId: CONTACT_TEXT.EMAIL_TEMPLATE_ID,
      //   publicKey: CONTACT_TEXT.EMAIL_PUBLIC_KEY,
      //   messageData: {
      //     from_name: fullName,
      //     to_name: CONTACT_TEXT.EMAIL_RECIPIENT_NAME,
      //     from_email: form.email,
      //     message: combinedMessage,
      //   }
      // });

      emailjs
        .send(
          CONTACT_TEXT.EMAIL_SERVICE_ID,
          CONTACT_TEXT.EMAIL_TEMPLATE_ID,
          {
            from_name: fullName,
            to_name: CONTACT_TEXT.EMAIL_RECIPIENT_NAME || "Support Team",
            from_email: form.email,
            message: combinedMessage,
          },
          CONTACT_TEXT.EMAIL_PUBLIC_KEY
        )
        .then((response) => {
          // console.log("EmailJS success response:", response);
          setForm(INITIAL_FORM_STATE);
          setConfirmation(CONTACT_TEXT.successMessage || "Message sent successfully! We'll get back to you soon.");
        })
        .catch((error) => {
          console.error("EmailJS error:", error);
          
          let errorMessage = CONTACT_TEXT.errorMessage || "Failed to send message. Please try again.";
          
          // Provide more specific error messages based on error type
          if (error.status === 400) {
            errorMessage = "Invalid email configuration. Please contact support.";
          } else if (error.status === 403) {
            errorMessage = "Email service unavailable. Please try again later.";
          } else if (error.status === 422) {
            errorMessage = "Invalid email format. Please check your email address.";
          } else if (error.text && error.text.includes("network")) {
            errorMessage = "Network error. Please check your connection and try again.";
          }
          
          setConfirmation(errorMessage);
        })
        .finally(() => {
          // console.log("Email sending process completed");
          setLoading(false);
        });
    },
    [form, validateForm]
  );

  return (
    <div className={contactStyles.contactContainer}>
      {/* Background Gradient */}
      <div aria-hidden="true" className={contactStyles.backgroundGradientContainer}>
        <div
          className={contactStyles.backgroundGradientElement}
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* Contact Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className={contactStyles.contactFormContainer}
        style={{ maxWidth: "500px" }}
      >
        <p className={defaultSectionStyles.sectionSubText}>{CONTACT_TEXT.sectionSubText}</p>
        <h3 className={defaultSectionStyles.sectionHeadText}>{CONTACT_TEXT.sectionHeadText}</h3>
        <form ref={formRef} onSubmit={handleSubmit} className={contactStyles.contactForm}>
          <div className={contactStyles.formFieldsGrid}>
            <FormInput
              label={CONTACT_TEXT.firstNameLabel}
              id="first-name"
              name="firstName"
              placeholder={CONTACT_TEXT.firstNameLabel}
              value={form.firstName}
              onChange={handleChange}
              error={errors.firstName}
              required={true}
            />
            <FormInput
              label={CONTACT_TEXT.lastNameLabel}
              id="last-name"
              name="lastName"
              placeholder={CONTACT_TEXT.lastNameLabel}
              value={form.lastName}
              onChange={handleChange}
            />
            <FormInput
              label={CONTACT_TEXT.companyLabel}
              id="company"
              name="company"
              placeholder={CONTACT_TEXT.companyLabel}
              value={form.company}
              onChange={handleChange}
            />
            <FormInput
              label={CONTACT_TEXT.emailLabel}
              id="email"
              name="email"
              type="email"
              placeholder={CONTACT_TEXT.emailLabel}
              value={form.email}
              onChange={handleChange}
              error={errors.email}
              required={true}
            />
            <FormInput
              label={CONTACT_TEXT.phoneLabel}
              id="phone-number"
              name="phone"
              placeholder={CONTACT_TEXT.phoneLabel}
              value={form.phone}
              onChange={handleChange}
            />
            <FormInput
              label={CONTACT_TEXT.messageLabel}
              id="message"
              name="message"
              placeholder={CONTACT_TEXT.messageLabel}
              value={form.message}
              onChange={handleChange}
              error={errors.message}
              textarea={true}
              required={true}
            />
          </div>

          {/* Optional Privacy Policy Checkbox */}
          {/* <div className="mt-6 flex items-center gap-x-3">
            <input
              id="privacy-policy"
              name="agreed"
              type="checkbox"
              checked={form.agreed}
              onChange={handleChange}
              className="h-5 w-5 rounded border-gray-300 text-primary-dark focus:ring-primary-dark"
            />
            <label htmlFor="privacy-policy" className="text-sm text-primary-dark dark:text-primary-light">
              I agree to the privacy policy (optional)
            </label>
          </div> */}
          
          <div className={contactStyles.submitButtonWrapper}>
            <button type="submit" disabled={loading} className={contactStyles.submitButton}>
              {loading ? CONTACT_TEXT.sendingButton || "Sending..." : CONTACT_TEXT.sendButton || "Send Message"}
            </button>
          </div>

          {confirmation && (
            <p
              className={
                confirmation === (CONTACT_TEXT.successMessage || "Message sent successfully! We'll get back to you soon.")
                  ? contactStyles.successMessage
                  : contactStyles.errorMessage
              }
            >
              {confirmation}
            </p>
          )}
        </form>
      </motion.div>

      {/* Globe Visualization */}
      {showGlobe && (
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className={contactStyles.globeVisualizationContainer}
        >
          <GlobeElevatedPolygonsCanvas />
        </motion.div>
      )}
    </div>
  );
};

export default SectionWrapper(Contact, navLinks.SPA[2].id);
