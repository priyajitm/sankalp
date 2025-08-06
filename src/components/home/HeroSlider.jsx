import { Link } from "react-router-dom";

const HeroSlider = ({ slides }) => {
  if (!slides || slides.length === 0) {
    return (
      <div className="relative h-[600px] bg-gradient-to-br from-blue-600 to-orange-500 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Sankalp School
          </h1>
          <p className="text-xl mb-8">Empowering Special Needs Education</p>
          <Link to="/about" className="btn-primary">
            Learn More
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 to-orange-500/50"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Welcome to Sankalp School
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 text-blue-100 animate-slide-up">
            Empowering Children with Special Needs Since 1997
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up">
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
