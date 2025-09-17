import { Metadata } from 'next';
import QuoteForm from '../../components/QuoteForm';

export const metadata: Metadata = {
  title: 'Products - Plastic Granules, Masterbatches & Tiles | Siddham Enterprises',
  description: 'Comprehensive range of plastic materials including PP, PE, ABS, PVC granules, color masterbatches, and plastic tiles. Quality assured supplies for all industrial needs.',
};

export default function Products() {
  const plasticGranules = [
    {
      name: "PP (Polypropylene) Granules",
      description: "High-quality polypropylene granules suitable for injection molding, blow molding, and extrusion applications.",
      specifications: ["Melt Flow Rate: 1-35 g/10min", "Density: 0.90-0.91 g/cm³", "Tensile Strength: 30-40 MPa"],
      applications: ["Automotive parts", "Packaging films", "Household items", "Industrial components"],
      grades: ["Virgin Grade", "Recycled Grade", "Filled Grade"],
      image: "🔵"
    },
    {
      name: "PE (Polyethylene) Granules",
      description: "Premium polyethylene granules in LDPE, HDPE, and LLDPE variants for diverse manufacturing needs.",
      specifications: ["Density: 0.91-0.97 g/cm³", "Melt Index: 0.1-100 g/10min", "Tensile Strength: 8-35 MPa"],
      applications: ["Plastic bags", "Bottles", "Pipes", "Wire insulation"],
      grades: ["LDPE", "HDPE", "LLDPE"],
      image: "⚪"
    },
    {
      name: "ABS Granules",
      description: "Engineering-grade ABS (Acrylonitrile Butadiene Styrene) granules with excellent impact resistance.",
      specifications: ["Tensile Strength: 40-50 MPa", "Impact Strength: 300-400 J/m", "Heat Deflection: 90-110°C"],
      applications: ["Electronics housing", "Automotive trim", "Toys", "Appliance parts"],
      grades: ["General Purpose", "High Impact", "Flame Retardant"],
      image: "🟡"
    },
    {
      name: "PVC Granules",
      description: "Versatile PVC (Polyvinyl Chloride) granules for rigid and flexible applications.",
      specifications: ["Density: 1.38-1.45 g/cm³", "Tensile Strength: 50-80 MPa", "Shore Hardness: 40-90"],
      applications: ["Pipes & fittings", "Window profiles", "Cables", "Medical devices"],
      grades: ["Rigid PVC", "Flexible PVC", "Medical Grade"],
      image: "🟢"
    }
  ];

  const masterbatches = [
    {
      name: "Color Masterbatch",
      description: "High-concentration color pellets for vibrant and consistent coloring of plastic products.",
      specifications: ["Carrier Resin: PE/PP/PS", "Pigment Loading: 25-50%", "Dispersion: Excellent"],
      applications: ["Injection molding", "Blow molding", "Extrusion", "Rotomolding"],
      colors: ["Standard Colors", "Custom Matching", "Metallic Effects", "Pearl Effects"],
      image: "🌈"
    },
    {
      name: "Additive Masterbatch",
      description: "Functional additives to enhance plastic properties and performance characteristics.",
      specifications: ["Active Ingredient: 10-80%", "Thermal Stability: High", "Compatibility: Universal"],
      applications: ["UV protection", "Anti-static properties", "Flame retardancy", "Anti-microbial"],
      types: ["UV Stabilizer", "Anti-Static", "Flame Retardant", "Anti-Block"],
      image: "⚗️"
    },
    {
      name: "Filler Masterbatch",
      description: "Cost-effective filler materials to reduce production costs while maintaining quality.",
      specifications: ["Filler Content: 70-80%", "Particle Size: 1-3 microns", "Whiteness: 85-95%"],
      applications: ["Film applications", "Injection molding", "Blown products", "Sheet extrusion"],
      types: ["CaCO3 Based", "Talc Based", "BaSO4 Based"],
      image: "⚫"
    }
  ];

  const plasticTiles = [
    {
      name: "Floor Tiles",
      description: "Durable and slip-resistant plastic floor tiles suitable for industrial and commercial use.",
      specifications: ["Thickness: 5-20mm", "Size: 300x300mm to 600x600mm", "Load Capacity: 500-1000 kg/m²"],
      applications: ["Factory floors", "Warehouses", "Offices", "Retail spaces"],
      features: ["Water Resistant", "Chemical Resistant", "Easy Maintenance", "Quick Installation"],
      image: "🟫"
    },
    {
      name: "Wall Tiles",
      description: "Lightweight and aesthetic plastic wall tiles for interior and exterior applications.",
      specifications: ["Thickness: 3-8mm", "Size: 200x200mm to 400x400mm", "Fire Rating: B1/B2"],
      applications: ["Bathroom walls", "Kitchen backsplash", "Office interiors", "Clean rooms"],
      features: ["Moisture Proof", "Stain Resistant", "Thermal Insulation", "Sound Absorption"],
      image: "🟦"
    },
    {
      name: "Interlocking Tiles",
      description: "Modular interlocking plastic tiles for temporary and permanent flooring solutions.",
      specifications: ["Thickness: 10-25mm", "Size: 400x400mm", "Connection: Snap-lock system"],
      applications: ["Event flooring", "Sports facilities", "Garage floors", "Exhibition areas"],
      features: ["Tool-free Installation", "Reusable", "Load Distribution", "Drainage System"],
      image: "🧩"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Product Catalog
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive range of plastic materials sourced from trusted manufacturers.
              Quality assured supplies for all your industrial requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Plastic Granules Section */}
      <section className="py-20" id="granules">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Plastic Granules
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-3xl mx-auto">
              Premium quality plastic granules in various grades and specifications for manufacturing applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {plasticGranules.map((product, index) => (
              <div key={index} className="card hover:shadow-xl">
                <div className="flex items-start mb-6">
                  <div className="text-4xl mr-4">
                    {product.image}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">
                      {product.name}
                    </h3>
                    <p className="text-[var(--muted)]">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-[var(--foreground)] mb-2">Specifications</h4>
                    <ul className="space-y-1 text-sm text-[var(--muted)]">
                      {product.specifications.map((spec, specIndex) => (
                        <li key={specIndex}>• {spec}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[var(--foreground)] mb-2">Applications</h4>
                    <ul className="space-y-1 text-sm text-[var(--muted)]">
                      {product.applications.map((app, appIndex) => (
                        <li key={appIndex}>• {app}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-[var(--foreground)] mb-2">Available Grades</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.grades.map((grade, gradeIndex) => (
                      <span key={gradeIndex} className="bg-[var(--background-gray)] px-3 py-1 rounded-full text-sm font-medium">
                        {grade}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border)]">
                  <a href="#quote" className="btn-primary inline-block">
                    Request Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Masterbatches Section */}
      <section className="py-20 bg-[var(--background-gray)]" id="masterbatches">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Masterbatches
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-3xl mx-auto">
              High-quality masterbatches for coloring and enhancing plastic properties with consistent performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {masterbatches.map((product, index) => (
              <div key={index} className="card hover:shadow-xl">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">
                    {product.image}
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-[var(--muted)]">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[var(--foreground)] mb-2">Specifications</h4>
                    <ul className="space-y-1 text-sm text-[var(--muted)]">
                      {product.specifications.map((spec, specIndex) => (
                        <li key={specIndex}>• {spec}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[var(--foreground)] mb-2">Applications</h4>
                    <ul className="space-y-1 text-sm text-[var(--muted)]">
                      {product.applications.map((app, appIndex) => (
                        <li key={appIndex}>• {app}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[var(--foreground)] mb-2">
                      {product.colors ? 'Colors Available' : product.types ? 'Types Available' : 'Variants'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(product.colors || product.types || []).map((item, itemIndex) => (
                        <span key={itemIndex} className="bg-[var(--primary)]/10 text-[var(--primary)] px-3 py-1 rounded-full text-sm font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border)]">
                  <a href="#quote" className="btn-primary w-full text-center">
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plastic Tiles Section */}
      <section className="py-20" id="tiles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Plastic Tiles
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-3xl mx-auto">
              Durable and versatile plastic tiles for flooring and wall applications in various environments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plasticTiles.map((product, index) => (
              <div key={index} className="card hover:shadow-xl">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">
                    {product.image}
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-[var(--muted)]">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[var(--foreground)] mb-2">Specifications</h4>
                    <ul className="space-y-1 text-sm text-[var(--muted)]">
                      {product.specifications.map((spec, specIndex) => (
                        <li key={specIndex}>• {spec}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[var(--foreground)] mb-2">Applications</h4>
                    <ul className="space-y-1 text-sm text-[var(--muted)]">
                      {product.applications.map((app, appIndex) => (
                        <li key={appIndex}>• {app}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[var(--foreground)] mb-2">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="bg-[var(--accent)]/10 text-[var(--accent)] px-2 py-1 rounded text-sm font-medium">
                          ✓ {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border)]">
                  <a href="#quote" className="btn-primary w-full text-center">
                    Request Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-20 bg-[var(--secondary)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quality Assurance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every product undergoes rigorous quality checks to ensure consistent performance and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-xl font-bold mb-2">Lab Testing</h3>
              <p className="text-gray-300">Comprehensive testing for all material properties</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-xl font-bold mb-2">Certification</h3>
              <p className="text-gray-300">ISO certified quality management systems</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">Batch Tracking</h3>
              <p className="text-gray-300">Complete traceability from source to delivery</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-2">Quality Guarantee</h3>
              <p className="text-gray-300">100% satisfaction guarantee on all products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20" id="quote">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Get Your Custom Quote
            </h2>
            <p className="text-xl text-[var(--muted)]">
              Specify your requirements and get competitive pricing within 24 hours.
            </p>
          </div>

          <QuoteForm />
        </div>
      </section>
    </div>
  );
}