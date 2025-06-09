import { useState } from 'react'
import { useGalleryContent } from '../hooks/useApi'
import Loader from '../components/common/Loader'

const Gallery = () => {
  const { data, loading, error } = useGalleryContent()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  if (loading) return <Loader message="Loading gallery..." />
  
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Photo Gallery</h1>
          <p className="text-gray-600">Explore our school moments</p>
        </div>
      </div>
    )
  }

  const allImages = data?.categories?.flatMap(category => 
    category.images.map(image => ({ ...image, category: category.name }))
  ) || []

  const filteredImages = selectedCategory === 'all' 
    ? allImages 
    : allImages.filter(image => image.category === selectedCategory)

  const categories = ['all', ...(data?.categories?.map(cat => cat.name) || [])]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-500 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="heading-primary text-white">{data?.title}</h1>
          <p className="text-xl">Capturing moments of learning, growth, and joy</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-primary-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <div className="w-full h-64 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center group-hover:from-primary-200 group-hover:to-secondary-200 transition-all duration-300">
                    <div className="text-center text-gray-600">
                      <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm font-medium">{image.caption}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-sm font-medium text-gray-900">{image.caption}</p>
                  <p className="text-xs text-gray-500">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="font-medium">{selectedImage.caption}</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{selectedImage.caption}</h3>
                <p className="text-sm text-gray-600">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery 