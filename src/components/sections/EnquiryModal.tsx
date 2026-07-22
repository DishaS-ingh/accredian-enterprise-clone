"use client";

import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ open, onClose }: Props) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    employees: "",
    trainingInterest: "",
    message: "",
  });

  if (!open) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Enquiry submitted successfully!");

        setForm({
          name: "",
          email: "",
          company: "",
          phone: "",
          employees: "",
          trainingInterest: "",
          message: "",
        });

        onClose();
      } else {
        alert(data.message);
      }
    } catch {
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-2xl rounded-xl bg-white p-8 shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900">
            Contact Us
          </h2>

          <button
            onClick={onClose}
            className="text-2xl font-bold text-gray-600 hover:text-black"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded border border-gray-300 p-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded border border-gray-300 p-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            name="company"
            placeholder="Company"
            value={form.company}
            onChange={handleChange}
            className="w-full rounded border border-gray-300 p-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded border border-gray-300 p-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <select
            name="employees"
            value={form.employees}
            onChange={handleChange}
            className="w-full rounded border border-gray-300 p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Company Size</option>
            <option>1-10</option>
            <option>11-50</option>
            <option>51-200</option>
            <option>200+</option>
          </select>

          <input
            name="trainingInterest"
            placeholder="Training Interest"
            value={form.trainingInterest}
            onChange={handleChange}
            className="w-full rounded border border-gray-300 p-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <textarea
            name="message"
            rows={4}
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            className="w-full rounded border border-gray-300 p-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded bg-blue-600 p-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

        </form>
      </div>
    </div>
  );
}