"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    // Save the form before the async request
    const form = e.currentTarget;

    setLoading(true);

    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      if (response.ok) {
        alert("✅ Message sent successfully!");

        // Reset the form
        form.reset();
      } else {
        alert("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);

      alert("❌ Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        required
        className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
      />

      <textarea
        rows={6}
        name="message"
        placeholder="Write your message..."
        required
        className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-cyan-600 px-8 py-4 font-semibold text-white transition hover:bg-cyan-700 disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}