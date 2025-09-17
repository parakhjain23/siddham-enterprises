import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Applications & Industries - Plastic Materials Supply | Siddham Enterprises',
  description: 'Discover how our plastic materials serve diverse industries including automotive, packaging, construction, electronics, healthcare, and consumer goods. Industry-specific solutions.',
};

export default function Applications() {
  const industries = [
    {
      title: "Automotive Industry",
      description: "High-performance plastic materials for automotive components requiring durability and safety compliance.",
      icon: "🚗",
      materials: ["PP Granules", "ABS Granules", "Color Masterbatch", "UV Stabilized Masterbatch"],
      applications: [
        "Dashboard components",
        "Bumpers and trim parts",
        "Interior panels",
        "Under-hood components",
        "Wire harness protection",
        "Seat components"
      ],
      requirements: ["High impact resistance", "Temperature stability", "UV protection", "Flame retardancy"],
      caseStudy: "Supplied 50 tons of UV-stabilized PP granules for automotive interior manufacturer, resulting in 20% cost savings."
    },
    {
      title: "Packaging Industry",
      description: "Food-grade and industrial packaging materials with excellent barrier properties and printability.",
      icon: "📦",
      materials: ["PE Granules", "PP Granules", "Color Masterbatch", "Anti-block Masterbatch"],
      applications: [
        "Food packaging films",
        "Shopping bags",
        "Industrial wrapping",
        "Bottle caps and closures",
        "Flexible pouches",
        "Rigid containers"
      ],
      requirements: ["Food safety compliance", "Barrier properties", "Printability", "Seal strength"],
      caseStudy: "Partnered with leading FMCG company to supply 200 tons/month of food-grade PE for flexible packaging."
    },
    {
      title: "Construction Industry",
      description: "Weather-resistant and structural plastic materials for building and infrastructure applications.",
      icon: "🏗️",
      materials: ["PVC Granules", "Plastic Tiles", "Weather-resistant Masterbatch", "Flame Retardant Additives"],
      applications: [
        "Window profiles and doors",
        "Pipes and fittings",
        "Roofing sheets",
        "Flooring systems",
        "Cable conduits",
        "Insulation materials"
      ],
      requirements: ["Weather resistance", "Structural integrity", "Fire safety", "Long-term durability"],
      caseStudy: "Provided complete plastic tile solution for 100,000 sq ft warehouse flooring project, completed on time."
    },
    {
      title: "Electronics Industry",
      description: "High-precision plastic materials with excellent electrical properties and dimensional stability.",
      icon: "⚡",
      materials: ["ABS Granules", "Anti-static Masterbatch", "Flame Retardant Masterbatch", "Conductive Additives"],
      applications: [
        "Electronic housings",
        "Circuit board components",
        "Cable insulation",
        "Connectors",
        "Switch components",
        "Display bezels"
      ],
      requirements: ["Electrical insulation", "Anti-static properties", "Flame retardancy", "Dimensional stability"],
      caseStudy: "Supplied specialty ABS grades to electronics manufacturer, improving product reliability by 15%."
    },
    {
      title: "Healthcare & Medical",
      description: "Medical-grade plastic materials meeting stringent safety and regulatory requirements.",
      icon: "🏥",
      materials: ["Medical Grade PVC", "PP Granules", "Anti-microbial Masterbatch", "Clear Grades"],
      applications: [
        "Medical devices",
        "Syringes and tubes",
        "Laboratory equipment",
        "Pharmaceutical packaging",
        "Hospital furniture",
        "Diagnostic equipment"
      ],
      requirements: ["Biocompatibility", "Sterilization resistance", "Chemical resistance", "Regulatory compliance"],
      caseStudy: "Certified supplier for medical device manufacturer, maintaining 99.9% quality compliance rate."
    },
    {
      title: "Consumer Goods",
      description: "Aesthetic and functional plastic materials for household and personal care products.",
      icon: "🎨",
      materials: ["PP Granules", "PE Granules", "Color Masterbatch", "Pearl Effect Masterbatch"],
      applications: [
        "Household appliances",
        "Toys and games",
        "Furniture components",
        "Cosmetic packaging",
        "Kitchenware",
        "Storage containers"
      ],
      requirements: ["Aesthetic appeal", "Safety compliance", "Durability", "Cost effectiveness"],
      caseStudy: "Developed custom color matching for premium appliance brand, achieving exact brand color requirements."
    }
  ];

  const applicationsByProduct = [
    {
      product: "Plastic Granules",
      sectors: [
        { name: "Automotive", percentage: 25, applications: "Bumpers, interior trim, under-hood components" },
        { name: "Packaging", percentage: 35, applications: "Films, bottles, containers, bags" },
        { name: "Construction", percentage: 20, applications: "Pipes, profiles, structural components" },
        { name: "Electronics", percentage: 10, applications: "Housings, connectors, insulation" },
        { name: "Others", percentage: 10, applications: "Furniture, appliances, medical devices" }
      ]
    },
    {
      product: "Masterbatches",
      sectors: [
        { name: "Packaging", percentage: 40, applications: "Food packaging, industrial films" },
        { name: "Consumer Goods", percentage: 25, applications: "Appliances, toys, furniture" },
        { name: "Automotive", percentage: 15, applications: "Interior coloring, UV protection" },
        { name: "Construction", percentage: 10, applications: "Weather resistance, aesthetics" },
        { name: "Others", percentage: 10, applications: "Agriculture, textiles, electronics" }
      ]
    },
    {
      product: "Plastic Tiles",
      sectors: [
        { name: "Industrial", percentage: 45, applications: "Factory floors, warehouses" },
        { name: "Commercial", percentage: 30, applications: "Offices, retail spaces, hospitals" },
        { name: "Residential", percentage: 15, applications: "Basements, garages, workshops" },
        { name: "Infrastructure", percentage: 10, applications: "Public buildings, transport hubs" }
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Industries & Applications
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our plastic materials serve diverse industries with tailored solutions for specific requirements.
              From automotive to healthcare, we supply quality materials that meet industry standards.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-3xl mx-auto">
              Specialized plastic material solutions for various industrial sectors with specific performance requirements.
            </p>
          </div>

          <div className="space-y-16">
            {industries.map((industry, index) => (
              <div key={index} className="card hover:shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="text-center lg:text-left">
                      <div className="text-6xl mb-4 text-center">
                        {industry.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">
                        {industry.title}
                      </h3>
                      <p className="text-[var(--muted)] mb-6">
                        {industry.description}
                      </p>
                      <div className="bg-[var(--background-gray)] p-4 rounded-lg">
                        <h4 className="font-semibold text-[var(--foreground)] mb-2">Success Story</h4>
                        <p className="text-sm text-[var(--muted)] italic">
                          "{industry.caseStudy}"
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-[var(--foreground)] mb-3">Materials Supplied</h4>
                        <ul className="space-y-2">
                          {industry.materials.map((material, materialIndex) => (
                            <li key={materialIndex} className="flex items-center">
                              <span className="text-[var(--primary)] mr-2">•</span>
                              <span className="text-[var(--muted)]">{material}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[var(--foreground)] mb-3">Key Applications</h4>
                        <ul className="space-y-2">
                          {industry.applications.map((application, appIndex) => (
                            <li key={appIndex} className="flex items-center">
                              <span className="text-[var(--accent)] mr-2">✓</span>
                              <span className="text-[var(--muted)]">{application}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="md:col-span-2">
                        <h4 className="font-semibold text-[var(--foreground)] mb-3">Technical Requirements</h4>
                        <div className="flex flex-wrap gap-2">
                          {industry.requirements.map((requirement, reqIndex) => (
                            <span key={reqIndex} className="bg-[var(--primary)]/10 text-[var(--primary)] px-3 py-1 rounded-full text-sm font-medium">
                              {requirement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications by Product Section */}
      <section className="py-20 bg-[var(--background-gray)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Market Distribution by Product
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-3xl mx-auto">
              Understanding how our products serve different market sectors and their primary applications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {applicationsByProduct.map((product, index) => (
              <div key={index} className="card hover:shadow-xl">
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6 text-center">
                  {product.product}
                </h3>
                <div className="space-y-4">
                  {product.sectors.map((sector, sectorIndex) => (
                    <div key={sectorIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-[var(--foreground)]">{sector.name}</span>
                        <span className="text-[var(--primary)] font-bold">{sector.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div
                          className="bg-[var(--primary)] h-2 rounded-full"
                          style={{ width: `${sector.percentage}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-[var(--muted)] mb-4">
                        {sector.applications}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-6">
                Custom Solutions for Unique Requirements
              </h2>
              <p className="text-lg text-[var(--muted)] mb-8">
                Every industry has unique challenges. Our expertise in supply chain management allows us to source
                specialized materials and work with manufacturers to meet your specific requirements.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-2xl mr-4">🎯</div>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)] mb-2">Application Analysis</h3>
                    <p className="text-[var(--muted)]">We analyze your specific use case to recommend the most suitable materials.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-4">⚗️</div>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)] mb-2">Custom Formulations</h3>
                    <p className="text-[var(--muted)]">Work with manufacturers to develop custom grades and formulations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📊</div>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)] mb-2">Performance Testing</h3>
                    <p className="text-[var(--muted)]">Comprehensive testing to ensure materials meet your specifications.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-[var(--primary)] text-white rounded-2xl p-8">
                <div className="text-6xl mb-6">🔧</div>
                <h3 className="text-2xl font-bold mb-4">Technical Consulting</h3>
                <p className="mb-6">
                  Our technical team provides expert guidance on material selection,
                  processing parameters, and application optimization.
                </p>
                <Link href="/contact" className="bg-white text-[var(--primary)] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block">
                  Consult Our Experts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--secondary)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find the Right Material for Your Application?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact our technical team to discuss your specific requirements and get expert recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Browse Products
            </Link>
            <Link href="/contact" className="border-2 border-white hover:bg-white hover:text-[var(--secondary)] px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Get Technical Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}