import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import contact from '../assets/contact.jpg';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const message = formData.get("message");

    // ✅ Validation
    if (!name || !phone || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    // ✅ Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email");
      return;
    }

    // ✅ Send Email
    emailjs.sendForm(
      'service_85cener',
      'template_lhm5hgd',
      form.current,
      '3CHjki3IF23KXsAe8'
    )
    .then((result) => {
      alert("Message sent successfully!");
      form.current.reset();
    })
    .catch((error) => {
      alert("Failed to send message");
      console.log(error.text);
    });
  };

  return (
    <section className="bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-20 sm:px-6">
      <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
        Contact Me
      </h2>

      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-10 lg:flex-row lg:items-center">
        <div className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-2xl backdrop-blur-md sm:p-8">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">

            <h3 className="text-xl font-semibold text-center text-gray-700">
              Send a Message
            </h3>

            <input
              name="name"
              placeholder="Your Name"
              required
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />

            <input
              name="phone"
              placeholder="Phone Number"
              required
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />

            <textarea
              name="message"
              placeholder="Write your message..."
              required
              className="border border-gray-300 p-3 rounded-lg h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />

            <button className="rounded-lg bg-blue-500 p-3 font-medium text-white transition duration-300 hover:scale-[1.01] hover:bg-blue-600">
              Send Message
            </button>
          </form>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="h-52 w-52 overflow-hidden rounded-full border-4 border-blue-400 shadow-xl transition duration-300 hover:scale-105 sm:h-56 sm:w-56">
            <img src={contact} alt="Contact Illustration" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;