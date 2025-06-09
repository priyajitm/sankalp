const Mission = ({ mission, vision, values }) => {
  if (!mission && !vision && !values) return null

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-secondary">Our Mission, Vision & Values</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Vision */}
          {vision && (
            <div className="card p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">{vision.title}</h3>
              </div>
              <p className="text-body leading-relaxed">{vision.content}</p>
            </div>
          )}

          {/* Mission */}
          {mission && (
            <div className="card p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">{mission.title}</h3>
              </div>
              <p className="text-body leading-relaxed">{mission.content}</p>
            </div>
          )}
        </div>

        {/* Core Values */}
        {values && (
          <div>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">{values.title}</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {values.items.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="card p-6 hover:shadow-lg transition-all duration-300 group-hover:bg-blue-50">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-blue-200 group-hover:to-orange-200 transition-all duration-300">
                      <span className="text-2xl">{value.icon}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h4>
                    <p className="text-body text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Mission 