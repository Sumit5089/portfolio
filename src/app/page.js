import Image from "next/image";
import {
  FaGithub,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import "font-awesome/css/font-awesome.min.css";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black h-[100vh] text-white font-sans">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-2 shadow-lg border-b border-gray-800 mx-8 h-[10vh]">
        <h1 className="text-3xl font-bold mr-4 bg-gradient-to-r from-green-200 via-green-500 to-green-600 bg-clip-text text-transparent">
          DevServe
        </h1>
        <div className="flex items-center justify-center gap-10 px-80 py-3 bg-gradient-to-r from-green-100 via-green-500 to-green-400 rounded-full w-100%">
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
          <button className="bg-black text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-gray-700 hover:scale-105 hover:shadow-xl transition duration-300 transform ml-auto">
            Demo
          </button>
        </div>
      </header>

      {/* Main Content Grid */}
      <div className="w-full  h-[90vh] flex items-center justify-between p-5 gap-3">
        {/* DIV 1 */}
        <div className="w-3/4 h-full flex flex-col gap-3">
        
       <div className="w-full  h-3/4 flex items-center gap-3">
        {/* PORFOLIO SECTION */}
        <div className="w-2/5 h-full bg-slate-800">
          
         <div className="bg-gradient-to-r from-green-300 via-green-400 to-green-600 rounded-2xl p-12 w-full h-full flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300 shadow-lg cursor-pointer ">
            <div className="text-5xl font-bold text-white text-center">
              <p className="uppercase tracking-wide">Portfolio</p>
            </div>
            <div className="text-white text-3xl mt-6 animate-bounce transition duration-300">
              &#10132;
            </div>
          </div>
        </div>
        {/* BLOG WALA SECTION */}
          <div className="w-3/5 h-full flex flex-col items-center gap-3">
         <div className="flex items-center justify-between w-full h-1/3 gap-3">
         <div className="bg-gradient-to-r from-green-300 via-green-400 to-green-600 rounded-2xl p-10  flex flex-col justify-center hover:scale-105 transition-transform duration-300 shadow-lg cursor-pointer w-2/3 h-full">
            <h2 className="text-5xl font-bold text-white">Blog</h2>
            <div className="text-white text-3xl mt-4 animate-bounce transition duration-300">
              &#10132;
            </div>
          </div>

          {/* Project Inquiry Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 w-1/3 h-full">
            {/* "Have a project in mind?" Section */}
            <div className="bg-gradient-to-r from-green-300 via-green-400 to-green-600 rounded-2xl p-6 h-full w-full flex flex-col items-center hover:scale-105 transition-transform duration-300 shadow-lg cursor-pointer ">
              <h2 className="text-lg font-semibold text-white mb-4">
                Have a project in mind?
              </h2>
              <button className="bg-gray-100 text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 shadow-md flex items-center">
                <i className="fa fa-copy mr-2" aria-hidden="true"></i> Copy
                Email
              </button>
            </div>

            {/* Social Media Icons in Vertical Column */}
          </div>
         </div>
<div className="flex w-full h-2/3 items-center gap-3 ">

          {/* About Section */}
          <div className="flex items-center justify-center bg-gradient-to-r from-green-300 via-green-400 to-green-600 rounded-2xl p-10  text-center hover:scale-105 transition-transform duration-300 shadow-lg w-1/3 h-full">
            <p className="text-lg font-light text-white">
              Passionate about development and offering top-notch services.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg overflow-hidden w-2/3 h-full ">
            <Image
              src="/images/iphone2.jpeg"
              alt="iPhone"
              layout="fill" // Use layout="fill" to cover the div
              className="object-cover" // Make the image cover the entire div
            />
          </div>
</div>

          </div>
       </div>
        <div className="w-full h-1/4  flex items-center justify-center gap-5">
            {/* Email Subscription Section */}
            <div className="col-span-1 bg-gradient-to-r from-green-300 via-green-400 to-green-600 rounded-2xl p-10 flex flex-col items-center transition-transform transform hover:scale-105 shadow-lg h-44 -my-16 w-1/2">
            <p className="text-2xl font-semibold mb-6 text-white text-center">
              Get design tips & guidelines in your inbox directly
            </p>
            <div className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-white text-black px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200"
              />
              <button className="bg-gradient-to-r from-green-700 to-green-900 text-white px-6 py-3 rounded-r-lg font-semibold transition-transform transform hover:scale-105 shadow-md">
                Request
              </button>
            </div>
          </div>

          {/* Stack Section */}
          <div className="col-span-1 bg-gradient-to-r from-green-300 via-green-400 to-green-600 rounded-2xl p-10 flex flex-col items-center gap-6 hover:scale-105 transition-transform duration-300 shadow-lg h-44 -my-16 w-1/2">
            <h2 className="text-2xl font-semibold mb-1 text-white">
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
        </div>

        {/* DIV 2 */}
        <div className="flex flex-col  w-1/4  h-full items-center justify-between p-2">
          <div className="flex flex-col items-center  w-full h-1/4 ">
            {/* Top row of icons */}
            <div className="flex  ">
              {[FaGithub, FaInstagram, FaFacebookF].map((Icon, idx) => (
                <Icon
                  key={idx}
                  className="text-white text-5xl hover:text-green-300 transition-colors duration-300 transform hover:scale-110 cursor-pointer"
                />
              ))}
            </div>

            {/* Bottom row of icons */}
            <div className="flex space-x-6">
              {[FaEnvelope, FaTwitter, FaLinkedin].map((Icon, idx) => (
                <Icon
                  key={idx}
                  className="text-white text-5xl hover:text-green-300 transition-colors duration-300 transform hover:scale-110 cursor-pointer"
                />
              ))}
            </div>
          </div>
          {/* Resources Section */}
          <div className="bg-gradient-to-r from-green-300 via-green-400 to-green-600 rounded-2xl p-10 flex flex-col justify-between  hover:scale-105 transition-transform duration-300 shadow-lg cursor-pointer mx-8 w-full h-3/4">
            <h2 className="text-5xl font-bold text-white">Resources</h2>
            <p className="mt-4 text-xl text-gray-200">
              Materials, the complete guide of our services at one place. Click
              below to redirect to the company's service page.
            </p>
            <div className="text-white text-3xl mt-4 animate-bounce transition duration-300">
              &#10132;
            </div>
          </div>
        </div>
      </div>

      {/* DIV 2 */}
    </div>
  );
}