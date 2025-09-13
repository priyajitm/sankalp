import { useState, useEffect } from 'react'
import Loader from '../components/common/Loader'

const SpecialCurriculum = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Array of available images from special-curriculam folder
  const programImages = [
    "images/special-curriculam/27.png",
    "images/special-curriculam/28.png",
    "images/special-curriculam/29.png",
    "images/special-curriculam/30.png",
    "images/special-curriculam/31.png",
  ];

  useEffect(() => {
    import("../data/content.json")
      .then((content) => {
        setData(content.default.specialCurriculum);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error loading content:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Loader />;
  if (!data) return <div>Error loading content</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#524b4d] text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-3xl font-bold mb-4 text-white">{data.title}</h1>
          <p className="text-xl mb-4 text-blue-100">{data.subtitle}</p>
          {data.description && (
            <p className="text-md max-w-4xl mx-auto text-blue-100 leading-relaxed">
              {data.description}
            </p>
          )}
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-[#b1a08f7a]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {data.programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {/* Program Image */}
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={programImages[index % programImages.length]}
                    alt={program.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {program.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  {program.features && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center gap-3"
                          >
                            <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IEP Information */}
      <section className="section-primary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-secondary mb-8">
              Individualized Educational Plans (IEP)
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-12">
              Each child's educational journey at Sankalp is guided by a
              comprehensive Individualized Educational Plan (IEP) created
              collaboratively by our team of teachers, specialists, and
              families. This ensures that every child receives education
              tailored to their unique needs and abilities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Assessment
                </h4>
                <p className="text-gray-600 text-sm">
                  Comprehensive evaluation of each child's needs and abilities
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Planning
                </h4>
                <p className="text-gray-600 text-sm">
                  Collaborative development of individualized learning goals
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Implementation
                </h4>
                <p className="text-gray-600 text-sm">
                  Execution of specialized programs and continuous monitoring
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-[#524b4d] text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold mb-4">
            Interested in Our Programs?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Learn more about how our specialized curriculum can benefit your
            child's development and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Schedule Assessment
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SpecialCurriculum 