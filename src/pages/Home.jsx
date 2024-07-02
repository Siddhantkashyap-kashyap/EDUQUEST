import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4"; // Ensure to replace this path with the correct path to the uploaded video
import elipseImage1 from "../assets/Images/Ellipse 1.png";
import elipseImage2 from "../assets/Images/Ellipse 2.png";
import elipseImage3 from "../assets/Images/Ellipse 3.png";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import "./Home.css";
import TimelineSection from '../components/core/HomePage/TimelineSection';
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection';
import InstructorSection from '../components/core/HomePage/InstructorSection';
import Footer from '../components/common/Footer';
import ExploreMore from '../components/core/HomePage/ExploreMore';
import ReviewSlider from '../components/common/ReviewSlider';

const Home = () => {
  return (
    <div>
        {/* SECTION-1 */}
        <div className='relative mx-auto flex flex-col w-11/12 items-center max-w-maxContent text-black'>
            <Link to={"/signup"}>
                <div className='group mt-16 p-1 mx-auto rounded-full bg-gray-300 font-bold text-blue-200
                    transition-all duration-200 hover:scale-95 w-fit shadow-md shadow-pure-greys-500 bg-white'>
                    <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                        transition-all duration-200 group-hover:bg-gray-300 '>
                        <p>Become an Instructor</p>
                        <FaArrowRight/>
                    </div>
                </div>
            </Link>

            <div className='text-center text-4xl font-semibold mt-7'>
                Shape Your Tomorrow With
                <HighlightText text={"Coding Skills"} />
            </div>

            <div className='mt-4 w-[90%] text-center text-lg font-bold text-blue-400'>
                Our online coding courses allow you to learn at your own pace, from any location, with access to numerous resources such as hands-on projects, quizzes, and personalized feedback from instructors.
            </div>

            <div className='flex flex-col relative items-center gap-7 mt-32 mb-10'>
                <div className='flex flex-row gap-7 mt-10 absolute lg:z-50 bottom-[100%]'>
                    <CTAButton active={true} linkto={"/signup"}> 
                        Learn More
                    </CTAButton>

                    <CTAButton active={false} linkto={"/login"}> 
                        Book a Demo
                    </CTAButton>
                </div>

                <div className='mx-3 my-12 shadow-blue-200 relative vid1'>
                    <div>
                        <img src={elipseImage2} width={"100%"} className='absolute bottom-[1%] -z-10' alt='elipse' />
                        <img src={elipseImage1} width={"100%"} className='absolute right-[12%] top-[2%] -z-10' alt='elipse' />
                    </div>
                    <video muted loop autoPlay className='rounded-lg shadow-lg'>
                        <source src={Banner} type="video/mp4" />
                    </video> 
                </div>
            </div>

            {/* CODE-SECTION-1 */}
            <div>
                <CodeBlocks 
                    position={"lg:flex-row"}
                    heading={
                        <div className='text-4xl font-semibold'>
                            Tap Into Your
                            <HighlightText text={"coding potential"}/>
                            {" "} with our online courses
                        </div>
                    }
                    subheading={
                        
                        "Our courses are crafted and instructed by industry experts with years of coding experience and a passion for sharing their knowledge with you."
                    }
                    ctabtn1={{
                        btnText: "Try it Yourself",
                        linkto: "/signup",
                        active: true,
                    }}
                    ctabtn2={{
                        btnText: "Learn More",
                        linkto: "/login",
                        active: false,
                    }}
                    codeblock={[
                        `<!DOCTYPE html>`,
                        `<html>\n<head><title>Example</title><link rel="stylesheet" href="styles.css"></head>\n<body>`,
                        `<h1><a href="/">Header</a></h1>\n<nav><a href="one/">One</a><a href="two/">Two</a><a href="three/">Three</a></nav>\n</body>\n</html>`
                    ]}
                    codeColor={"text-yellow-25"}
                    backgroudGradient={<div className="codeblock1 absolute"></div>}
                />
            </div>

            {/* CODE-SECTION-2 */}
            <div> 
                <CodeBlocks 
                    position={"lg:flex-row-reverse"}
                    heading={
                        <div className='text-4xl font-semibold'>
                            Start 
                            <HighlightText text={`coding`}/>
                            <br />
                            <HighlightText text={` in seconds`}/>
                        </div>
                    }
                    subheading={
                        "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                    }
                    ctabtn1={{
                        btnText: "Continue Lesson",
                        linkto: "/signup",
                        active: true,
                    }}
                    ctabtn2={{
                        btnText: "Learn More",
                        linkto: "/login",
                        active: false,
                    }}
                    codeblock={[
                        `<!DOCTYPE html>`,
                        `<html>\n<head><title>Example</title><link rel="stylesheet" href="styles.css"></head>\n<body>`,
                        `<h1><a href="/">Header</a></h1>\n<nav><a href="one/">One</a><a href="two/">Two</a><a href="three/">Three</a></nav>\n</body>\n</html>`
                    ]}
                    codeColor={"text-yellow-25"}
                    backgroudGradient={<div className="codeblock2 absolute"></div>}
                />
            </div>

            <ExploreMore />
        </div>

        {/* Section 2 */}
        <div className="bg-pure-greys-5 text-richblack-700">
            <div className="homepage_bg h-[320px]">
                {/* Explore Full Catalog Section */}
                <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
                    <div className="lg:h-[150px]"></div>
                    <div className="flex flex-row gap-7 text-white lg:mt-8">
                        <CTAButton active={true} linkto={"/signup"}>
                            <div className="flex items-center gap-2">
                                Explore Full Catalog
                                <FaArrowRight />
                            </div>
                        </CTAButton>
                        <CTAButton active={false} linkto={"/login"}>
                            Learn More
                        </CTAButton>
                    </div>
                </div>
            </div>

            <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
                {/* High Demand Jobs Section */}
                <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
                    <div className="text-4xl font-semibold lg:w-[45%]">
                        Acquire the skills needed for {" "}
                        <HighlightText text={"high-demand jobs."} />
                    </div>
                    <div className="flex flex-col items-start gap-10 lg:w-[40%]">
                        <div className="text-[16px]">
                            Today, EduQuest sets its own standards. To thrive as a competitive specialist now demands more than just professional skills.
                        </div>
                        <CTAButton active={true} linkto={"/signup"}>
                            <div className="">Learn More</div>
                        </CTAButton>
                    </div>
                </div>

                {/* Timeline Section */}
                <TimelineSection />

                {/* Learning Language Section */}
                <LearningLanguageSection />
            </div>
        </div>

        {/* Section 3 */}
        <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-black">
            {/* Become an Instructor Section */}
            <InstructorSection />

            {/* Reviews from Other Learners */}
            <h1 className="text-center text-4xl font-semibold mt-8 text-black">
                Reviews from other learners
            </h1>
            <ReviewSlider />
        </div>

        {/* Footer */}
        <Footer />
    </div>
  );
};

export default Home;
