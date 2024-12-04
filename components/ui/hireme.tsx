import React, { useState } from 'react';

const ContactMe: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const whatsappUrl = 'https://wa.me/8218183012'; // Replace with your WhatsApp number
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = () => {
    const email = 'manas.kush.work@gmail.com'; // Replace with your email
    const subject = 'Project Inquiry';
    const body = 'Hello, I would like to discuss a project with you.';
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const toggleContactBox = () => setIsOpen((prev) => !prev);

  return (
    <div className="contact-container">
      {/* "Contact Me" button */}
      <button
        className="contact-button"
        onClick={toggleContactBox}
        style={{
          backgroundColor: '#0073e6',
          color: 'white',
          padding: '14px 24px',
          borderRadius: '10px',
          border: 'none',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          display: 'block', // Ensure the button is visible by default on mobile
        }}
      >
        Contact Me
      </button>

      {/* Contact details section (WhatsApp, Email) */}
      {isOpen && (
        <div
          className="contact-details"
          style={{
            position: 'absolute',
            bottom: '70px',
            right: '20px',
            width: '320px',
            padding: '20px',
            backgroundColor: '#fff',
            borderRadius: '15px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
            fontFamily: 'Arial, sans-serif',
            zIndex: 1000,
            border: '1px solid #e0e0e0',
          }}
        >
          <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#333' }}>
            Want to hire me as a freelancer? Let's discuss.
          </h3>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
            Drop your message and let's discuss your project.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button
              onClick={handleWhatsAppClick}
              style={{
                backgroundColor: '#25D366',
                color: 'white',
                padding: '12px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '14px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#128C7E')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#25D366')}
            >
              Chat on WhatsApp
            </button>
            <button
              onClick={handleEmailClick}
              style={{
                backgroundColor: '#0073e6',
                color: 'white',
                padding: '12px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '14px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#005bb5')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0073e6')}
            >
              Write me a mail
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .contact-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
        }

        /* Only show the button on mobile */
        @media (max-width: 768px) {
          .contact-button {
            display: block;
          }

          .contact-details {
            display: ${isOpen ? 'block' : 'none'}; /* Toggle visibility based on state */
          }
        }

        /* For desktop, hide the contact details and keep button visible */
        @media (min-width: 768px) {
          .contact-button {
            display: none; /* Hide button on desktop */
          }

          .contact-details {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactMe;
