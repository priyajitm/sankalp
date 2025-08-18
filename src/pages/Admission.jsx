import { useState, useEffect } from 'react'
import Loader from '../components/common/Loader'

const Admission = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    import('../data/content.json')
      .then((content) => {
        setData(content.default.admission)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error loading content:', error)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) return <Loader />
  if (!data) return <div>Error loading content</div>

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.title}</h1>
          <p className="text-xl text-blue-100">{data.subtitle}</p>
        </div>
      </section>

      {/* Admission Information Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-12">
            {data.admissionInfo.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.admissionInfo.details.map((detail, index) => (
              <div
                key={index}
                className="bg-blue-50 rounded-xl p-6 text-center hover:bg-blue-100 transition-colors"
              >
                <div className="text-4xl mb-4">{detail.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  {detail.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {detail.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-12">
            Admission Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.process.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements and School Timings */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Requirements */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Required Documents
              </h3>
              <ul className="space-y-4">
                {data.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* School Timings */}
            <div className="bg-orange-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {data.schoolTimings.title}
              </h3>
              <div className="space-y-6">
                {data.schoolTimings.schedule.map((timing, index) => (
                  <div
                    key={index}
                    className="border-b border-orange-200 pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-semibold text-gray-900">
                        {timing.level}
                      </span>
                      <span className="text-orange-600 font-bold">
                        {timing.time}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{timing.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary">{data.facilities.title}</h2>
            <p className="text-body text-lg max-w-3xl mx-auto mt-4">
              {data.facilities.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.facilities.items.map((facility, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Facility Image */}
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src={`images/facilities/${23 + index}.png`}
                    alt={facility.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  {/* Fallback placeholder if image fails to load */}
                  <div
                    className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-orange-100"
                    style={{ display: "none" }}
                  >
                    <div className="text-center text-gray-600">
                      <div className="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-10 h-10 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>
                      <p className="font-medium text-lg">{facility.name}</p>
                      <p className="text-sm text-gray-500">Photo placeholder</p>
                    </div>
                  </div>
                </div>

                {/* Facility Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {facility.name}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {facility.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2">
                    {facility.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Admission */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Begin Your Child's Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our admission process and
            schedule a visit to our facilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Contact Admissions
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Admission 