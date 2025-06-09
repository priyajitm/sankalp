import { useState, useEffect } from 'react'
import Loader from '../components/common/Loader'

const About = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    import('../data/content.json')
      .then((content) => {
        setData(content.default.about)
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

      {/* History Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-secondary text-center mb-8">{data.history.title}</h2>
            <p className="text-body text-lg leading-relaxed">{data.history.content}</p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-secondary text-center mb-8">{data.philosophy.title}</h2>
            <p className="text-body text-lg leading-relaxed">{data.philosophy.content}</p>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-12">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.milestones?.map((milestone, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl font-bold text-blue-600">{milestone.year.slice(-2)}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                <p className="text-gray-600 text-sm">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Management Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-12">{data.management.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {data.management.members.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-lg">
                      {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 text-sm font-medium">{member.position}</p>
                    <p className="text-gray-500 text-xs">{member.department}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Association Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-8">{data.parentAssociation.title}</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-body text-center mb-8">{data.parentAssociation.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.parentAssociation.members.map((member, index) => (
                <div key={index} className="bg-orange-50 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-600 font-semibold text-lg">
                      {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-orange-600 text-sm">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-8">{data.staff.title}</h2>
          <p className="text-body text-center mb-12 max-w-3xl mx-auto">{data.staff.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.staff.members.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-blue-100 to-orange-100">
                  <div className="w-full h-48 flex items-center justify-center">
                    <div className="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-2xl">
                        {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 