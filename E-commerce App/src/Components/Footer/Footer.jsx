import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white py-8 mt-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">E-Commerce</h3>
            <p className="text-gray-400">
              Your one-stop shop for all your needs. Quality products, great
              prices, and exceptional customer service.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="text-gray-400 hover:text-white">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.56c-.88.39-1.83.65-2.82.77 1.01-.61 1.79-1.57 2.16-2.71-.95.56-2.01.97-3.13 1.19-.9-.96-2.18-1.56-3.6-1.56-2.72 0-4.93 2.21-4.93 4.93 0 .39.04.77.13 1.14-4.1-.2-7.73-2.17-10.15-5.16-.42.72-.66 1.56-.66 2.46 0 1.7.87 3.21 2.18 4.09-.81-.03-1.57-.25-2.23-.62v.06c0 2.37 1.69 4.35 3.93 4.8-.41.11-.84.16-1.29.16-.31 0-.62-.03-.92-.09.63 1.96 2.45 3.39 4.61 3.43-1.68 1.32-3.8 2.11-6.1 2.11-.4 0-.79-.02-1.18-.07 2.18 1.4 4.76 2.22 7.55 2.22 9.05 0 14-7.49 14-13.97 0-.21 0-.42-.01-.63.96-.69 1.8-1.56 2.46-2.54z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.04c-5.5 0-10 4.45-10 9.93 0 4.99 3.66 9.12 8.43 9.88.61.11.84-.27.84-.6 0-.3-.01-1.09-.02-2.14-3.36.73-4.07-1.62-4.07-1.62-.55-1.4-1.35-1.77-1.35-1.77-1.1-.74.08-.73.08-.73 1.21.09 1.85 1.23 1.85 1.23 1.08 1.82 2.83 1.3 3.52.99.11-.78.42-1.3.76-1.6-2.68-.3-5.5-1.34-5.5-5.97 0-1.32.47-2.39 1.24-3.24-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.31 1.23a11.42 11.42 0 0 1 3.02-.41c1.02 0 2.04.14 3.02.41 2.3-1.55 3.31-1.23 3.31-1.23.66 1.65.24 2.87.12 3.17.77.85 1.24 1.92 1.24 3.24 0 4.64-2.82 5.66-5.51 5.96.43.37.82 1.1.82 2.21 0 1.6-.02 2.88-.02 3.27 0 .33.23.71.84.6 4.77-.76 8.43-4.89 8.43-9.88 0-5.48-4.5-9.93-10-9.93z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.04 3C6.24 3 4 5.24 4 8.04v7.92c0 2.8 2.24 5.04 5.04 5.04h7.92c2.8 0 5.04-2.24 5.04-5.04V8.04c0-2.8-2.24-5.04-5.04-5.04H9.04zm5.03 2c1.13 0 2.1.97 2.1 2.1s-.97 2.1-2.1 2.1-2.1-.97-2.1-2.1.97-2.1 2.1-2.1zm-2.13 12.57c-2.53 0-4.62-2.1-4.62-4.62s2.1-4.62 4.62-4.62 4.62 2.1 4.62 4.62-2.1 4.62-4.62 4.62zm0-2.1c1.4 0 2.52-1.12 2.52-2.52s-1.12-2.52-2.52-2.52-2.52 1.12-2.52 2.52 1.12 2.52 2.52 2.52z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
