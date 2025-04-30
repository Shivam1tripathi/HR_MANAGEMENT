import linkedin from "../assets/linkedin.png";
import twitter from "../assets/Twitter_logo.png";
import insta from "../assets/insta-logo.png";
import facebook from "../assets/facebook-logo.png";
function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
      {/* Contact Form */}
      <section>
        <h1 className="text-4xl font-bold text-blue-700 text-center mb-8">
          Contact Us
        </h1>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Your Name"
            className="col-span-1 md:col-span-2 border border-gray-300 p-3 rounded focus:outline-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="col-span-1 md:col-span-2 border border-gray-300 p-3 rounded focus:outline-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="col-span-1 md:col-span-2 border border-gray-300 p-3 rounded focus:outline-blue-500 resize-none"
          ></textarea>
          <button
            type="submit"
            className="col-span-1 md:col-span-2 bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Company Info */}
      <section className="text-gray-600 flex justify-center items-center">
        <div>
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
      <section className="space-x-4 flex justify-center items-center">
        <span className="text-blue-600 font-semibold cursor-pointer">
          <img src={linkedin} alt="linkedin" width="30px" />
        </span>
        <span className="text-blue-400 font-semibold cursor-pointer">
          <img src={twitter} alt="twitter" width="30px" />
        </span>
        <span className="text-pink-600 font-semibold cursor-pointer">
          <img src={insta} alt="insta" width="40px" />
        </span>
        <span className="text-blue-800 font-semibold cursor-pointer">
          <img src={facebook} alt="facebook" width="30px" />
        </span>
      </section>
      <section className="text-center">
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
