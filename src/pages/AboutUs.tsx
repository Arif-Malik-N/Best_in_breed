import React from "react";
import {
  aboutPageDog,
  certificate1,
  certificate2,
  certificate3,
  certificate4,
  certificate5,
  certificates,
} from "../assets/images";
import NavigationTopBar from "../components/NavigationTopBar";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // to render every step component at the top
  }, []);

  return (
    <div>
      {/* Top bar */}
      <NavigationTopBar name="About Us" onClick={() => navigate("/")} />

      {/* Middle Text With Image */}
      <div className="my-3 sm:my-10">
        {/* Text Section */}
        <div className="xxs:text-xs xs:text-sm sm:text-base 3xl:text-lg text-gray-800 space-y-4">
          At Best in Breed Dog Training, we believe every dog deserves the
          chance to be their best self. Our mission is to help dogs and their
          owners build stronger, healthier, and happier relationships through
          trust, respect, and positive reinforcement. <br />
          <img
            src={aboutPageDog}
            alt="Dog"
            className="rounded-xl float-right ml-3 pb-3"
            // className="rounded-xl w-full h-[600px]"
          />{" "}
          <br />
          With a team of experienced trainers and behavior specialists, we offer
          customized training programs designed to meet the unique needs of
          every dog — from playful puppies to adult dogs needing behavioral
          adjustments. <br />
          <br />
          Whether it’s basic obedience, advanced skills, or correcting problem
          behaviors, we focus on creating a stress-free learning environment
          where both dogs and owners feel supported. <br />
          <br />
          <span className="font-bold">Why Choose Us?</span>
          <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
            <li>Professional, certified trainers with years of experience</li>
            <li>Positive, reward-based training methods</li>
            <li>Tailored programs for every dog’s personality and needs</li>
            <li>A caring and safe environment for growth and learning</li>
          </ul>
          <div className="py-4 2xl:py-0 3xl:py-8">
            At Best in Breed Dog Training, we’re not just training dogs — we’re
            building lifelong bonds.
          </div>
          {/* <React.Fragment>
            Non non ut sit adipiscing sed id nisl at integ ipsum dolor sit amet,
            consectetur adipiscing elit Sed non netus cum faucibus blandit. Non
            non ut sit adipiscing sed id nisl at integ ipsum dolor sit amet.
          </React.Fragment> */}
        </div>
      </div>

      {/* Certificate Section */}
      <div>
        <div className="text-center xxs:my-5 sm:my-12 2xl:my-20">
          <h1 className="xxs:text-xl xs:text-2xl sm:text-4xl font-bold">
            Training That Earns a Title
          </h1>
          <h3 className="xxs:text-xs xs:text-sm sm:text-lg">
            Every session brings your dog one step closer to certified
            obedience.
          </h3>
        </div>
        <div className="grid lg:grid-cols-3 gap-3">
          {/* Left side: certificates 1 and 2 */}
          <div>
            <img
              src={certificate1}
              alt="certificate1"
              className="w-full h-[330px] pb-3 border-b-2 border-black"
            />
            <img
              src={certificate2}
              alt="certificate2"
              className="w-full h-[330px] pt-3"
            />
          </div>

          {/* Center: certificate 3 */}
          <img
            src={certificate3}
            alt="certificate3"
            className="w-full h-[700px] border-x-2 border-black"
          />

          {/* Right side: certificates 4 and 5 */}
          <div>
            <img
              src={certificate4}
              alt="certificate4"
              className="w-full h-[330px] pb-3 border-b-2 border-black"
            />
            <img
              src={certificate5}
              alt="certificate5"
              className="w-full h-[330px] pt-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
