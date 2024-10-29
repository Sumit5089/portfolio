import Image from "next/image";
import {
  FaGithub,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import "font-awesome/css/font-awesome.min.css";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-white font-sans">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4 shadow-lg border-b border-gray-800 mx-8 mt-4">
        <h1 className="text-3xl font-bold mr-4 bg-gradient-to-r from-green-200 via-green-500 to-green-600 bg-clip-text text-transparent">
          DevServe
        </h1>
        &nbsp; &nbsp;
        <div className="flex items-center justify-center gap-10 px-80 py-3 bg-gradient-to-r from-green-100 via-green-500 to-green-700 rounded-full w-100%">
          <nav className="flex gap-16 text-black font-medium">
            {["Home", "Price", "Contact", "Portfolio"].map((item) => (
              <a
                href="#"
                className="hover:text-gray-200 transition-colors duration-300 text-lg relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100"
                key={item}
              >
                {item}
              </a>
            ))}
          </nav>
          &nbsp; &nbsp; &nbsp;
          <button className="bg-black text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-gray-700 hover:scale-105 hover:shadow-xl transition duration-300 transform">
            Demo
          </button>
        </div>
      </header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-10">
        {/* Portfolio Section */}
        <div className="bg-gradient-to-r from-green-300 via-green-400 to-green-600 rounded-2xl p-10 flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300 shadow-lg cursor-pointer">
          <div className="text-5xl font-bold text-white text-center">
            <p className="uppercase tracking-wide">Portfolio</p>
          </div>
          <div className="text-white text-3xl mt-6 animate-bounce transition duration-300">
            &#10132;
          </div>
        </div>

        {/* Blog Section */}
        <div className="bg-gradient-to-r from-green-300 via-green-400 to-green-600 rounded-2xl p-10 flex flex-col justify-between hover:scale-105 transition-transform duration-300 shadow-lg cursor-pointer">
          <h2 className="text-5xl font-bold text-white">Blog</h2>
          <div className="text-white text-3xl mt-4 animate-bounce transition duration-300">
            &#10132;
          </div>
        </div>

        {/* Project Inquiry Section */}
        <div className="bg-gradient-to-r from-green-300 via-green-400 to-green-600 rounded-2xl p-10 flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300 shadow-lg cursor-pointer">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
            {/* Copy icon */}
            Have a project in mind?
          </h2>
          <button className="bg-gray-100 text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 shadow-md">
            Copy Email &nbsp; &nbsp;
            <i className="fa fa-copy mr-2" aria-hidden="true"></i>
          </button>
        </div>

        {/* About Section */}
        <div className="bg-gradient-to-r from-green-300 via-green-400 to-green-600 rounded-2xl p-10 flex items-center justify-center text-center hover:scale-105 transition-transform duration-300 shadow-lg">
          <p className="text-lg font-light text-white">
            Passionate about development and offering top-notch services.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg overflow-hidden">
          <Image
            src="/images/iphone2.jpeg"
            alt="iPhone"
            layout="fill" // Use layout="fill" to cover the div
            className="object-cover" // Make the image cover the entire div
          />
        </div>

        {/* Resources Section */}
        <div className="bg-gradient-to-r from-green-300 via-green-400 to-green-600 rounded-2xl p-10 flex flex-col justify-between hover:scale-105 transition-transform duration-300 shadow-lg cursor-pointer">
          <h2 className="text-5xl font-bold text-white">Resources</h2>
          <p className="mt-4 text-sm text-gray-200">
            All materials and guides in one place. Click below to visit our
            service page.
          </p>
          <div className="text-white text-3xl mt-4 animate-bounce transition duration-300">
            &#10132;
          </div>
        </div>

        {/* Email Subscription Section */}
        <div className="col-span-2 bg-gradient-to-r from-green-300 via-green-400 to-green-600 rounded-2xl p-10 flex flex-col items-center transition-transform transform hover:scale-105 shadow-lg">
          <p className="text-2xl font-semibold mb-6 text-white text-center">
            Get design tips & guidlines in your inbox directly
          </p>
          <div className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-white text-black px-5 py-3 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200"
            />
            <button className="bg-gradient-to-r from-green-700 to-green-900 text-white px-6 py-3 rounded-r-lg font-semibold transition-transform transform hover:scale-105 shadow-md">
              Request
            </button>
          </div>
        </div>

        {/* Stack Section */}
<div className="col-span-1 bg-gradient-to-r from-green-300 via-green-400 to-green-600 rounded-2xl p-10 flex flex-col items-center gap-6 hover:scale-105 transition-transform duration-300 shadow-lg">
  <h2 className="text-2xl font-semibold mb-6 text-white">
    Stack we use
  </h2>
  <div className="flex gap-6">
    {[
      "reactnative.png",
      "mongodb.png",
      "figma.png",
      "nextjs.png",
      "vercel.png",
    ].map((icon, idx) => (
      <div
        key={idx}
        className="bg-white p-4 rounded-lg shadow-lg transition-shadow duration-200 hover:shadow-xl flex items-center justify-center"
      >
        <Image
          src={`/images/${icon}`}
          alt={icon.replace("-icon.png", "")}
          width={50}
          height={50}
          className="hover:scale-125 transition-transform duration-200"
        />
      </div>
    ))}
  </div>
</div>

      </div>

      {/* Social Icons Section */}
      <div className="flex justify-center gap-8 py-10">
        {[FaGithub, FaInstagram, FaFacebookF, FaEnvelope, FaTwitter].map(
          (Icon, idx) => (
            <Icon
              key={idx}
              className="text-white text-3xl hover:text-green-300 transition-colors duration-300 transform hover:scale-110 cursor-pointer"
            />
          )
        )}
      </div>
    </div>
  );
}
