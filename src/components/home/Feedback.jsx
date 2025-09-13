import React from "react";

const Feedback = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-20 bg-[#b1a08f7a]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-6 leading-tight">
              {data.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#524b4d] to-[#b1a08f7a] mx-auto mb-8"></div>
            <p className="text-md text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
              {data.description}
            </p>
          </div>

          {/* Visual Element */}
          <div className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-[16/6] bg-gradient-to-r from-blue-100 via-orange-100 to-blue-100 rounded-3xl flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#524b4d] to-[#b1a08f7a] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-gray-800 mb-2">
                    Parent & Student Stories
                  </h3>
                  <p className="text-gray-600 font-light text-md">
                    Real experiences from our school community
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feedback Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.items?.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                {/* Subtle background pattern */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50/30 to-orange-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Quote Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#524b4d] to-[#b1a08f7a] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-blue-600 font-medium">Parent</p>
                  </div>

                  <blockquote className="text-gray-700 leading-relaxed font-light text-md italic">
                    "{item.description}"
                  </blockquote>
                </div>

                {/* Subtle border accent */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-[#524b4d] to-[#b1a08f7a] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback; 