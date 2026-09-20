"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* Hero */}
        <section className="bg-[#415FFF] text-white">
          <div className="max-w-7xl mx-auto px-4 py-20">

            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-100 mb-3">
                Contact Us
              </p>

              <h1 className="text-4xl md:text-5xl font-black mb-5">
                Get In Touch With Us
              </h1>

              <p className="text-blue-100 text-lg leading-8">
                Have a question about our products or services?
                Visit one of our stores or send us a message.
              </p>
            </div>

          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">

            <div className="grid md:grid-cols-3 gap-6">

              {/* Phone */}
              <div className="border rounded-2xl p-7 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-[#415FFF]/10 text-[#415FFF] rounded-xl flex items-center justify-center mb-5">
                  <Phone size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2">
                  Call Us
                </h3>

                <p className="text-gray-500 mb-2">
                  Customer Support
                </p>

                <a
                  href="tel:+8801700000000"
                  className="font-semibold hover:text-[#415FFF]"
                >
                  +880 1700-000000
                </a>
              </div>

              {/* Email */}
              <div className="border rounded-2xl p-7 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-[#415FFF]/10 text-[#415FFF] rounded-xl flex items-center justify-center mb-5">
                  <Mail size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2">
                  Email Us
                </h3>

                <p className="text-gray-500 mb-2">
                  Send us an email
                </p>

                <a
                  href="mailto:support@asiaelectronics.com"
                  className="font-semibold hover:text-[#415FFF]"
                >
                  support@asiaelectronics.com
                </a>
              </div>

              {/* Opening Hours */}
              <div className="border rounded-2xl p-7 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-[#415FFF]/10 text-[#415FFF] rounded-xl flex items-center justify-center mb-5">
                  <Clock size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2">
                  Opening Hours
                </h3>

                <p className="text-gray-500">
                  Saturday - Thursday
                </p>

                <p className="font-semibold">
                  10:00 AM - 9:00 PM
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Friday: Closed
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* Locations */}
        <section className="py-16 bg-gray-50">

          <div className="max-w-7xl mx-auto px-4">

            <div className="text-center mb-12">

              <p className="text-[#415FFF] font-bold uppercase tracking-widest text-sm mb-2">
                Our Stores
              </p>

              <h2 className="text-3xl md:text-4xl font-black">
                Visit Our Locations
              </h2>

              <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                Visit any of our stores for mobile phones,
                electronics, accessories and expert support.
              </p>

            </div>

            <div className="grid lg:grid-cols-2 gap-8">

              {/* Dhaka */}
              <div className="bg-white rounded-3xl overflow-hidden border">

                <div className="p-7">

                  <div className="flex items-start gap-4">

                    <div className="w-12 h-12 shrink-0 bg-[#415FFF] text-white rounded-xl flex items-center justify-center">
                      <MapPin size={24} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold">
                        Dhaka Branch
                      </h3>

                      <p className="text-gray-500 mt-2 leading-7">
                        Bashundhara City Shopping Complex,
                        Panthapath, Dhaka, Bangladesh.
                      </p>

                      <p className="mt-3 font-semibold">
                        Phone: +880 1700-000000
                      </p>
                    </div>

                  </div>

                </div>

                <div className="h-[350px]">
                  <iframe
                    src="https://www.google.com/maps?q=Bashundhara%20City%20Shopping%20Complex%20Dhaka&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

              </div>

              {/* Chattogram */}
              <div className="bg-white rounded-3xl overflow-hidden border">

                <div className="p-7">

                  <div className="flex items-start gap-4">

                    <div className="w-12 h-12 shrink-0 bg-[#415FFF] text-white rounded-xl flex items-center justify-center">
                      <MapPin size={24} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold">
                        Chattogram Branch
                      </h3>

                      <p className="text-gray-500 mt-2 leading-7">
                        GEC Circle, Chattogram,
                        Bangladesh.
                      </p>

                      <p className="mt-3 font-semibold">
                        Phone: +880 1700-000000
                      </p>
                    </div>

                  </div>

                </div>

                <div className="h-[350px]">
                  <iframe
                    src="https://www.google.com/maps?q=GEC%20Circle%20Chattogram&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* Contact Form */}
        <section className="py-20">

          <div className="max-w-7xl mx-auto px-4">

            <div className="grid lg:grid-cols-2 gap-12 items-start">

              {/* Left */}
              <div>

                <p className="text-[#415FFF] font-bold uppercase tracking-widest text-sm mb-3">
                  Send Message
                </p>

                <h2 className="text-3xl md:text-4xl font-black mb-5">
                  Have Any Questions?
                </h2>

                <p className="text-gray-500 text-lg leading-8 mb-8">
                  Whether you need product information, stock
                  availability, service support or anything else,
                  feel free to contact us.
                </p>

                <div className="space-y-5">

                  <div className="flex gap-4">
                    <div className="w-11 h-11 bg-[#415FFF]/10 text-[#415FFF] rounded-lg flex items-center justify-center shrink-0">
                      <Phone size={20} />
                    </div>

                    <div>
                      <h4 className="font-bold">
                        Customer Support
                      </h4>

                      <p className="text-gray-500">
                        +880 1700-000000
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-11 h-11 bg-[#415FFF]/10 text-[#415FFF] rounded-lg flex items-center justify-center shrink-0">
                      <Mail size={20} />
                    </div>

                    <div>
                      <h4 className="font-bold">
                        Email Support
                      </h4>

                      <p className="text-gray-500">
                        support@asiaelectronics.com
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-11 h-11 bg-[#415FFF]/10 text-[#415FFF] rounded-lg flex items-center justify-center shrink-0">
                      <MapPin size={20} />
                    </div>

                    <div>
                      <h4 className="font-bold">
                        Store Locations
                      </h4>

                      <p className="text-gray-500">
                        Dhaka & Chattogram
                      </p>
                    </div>
                  </div>

                </div>

              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="bg-gray-50 border rounded-3xl p-6 md:p-8"
              >

                <div className="grid md:grid-cols-2 gap-5">

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full h-12 px-4 rounded-xl border bg-white outline-none focus:border-[#415FFF] focus:ring-2 focus:ring-[#415FFF]/10"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="w-full h-12 px-4 rounded-xl border bg-white outline-none focus:border-[#415FFF] focus:ring-2 focus:ring-[#415FFF]/10"
                    />
                  </div>

                </div>

                <div className="grid md:grid-cols-2 gap-5 mt-5">

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Phone
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="01XXXXXXXXX"
                      className="w-full h-12 px-4 rounded-xl border bg-white outline-none focus:border-[#415FFF] focus:ring-2 focus:ring-[#415FFF]/10"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Subject
                    </label>

                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Enter subject"
                      required
                      className="w-full h-12 px-4 rounded-xl border bg-white outline-none focus:border-[#415FFF] focus:ring-2 focus:ring-[#415FFF]/10"
                    />
                  </div>

                </div>

                <div className="mt-5">

                  <label className="block text-sm font-semibold mb-2">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    rows={6}
                    required
                    className="w-full px-4 py-3 rounded-xl border bg-white outline-none resize-none focus:border-[#415FFF] focus:ring-2 focus:ring-[#415FFF]/10"
                  />

                </div>

                <button
                  type="submit"
                  className="mt-6 w-full h-12 bg-[#415FFF] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#304be8] transition"
                >
                  <Send size={18} />
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}