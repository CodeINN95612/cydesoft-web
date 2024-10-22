export function Footer() {
  return (
    <footer className="">
      <div className="container mx-auto text-center grid justify-center items-center">
        <p className="text-sm mb-2">
          &copy; 2023 Cidesoft. All rights reserved.
        </p>
        <div className="flex flex-col md:flex-row">
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
