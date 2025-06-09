import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const HeroSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (!slides || slides.length === 0) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides])

  if (!slides || slides.length === 0) {
    return (
      <div className="relative h-[600px] bg-gradient-to-br from-blue-600 to-orange-500 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Sankalp School</h1>
          <p className="text-xl mb-8">Empowering Special Needs Education</p>
          <Link to="/about" className="btn-primary">
            Learn More
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-orange-500">
            {/* Content overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center text-center text-white px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                {slide.title}
              </h1>
              {slide.subtitle && (
                <h2 className="text-xl md:text-2xl mb-6 text-blue-100 animate-slide-up">
                  {slide.subtitle}
                </h2>
              )}
              <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up">
                {slide.description}
              </p>
              <div className="space-x-4">
                <Link to={slide.buttonLink} className="btn-primary">
                  {slide.buttonText}
                </Link>
                <button className="btn-outline bg-white bg-opacity-20 border-white text-white hover:bg-white hover:text-blue-600">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-110' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center text-white transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center text-white transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}

export default HeroSlider 