import { useState, useEffect } from 'react'
import Loader from '../components/common/Loader'
import Objectives from "../components/home/Objectives";

const About = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    import("../data/content.json")
      .then((content) => {
        setData(content.default.about);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error loading content:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Loader />;
  if (!data) return <div>Error loading content</div>;

  // Management team images
  const managementImages = [
    "images/management/15.png",
    "images/management/16.png",
    "images/management/17.png",
    "images/management/18.png",
  ];

  // PSA images
  const psaImages = [
    "images/psa/15.png",
    "images/psa/17.png",
    "images/psa/18.png",
  ];

  // Dedicated staff images
  const staffImages = [
    "images/dedicated-staff/15.png",
    "images/dedicated-staff/19.png",
    "images/dedicated-staff/20.png",
    "images/dedicated-staff/21.png",
    "images/dedicated-staff/22.png",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-white py-20 bg-[#524b4d]">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.title}</h1>
          <p className="text-xl text-blue-100">{data.subtitle}</p>
        </div>
      </section>

      {/* History Section */}
      <section className="section-primary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-secondary text-center mb-8">
              {data.history.title}
            </h2>
            <p className="text-body text-lg leading-relaxed text-justify">
              {data.history.content}
            </p>
            <p className="text-body text-lg leading-relaxed text-justify mt-8">
              {data.currentInfra.content}
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-primary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-secondary text-center mb-8">
              {data.philosophy.title}
            </h2>
            <p className="text-body text-lg leading-relaxed text-justify">
              {data.philosophy.content}
            </p>
          </div>
        </div>
      </section>

      <Objectives data={data?.objectives} />

      {/* School Management Section */}
      <section className="section-secondary bg-[#b1a08f7a]">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-12">
            {data.management.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {data.management.members.map((member, index) => (
              <div
                key={index}
                className="bg-primary rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={managementImages[index % managementImages.length]}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 text-sm font-medium">
                      {member.position}
                    </p>
                    <p className="text-gray-500 text-xs">{member.department}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Association Section */}
      <section className="section-primary">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-8">
            {data.parentAssociation.title}
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-body text-center mb-8">
              {data.parentAssociation.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.parentAssociation.members.map((member, index) => (
                <div
                  key={index}
                  className="bg-orange-50 rounded-lg p-6 text-center"
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src={psaImages[index % psaImages.length]}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-orange-600 text-sm">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="section-padding bg-[#b1a08f7a]">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-8">
            {data.staff.title}
          </h2>
          <p className="text-body text-center mb-12 max-w-3xl mx-auto">
            {data.staff.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.staff.members.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="aspect-w-4 aspect-h-1.5">
                  <img
                    src={staffImages[index % staffImages.length]}
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About 