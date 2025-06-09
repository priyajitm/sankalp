import { useState, useEffect } from 'react'
import Loader from '../components/common/Loader'

const Contact = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    import('../data/content.json')
      .then((content) => {
        setData(content.default.contact)
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
          <p className="text-xl text-blue-100 mb-4">{data.subtitle}</p>
          {data.description && (
            <p className="text-lg max-w-3xl mx-auto text-blue-100">{data.description}</p>
          )}
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Details */}
            <div className="space-y-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-8">Get in Touch</h2>
              
              {/* Email */}
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email Address</h3>
                    {data.contactInfo.map((contact, index) => (
                      contact.type === 'email' && (
                        <a 
                          key={index}
                          href={contact.href}
                          className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                        >
                          {contact.value}
                        </a>
                      )
                    ))}
                  </div>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="bg-orange-50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Phone Numbers</h3>
                    <div className="space-y-2">
                      {data.contactInfo.map((contact, index) => (
                        contact.type === 'phone' && (
                          <div key={index}>
                            <p className="text-sm text-gray-600 mb-1">{contact.label}</p>
                            <a 
                              href={contact.href}
                              className="text-orange-600 hover:text-orange-800 font-medium transition-colors block"
                            >
                              {contact.displayValue}
                            </a>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-green-50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">School Address</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {data.address.name}<br />
                      {data.address.street}<br />
                      {data.address.city}, {data.address.state}<br />
                      {data.address.pincode}<br />
                      {data.address.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              
              {/* School Timings */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{data.schoolTimings.title}</h3>
                <div className="space-y-4">
                  {data.schoolTimings.schedule.map((timing, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-semibold text-gray-900">{timing.level}</span>
                        <span className="text-blue-600 font-bold">{timing.time}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{timing.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Admission Information */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{data.admissionInfo.title}</h3>
                <ul className="space-y-3">
                  {data.admissionInfo.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Directions */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{data.directions.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{data.directions.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Nearby Landmarks:</h4>
                  <ul className="space-y-2">
                    {data.directions.landmarks.map((landmark, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span className="text-gray-600 text-sm">{landmark}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-12">Our Location</h2>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="font-medium text-lg">Google Maps Location</p>
                  <p className="text-sm text-gray-500">Sankalp School, Willingdon Island, Kochi</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Get directions to our school</p>
            <a 
              href="https://www.google.com/maps/search/Willingdon+Island,+Kochi,+Kerala"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">We're Here to Help</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Have questions about our programs or admission process? Don't hesitate to reach out to us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:Sankalpsachool.2021@gmail.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Email
            </a>
            <a 
              href="tel:+919004789249"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 