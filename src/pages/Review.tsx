import React, { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { mobileFrame } from "../assets/images"; // Your mobile frame image

const testimonials = [
  {
    rating: 5,
    quote:
      "My Labrador went from wild to wonderful! The trainers are patient and professional. Best investment ever!",
    name: "Sarah M.",
    title: "Labrador Owner",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
  },
  {
    rating: 5,
    quote:
      "Our German Shepherd learned commands so quickly. The team truly understands dog behavior and training methods.",
    name: "Michael T.",
    title: "German Shepherd Owner",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
  },
  {
    rating: 5,
    quote:
      "Amazing results with our Border Collie! She’s now the best-behaved dog at the park. Thank you Best in Breed!",
    name: "Emma R.",
    title: "Border Collie Owner",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
  },
  {
    rating: 5,
    quote:
      "Best in Breed transformed our hyper Beagle into a calm companion. The progress is unbelievable!",
    name: "James H.",
    title: "Beagle Owner",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
  },
  {
    rating: 5,
    quote:
      "Our Poodle used to bark at everything. Now she’s calm and listens perfectly. Couldn’t be happier!",
    name: "Linda W.",
    title: "Poodle Owner",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
  },
  {
    rating: 5,
    quote:
      "In just a few weeks, our Bulldog is leash-trained and responsive. Highly recommend this training service!",
    name: "Carlos D.",
    title: "Bulldog Owner",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
  },
];

const StarIcon = () => (
  <svg
    className="w-5 h-5 text-[#FDB241]"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center xs:w-[250px] xs:w-[290px] mx-auto min-h-[360px]">
    <div className="flex">
      {Array.from({ length: testimonial.rating }).map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
    <p className="text-gray-700 mt-4 text-md italic">“{testimonial.quote}”</p>
    <div className="mt-6 flex flex-col items-center">
      <img
        className="w-14 h-14 rounded-full object-cover"
        src={testimonial.image}
        alt={testimonial.name}
      />
      <p className="font-semibold text-gray-900 mt-2">{testimonial.name}</p>
      <p className="text-sm text-gray-700">{testimonial.title}</p>
    </div>
  </div>
);

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="flex flex-col items-center">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-black font-pj">
          What Our Happy Clients{" "}
          <span className="text-blue-500">Are Barking About!</span>
        </h2>
        <p className="mt-2 text-base text-gray-600">
          Join hundreds of satisfied pet parents who've transformed their furry
          friends
        </p>
      </div>

      <div className="w-[100%] overflow-hidden flex flex-col items-center">
        <div
          className="mt-[200px] flex transition-transform duration-700 ease-in-out z-0"
          style={{
            // transform: `translateX(-${
            //   (currentIndex / testimonials.length) * 100
            // }%)`,
            width: `400px`,
            transform: `translateX(-${currentIndex * 100}%)`,
            // width: `${testimonials.length * 100}%`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        {/* Frame with card inside */}
        <div className="mt-[-510px] relative z-20">
          <img src={mobileFrame} alt="Mobile Frame" className="w-full h-full" />
          <div className="absolute top-[150px] left-[20px] right-[20px] bottom-[80px] overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${testimonials.length * 16.5}%`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Buttons under frame */}
          <div className="absolute bottom-[40px] left-[90px] xs:left-[110px] mt-6 flex items-center gap-6">
            <button
              onClick={prevSlide}
              className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition outline-none"
            >
              <FaAngleLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition outline-none"
            >
              <FaAngleRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
