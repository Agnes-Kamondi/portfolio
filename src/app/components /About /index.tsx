import React from 'react';
import Image from 'next/image'; 

const About = () => {
  return (
    <section id="about" className="py-8 bg-white" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <div className="container mx-auto px-4">
        
        {/* Section Title */}
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold text-black-500">About Me</h2>
          <p className="text-black-500 text-xl mt-2">
            A motivated entry-level Fullstack Developer with a passion for learning and growth.
          </p>
          <div className="mt-2 h-1 w-16 bg-pink-500 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:space-x-16">
          {/* Image Section */}
          <div className="md:w-1/2 relative mb-8 md:mb-0">
            <div className="absolute -inset-4 border-4 border-pink-500 rounded-lg"></div>
            <Image
              src="/images/laptop.webp"
              alt="About Me"
              className="relative rounded-lg shadow-lg w-full h-auto"
              width={630} 
              height={630} 
            />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start space-y-6">
            <h3 className="text-4xl font-bold text-blue-900 text-center md:text-left">
              Passionate About Technology & Continuous Learning
            </h3>
            <p className="text-black-500 text-xl text-center md:text-left leading-relaxed">
              Hi, I&apos;m Agnes, a driven and enthusiastic entry-level Fullstack Developer with a strong passion for coding and problem-solving. 
              Although I am just starting my journey in software development, I am dedicated to building a solid foundation through self-learning 
              and real-world projects.
            </p>

            <p className="text-black-500 text-xl text-center md:text-left leading-relaxed">
              I have been honing my skills by building personal projects and learning from online courses, communities, and open-source contributions.
              My goal is to develop scalable web and mobile applications that provide meaningful experiences to users. I am excited to continue 
              learning and growing in this field, collaborating with other developers to create impactful solutions.
            </p>

            <a href="#contact" className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition duration-300 shadow-md">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;