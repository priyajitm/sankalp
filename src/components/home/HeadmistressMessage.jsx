const HeadmistressMessage = ({ data }) => {
  if (!data) return null

  return (
    <section className="py-20 bg-[#b1a08f7a]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          {/* <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">
                Leadership
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
              Message from Headmistress
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-400 mx-auto mb-8"></div>
          </div> */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Headmistress Image */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative group">
                <div className="w-80 h-80 relative">
                  {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-orange-100 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div> */}
                  <div className="relative w-full h-full bg-white rounded-3xl p-2 shadow-xl">
                    <img
                      src={"images/15.png"}
                      alt={`Headmistress Photo`}
                      className="w-full h-full object-cover object-top rounded-2xl"
                    />
                  </div>
                </div>
                {/* Decorative elements */}
                {/* <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-[#524b4d] to-[#b1a08f7a] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-[#b1a08f7a] to-[#524b4d] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div> */}
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2">
              {/* Name and Title */}
              <div className="mb-8">
                <h3 className="text-3xl font-light text-gray-900 mb-2">
                  {data.name}
                </h3>
                <p className="text-xl text-gray-900 font-medium">
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
                  <p className="text-lg text-gray-700 leading-relaxed font-light italic">
                    "{data.message}"
                  </p>

                  {/* Quote */}
                  {data.quote && (
                    <div className="border-l-4 border-gradient-to-b from-blue-500 to-orange-400 pl-6 py-4 bg-gradient-to-r from-blue-50/50 to-orange-50/50 rounded-r-2xl">
                      <p className="text-lg text-gray-800 font-medium italic leading-relaxed">
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