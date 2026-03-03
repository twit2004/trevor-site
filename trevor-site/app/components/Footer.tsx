


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      
      {/* TOP CTA STRIP */}
      <div className="bg-black text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Let’s Build Your Business Website
        </h2>
        <p className="text-gray-400 mb-6">
          Modern. Fast. Professional. Designed to bring in customers.
        </p>
        <a
        href="#contact"
        className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition inline-block"
        >
        Request a Free Quote
        </a>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-4 gap-10">
        
        {/* BRAND */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            Trevor Web Solutions
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Helping small businesses establish a strong, professional
            online presence through modern website design.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Services
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Custom Business Websites</li>
            <li>Mobile Optimization</li>
            <li>SEO Setup</li>
            <li>Website Redesign</li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Services</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* CONTACT */}
        <section id="contact" className="py-24 bg-black text-white px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
            Contact Me
            </h2>
            <p className="text-gray-400">
            Tell me about your business and what you need.
            </p>
        </div>

        <form
            action="https://formspree.io/f/mzdalkkz"
            method="POST"
            className="max-w-3xl mx-auto space-y-6"
        >
            <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-lg text-black"
            />

            <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-lg text-black"
            />

            <textarea
            name="message"
            placeholder="Tell me about your project"
            rows={5}
            required
            className="w-full p-4 rounded-lg text-black"
            />

            <button
            type="submit"
            className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
            Send Message
            </button>
        </form>
        </section>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Trevor Web Solutions. All rights reserved.
      </div>
    </footer>
  );
}