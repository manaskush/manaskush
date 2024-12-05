import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { motion, Transition } from "framer-motion";
import { cn } from "@/lib/utils";

const animationProps = {
  initial: { 
    scale: 0.9 // Slightly bigger than the original
  },
  animate: { 
    scale: 1.1 // Slightly bigger when animated
  },
  whileTap: { 
    scale: 0.95 // Slightly reduce scale on tap
  },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    duration: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
  } as Transition
};

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
      <motion.button
        initial={animationProps.initial}
        animate={animationProps.animate}
        whileTap={animationProps.whileTap}
        transition={animationProps.transition}
        onClick={toggleContactBox}
        className={cn(
          "relative rounded-lg px-8 py-4 font-medium backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/10%)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_hsl(var(--primary)/10%)]",
          "contact-button"
        )}
        style={{
          backgroundColor: "#e0e0e0", // Light gray background
          color: 'black', // Text color
        }}
      >
        <span
          className="relative block size-full text-sm uppercase tracking-wide text-[rgb(0,0,0,65%)] dark:font-light dark:text-[rgb(255,255,255,90%)]"
        >
          Contact Me !!
        </span>
        <span
          style={{
            mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
            maskComposite: "exclude",
          }}
          className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--primary)/10%)_calc(var(--x)+20%),hsl(var(--primary)/50%)_calc(var(--x)+25%),hsl(var(--primary)/10%)_calc(var(--x)+100%))] p-px"
        ></span>
      </motion.button>

      {/* Contact details section (WhatsApp, Email) */}
      {isOpen && (
        <div
          className="contact-details"
          style={{
            position: 'fixed',
            bottom: '70px',
            right: '20px',
            width: '320px',
            maxWidth: '90vw',
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
            Want to hire me as a freelancer? Let&apos;s discuss.
          </h3>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
            Drop your message and let&apos;s discuss your project.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* WhatsApp Button */}
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
              <FaWhatsapp className="inline-block mr-2" size={20} />
              Chat on WhatsApp
            </button>

            {/* Email Button */}
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
              <AiOutlineMail className="inline-block mr-2" size={20} />
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

        .contact-button {
          display: block;
          z-index: 1001;
          position: relative;
          background: transparent;
          border: 2px solid transparent;
          border-radius: 12px;
          overflow: hidden;
        }

        .contact-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, #1c1c1c, #444444, #1c1c1c, #444444); /* Dark gradient */
          background-size: 400%;
          animation: shine 2s linear infinite;
          z-index: -1;
        }

        /* Shiny animation keyframe */
        @keyframes shine {
          0% {
            background-position: 400% 0;
          }
          100% {
            background-position: -400% 0;
          }
        }

        .contact-details {
          display: ${isOpen ? 'block' : 'none'};
          
          @media (max-width: 480px) {
            width: calc(100vw - 40px);
            right: 20px;
            left: 20px;
            max-width: none;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactMe;
