import React from 'react'

export default function Contact({formData, handleFormSubmit, handleInputChange, motion, showToast, sending}) {
  return (
    <section id="contact" className="mt-20 mb-20">
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg animate-fade-in-up">
          ✅ Your message has been sent!
        </div>
      )}
      <motion.div
        className="mt-20 max-w-xl w-full mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <h2 className="text-center mb-6 text-3xl font-bold mb-6 text-indigo-700">
          Contact Me
        </h2>
        <form
          onSubmit={handleFormSubmit}
          className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded"
            required></textarea>
          {/* <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded w-full">
            Send Message
          </button> */}
          <div className="flex justify-center">
            <button
              type="submit"
              className={`bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded align-middle ${
                sending ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
