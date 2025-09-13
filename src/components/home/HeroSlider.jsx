import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeroSlider = ({ slides }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Import the slider images
  const sliderImages = [
    "images/slider/1.png",
    "images/slider/2.png",
    "images/slider/3.png",
  ];

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % sliderImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40"></div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${
              index === currentImageIndex
                ? "bg-white scale-125 shadow-lg"
                : "bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center text-white px-4 z-20">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-4xl font-bold mb-4 animate-fade-in text-white drop-shadow-2xl"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
          >
            Welcome to Sankalp School
          </h1>
          <h2
            className="text-xl mb-6 text-white animate-slide-up font-semibold drop-shadow-xl"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.7)" }}
          >
            Empowering Children with Special Needs Since 1997
          </h2>
          <p
            className="text-lg mb-8 mx-auto leading-relaxed animate-slide-up text-white drop-shadow-lg"
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.6)" }}
          >
            A world where children with special needs and typically developing
            children recognize abilities, not disabilities, and learn together
            in high-quality, inclusive environments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
