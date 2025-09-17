import { Metadata } from 'next';
import ContactForm from '../../components/ContactForm';
import QuoteForm from '../../components/QuoteForm';

export const metadata: Metadata = {
  title: 'Contact Us - Siddham Enterprises | Get Quote & Support',
  description: 'Contact Siddham Enterprises for plastic materials supply. Get quotes, technical support, and connect with our team. Multiple ways to reach us for your business needs.',
};

export default function Contact() {
  const contactInfo = [
    {
      title: "Phone",
      details: ["+91 99999 99999", "+91 88888 88888"],
      icon: "📞",
      action: "Call Now",
      link: "tel:+919999999999"
    },
    {
      title: "Email",
      details: ["info@siddhamenterprises.com", "sales@siddhamenterprises.com"],
      icon: "📧",
      action: "Send Email",
      link: "mailto:info@siddhamenterprises.com"
    },
    {
      title: "Address",
      details: ["123 Industrial Area", "Sector 15, Gurgaon", "Haryana 122001, India"],
      icon: "📍",
      action: "Get Directions",
      link: "#map"
    },
    {
      title: "WhatsApp",
      details: ["+91 99999 99999", "24/7 Support Available"],
      icon: "💬",
      action: "Chat Now",
      link: "https://wa.me/919999999999"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  const officeLocations = [
    {
      title: "Head Office",
      address: "123 Industrial Area, Sector 15, Gurgaon, Haryana 122001",
      phone: "+91 99999 99999",
      email: "info@siddhamenterprises.com",
      type: "Main Operations"
    },
    {
      title: "Regional Office - Mumbai",
      address: "456 Business Park, Andheri East, Mumbai, Maharashtra 400069",
      phone: "+91 88888 88888",
      email: "mumbai@siddhamenterprises.com",
      type: "Western Region"
    },
    {
      title: "Warehouse - Chennai",
      address: "789 Industrial Zone, Sriperumbudur, Tamil Nadu 602105",
      phone: "+91 77777 77777",
      email: "chennai@siddhamenterprises.com",
      type: "Southern Region"
    }
  ];

  const supportCategories = [
    {
      title: "Sales Inquiries",
      description: "Product information, pricing, and availability",
      contact: "sales@siddhamenterprises.com",
      phone: "+91 99999 99999",
      icon: "💼"
    },
    {
      title: "Technical Support",
      description: "Material specifications and application guidance",
      contact: "technical@siddhamenterprises.com",
      phone: "+91 99999 99998",
      icon: "🔧"
    },
    {
      title: "Order Status",
      description: "Track orders and delivery information",
      contact: "orders@siddhamenterprises.com",
      phone: "+91 99999 99997",
      icon: "📦"
    },
    {
      title: "Quality Issues",
      description: "Product quality concerns and complaints",
      contact: "quality@siddhamenterprises.com",
      phone: "+91 99999 99996",
      icon: "⚠️"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with our team for quotes, technical support, or any questions about our plastic materials.
              We're here to help you find the right solution for your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="card text-center hover:shadow-xl">
                <div className="text-4xl mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1 mb-6">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-[var(--muted)]">
                      {detail}
                    </p>
                  ))}
                </div>
                <a
                  href={info.link}
                  className="btn-primary inline-block"
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {info.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Forms Section */}
      <section className="py-20 bg-[var(--background-gray)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-3xl mx-auto">
              Choose the appropriate form based on your needs. We'll respond within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ContactForm
                title="General Inquiry"
                description="Have questions about our services or need general information?"
                showProductField={true}
              />
            </div>
            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Specialized Support
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-3xl mx-auto">
              Connect directly with the right department for faster resolution of your queries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportCategories.map((category, index) => (
              <div key={index} className="card hover:shadow-xl">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
                      {category.title}
                    </h3>
                    <p className="text-[var(--muted)] mb-4">
                      {category.description}
                    </p>
                    <div className="space-y-2">
                      <div>
                        <a href={`mailto:${category.contact}`} className="text-[var(--primary)] hover:underline">
                          {category.contact}
                        </a>
                      </div>
                      <div>
                        <a href={`tel:${category.phone}`} className="text-[var(--primary)] hover:underline">
                          {category.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours & Office Locations */}
      <section className="py-20 bg-[var(--background-gray)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[var(--foreground)] mb-8">
                Business Hours
              </h2>
              <div className="card">
                <div className="space-y-4">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-[var(--border)] last:border-b-0">
                      <span className="font-medium text-[var(--foreground)]">
                        {schedule.day}
                      </span>
                      <span className="text-[var(--primary)] font-semibold">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-[var(--primary)]/10 rounded-lg">
                  <p className="text-sm text-[var(--primary)] font-medium">
                    📞 Emergency support available 24/7 for existing customers
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[var(--foreground)] mb-8">
                Office Locations
              </h2>
              <div className="space-y-6">
                {officeLocations.map((office, index) => (
                  <div key={index} className="card hover:shadow-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-bold text-[var(--foreground)]">
                        {office.title}
                      </h3>
                      <span className="bg-[var(--primary)]/10 text-[var(--primary)] px-2 py-1 rounded text-sm font-medium">
                        {office.type}
                      </span>
                    </div>
                    <p className="text-[var(--muted)] mb-3">
                      {office.address}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href={`tel:${office.phone}`}
                        className="text-[var(--primary)] hover:underline text-sm"
                      >
                        📞 {office.phone}
                      </a>
                      <a
                        href={`mailto:${office.email}`}
                        className="text-[var(--primary)] hover:underline text-sm"
                      >
                        📧 {office.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20" id="map">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Find Us
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Visit our head office in Gurgaon or connect with our regional offices across India.
            </p>
          </div>

          <div className="card">
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">Interactive Map</h3>
                <p className="text-[var(--muted)] mb-6">
                  123 Industrial Area, Sector 15<br />
                  Gurgaon, Haryana 122001, India
                </p>
                <a
                  href="https://maps.google.com/?q=Gurgaon+Industrial+Area"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[var(--secondary)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Quick answers to common questions about our services and processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Business Inquiries</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">What is your minimum order quantity?</p>
                  <p className="text-gray-300 text-sm">MOQ varies by product. Typically 500kg for granules, 100kg for masterbatch, and 100 pieces for tiles.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Do you offer credit terms?</p>
                  <p className="text-gray-300 text-sm">Yes, we offer 30-60 day credit terms for established customers with good credit history.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">What are your delivery timeframes?</p>
                  <p className="text-gray-300 text-sm">Standard products: 3-7 days. Custom products: 2-3 weeks depending on specifications.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Technical Support</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">Do you provide technical data sheets?</p>
                  <p className="text-gray-300 text-sm">Yes, comprehensive technical data sheets are available for all products upon request.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Can you help with material selection?</p>
                  <p className="text-gray-300 text-sm">Absolutely! Our technical team provides expert guidance on material selection for specific applications.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Do you offer quality certificates?</p>
                  <p className="text-gray-300 text-sm">Yes, all products come with quality certificates and test reports from accredited laboratories.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}