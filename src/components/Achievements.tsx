import React, { useRef } from "react";
import { useInView } from "../hooks/useInView";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";

const Achievements = () => {
  const [ref, isInView] = useInView();
  const sliderRef = useRef<HTMLDivElement>(null);

  const images = [
    "/IBM-img1.jpeg",
    "/IBM-img2.jpeg",
    "/IBM-img3.jpeg"
  ];

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const { scrollLeft, clientWidth } = sliderRef.current;

    const scrollAmount = direction === "left" 
      ? scrollLeft - clientWidth 
      : scrollLeft + clientWidth;

    sliderRef.current.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            IBM Ideathon Achievement
          </h2>

          {/* Card */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
            {/* Header */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
                <Award className="h-8 w-8 text-white" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  IBM ICE Ideathon Participant
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  Presented “TaaS — Tree-as-a-Service” • 2024
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10 text-lg">
              Participated in IBM’s Ideation Challenge where our team presented 
              <strong> TaaS — Tree-as-a-Service</strong>, a sustainability-focused platform enabling 
              transparent, geotagged tree tracking, automated carbon-credit validation, and farmer income support.  
              I prepared the Business Requirements Document (BRD) and developed the prototype website, turning the 
              concept into a practical, functional model.
            </p>

            {/* Horizontal Image Carousel */}
            <div className="relative">
              {/* Left Arrow */}
              <button
                onClick={() => scroll("left")}
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 dark:bg-gray-700 p-3 rounded-full shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                <ChevronLeft className="h-6 w-6 text-gray-800 dark:text-gray-200" />
              </button>

              {/* Slider */}
              <div
                ref={sliderRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth scrollbar-hide"
              >
                {images.map((img, index) => (
                  <div
                    key={index}
                    className="min-w-[80%] md:min-w-[40%] lg:min-w-[30%] snap-center"
                  >
                    <img
                      src={img}
                      alt={`IBM Ideathon ${index + 1}`}
                      className="rounded-xl shadow-lg object-cover w-full h-72 md:h-80 lg:h-96 transition-transform hover:scale-[1.02]"
                    />
                  </div>
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={() => scroll("right")}
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 dark:bg-gray-700 p-3 rounded-full shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                <ChevronRight className="h-6 w-6 text-gray-800 dark:text-gray-200" />
              </button>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm mt-6 italic text-center">
              Swipe on mobile • Use arrows on desktop to explore the presentation photos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
