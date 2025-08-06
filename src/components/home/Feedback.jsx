import React from "react";

const Feedback = ({ data }) => {
  if (!data) return null;

  return (
    <section className="section-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.items?.map((item, index) => (
            <div
              key={index}
              className="bg-primary rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-blue-600 text-xl">💬</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">Parent</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "{item.description}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback; 