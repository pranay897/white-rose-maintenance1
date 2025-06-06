export default function WhiteRoseMaintenance() {
  return (
    <div className="font-sans text-gray-800">
      <header className="bg-white p-4 shadow flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src="/rose-logo.png" alt="White Rose Logo" className="h-10 w-10" />
          <h1 className="text-xl font-bold text-pink-600">White Rose Building Maintenance</h1>
        </div>
        <nav className="space-x-4 text-blue-700 font-semibold">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <section id="home" className="bg-gradient-to-r from-white to-blue-100 p-10 text-center">
        <h2 className="text-3xl font-bold text-pink-600 mb-4">Welcome to White Rose Building Maintenance</h2>
        <p className="text-lg">We specialize in all kinds of general maintenance works across the UAE</p>
      </section>

      <section id="about" className="p-10 bg-white">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">About Us</h3>
        <p>
          White Rose Building Maintenance is your trusted partner for professional and reliable services
          in Umm Al Quwain and throughout the UAE. Managed by Mr. Gampa Venkatesh, our skilled team handles everything
          from interior fit-outs to AC servicing with professionalism and precision.
        </p>
      </section>

      <section id="services" className="bg-gray-50 p-10">
        <h3 className="text-2xl font-bold text-pink-600 mb-6 text-center">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Interior & Fit-out Works",
            "Gypsum Partition",
            "Painting Works",
            "Glass & Aluminium Works",
            "False Ceiling Works",
            "Carpet Works",
            "Building General Maintenance",
            "Electrical Works",
            "Plumbing Works",
            "Carpentry Works",
            "Masonry Works",
            "General Cleaning",
            "Steel Works",
            "AC Maintenance & Servicing"
          ].map(service => (
            <div key={service} className="bg-white rounded-2xl shadow p-4 text-center hover:scale-105 transition-transform">
              <p className="text-lg font-medium">{service}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-blue-50 p-10">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">Contact Us</h3>
        <p><strong>Manager:</strong> Gampa Venkatesh</p>
        <p><strong>Phone:</strong> +971 XXXXXXXX</p>
        <p><strong>Email:</strong> info@whiterosemaintenance.com</p>
        <p><strong>Location:</strong> Umm Al Quwain, United Arab Emirates</p>
      </section>

      <footer className="bg-white p-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} White Rose Building Maintenance. All rights reserved.
      </footer>
    </div>
  );
}
