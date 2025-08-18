import { useState, useEffect } from "react";

const AboutSchool = ({ data }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Import the slider images
  const sliderImages = [
    "/images/slider/1.png",
    "/images/slider/2.png",
    "/images/slider/3.png",
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

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  if (!data) return null;

  return (
    <section className="section-primary">
      <div className="container-custom">
        <div className="flex flex-col gap-12 items-center">
          {/* Image Slider */}
          <div className="w-full">
            <div className="relative w-full h-96 rounded-xl overflow-hidden">
              {/* Slider Container */}
              <div className="relative w-full h-full">
                {/* Slider Images */}
                {sliderImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`School Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}

                {/* Navigation Arrows */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition-all duration-200 opacity-50 hover:opacity-100 z-10"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition-all duration-200 opacity-50 hover:opacity-100 z-10"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {sliderImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentImageIndex
                          ? "bg-white scale-125"
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-secondary mb-6">{data.title}</h2>
            <p className="text-body text-lg leading-relaxed mb-8">
              {data.description}
            </p>

            {/* Highlights */}
            <div>
              {data.highlights && Array.isArray(data.highlights) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {data.highlights.map((highlight, index) => {
                    console.log(
                      "Highlight item:",
                      highlight,
                      "Type:",
                      typeof highlight
                    );
                    return (
                      <div
                        key={index}
                        className="flex text-center gap-4 p-4 bg-secondary rounded-lg"
                      >
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {highlight?.title || "Title"}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {highlight?.description || "Description"}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSchool;
