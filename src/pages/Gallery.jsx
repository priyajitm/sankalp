import { useState, useEffect } from "react";
import Loader from "../components/common/Loader";

const Gallery = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    import("../data/content.json")
      .then((content) => {
        setData(content.default.gallery);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error loading content:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Loader message="Loading gallery..." />;

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-bold text-gray-900 mb-4">
            Photo Gallery
          </h1>
          <p className="text-lg">Explore our school moments</p>
        </div>
      </div>
    );
  }

  const allImages =
    data?.categories?.flatMap((category) =>
      category.images.map((image) => ({ ...image, category: category.name }))
    ) || [];

  const filteredImages =
    selectedCategory === "all"
      ? allImages
      : allImages.filter((image) => image.category === selectedCategory);

  const categories = [
    "all",
    ...(data?.categories?.map((cat) => cat.name) || []),
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-500 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="heading-primary text-white">{data?.title}</h1>
          <p className="text-lg">
            Capturing moments of learning, growth, and joy
          </p>
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
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-200"
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
                <div className="h-64 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="mt-3">
                  <p className="text-sm font-medium text-gray-900">
                    {image.title}
                  </p>
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
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-lg"
            >
              ✕ Close
            </button>
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="h-96">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.caption}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {selectedImage.caption}
                </h3>
                <p className="text-gray-600">{selectedImage.description}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Category: {selectedImage.category}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
