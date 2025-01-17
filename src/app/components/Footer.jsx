import React from "react";

const Footer = () => {

    const scrollToSection = (event) => {
      event.preventDefault(); 
      const href = event.currentTarget.getAttribute('href'); 
      const offsetTop = document.querySelector(href).offsetTop;
  
      window.scroll({
        top: offsetTop,
        behavior: 'smooth'
      });
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    };

  return (
    <footer className="bg-[#e7e5e5] text-white mt-24 relative">
      <div
        data-aos="fade-down"
        data-aos-duration="800"
        className="container mx-auto px-12 py-8 z-10 relative"
      >
        <div className="flex flex-col md:flex-row justify-between items-start lg:space-x-8">
          <div className="mb-6 md:mb-0 flex-shrink-0">
            <img
              src="../../images/logo.png"
              alt="Logo"
              className="ml-8 mr-20 h-48 w-48 mb-4"
            />
          </div>
          <div className="mb-6 md:mb-0">
            <h1 className="mt-4 mb-4 text-5xl text-transparent bg-clip-text bg-gradient-to-br from-[#181818] via-[#6e6e6e] to-[#a4a4a4] font-black">
              Banana Ripeness Check
            </h1>
            <p className="text-sm my-2 lg:my-0 lg:pr-8 font-medium leading-7">
              A web application designed to accurately detect the ripeness of bananas 
              using upport Vector Machine (SVM) algorithms, 
              it analyzes various features of bananas to determine their maturity level with high precision. 
              Whether you're a farmer, vendor, or consumer, it ensures you always pick the perfect banana.
            </p>
          </div>
          <div className="mb-6 md:mb-0 lg:flex-grow">
            <h5 className="text-2xl font-black mb-2 text-[#ADB7BE]"></h5>
          </div>
          <div className="mb-6 md:mb-0 lg:flex-grow">
            <h5 className="text-2xl font-black mb-2 text-[#ADB7BE]"></h5>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 z-10 relative">
          <p className="text-xs justify-center text-center">
            &copy; {new Date().getFullYear()} by Name
          </p>
        </div>
      </div>
      <svg
        className="absolute bottom-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#343434"
          fill-opacity="0.4"
          d="M0,32L60,53.3C120,75,240,117,360,128C480,139,600,117,720,144C840,171,960,245,1080,245.3C1200,245,1320,171,1380,133.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </footer>
  );
};

export default Footer;
