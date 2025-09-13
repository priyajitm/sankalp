const AboutSchool = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-20 bg-[#b1a08f7a]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Highlights Grid */}
          {data.highlights && Array.isArray(data.highlights) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
                >
                  {/* Subtle background pattern */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/30 to-orange-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#524b4d] to-[#b1a08f7a] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-6 h-6 bg-white rounded-md"></div>
                    </div>

                    <h4 className="text-lg font-semibold text-[#10182891] mb-3 transition-colors duration-300">
                      {highlight?.title || "Title"}
                    </h4>

                    <p className="text-gray-600 leading-relaxed font-light text-justify">
                      {highlight?.description || "Description"}
                    </p>
                  </div>

                  {/* Subtle border accent */}
                  <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-br from-blue-50/30 to-orange-50/30 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default AboutSchool;
