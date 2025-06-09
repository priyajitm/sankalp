const Objectives = ({ data }) => {
  if (!data) return null

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-secondary">{data.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((objective, index) => (
            <div key={index} className="card p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm group-hover:bg-blue-700 transition-colors">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-body leading-relaxed group-hover:text-gray-800 transition-colors">
                    {objective}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-xl shadow-md inline-block">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Ready to Join Our Learning Community?
            </h3>
            <p className="text-body mb-6">
              Discover how we can help your child achieve their full potential
            </p>
            <div className="space-x-4">
              <button className="btn-primary">
                Apply for Admission
              </button>
              <button className="btn-outline">
                Schedule a Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Objectives 