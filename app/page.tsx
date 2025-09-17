import Link from "next/link";
import ContactForm from "../components/ContactForm";
import Image from "next/image";

export default function Home() {
  const products = [
    {
      title: "Plastic Granules",
      description: "High-quality PP, PE, ABS, and PVC granules for various manufacturing applications.",
      features: ["Premium Grade", "Consistent Quality", "Bulk Supply", "Custom Specifications"],
      image: "https://5.imimg.com/data5/TA/BR/MY-21687133/pp-colour-granules-semi-500x500.jpg"
    },
    {
      title: "Masterbatches",
      description: "Color and additive masterbatches for enhanced plastic properties and aesthetics.",
      features: ["Vibrant Colors", "UV Protection", "Anti-Static", "Flame Retardant"],
      image: "🎨"
    },
    {
      title: "Plastic Tiles",
      description: "Durable and versatile plastic tiles for flooring and wall applications.",
      features: ["Water Resistant", "Easy Installation", "Low Maintenance", "Eco-Friendly"],
      image: "🏢"
    }
  ];

  const whyChooseUs = [
    {
      title: "Trusted Supply Chain",
      description: "15+ years of experience in plastic materials trading with reliable supplier networks.",
      icon: "🤝"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality checks and certifications to ensure premium material standards.",
      icon: "✅"
    },
    {
      title: "Competitive Pricing",
      description: "Direct supplier relationships enable us to offer the best prices in the market.",
      icon: "💰"
    },
    {
      title: "Pan-India Delivery",
      description: "Efficient logistics network ensuring timely delivery across all major cities.",
      icon: "🚛"
    },
    {
      title: "Technical Support",
      description: "Expert guidance on material selection and application-specific solutions.",
      icon: "🔧"
    },
    {
      title: "Flexible Orders",
      description: "From small quantities to bulk orders, we cater to businesses of all sizes.",
      icon: "📦"
    }
  ];

  const stats = [
    { number: "1000+", label: "Happy Clients" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Product Varieties" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Premium Plastic Materials
                <span className="text-blue-200"> Supplier & Trader</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Your trusted partner for high-quality plastic granules, masterbatches, and tiles.
                We provide reliable supply chain solutions with competitive pricing across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#quote" className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-center">
                  Get Quote
                </a>
                <a href="tel:+919999999999" className="bg-white border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors duration-200 text-center inline-flex items-center justify-center gap-2">
                  📞 Call Now
                </a>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-8xl mb-4">🏭</div>
                <h3 className="text-2xl font-bold mb-4">Suppliers & Traders</h3>
                <p className="text-blue-100">
                  Not manufacturers - we specialize in sourcing and supplying the best plastic materials from trusted partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[var(--background-gray)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[var(--primary)] mb-2">
                  {stat.number}
                </div>
                <div className="text-[var(--muted)] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Overview Section */}
      <section className="py-20" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Our Product Portfolio
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-3xl mx-auto">
              We supply a comprehensive range of plastic materials to meet diverse industrial requirements across multiple sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="card hover:shadow-xl">
                {product.image.startsWith('http') ? <Image src={product.image} alt={product.title} width={100} height={100} className="text-6xl mb-6 text-center" /> :
                  <div className="text-6xl mb-6 text-center">
                    {product.image}
                  </div>}
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">
                  {product.title}
                </h3>
                <p className="text-[var(--muted)] mb-6">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <span className="text-[var(--accent)] mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/products"
                  className="text-[var(--primary)] font-semibold hover:text-[var(--primary-dark)] transition-colors duration-200"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[var(--background-gray)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Why Choose Siddham Enterprises
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-3xl mx-auto">
              We are your reliable supply chain partners with proven expertise in plastic materials trading.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="card text-center hover:shadow-xl">
                <div className="text-5xl mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">
                  {item.title}
                </h3>
                <p className="text-[var(--muted)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-3xl mx-auto">
              Supplying quality plastic materials across diverse industrial sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: "🏗️", name: "Construction" },
              { icon: "🚗", name: "Automotive" },
              { icon: "📦", name: "Packaging" },
              { icon: "⚡", name: "Electronics" },
              { icon: "🏥", name: "Healthcare" },
              { icon: "🎨", name: "Consumer Goods" },
            ].map((industry, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-[var(--background-gray)] transition-colors duration-200">
                <div className="text-4xl mb-3">
                  {industry.icon}
                </div>
                <div className="font-medium text-[var(--foreground)]">
                  {industry.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-[var(--primary)] text-white" id="quote">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Source Your Plastic Materials?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Get competitive quotes and expert advice on your plastic material requirements.
                Our team is ready to help you find the perfect solution.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-4">⚡</span>
                  <span>Fast quote turnaround within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-4">💼</span>
                  <span>Expert consultation on material selection</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-4">🚚</span>
                  <span>Reliable delivery across India</span>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="tel:+919999999999"
                  className="text-2xl font-bold hover:text-blue-200 transition-colors duration-200 !text-white"
                >
                  📞 +91 99999 99999
                </a>
              </div>
            </div>
            <div>
              <ContactForm
                title="Request a Quote"
                description="Fill out the form and we'll get back to you with a competitive quote."
                showProductField={true}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
