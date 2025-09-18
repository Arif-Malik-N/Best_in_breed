import React, { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const testimonials = [
  {
    rating: 5,
    quote:
      "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
    name: "Leslie Alexander",
    title: "Freelance React Developer",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
  },
  {
    rating: 5,
    quote:
      "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.",
    name: "Jacob Jones",
    title: "Digital Marketer",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
  },
  {
    rating: 5,
    quote:
      "I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.",
    name: "Jenny Wilson",
    title: "Graphic Designer",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
  },
  {
    rating: 4,
    quote:
      "Great value for the price. Customer support was amazing and really helpful throughout.",
    name: "Tom Hardy",
    title: "UX Designer",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
  },
  {
    rating: 5,
    quote:
      "My website now looks amazing! Thanks for the clean and modern template.",
    name: "Amelia Brown",
    title: "Frontend Developer",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
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
  <div className="flex flex-col overflow-hidden shadow-xl rounded-xl bg-white min-h-[300px]">
    <div className="flex flex-col justify-between flex-1 p-6 lg:py-8 lg:px-7">
      <div className="flex-1">
        <div className="flex items-center">
          {Array.from({ length: testimonial.rating }, (_, i) => (
            <StarIcon key={i} />
          ))}
        </div>
        <blockquote className="flex-1 mt-8">
          <p className="text-lg leading-relaxed text-gray-900 font-pj">
            “{testimonial.quote}”
          </p>
        </blockquote>
      </div>
      <div className="flex items-center mt-8">
        <img
          className="flex-shrink-0 object-cover rounded-full w-11 h-11"
          src={testimonial.image}
          alt={testimonial.name}
        />
        <div className="ml-4">
          <p className="text-base font-bold text-gray-900 font-pj">
            {testimonial.name}
          </p>
          <p className="mt-0.5 text-sm font-pj text-gray-600">
            {testimonial.title}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleCount >= testimonials.length
        ? 0
        : prevIndex + visibleCount
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - visibleCount < 0
        ? testimonials.length - visibleCount
        : prevIndex - visibleCount
    );
  };

  return (
    <section>
      <div className="flex flex-col items-center">
        {/* Header */}
        <div className="text-center">
          <p className="text-lg font-medium text-gray-600 font-pj">
            2,157 people have said how good Best In Breed
          </p>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Our happy clients say about us
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative mt-10 w-full max-w-5xl">
          {/* Left Button */}
          <FaAngleLeft
            onClick={prevSlide}
            size={35}
            className="absolute left-0 lg:left-[-50px] xl:left-[-100px] top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 cursor-pointer"
          />

          {/* Slider Wrapper */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  (currentIndex / testimonials.length) * 100
                }%)`,
                width: `${(testimonials.length / visibleCount) * 100}%`,
              }}
            >
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="w-full md:w-1/3 flex-shrink-0 px-2 my-5"
                >
                  <TestimonialCard testimonial={t} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Button */}
          <FaAngleRight
            onClick={nextSlide}
            size={35}
            className="absolute right-0 lg:right-[-50px] xl:right-[-100px] top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

// const Review = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const visibleCount = 3;

//   // Auto slide every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const nextSlide = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex + visibleCount) % testimonials.length
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex(
//       (prevIndex) =>
//         (prevIndex - visibleCount + testimonials.length) % testimonials.length
//     );
//   };

//   // Show only 3 testimonials at a time
//   const getVisibleTestimonials = () => {
//     const visible = [];
//     for (let i = 0; i < visibleCount; i++) {
//       visible.push(testimonials[(currentIndex + i) % testimonials.length]);
//     }
//     return visible;
//   };

//   return (
//     <section>
//       <div className="">
//         <div className="flex flex-col items-center">
//           <div className="text-center">
//             <p className="text-lg font-medium text-gray-600 font-pj">
//               2,157 people have said how good Best In Breed
//             </p>
//             <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
//               Our happy clients say about us
//             </h2>
//           </div>

//           <div className="mt-8 text-center md:mt-16">
//             <a
//               href="#"
//               className="pb-2 text-base font-bold leading-7 text-gray-900 border-b-2 border-gray-900 hover:border-gray-600 hover:text-gray-600 font-pj"
//             >
//               Check all 2,157 reviews
//             </a>
//           </div>

//           <div className="relative mt-10 md:mt-24 w-full">
//             <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6 pointer-events-none">
//               <div
//                 className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
//                 style={{
//                   background:
//                     "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
//                 }}
//               ></div>
//             </div>

//             <div className="relative flex items-center justify-between">
//               {/* Left Button */}

//               <FaAngleLeft
//                 onClick={prevSlide}
//                 size={35}
//                 className=" left-0 z-10 p-2 text-2xl bg-white rounded-full shadow-lg hover:bg-gray-100 cursor-pointer"
//               />

//               {/* Testimonials */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mx-auto max-w-5xl w-full px-">
//                 {getVisibleTestimonials().map((t, idx) => (
//                   <TestimonialCard key={idx} testimonial={t} />
//                 ))}
//               </div>
//               {/* Right Button */}
//               <FaAngleRight
//                 onClick={nextSlide}
//                 size={35}
//                 className=" right-0 z-10 p-2 text-2xl bg-white rounded-full shadow-lg hover:bg-gray-100 cursor-pointer"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

export default Review;
