import { useState } from "react";

const Mission = ({ mission, vision, values }) => {
  const [activeTab, setActiveTab] = useState("mission");
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!mission && !vision && !values) return null;

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <h2 className="text-3xl font-light text-gray-900 mb-6 leading-tight">
              Our Mission, Vision & Values
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#524b4d] to-[#b1a08f7a] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto font-light">
              The guiding principles that shape our commitment to exceptional
              special education
            </p>
          </div>

          {/* Mission & Vision Tabs */}
          {(mission || vision) && (
            <div className="mb-20">
              <div className="max-w-6xl mx-auto">
                {/* Tab Navigation */}
                <div className="flex justify-center mb-12">
                  <div className="bg-white rounded-3xl p-3 shadow-lg border border-gray-100">
                    {mission && (
                      <button
                        onClick={() => setActiveTab("mission")}
                        className={`px-10 py-4 rounded-2xl font-medium text-lg transition-all duration-300 ${
                          activeTab === "mission"
                            ? "bg-[#524b4d] text-white shadow-lg"
                            : "text-gray-600 hover:text-[#524b4d] hover:bg-[#b1a08f7a]"
                        }`}
                      >
                        Our Mission
                      </button>
                    )}
                    {vision && (
                      <button
                        onClick={() => setActiveTab("vision")}
                        className={`px-10 py-4 rounded-2xl font-medium text-lg transition-all duration-300 ${
                          activeTab === "vision"
                            ? "bg-[#524b4d] text-white shadow-lg"
                            : "text-gray-600 hover:text-[#524b4d] hover:bg-[#b1a08f7a]"
                        }`}
                      >
                        Our Vision
                      </button>
                    )}
                  </div>
                </div>

                {/* Tab Content */}
                <div className="relative min-h-[300px]">
                  {mission && activeTab === "mission" && (
                    <div className="animate-fade-in bg-white rounded-3xl p-12 shadow-lg border border-gray-100">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="flex items-start gap-8">
                          <div className="w-20 h-20 bg-[#524b4d] rounded-3xl flex items-center justify-center shadow-lg flex-shrink-0">
                            <svg
                              className="w-10 h-10 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                              />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-light text-gray-900 mb-6 leading-tight">
                              {mission.title}
                            </h3>
                            <p className="text-gray-700 text-md leading-relaxed font-light">
                              {mission.content}
                            </p>
                          </div>
                        </div>
                        <div className="relative">
                          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                            <img
                              src="images/homepage/mission.jpeg"
                              alt="Mission"
                              loading="lazy"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {vision && activeTab === "vision" && (
                    <div className="animate-fade-in bg-white rounded-3xl p-12 shadow-lg border border-gray-100">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="flex items-start gap-8">
                          <div className="w-20 h-20 bg-[#524b4d] rounded-3xl flex items-center justify-center shadow-lg flex-shrink-0">
                            <svg
                              className="w-10 h-10 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-light text-gray-900 mb-6 leading-tight">
                              {vision.title}
                            </h3>
                            <p className="text-gray-700 text-md leading-relaxed font-light">
                              {vision.content}
                            </p>
                          </div>
                        </div>
                        <div className="relative">
                          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                            <img
                              src="images/homepage/vision.jpeg"
                              alt="Vision"
                              loading="lazy"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Core Values Accordion */}
          {values && (
            <div>
              <div className="text-center mb-16">
                <h3 className="text-3xl font-light text-gray-900 mb-6 leading-tight">
                  {values.title}
                </h3>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto font-light leading-relaxed">
                  The principles that guide our approach to special education
                  and inclusive learning
                </p>
              </div>

              <div className="max-w-6xl mx-auto space-y-6">
                {values.items.map((value, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full px-10 py-8 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200"
                    >
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#524b4d] to-[#b1a08f7a] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <span className="text-xl">{value.icon}</span>
                        </div>
                        <h4 className="text-md font-medium text-gray-900 transition-colors duration-300">
                          {value.title}
                        </h4>
                      </div>
                      <div
                        className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 ${
                          openAccordion === index
                            ? "rotate-180 bg-blue-100 scale-110"
                            : "group-hover:bg-blue-50"
                        }`}
                      >
                        <svg
                          className="w-6 h-6 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        openAccordion === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-10 pb-8">
                        <div className="bg-gradient-to-r from-blue-50/50 to-orange-50/50 rounded-2xl p-8 border-l-4 border-[#524b4d]">
                          <p className="text-gray-700 leading-relaxed text-md font-light">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Mission;
