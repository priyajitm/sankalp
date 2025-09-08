import { useState, useEffect } from "react";
import Loader from "../components/common/Loader";
import HeroSlider from "../components/home/HeroSlider";
import AboutSchool from "../components/home/AboutSchool";
import HeadmistressMessage from "../components/home/HeadmistressMessage";
import Mission from "../components/home/Mission";
import Objectives from "../components/home/Objectives";
import Feedback from "../components/home/Feedback";

const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    import("../data/content.json")
      .then((content) => {
        setData(content.default.home);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error loading content:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Loader message="Loading homepage content..." />;

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Welcome to Sankalp School
          </h1>
          <p className="text-gray-600">Excellence in Education</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <HeroSlider slides={data?.hero?.slides} />
      <AboutSchool data={data?.aboutSchool} />
      <HeadmistressMessage data={data?.headmistressMessage} />
      <Mission
        mission={data?.mission}
        vision={data?.vision}
        values={data?.values}
      />
      <Feedback data={data?.feedback} />
      {/* Call to Action */}
      <section className="section-padding bg-[#524b4d] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join Our Learning Community?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Discover how we can help your child achieve their full potential
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Apply for Admission
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule a Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
