'use client';

import { useState } from 'react';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    quantity: '',
    requirements: ''
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
    console.log('Quote request submitted:', formData);

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      product: '',
      quantity: '',
      requirements: ''
    });

    setIsSubmitting(false);
    alert('Thank you! We will send you a detailed quote within 24 hours.');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">Request a Quote</h3>
        <p className="text-[var(--muted)]">Get competitive pricing for your plastic material requirements.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="quote-name" className="block text-sm font-medium text-[var(--foreground)] mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="quote-name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[var(--border)] rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all duration-200"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="quote-email" className="block text-sm font-medium text-[var(--foreground)] mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="quote-email"
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
            <label htmlFor="quote-phone" className="block text-sm font-medium text-[var(--foreground)] mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="quote-phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[var(--border)] rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all duration-200"
              placeholder="+91 99999 99999"
            />
          </div>

          <div>
            <label htmlFor="quote-company" className="block text-sm font-medium text-[var(--foreground)] mb-2">
              Company Name *
            </label>
            <input
              type="text"
              id="quote-company"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[var(--border)] rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all duration-200"
              placeholder="Your company name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="quote-product" className="block text-sm font-medium text-[var(--foreground)] mb-2">
              Product Required *
            </label>
            <select
              id="quote-product"
              name="product"
              required
              value={formData.product}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[var(--border)] rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all duration-200"
            >
              <option value="">Select a product</option>
              <option value="pp-granules">PP (Polypropylene) Granules</option>
              <option value="pe-granules">PE (Polyethylene) Granules</option>
              <option value="abs-granules">ABS Granules</option>
              <option value="pvc-granules">PVC Granules</option>
              <option value="color-masterbatch">Color Masterbatch</option>
              <option value="additive-masterbatch">Additive Masterbatch</option>
              <option value="floor-tiles">Floor Tiles</option>
              <option value="wall-tiles">Wall Tiles</option>
              <option value="custom-solution">Custom Solution</option>
            </select>
          </div>

          <div>
            <label htmlFor="quote-quantity" className="block text-sm font-medium text-[var(--foreground)] mb-2">
              Quantity Required *
            </label>
            <input
              type="text"
              id="quote-quantity"
              name="quantity"
              required
              value={formData.quantity}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[var(--border)] rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all duration-200"
              placeholder="e.g., 500 kg, 1 ton, 1000 pieces"
            />
          </div>
        </div>

        <div>
          <label htmlFor="quote-requirements" className="block text-sm font-medium text-[var(--foreground)] mb-2">
            Detailed Requirements *
          </label>
          <textarea
            id="quote-requirements"
            name="requirements"
            required
            rows={4}
            value={formData.requirements}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-[var(--border)] rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all duration-200 resize-y"
            placeholder="Specify color, grade, specifications, delivery location, timeline, and any other requirements..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Request Quote'}
        </button>

        <div className="bg-[var(--background-gray)] rounded-lg p-4 text-center">
          <p className="text-sm text-[var(--muted)] mb-2">
            Need immediate assistance?
          </p>
          <a
            href="tel:+919999999999"
            className="text-[var(--primary)] font-semibold hover:underline"
          >
            Call us at +91 99999 99999
          </a>
        </div>
      </form>
    </div>
  );
}