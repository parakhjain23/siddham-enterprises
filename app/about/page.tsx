import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us - Siddham Enterprises | Trusted Plastic Materials Supplier',
  description: 'Learn about Siddham Enterprises - 15+ years of expertise in plastic materials supply chain. We are suppliers and traders, not manufacturers, specializing in reliable sourcing solutions.',
};

export default function About() {
  const team = [
    {
      name: "Rajesh Siddham",
      position: "Managing Director",
      experience: "15+ Years",
      expertise: "Supply Chain Management",
      image: "👨‍💼"
    },
    {
      name: "Priya Siddham",
      position: "Operations Director",
      experience: "12+ Years",
      expertise: "Quality Assurance",
      image: "👩‍💼"
    },
    {
      name: "Amit Kumar",
      position: "Sales Head",
      experience: "10+ Years",
      expertise: "Client Relations",
      image: "👨‍💻"
    }
  ];

  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management System",
      icon: "📋"
    },
    {
      title: "GST Registered",
      description: "Compliant Tax Structure",
      icon: "📝"
    },
    {
      title: "Trade License",
      description: "Authorized Trading License",
      icon: "🏢"
    },
    {
      title: "MSME Certified",
      description: "Small Business Certification",
      icon: "🏆"
    }
  ];

  const milestones = [
    {
      year: "2009",
      title: "Company Founded",
      description: "Started as a small plastic materials trading business"
    },
    {
      year: "2012",
      title: "Network Expansion",
      description: "Established supplier relationships across 5 states"
    },
    {
      year: "2015",
      title: "ISO Certification",
      description: "Achieved ISO 9001:2015 quality certification"
    },
    {
      year: "2018",
      title: "Digital Transformation",
      description: "Modernized operations with digital supply chain management"
    },
    {
      year: "2020",
      title: "Pan-India Presence",
      description: "Extended delivery network to cover entire India"
    },
    {
      year: "2024",
      title: "1000+ Clients",
      description: "Reached milestone of serving over 1000 satisfied customers"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--secondary)] to-[var(--secondary-light)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Siddham Enterprises
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Your trusted supply chain partner for plastic materials with 15+ years of trading expertise.
              We are suppliers and traders specializing in reliable sourcing solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-[var(--muted)] text-lg leading-relaxed">
                <p>
                  Founded in 2009, Siddham Enterprises began as a vision to bridge the gap between plastic material manufacturers and businesses requiring quality raw materials. We recognized the challenges companies faced in sourcing reliable, consistent, and competitively priced plastic materials.
                </p>
                <p>
                  <strong className="text-[var(--foreground)]">We are suppliers and traders, not manufacturers.</strong> This strategic positioning allows us to focus entirely on what we do best - building strong supplier relationships, maintaining quality standards, and providing exceptional supply chain solutions.
                </p>
                <p>
                  Over the years, we have developed an extensive network of trusted suppliers and have served over 1,000 clients across various industries. Our expertise lies in understanding market dynamics, quality requirements, and logistics optimization.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-[var(--background-gray)] rounded-2xl p-8">
                <div className="text-8xl mb-6">🏭</div>
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">
                  Supply Chain Specialists
                </h3>
                <p className="text-[var(--muted)]">
                  We focus on sourcing, quality control, and efficient distribution rather than manufacturing, ensuring you get the best materials at competitive prices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-20 bg-[var(--background-gray)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">Mission</h3>
              <p className="text-[var(--muted)]">
                To provide reliable, quality plastic materials through efficient supply chain management while building long-term partnerships with our clients and suppliers.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-5xl mb-6">👁️</div>
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">Vision</h3>
              <p className="text-[var(--muted)]">
                To become India's most trusted plastic materials trading company, known for transparency, reliability, and exceptional customer service.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-5xl mb-6">💎</div>
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">Values</h3>
              <p className="text-[var(--muted)]">
                Integrity, Quality, Reliability, Customer Focus, Transparency, and Continuous Improvement in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-3xl mx-auto">
              Experienced professionals with deep industry knowledge and commitment to excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center hover:shadow-xl">
                <div className="text-6xl mb-4">
                  {member.image}
                </div>
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
                  {member.name}
                </h3>
                <p className="text-[var(--primary)] font-semibold mb-2">
                  {member.position}
                </p>
                <p className="text-[var(--muted)] mb-2">
                  <strong>Experience:</strong> {member.experience}
                </p>
                <p className="text-[var(--muted)]">
                  <strong>Expertise:</strong> {member.expertise}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-[var(--background-gray)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Certifications & Compliance
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-3xl mx-auto">
              We maintain the highest standards of quality and compliance in our operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="card text-center hover:shadow-xl">
                <div className="text-4xl mb-4">
                  {cert.icon}
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">
                  {cert.title}
                </h3>
                <p className="text-[var(--muted)] text-sm">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-3xl mx-auto">
              15+ years of growth, innovation, and building trust in the plastic materials industry.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[var(--primary)]"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="card">
                      <div className="text-2xl font-bold text-[var(--primary)] mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-[var(--muted)]">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[var(--primary)] rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us as Suppliers Section */}
      <section className="py-20 bg-[var(--primary)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Partner with Us as Your Suppliers?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our focus on supply chain excellence rather than manufacturing allows us to serve you better.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3">Market Expertise</h3>
              <p className="text-blue-100">
                Deep understanding of market trends, pricing, and quality standards across multiple suppliers.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold mb-3">Unbiased Selection</h3>
              <p className="text-blue-100">
                We choose the best supplier for each requirement without manufacturing bias, ensuring optimal solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Supplier Network</h3>
              <p className="text-blue-100">
                Established relationships with 50+ trusted manufacturers across India for diverse material needs.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/contact" className="bg-white text-[var(--primary)] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block">
              Partner with Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}