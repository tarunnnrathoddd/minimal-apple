const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-5">IPhone World</h2>
          <p className="text-sm">
            We bring you the latest and greatest in technology. Get your hands
            on the new iPhone 15, now available for purchase.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-5">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/iphones" className="hover:underline">
                iPhones
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-2xl font-semibold mb-5">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <img
                src="https://www.svgrepo.com/show/183608/twitter.svg"
                alt="Twitter"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <img
                src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                alt="Instagram"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <img
                src="https://www.svgrepo.com/show/157006/linkedin.svg"
                alt="LinkedIn"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 border-t border-gray-700 pt-5">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} iPhone Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
