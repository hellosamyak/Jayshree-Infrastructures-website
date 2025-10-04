import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Hammer,
  Send,
  Building2,
  Phone,
  Mail,
  Wallet,
  Pencil,
  UserCheck,
  X, // For the close button on the modal
  CheckCircle, // For success message
  AlertTriangle, // For error message
} from "lucide-react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// Framer Motion variants defined outside the component for stability
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

// InputField Component defined outside the main component (receives all data via props)
const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  icon: Icon,
  required,
  children,
  formData,
  handleChange,
  ...rest // These props are now explicitly received
}) => (
  <motion.div
    variants={itemVariants}
    // Mobile-First: Default is full width (w-full), then half width on large screens (lg:w-1/2)
    className="mb-6 w-full lg:w-1/2 flex-grow min-w-[280px] px-3"
  >
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {Icon && <Icon className="inline h-4 w-4 mr-2 text-yellow-600" />}
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {children ? (
      // Render custom children (like <select>)
      children
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        // Input value is controlled by component state passed via props
        value={formData[name] || ""}
        placeholder={placeholder}
        // The critical onChange handler
        onChange={handleChange}
        required={required}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-yellow-500 focus:border-yellow-500 transition duration-200"
        {...rest}
      />
    )}
  </motion.div>
);

const ProjectInquiryForm = () => {
  const [formData, setFormData] = useState({
    user_type: "individual", // Default to individual
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', or null
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleChange = (e) => {
    // Correctly updates the state key corresponding to the input's 'name'
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);
    setSubmissionMessage("");

    // 1. Gather and format data
    const name = formData.full_name || "N/A";
    const contactType =
      formData.user_type === "company"
        ? `Company (${formData.company || "N/A"})`
        : "Individual";
    const phone = formData.phone || "N/A";
    const email = formData.email || "N/A";
    const project = formData.project_type || "N/A";
    const budget = formData.budget_range || "N/A";
    const description =
      formData.project_description || "No description provided.";

    const message =
      `*NEW JAYSHREE PROJECT INQUIRY*\n` +
      `\n--- Client Details ---\n` +
      `Name: ${name}\n` +
      `Contact Type: ${contactType}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email}\n` +
      `\n--- Project Scope ---\n` +
      `Category: ${project}\n` +
      `Budget: ${budget}\n` +
      `Description: ${description}`;

    // 2. Define WhatsApp Recipient (Replace with JAYSHREE's actual 10-digit number + country code '91')
    // Note: The number should be in international format without '+' or leading zeros.
    const whatsappNumber = "917047777734";

    // 3. Encode the message and construct the link
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // 4. Redirect and set UI status
    try {
      window.open(whatsappLink, "_blank");

      // Use a short delay for UX before showing success
      setTimeout(() => {
        setSubmissionStatus("success");
        setSubmissionMessage(
          "You will be redirected to WhatsApp! Your inquiry summary is ready to send."
        );
        setIsSubmitting(false);
        // Optionally clear the form here: setFormData({ user_type: "individual" });
      }, 500);
    } catch (error) {
      console.error("Error redirecting to WhatsApp:", error);
      setSubmissionStatus("error");
      setSubmissionMessage(
        "Could not open WhatsApp. Please check your browser settings or contact us via email."
      );
      setIsSubmitting(false);
    }
  };

  // Framer Motion variants (only container variants remain inside if needed for scope)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 50, scale: 0.8 },
  };

  const FeedbackModal = () => (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-start justify-center p-4 z-50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSubmissionStatus(null)}
    >
      <motion.div
        className={`mt-20 p-6 rounded-xl shadow-2xl max-w-sm w-full relative ${
          submissionStatus === "success"
            ? "bg-white border-t-4 border-emerald-500"
            : "bg-white border-t-4 border-red-500"
        }`}
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setSubmissionStatus(null)}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
        >
          <X size={20} />
        </button>
        <div className="flex items-center space-x-4">
          {submissionStatus === "success" ? (
            <CheckCircle className="h-8 w-8 text-emerald-500" />
          ) : (
            <AlertTriangle className="h-8 w-8 text-red-500" />
          )}
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              {submissionStatus === "success"
                ? "Redirecting to Chat..."
                : "Submission Error"}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{submissionMessage}</p>
          </div>
        </div>
        <button
          onClick={() => setSubmissionStatus(null)}
          className="mt-4 w-full py-2 bg-gray-100 rounded-lg text-gray-700 font-medium hover:bg-gray-200 transition"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );

  return (
    // LAYOUT FIX: pt-16 (padding-top 4rem) pushes content below a fixed navbar on all screen sizes.
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 pt-16 sm:pt-16">
      <AnimatePresence>{submissionStatus && <FeedbackModal />}</AnimatePresence>

      <motion.div
        className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-2xl"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            Initiate Your{" "}
            <span className="bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
              Project
            </span>
          </h1>
          <p className="text-lg text-gray-600">
            Let's build your vision. Our team will connect with you shortly.
          </p>
        </header>

        <form onSubmit={handleSubmit}>
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* SECTION 1: Contact Information */}
            <fieldset className="border border-gray-200 p-4 pt-6 sm:p-6 rounded-xl">
              <legend className="px-3 text-xl font-semibold text-gray-900 flex items-center">
                <User className="h-5 w-5 mr-2 text-yellow-600" /> Contact
                Information
              </legend>

              {/* Flex container for 2-column layout on large screens, stacks on mobile */}
              <div className="flex flex-wrap -mx-3">
                <InputField
                  label="Your Full Name"
                  name="full_name"
                  placeholder="Ravi Ashwin"
                  icon={User}
                  required
                  formData={formData} // Pass props explicitly
                  handleChange={handleChange} // Pass props explicitly
                />
                <InputField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  icon={Mail}
                  required
                  formData={formData} // Pass props explicitly
                  handleChange={handleChange} // Pass props explicitly
                />
                <InputField
                  label="Phone Number"
                  name="phone"
                  type="tel" // Use type="tel" for better mobile input experience
                  placeholder="e.g., 98765 43210"
                  icon={Phone}
                  // Input validation for 10 digits starting with 6, 7, 8, or 9
                  pattern="[6-9]\d{9}"
                  title="Please enter a valid 10-digit Indian mobile number (e.g., 9876543210)"
                  formData={formData} // Pass props explicitly
                  handleChange={handleChange} // Pass props explicitly
                />

                {/* Individual or Company Selector */}
                <motion.div
                  variants={itemVariants}
                  className="mb-6 w-full lg:w-1/2 flex-grow min-w-[280px] px-3"
                >
                  <label
                    htmlFor="user_type"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    <UserCheck className="inline h-4 w-4 mr-2 text-yellow-600" />{" "}
                    I am contacting as a...{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="user_type"
                    name="user_type"
                    value={formData.user_type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-yellow-500 focus:border-yellow-500 transition duration-200"
                    required
                  >
                    <option value="individual">Individual</option>
                    <option value="company">Company / Government Entity</option>
                  </select>
                </motion.div>

                {/* Conditional Field: Company/Organization Name */}
                {formData.user_type === "company" && (
                  <InputField
                    label="Company/Organization Name"
                    name="company"
                    placeholder="ABC Development Ltd."
                    icon={Building2}
                    required={formData.user_type === "company"}
                    formData={formData} // Pass props explicitly
                    handleChange={handleChange} // Pass props explicitly
                  />
                )}
              </div>
            </fieldset>

            {/* SECTION 2: Project Requirements */}
            <fieldset className="border border-gray-200 p-4 pt-6 sm:p-6 rounded-xl">
              <legend className="px-3 text-xl font-semibold text-gray-900 flex items-center">
                <Hammer className="h-5 w-5 mr-2 text-yellow-600" /> Project
                Requirements
              </legend>

              <div className="flex flex-wrap -mx-3">
                {/* Project Type - Full width on all screen sizes */}
                <InputField
                  label="Project Type"
                  name="project_type"
                  icon={Hammer}
                  required
                  className="!w-full"
                  formData={formData} // Pass props explicitly
                  handleChange={handleChange} // Pass props explicitly
                >
                  <select
                    id="project_type"
                    name="project_type"
                    value={formData.project_type || ""}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-yellow-500 focus:border-yellow-500 transition duration-200"
                    required
                  >
                    <option value="" disabled>
                      Select an infrastructure category
                    </option>
                    <option value="roads_highways">Roads & Highways</option>
                    <option value="interior_design">Interior Design</option>
                    <option value="urban_development">
                      Urban/Housing Development
                    </option>
                    <option value="bridges_tunnels">Bridges & Tunnels</option>
                    <option value="other">Other/Consultation</option>
                  </select>
                </InputField>

                {/* Budget Range - Full width on all screen sizes */}
                <InputField
                  label="Estimated Budget Range (in INR)"
                  name="budget_range"
                  icon={Wallet}
                  required
                  className="!w-full"
                  formData={formData} // Pass props explicitly
                  handleChange={handleChange} // Pass props explicitly
                >
                  <select
                    id="budget"
                    name="budget_range"
                    value={formData.budget_range || ""}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-yellow-500 focus:border-yellow-500 transition duration-200"
                    required
                  >
                    <option value="" disabled>
                      Select a range
                    </option>
                    <option value="5L-50L">₹5 Lakh - ₹50 Lakh</option>
                    <option value="50L-1CR">₹50 Lakh - ₹1 Crore</option>
                    <option value="1CR-10CR">₹1 Crore - ₹10 Crore</option>
                    <option value="10CR-50CR">₹10 Crore - ₹50 Crore</option>
                    <option value="50CR+">Above ₹50 Crore</option>
                  </select>
                </InputField>
              </div>

              {/* Full-width Textarea */}
              <motion.div variants={itemVariants} className="w-full px-3 mb-6">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  <Pencil className="inline h-4 w-4 mr-2 text-yellow-600" />{" "}
                  Project Description (Scope of Work){" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="project_description"
                  rows="4"
                  placeholder="Please briefly describe the location, scale, and main objectives of the project (e.g., construction of a 20km 4-lane highway, or a 50-unit housing complex). Minimum 50 characters."
                  value={formData.project_description || ""}
                  onChange={handleChange}
                  required
                  minLength="50"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-yellow-500 focus:border-yellow-500 transition duration-200"
                ></textarea>
              </motion.div>
            </fieldset>

            {/* Submit Button with Framer Motion and WhatsApp Branding */}
            <motion.button
              type="submit"
              // OPTIMIZATION APPLIED: Reduced size on mobile (py-3 text-lg) and scaled up on medium screens (md:py-4 md:text-xl)
              className="flex items-center justify-center w-full px-6 py-3 text-lg bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed 
              md:py-4 md:text-xl hover:shadow-emerald-500/50"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 20px rgba(16, 185, 129, 0.4)", // Custom shadow for emerald
              }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending Inquiry...
                </>
              ) : (
                <>
                  {/* Render the Material UI Icon component */}
                  <WhatsAppIcon className="h-6 w-6 mr-3 fill-white" />
                  Send to WhatsApp
                </>
              )}
            </motion.button>

            <p className="text-center text-sm text-gray-500 mt-4">
              By submitting, you agree to our{" "}
              <a
                href="#"
                className="text-yellow-600 hover:text-yellow-700 hover:underline"
              >
                Privacy Policy
              </a>
              .
            </p>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default ProjectInquiryForm;
