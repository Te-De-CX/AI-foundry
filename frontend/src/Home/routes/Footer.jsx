const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  
    return (
      <>
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-sm">
                All rights reserved &copy; {year}
              </p>
              <div className="mt-4 flex space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </a>
              </div>
              <div className="mt-4">
                <p className="text-xs text-gray-500">
                  Made with ❤️ by Your Company Name
                </p>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  };
  
  export default Footer;