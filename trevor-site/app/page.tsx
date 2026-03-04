"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mzdalkkz", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[85vh] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1492724441997-5dc865305da7')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Professional Websites for Small Businesses
          </h1>
          <p className="text-xl mb-8">
            Modern, fast, and affordable websites that help your business stand out and attract more customers.
          </p>
                <a
        href="#contact"
        className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition inline-block"
         >
        Get a Free Quote
        </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What I Offer</h2>
          <p className="text-gray-600">
            Everything your small business needs to succeed online.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            "Custom Business Websites",
            "Mobile Optimization",
            "SEO & Speed Optimization",
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-4">{service}</h3>
              <p className="text-gray-600">
                Clean, modern design tailored to your brand and built to convert visitors into customers.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE ME */}
      <section className="py-20 px-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Why Small Businesses Choose Me
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            I focus on clarity, clean design, and performance. No bloated templates.
            No confusing tech talk. Just simple, effective websites that help you grow.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-100 py-20 px-10">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            What Clients Are Saying
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              name: "Sarah L.",
              business: "Local Bakery Owner",
              review:
                "Our new website brought in more inquiries within the first month than we had all year. Clean, professional, and exactly what we needed.",
            },
            {
              name: "Mark D.",
              business: "Landscaping Company",
              review:
                "He made the entire process simple. We now look like a real company online instead of a DIY site.",
            },
            {
              name: "Emily R.",
              business: "Boutique Fitness Studio",
              review:
                "Fast turnaround, great communication, and the design exceeded expectations.",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow"
            >
              <p className="text-gray-600 mb-6">
                "{testimonial.review}"
              </p>
              <h4 className="font-semibold">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">
                {testimonial.business}
              </p>
            </div>
          ))}
        </div>
      </section>

      
        {/* CONTACT SECTION */}
    <section id="contact" className="py-24 bg-black text-white px-6">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Let’s Build Your Website
        </h2>
        <p className="text-gray-400">
          Tell me about your business and your goals.
        </p>
      </div>

      {submitted ? (
        <div className="max-w-3xl mx-auto bg-green-600/20 border border-green-500 text-green-400 p-6 rounded-xl text-center">
          ✅ Thank you! Your message has been sent successfully.
          <div className="mt-4">
            I’ll get back to you within 24 hours.
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto space-y-6 bg-gray-900 p-10 rounded-2xl shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-white outline-none transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-white outline-none transition"
            />
          </div>

          <input
            type="text"
            name="business"
            placeholder="Business Name"
            className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-white outline-none transition"
          />

          <textarea
            name="message"
            placeholder="Tell me about your project..."
            rows={5}
            required
            className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-white outline-none transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black py-4 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </section>
      <Footer />
    </main>
  );
}

