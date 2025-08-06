const HeadmistressMessage = ({ data }) => {
  if (!data) return null

  return (
    <section className="section-secondary">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-secondary">Message from Headmistress</h2>
          </div>

          <div className="flex flex-col items-center">
            {/* Headmistress Image */}
            <div className="mb-6">
              <div className="relative mx-auto w-64 h-64">
                <div className="w-full h-full bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-center text-primary-600">
                    <svg
                      className="w-20 h-20 mx-auto mb-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7V9L21 9ZM9 7V9L3 9V7L9 7ZM12 20C7 20 2 19 2 14V12C2 12 6 10 12 10S22 12 22 12V14C22 19 17 20 12 20Z" />
                    </svg>
                    <p className="text-sm font-medium">Headmistress Photo</p>
                  </div>
                </div>
                {/* Decorative Ring */}
                <div className="absolute inset-0 border-4 border-primary-300 rounded-full animate-pulse opacity-50"></div>
              </div>
            </div>

            {/* Title below photo */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {data.name}
              </h3>
              <p className="text-primary-600 font-medium text-lg">
                {data.title}
              </p>
            </div>

            {/* Message Content - Full Width */}
            <div className="w-full">
              <div className="bg-primary/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                {/* Quote Icon */}
                <div className="mb-6 text-center">
                  <svg
                    className="w-8 h-8 text-primary-400 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
                  </svg>
                </div>

                {/* Message - Justified */}
                <p className="text-body text-lg mb-6 leading-relaxed italic text-justify">
                  "{data.message}"
                </p>

                {/* Quote */}
                {data.quote && (
                  <blockquote className="border-l-4 border-primary-400 pl-4 mb-6">
                    <p className="text-primary-700 font-medium italic text-justify">
                      "{data.quote}"
                    </p>
                  </blockquote>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeadmistressMessage 