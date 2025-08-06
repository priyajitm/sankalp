import { useState } from "react";

const Mission = ({ mission, vision, values }) => {
  const [activeTab, setActiveTab] = useState("mission");
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!mission && !vision && !values) return null;

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section className="section-primary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-secondary">Our Mission, Vision & Values</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Mission & Vision Tabs */}
        {(mission || vision) && (
          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              {/* Tab Navigation */}
              <div className="flex justify-center mb-8">
                <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
                  {mission && (
                    <button
                      onClick={() => setActiveTab("mission")}
                      className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                        activeTab === "mission"
                          ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg transform scale-105"
                          : "text-gray-600 hover:text-orange-500 hover:bg-orange-50"
                      }`}
                    >
                      Our Mission
                    </button>
                  )}
                  {vision && (
                    <button
                      onClick={() => setActiveTab("vision")}
                      className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                        activeTab === "vision"
                          ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105"
                          : "text-gray-600 hover:text-blue-500 hover:bg-blue-50"
                      }`}
                    >
                      Our Vision
                    </button>
                  )}
                </div>
              </div>

              {/* Tab Content */}
              <div className="relative min-h-[200px]">
                {mission && activeTab === "mission" && (
                  <div className="animate-fade-in bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-10 shadow-lg border border-orange-200">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                        <svg
                          className="w-8 h-8 text-white"
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
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          {mission.title}
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {mission.content}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {vision && activeTab === "vision" && (
                  <div className="animate-fade-in bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-10 shadow-lg border border-blue-200">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                        <svg
                          className="w-8 h-8 text-white"
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
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          {vision.title}
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {vision.content}
                        </p>
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
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                {values.title}
              </h3>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                The principles that guide our approach to special education and
                inclusive learning
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {values.items.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-orange-100 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">{value.icon}</span>
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900">
                        {value.title}
                      </h4>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-transform duration-300 ${
                        openAccordion === index ? "rotate-180 bg-blue-100" : ""
                      }`}
                    >
                      <svg
                        className="w-5 h-5 text-gray-600"
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
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-8 pb-6">
                      <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-6 border-l-4 border-blue-500">
                        <p className="text-gray-700 leading-relaxed text-lg">
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
    </section>
  );
};

export default Mission;
