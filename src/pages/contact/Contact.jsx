import React from 'react';
import ContactForm from '../spa/5_Contact';

const Contact = () => {
  return (
    <div className="min-h-screen w-full bg-primary-dark pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-light mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-primary-light/80 max-w-2xl mx-auto">
            Have questions about DepoDart? We're here to help. Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
