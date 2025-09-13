const HeadmistressMessage = ({ data }) => {
  if (!data) return null

  return (
    <section className="py-20 bg-[#b1a08f7a]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Headmistress Image */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative group">
                <div className="w-80 h-80 relative">
                  <div className="relative w-full h-full bg-white rounded-3xl p-2 shadow-xl">
                    <img
                      src={"images/15.png"}
                      alt={`Headmistress Photo`}
                      className="w-full h-full object-cover object-top rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2">
              {/* Name and Title */}
              <div className="mb-8">
                <h3 className="text-xl font-light text-gray-900 mb-2">
                  {data.name}
                </h3>
                <p className="text-md text-gray-900 font-medium">
                  {data.title}
                </p>
              </div>

              {/* Message Content */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 shadow-sm border border-gray-100">
                {/* Quote Icon */}
                <div className="mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#524b4d] to-[#b1a08f7a] rounded-2xl flex items-center justify-center shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
                    </svg>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-6">
                  <p className="text-md text-gray-700 leading-relaxed font-light italic">
                    "{data.message}"
                  </p>

                  {/* Quote */}
                  {data.quote && (
                    <div className="border-l-4 border-gradient-to-b from-blue-500 to-orange-400 pl-6 py-4 bg-gradient-to-r from-blue-50/50 to-orange-50/50 rounded-r-2xl">
                      <p className="text-md text-gray-800 font-medium italic leading-relaxed">
                        "{data.quote}"
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeadmistressMessage 