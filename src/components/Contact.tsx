import { useState } from "react";
import { motion } from "framer-motion";
import { PhoneCall, Mail, Send } from "lucide-react";
import emailjs from "emailjs-com";
import {phoneNumber,email} from '@/data/data.jsx'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      setLoading(false);
      return;
    }


    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID ,
        import.meta.env.VITE_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_PUBLIC_ID
      );
      setStatus("Message sent successfully!");
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0215] text-white px-4 sm:px-6 md:px-10 py-10" id="contact">
      <motion.div
        className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-10 sm:gap-12 p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Side - Contact Info */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-purple-400">Let's Get In Touch</h2>
          <p className="text-gray-400 mb-6 leading-relaxed text-base sm:text-lg">
            Have a project in mind? Let's discuss opportunities and turn ideas into reality.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <PhoneCall className="text-purple-500 text-2xl sm:text-3xl" />
              <div>
                <h3 className="font-semibold text-lg sm:text-xl">Phone</h3>
                <p className="text-gray-400 text-sm sm:text-base">{phoneNumber}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <Mail className="text-purple-500 text-2xl sm:text-3xl" />
              <div>
                <h3 className="font-semibold text-lg sm:text-xl">Email</h3>
                <p className="text-gray-400 text-sm sm:text-base">{email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <motion.form
          onSubmit={sendEmail}
          className="md:w-1/2 w-full max-w-md mx-auto space-y-5 p-6 sm:p-8  rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              className="p-4 bg-gray-700 rounded-md w-full placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none transition text-sm sm:text-base"
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              required
            />
            <input
              className="p-4 bg-gray-700 rounded-md w-full placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none transition text-sm sm:text-base"
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              required
            />
          </div>
          <input
            className="w-full p-4 bg-gray-700 rounded-md placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none transition text-sm sm:text-base"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <textarea
            className="w-full p-4 bg-gray-700 rounded-md placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none transition text-sm sm:text-base"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 py-3 bg-purple-600 rounded-lg font-semibold text-base sm:text-lg hover:bg-purple-700 transition disabled:bg-gray-600"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
            <Send className="text-white" />
          </button>
          {status && <p className="text-center text-sm text-gray-300 mt-2">{status}</p>}
        </motion.form>
      </motion.div>
    </div>
  );
}
