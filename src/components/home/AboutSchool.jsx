const AboutSchool = ({ data }) => {
  if (!data) return null

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="heading-secondary">{data.title}</h2>
            <p className="text-body text-lg mb-8">{data.content}</p>
            
            {data.highlights && Array.isArray(data.highlights) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {data.highlights.map((highlight, index) => {
                  console.log('Highlight item:', highlight, 'Type:', typeof highlight)
                  return (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl">{highlight?.icon || '📚'}</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{highlight?.title || 'Title'}</h4>
                        <p className="text-sm text-gray-600">{highlight?.description || 'Description'}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-lg">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-orange-100 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="font-medium">Sankalp School Building</p>
                  <p className="text-sm text-gray-500">Willingdon Island, Kochi</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full opacity-70"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSchool 