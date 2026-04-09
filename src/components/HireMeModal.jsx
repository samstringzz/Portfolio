import { motion } from "framer-motion";
import { FiX, FiCheckCircle } from "react-icons/fi";
import { useForm, ValidationError } from "@formspree/react";

const selectOptions = [
  "Mobile App Development (iOS/Android)",
  "Web Application Development",
  "Full Stack Development",
  "Frontend Development (React/Next.js)",
  "Backend Development (Node.js/PHP)",
  "API Integration & Development",
  "UI/UX Design",
  "E-commerce Solutions",
  "Database Design & Optimization",
  "Technical Consultation",
  "Other"
];

const HireMeModal = ({ onClose }) => {
  const [state, handleSubmit] = useForm("meoqqwaq");

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[999]"
        onClick={onClose}
        style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
      />

      {/* Modal */}
      <div
        className="fixed inset-0 z-[1000] overflow-y-auto"
        style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <div className="flex min-h-full items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {state.succeeded ? "Message sent" : "What project are you looking for?"}
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                aria-label="Close"
              >
                <FiX className="text-3xl" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              {state.succeeded ? (
                <div className="flex flex-col items-center gap-4 py-8 text-center">
                  <FiCheckCircle className="text-5xl text-emerald-500" />
                  <p className="text-lg font-medium text-gray-800 dark:text-gray-100">
                    Thanks for reaching out! I'll get back to you soon.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-2 px-6 py-3 rounded-lg border border-stone-400 dark:border-stone-500 text-stone-800 dark:text-stone-100 hover:border-stone-700 transition-all duration-200"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      aria-label="Name"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm mt-1" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      aria-label="Email"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Project Type
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all cursor-pointer"
                      id="subject"
                      name="subject"
                      required
                      aria-label="Project Category"
                    >
                      {selectOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Project Description
                    </label>
                    <textarea
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                      id="message"
                      name="message"
                      rows="5"
                      aria-label="Details"
                      placeholder="Tell me about your project..."
                      required
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="flex-1 px-6 py-3 bg-stone-900 hover:bg-emerald-700 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-emerald-300 text-white font-semibold rounded-lg transition-all duration-200 disabled:opacity-60"
                      aria-label="Submit Request"
                    >
                      {state.submitting ? "Sending..." : "Send Request"}
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200"
                      aria-label="Close Modal"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HireMeModal;
