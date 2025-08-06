import { Link } from 'react-router-dom'

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Admissions', path: '/admission' },
    { name: 'Special Curriculum', path: '/special-curriculum' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Student Corner', path: '/student-corner' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Sankalp School</h3>
                <p className="text-gray-400 text-sm">Embrace the Unique!</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Nurturing young minds with quality education, moral values, and
              innovative learning approaches. Building tomorrow's leaders
              through excellence and character development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div>
                <p className="font-medium text-white">Address</p>
                <p className="text-sm">
                  123 Education Street
                  <br />
                  Knowledge City, State - 123456
                </p>
              </div>
              <div>
                <p className="font-medium text-white">Phone</p>
                <p className="text-sm">+91 98765 43210</p>
              </div>
              <div>
                <p className="font-medium text-white">Email</p>
                <p className="text-sm">info@sankalpschool.edu.in</p>
              </div>
              <div>
                <p className="font-medium text-white">Office Hours</p>
                <p className="text-sm">
                  Mon - Fri: 8:00 AM - 4:00 PM
                  <br />
                  Sat: 8:00 AM - 12:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Sankalp School. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer 