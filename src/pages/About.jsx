import React from "react";

import FoundingStory from "../assets/Images/FoundingStory.png";
import BannerImage1 from "../assets/Images/aboutus1.jpg";
import BannerImage2 from "../assets/Images/aboutus2.jpeg";
import BannerImage3 from "../assets/Images/aboutus3.jpg";
import Footer from "../components/common/Footer";
import ReviewSlider from "../components/common/ReviewSlider";
import ContactFormSection from "../components/core/AboutPage/ContactFormSection";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import Quote from "../components/core/AboutPage/Quote";
import StatsComponenet from "../components/core/AboutPage/Stats";
import HighlightText from "../components/core/HomePage/HighlightText";

const About = () => {
  return (
    <div>
      <section className="bg-white">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-black">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            Pioneering Online Education for a
            <HighlightText text={"Brighter Future"} />
            <p className="mx-auto mt-3 text-center text-base font-medium text-blue-200 lg:w-[95%]">
              EduQuest leads the charge in revolutionizing online education. We
              are dedicated to shaping a brighter future through advanced
              courses, harnessing emerging technologies, and fostering a dynamic
              learning community.
            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] grid w-[90%] translate-x-[-50%] translate-y-[35%] grid-cols-3 gap-5 lg:gap-5">
            <img src={BannerImage1} alt="" />
            <img src={BannerImage2} alt="" />
            <img src={BannerImage3} alt="" />
          </div>
        </div>
      </section>

      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                The Story of Our Beginnings
              </h1>
              <p className="text-base font-medium text-blue-200 lg:w-[95%]">
                Our e-learning platform originated from a shared vision and
                passion to revolutionize education. It started with a collective
                of educators, technologists, and lifelong learners who saw the
                necessity for accessible, flexible, and top-tier learning
                opportunities in an ever-changing digital landscape.
              </p>
              <p className="text-base font-medium text-blue-200 lg:w-[95%]">
                As seasoned educators, we personally observed the constraints
                and difficulties within traditional education systems. We firmly
                believed that education shouldn't be confined to classroom walls
                or restricted by geography. Our vision was to create a platform
                capable of bridging these gaps, empowering individuals from
                diverse backgrounds to unleash their full potential.
              </p>
            </div>

            <div>
              <img
                src={FoundingStory}
                alt=""
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between ">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10 bg-blue-50 p-10">
              <h1 className="bg-gradient-to-b from-[#000000] via-[#4400ff] to-[#83e3ec] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-white lg:w-[95%]">
                With this vision in mind, we embarked on a journey to create an
                e-learning platform poised to revolutionize learning. Our
                dedicated team of experts worked tirelessly to craft a robust
                and intuitive platform that integrates cutting-edge technology
                with compelling content, cultivating a dynamic and interactive
                learning environment.
              </p>
            </div>
            <div className="my-24 flex lg:w-[40%] flex-col gap-10 bg-blue-50 p-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our mission extends beyond delivering online courses. We aimed
                to build a thriving community of learners, where individuals can
                connect, collaborate, and learn together. We believe that
                knowledge flourishes in an atmosphere of sharing and dialogue,
                and we cultivate this spirit of collaboration through forums,
                live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsComponenet />
      <div className="bg-white p-1">
        <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-black ">
          <LearningGrid />
          <ContactFormSection />
        </section>
      </div>

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-black">
        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        <ReviewSlider />
      </div>

      <Footer />
    </div>
  );
};

export default About;
