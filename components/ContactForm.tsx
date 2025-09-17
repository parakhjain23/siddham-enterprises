'use client';

import { useState } from 'react';

interface ContactFormProps {
  title?: string;
  description?: string;
  showProductField?: boolean;
}

export default function ContactForm({
  title = "Get In Touch",
  description = "Send us a message and we'll get back to you within 24 hours.",
  showProductField = false
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      product: '',
      message: ''
    });

    setIsSubmitting(false);
    alert('Thank you! We will contact you soon.');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">{title}</h3>
        <p className="text-[var(--muted)]">{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)] mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[var(--border)] rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all duration-200"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)] mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[var(--border)] rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all duration-200"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[var(--foreground)] mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[var(--border)] rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all duration-200"
              placeholder="+91 99999 99999"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-[var(--foreground)] mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[var(--border)] rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all duration-200"
              placeholder="Your company name"
            />
          </div>
        </div>

        {showProductField && (
          <div>
            <label htmlFor="product" className="block text-sm font-medium text-[var(--foreground)] mb-2">
              Product Interest
            </label>
            <select
              id="product"
              name="product"
              value={formData.product}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[var(--border)] rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all duration-200"
            >
              <option value="">Select a product</option>
              <option value="plastic-granules">Plastic Granules</option>
              <option value="masterbatches">Masterbatches</option>
              <option value="plastic-tiles">Plastic Tiles</option>
              <option value="custom-solution">Custom Solution</option>
            </select>
          </div>
        )}

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)] mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-[var(--border)] rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all duration-200 resize-y"
            placeholder="Tell us about your requirements..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        <p className="text-sm text-[var(--muted)] text-center">
          We respect your privacy and will never share your information with third parties.
        </p>
      </form>
    </div>
  );
}