import React from 'react';
const Experience = () => {
  const experiences = [{
    id: 1,
    role: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    duration: '2021 - Present',
    description: 'Lead development of microservices architecture for enterprise clients. Mentored junior developers and implemented CI/CD pipelines that reduced deployment time by 40%.',
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'MongoDB']
  }, {
    id: 2,
    role: 'Full Stack Developer',
    company: 'Digital Solutions LLC',
    duration: '2018 - 2021',
    description: 'Developed and maintained multiple web applications for clients in finance and healthcare sectors. Implemented responsive designs and RESTful APIs.',
    technologies: ['JavaScript', 'Express', 'PostgreSQL', 'Bootstrap', 'Git']
  }, {
    id: 3,
    role: 'Frontend Developer',
    company: 'WebCraft Studios',
    duration: '2016 - 2018',
    description: 'Created interactive user interfaces and implemented design systems. Collaborated with designers to ensure pixel-perfect implementations.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'SASS']
  }];
  return <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200"></div>
          {experiences.map((exp, index) => <div key={exp.id} className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-600 border-2 border-white z-10"></div>
              {/* Content */}
              <div className="md:w-1/2 p-1">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-indigo-600 font-medium mb-2">
                    {exp.company}
                  </p>
                  <p className="text-slate-500 text-sm mb-3">{exp.duration}</p>
                  <p className="text-slate-600 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => <span key={techIndex} className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>)}
                  </div>
                </div>
              </div>
              {/* Empty Space for Timeline */}
              <div className="md:w-1/2"></div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Experience;