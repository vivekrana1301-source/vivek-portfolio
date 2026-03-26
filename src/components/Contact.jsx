import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import contact from '../assets/contact.jpg'

const Contact = () => {
const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs.sendForm('service_85cener', 'template_lhm5hgd', form.current, '3CHjki3IF23KXsAe8')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      })
  };
  return (

    <section className="py-20 px-10 bg-gradient-to-r from-gray-100 to-gray-200">

      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-12">
        Contact Me
      </h2>

      <div className="flex justify-center items-center gap-20 flex-wrap">

        {/* Contact Form */}
        <div className="w-96 bg-white/80 backdrop-blur-md shadow-2xl p-8 rounded-2xl border border-gray-200">

  <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">

    <h3 className="text-xl font-semibold text-center text-gray-700">
      Send a Message
    </h3>

    <input
      name="name"
      placeholder="Your Name"
      className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
    />

    <input
      name="phone"
      placeholder="Phone Number"
      className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
    />

    <input
      name="email"
      placeholder="Email Address"
      className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
    />

    <textarea
      name="message"
      placeholder="Write your message..."
      className="border border-gray-300 p-3 rounded-lg h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
    />

    <button className="bg-blue-500 text-white p-3 rounded-lg font-medium hover:bg-blue-600 hover:scale-105 transition duration-300">
      Send Message
    </button>

  </form>

</div>
        {/* Contact Info */}
        <div className="flex flex-col items-center gap-6">

  <div className="w-56 h-56 rounded-full overflow-hidden shadow-xl border-4 border-blue-400 hover:scale-105 transition duration-300">
  <img
    src={contact}
    alt="Contact Illustration"
    className="w-full h-full object-cover"
  />
</div>

</div>

      </div>

    </section>
  );
}

export default Contact;