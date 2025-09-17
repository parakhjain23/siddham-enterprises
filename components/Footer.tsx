import Link from 'next/link';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Applications', href: '/applications' },
  ];

  const products = [
    { name: 'Plastic Granules', href: '/products#granules' },
    { name: 'Masterbatches', href: '/products#masterbatches' },
    { name: 'Plastic Tiles', href: '/products#tiles' },
  ];

  return (
    <footer className="bg-[var(--secondary)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Siddham Enterprises</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading supplier and trader of premium plastic materials. We provide reliable supply chain solutions for plastic granules, masterbatches, and tiles across India.
            </p>
            <div className="flex space-x-4">
              <a
                href="tel:+919999999999"
                // className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center gap-2"
                className='border-2 border-gray-400 hover:border-white hover:bg-white hover:text-gray-800 !text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200'
              >
                📞 Call Now
              </a>
              <Link
                href="/contact"
                className="border-2 border-gray-400 hover:border-white hover:bg-white hover:text-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product.name}>
                  <Link
                    href={product.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Siddham Enterprises. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-gray-300">
                <span className="mr-2">📧</span>
                <a href="mailto:info@siddhamenterprises.com" className="hover:text-white">
                  info@siddhamenterprises.com
                </a>
              </div>
              <div className="text-gray-300">
                <span className="mr-2">📞</span>
                <a href="tel:+919999999999" className="!text-white">
                  +91 99999 99999
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}