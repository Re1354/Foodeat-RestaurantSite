import React from "react";
import about1 from "../../assets/event1.jpg";
import about2 from "../../assets/event4.jpeg";
import about3 from "../../assets/event3.jpeg";
import about4 from "../../assets/event2.jpg";
import about5 from "../../assets/event5.jpeg";
import about6 from "../../assets/event6.jpeg";
import about7 from "../../assets/event7.jpeg";

import chef1 from "../../assets/chef1.jpg";
import chef2 from "../../assets/chef2.jpg";
import chef3 from "../../assets/chef3.jpg";
import chef4 from "../../assets/chef4.jpeg";
import chef5 from "../../assets/chef5.jpeg";
import chef6 from "../../assets/chef6.jpeg";


const chefs = [
  {
    name: "Bonnie Green",
    role: "Executive Chef",
    image: chef1,
    description: "Bonnie is a culinary expert with a passion for creating innovative dishes that delight the senses.",
  },
  {
    name: "James Lee",
    role: "Pastry Specialist",
    image: chef2,
    description: "James crafts exquisite desserts that turn every meal into a celebration.",
  },
  {
    name: "Sophia Kim",
    role: "Head Sous Chef",
    image: chef3,
    description: "Sophia ensures flawless execution in the kitchen with creativity and precision.",
  },
  {
    name: "Sophia Kim",
    role: "Head Sous Chef",
    image: chef4,
    description: "Sophia ensures flawless execution in the kitchen with creativity and precision.",
  },
  {
    name: "Sophia Kim",
    role: "Head Sous Chef",
    image: chef5,
    description: "Sophia ensures flawless execution in the kitchen with creativity and precision.",
  },
  {
    name: "Sophia Kim",
    role: "Head Sous Chef",
    image: chef6,
    description: "Sophia ensures flawless execution in the kitchen with creativity and precision.",
  },
];

const Banner = () => {
  return (
    <div className="container py-14">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-wide text-gray-800">About Us</h1>
        <p className="mt-2 text-gray-900 text-lg max-w-xl mx-auto">
          A glimpse into our restaurant’s special events and proud achievements — moments that reflect our passion, excellence, and unforgettable experiences.
        </p>
      </div>

      {/* Flowing Event Images */}
      <div className="w-full overflow-hidden py-10">
        <div className="flex animate-marquee gap-6">
          {[about1, about2, about3, about4, about5, about6].map((img, index) => (
            <img
              key={`set1-${index}`}
              src={img}
              alt={`event-${index}`}
              className="h-60 w-auto rounded-xl shadow-lg object-cover"
            />
          ))}
          {[about1, about2, about3, about4, about5, about6].map((img, index) => (
            <img
              key={`set2-${index}`}
              src={img}
              alt={`event-copy-${index}`}
              className="h-60 w-auto rounded-xl shadow-lg object-cover"
            />
          ))}
        </div>
      </div>

      {/* Chef Section */}
      <div className="mt-16">
        <h1 className="text-4xl font-semibold text-left text-gray-800/990 mb-10 underline-offset-2 pl-4">Meet Our <span className="text-black font-extrabold">Key Employees</span> — </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto ">
          {chefs.map((chef, index) => (
            <div
            key={`${chef.name}-${index}`}
            className="
  bg-white/10 dark:bg-white/5 backdrop-blur-md  border border-white/20  dark:border-white/10 rounded-xl  flex flex-col items-center p-6 text-gray-800  dark:text-gray-200  hover:scale-105 
 hover:shadow-xl 
  hover:border-orange-400 
  dark:hover:border-orange-500 
  transition-all 
  duration-300 
  ease-in-out
"

          >
            <img
              className="w-24 h-24 mb-4 rounded-full shadow-lg object-cover transition-transform duration-500 hover:scale-110"
              src={chef.image}
              alt={chef.name}
            />
            <h5 className="text-xl text-orange-500 font-semibold dark:text-white mb-1 transition-colors duration-300">
              {chef.name}
            </h5>
            <span className="font-semibold text-gray-950 mb-2">{chef.role}</span>
            <p className="text-sm font-medium text-gray-[850] text-center">{chef.description}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
