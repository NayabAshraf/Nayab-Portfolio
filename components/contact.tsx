import React from "react";
import { FaEnvelope } from "react-icons/fa";

export default function ContactMe() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-20 text-center"
    >
      <h2 className="text-3xl font-bold mb-4">📬 Contact Me</h2>
      <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
        You can reach out to me directly via email:
      </p>

      <a
        href="mailto:nayabashraf07@gmail.com"
        className="flex items-center gap-2 text-lg font-medium text-blue-600 dark:text-blue-400 hover:underline"
      >
        <FaEnvelope /> nayabashraf07@gmail.com
      </a>
    </section>
  );
}
