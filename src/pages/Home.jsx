import { useState, useEffect } from "react";
import Loader from "../components/common/Loader";
import HeroSlider from "../components/home/HeroSlider";
import AboutSchool from "../components/home/AboutSchool";
import HeadmistressMessage from "../components/home/HeadmistressMessage";
import Mission from "../components/home/Mission";
import Objectives from "../components/home/Objectives";

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
      <Objectives data={data?.objectives} />
    </div>
  );
};

export default Home;
