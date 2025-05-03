import { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email";
    if (!form.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    setErrors({});

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        form
      );
      if (response.status === 201) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
      {/* Contact Form */}
      <section data-aos="fade-up">
        <h1 className="text-4xl font-bold text-blue-700 text-center mb-8">
          Contact Us
        </h1>

        {status === "success" && (
          <p className="text-green-600 text-center mb-4">
            Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-center mb-4">
            Something went wrong. Try again.
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-md"
        >
          <div className="col-span-1 md:col-span-2">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={`w-full border p-3 rounded focus:outline-blue-500 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="col-span-1 md:col-span-2">
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={`w-full border p-3 rounded focus:outline-blue-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="col-span-1 md:col-span-2">
            <textarea
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`w-full border p-3 rounded focus:outline-blue-500 resize-none ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="col-span-1 md:col-span-2 bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            {status === "loading" ? "Submitting..." : "Send Message"}
          </button>
        </form>
      </section>

      {/* Company Info */}
      <section
        data-aos="fade-right"
        className="text-gray-600 flex justify-center items-center"
      >
        <div className="text-center">
          <p>
            <strong>Address:</strong> 123 HR Street, Tech City, India
          </p>
          <p>
            <strong>Phone:</strong> +91 98765 43210
          </p>
          <p>
            <strong>Email:</strong> contact@hrcloud.com
          </p>
        </div>
      </section>

      {/* Social Media */}
      <section
        data-aos="zoom-in"
        className="space-x-4 flex justify-center items-center"
      >
        <img
          src="/assets/linkedin.png"
          className="w-8 hover:w-9 transition-all"
          alt="LinkedIn"
        />
        <img
          src="/assets/Twitter_logo.png"
          className="w-8 hover:w-9 transition-all"
          alt="Twitter"
        />
        <img
          src="/assets/Insta-Logo.png"
          className="w-10 hover:w-11 transition-all"
          alt="Instagram"
        />
        <img
          src="/assets/facebook-logo.png"
          className="w-8 hover:w-9 transition-all"
          alt="Facebook"
        />
      </section>

      {/* Embedded Map */}
      <section data-aos="fade-up" className="text-center">
        <iframe
          title="company-location"
          src="https://www.google.com/maps/embed?..."
          className="w-full h-64 rounded-lg border"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}

export default Contact;
