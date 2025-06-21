import { useState } from "react";
import "./Quote.scss";

const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const services = [
    { value: "", label: "Select a service" },
    { value: "roof-installation", label: "Roof Installation" },
    { value: "roof-repair", label: "Roof Repair" },
    { value: "roof-replacement", label: "Roof Replacement" },
    { value: "emergency-repair", label: "Emergency Repair" },
    { value: "other", label: "Other" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when field is changed
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    }

    if (!formData.service) {
      errors.service = "Please select a service";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Form is valid, handle submission
    // In a real application, you would send this data to a server
    console.log("Form submitted:", formData);

    // Reset form and show success message
    setFormSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      service: "",
      message: "",
    });

    // Reset success message after some time
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <section id="quote" className="quote">
      <div className="container">
        <div className="quote-wrapper">
          <div className="quote-image">
            <div className="quote-content">
              <h2>Get Your Free Roofing Quote</h2>
              <p>
                Our team of experts is ready to help with your roofing needs.
                Contact us today for a free, no-obligation estimate.
              </p>

              <div className="quote-info">
                <div className="info-item">
                  <i className="icon-phone"></i>
                  <div>
                    <h4>Call Us</h4>
                    <p>(403) 560-4600</p>
                  </div>
                </div>

                <div className="info-item">
                  <i className="icon-email"></i>
                  <div>
                    <h4>Email Us</h4>
                    <p>masterkingroofingltd@gmail.com</p>
                  </div>
                </div>

                {/* <div className="info-item">
                  <i className="icon-location"></i>
                  <div>
                    <h4>Visit Us</h4>
                    <p>123 Roofing Way, Building City, ST 12345</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <div className="quote-form">
            <h3>Request a Free Quote</h3>

            {formSubmitted && (
              <div className="form-success">
                <p>Thank you for your request! We'll contact you shortly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={formErrors.name ? "error" : ""}
                />
                {formErrors.name && (
                  <span className="error-message">{formErrors.name}</span>
                )}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={formErrors.email ? "error" : ""}
                  />
                  {formErrors.email && (
                    <span className="error-message">{formErrors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={formErrors.phone ? "error" : ""}
                  />
                  {formErrors.phone && (
                    <span className="error-message">{formErrors.phone}</span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address">Property Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Needed *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={formErrors.service ? "error" : ""}
                >
                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
                {formErrors.service && (
                  <span className="error-message">{formErrors.service}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary quote-submit">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
