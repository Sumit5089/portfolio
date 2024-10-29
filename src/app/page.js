import Image from 'next/image';
import { FaGithub, FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4">
        <h1 className="text-green-400 text-3xl font-bold">DevServe</h1>
        <nav className="flex gap-8 text-gray-300">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">Price</a>
          <a href="#" className="hover:text-white">Contact</a>
          <a href="#" className="hover:text-white">Portfolio</a>
        </nav>
        <button className="bg-green-500 text-white px-4 py-2 rounded-full">Demo</button>
      </header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-3 gap-3 p-8">
        {/* Portfolio Section */}
        <div className="bg-green-600 rounded-xl p-6 flex flex-col justify-center items-center">
          <div className="text-5xl font-bold text-white space-y-2">
            <p>portfolio</p>
            <p>portfolio</p>
            <p>portfolio</p>
            <p className="text-sm">portfolio</p>
          </div>
          <div className="text-white text-2xl mt-4">&#10132;</div>
        </div>

        {/* Blog Section */}
        <div className="bg-green-600 rounded-xl p-6 flex flex-col justify-between">
          <h2 className="text-5xl font-bold">blog...</h2>
          <div className="text-white text-2xl">&#10132;</div>
        </div>

        {/* Project Inquiry Section */}
        <div className="bg-green-600 rounded-xl p-6 flex flex-col justify-center items-center">
          <h2 className="text-lg">Have a project in mind?</h2>
          <button className="bg-gray-100 text-black px-4 py-2 mt-4 rounded-full font-semibold">Copy Email</button>
        </div>

        {/* About Section */}
        <div className="bg-green-600 rounded-xl p-6 flex justify-center items-center text-center">
          <p>Passionate about development and offering services</p>
        </div>

        {/* Image Section */}
        <div className="bg-green-600 rounded-xl p-6">
          <Image src="/path-to-image.jpg" alt="iPhone" width={200} height={200} className="rounded-lg" />
        </div>

        {/* Resources Section */}
        <div className="bg-green-600 rounded-xl p-6 flex flex-col justify-between">
          <h2 className="text-5xl font-bold vertical-text">Resources</h2>
          <p className="mt-4 text-sm">Materials, the complete guide of our services at one place. Click below to redirect to the company's service page.</p>
          <div className="text-white text-2xl mt-4">&#10132;</div>
        </div>

        {/* Email Subscription Section */}
        <div className="col-span-2 bg-green-600 rounded-xl p-6 flex-col justify-between items-center">
          <p>Get design tips & guides in your inbox directly</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-gray-800 text-white px-4 py-2 rounded-l w-full"
            />
            <button className="bg-gray-700 text-white px-4 py-2 rounded-r">Sign up</button>
          </div>
        </div>

        {/* Stack Section */}
        <div className="col-span-1.5 bg-green-600 rounded-xl p-6 flex justify-between items-center">
          <h2>Stack we use</h2>
          <div className="flex gap-4">
            <Image src="/html-icon.png" alt="HTML" width={40} height={40} />
            <Image src="/js-icon.png" alt="JavaScript" width={40} height={40} />
            <Image src="/react-icon.png" alt="React" width={40} height={40} />
            <Image src="/java-icon.png" alt="Java" width={40} height={40} />
          </div>
        </div>
      </div>

      {/* Social Icons Section */}
      <div className="flex justify-center gap-4 py-8">
        <FaGithub className="text-white text-3xl hover:text-gray-300" />
        <FaInstagram className="text-white text-3xl hover:text-gray-300" />
        <FaFacebookF className="text-white text-3xl hover:text-gray-300" />
        <FaEnvelope className="text-white text-3xl hover:text-gray-300" />
        <FaTwitter className="text-white text-3xl hover:text-gray-300" />
      </div>
    </div>
  );
}
