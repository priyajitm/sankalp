const AboutSchool = ({ data }) => {
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
                {/* Placeholder for slider images */}
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-orange-100 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
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
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="font-medium">School Image Slider</p>
                    <p className="text-sm text-gray-500">
                      Images will be added here
                    </p>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition-all duration-200 opacity-50 hover:opacity-100">
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
                <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition-all duration-200 opacity-50 hover:opacity-100">
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
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  <div className="w-2 h-2 bg-white/80 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/50 rounded-full"></div>
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
