import React from 'react';
const About = () => {
  const skills = [{
    category: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript',  'React',  'Bootstrap']
  }, {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Python', 'Java']
  }, {
    category: 'Database',
    items: ['MongoDB',  'MySQL',  'Firebase Basic']
  }, {
    category: 'DevOps',
    items: ['Git', 'GitHub',  ]
  }];
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-slate-600 mb-6">
            I'm a passionate Full Stack Developer with 5+ years of experience
            building web applications that deliver exceptional user experiences.
            My journey in software development started with a curiosity about
            how websites work, and it evolved into a career where I solve
            complex problems using modern technologies.
          </p>
          <p className="text-lg text-slate-600">
            I specialize in building scalable applications with React on the
            frontend and Node.js/Express on the backend. When I'm not coding,
            you can find me contributing to open-source projects, writing
            technical articles, or exploring new technologies.
          </p>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">My Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => <div key={index} className="bg-slate-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold mb-4 text-indigo-600">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => <span key={skillIndex} className="bg-white px-3 py-1 rounded-full text-sm border border-slate-200 hover:border-indigo-300 transition-colors">
                      {skill}
                    </span>)}
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;