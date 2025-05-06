import React from 'react';
import profileImage from'../assets/Me.jpg';
import resumePDF from '../assets/resume.pdf'; // Adjust path if you're deeper in folders
const handleResumeViewDownload = () => {
  const resumeUrl = resumePDF;

  // Open preview in a new tab
  window.open(resumeUrl, '_blank');

  // Create a temporary <a> to trigger download
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.download = 'Ravi-Raj-Tiwari-Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-indigo-600 font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Ravi Raj Tiwari
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-slate-600 mb-6">
              Full Stack Developer
            </h2>
            <p className="text-slate-600 text-lg mb-8 max-w-lg">
              I build exceptional digital experiences with modern technologies.
              Passionate about creating robust, scalable applications that solve
              real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollToSection('projects')} className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300">
                View Projects
              </button>
               <button  onClick={handleResumeViewDownload} className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors duration-300">
                 Download Resume</button>    
              </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img src={profileImage} alt="Ravi Raj Tiwari - Full Stack Developer" className="w-full h-full object-cover" />
            </div>

              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-full shadow-lg">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  19+
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;