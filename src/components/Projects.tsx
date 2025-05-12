import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Admin from '../assets/AdminDashboard.png';
const Projects = () => {
  const [filter, setFilter] = useState('all');
  const projects = [{
    id: 1,
    title: 'Ims (Inventory Management System) ',
    description: 'Built using HTML, CSS, JavaScript, PHP, and MySQL, this system allows admins to manage customers, employees, branches, and billing efficiently.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    technologies: ['Html', 'Css', 'Javascript', 'Php', 'Sql'],
    category: 'fullstack',
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/RajCoder9931/Shivam-Stores'
  }, {
    id: 2,
    title: 'Task Notifyer Web App',
    description: 'A Trello-inspired task management application with drag-and-drop functionality.',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
    technologies: ['React', 'TypeScript', 'Firebase'],
    category: 'frontend',
    demoUrl: 'https://tasknotify.netlify.app/',
    githubUrl: 'https://github.com/RajCoder9931/Task-Notifyer'
  }, {
    id: 3,
    title: 'Quiz Web App',
    description: ' A simple and responsive quiz application developed using HTML, CSS, and  JavaScript. Features score tracking, question randomization, and user interaction.',
    image: 'https://images.unsplash.com/photo-1611746869696-d09bce200020?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    technologies: ['Html', 'Css', 'Javascript'],
    category: 'frontend',
    demoUrl: 'https://learnandearnquiz.netlify.app/',
    githubUrl: 'https://github.com/RajCoder9931/Quiz-app'
  }, {
    id: 4,
    title: 'Tourist Website (Competition Project)',
    description: ' Created using React.js with Vite and Node.js. A small interactive travel website showing popular tourist places, packages, and contact forms.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    technologies: ['JavaScript', 'HTML5', 'CSS3' , 'React', 'Node.js'],
    category: 'frontend',
    demoUrl: '',
    githubUrl: 'https://github.com/RajCoder9931/Tourism-Website'
  }, {
    id: 5,
    title: ' Job Board Platform',
    description: 'A full-stack job posting platform using React.js with Vite on the frontend, and Node.js, Express, and MongoDB on the backend. Employers can post jobs, and users can apply directly.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    technologies: ['React', 'Css', 'Javascript', 'MongoDb' , 'Bootstrap'],
    category: 'fullstack',
    demoUrl: 'https://jobboard-jfgj.onrender.com/',
    githubUrl: 'https://github.com/RajCoder9931/Job-Board'
  },{
    id: 6,
    title: ' Admin Dashboard (Under Development)',
    description: 'A comprehensive Admin Dashboard to manage sales, purchases, inventory, users, and employee records. Includes real-time analytics, role-based access, and form-based data control.',
    image: Admin,
    technologies: ['React', 'Css', 'Javascript', 'MongoDb' , 'Bootstrap'],
    category: 'fullstack',
    demoUrl: 'https://jobboard-jfgj.onrender.com/',
    githubUrl: 'https://github.com/RajCoder9931/Job-Board'
  }];
  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);
  return <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap justify-center gap-2">
            {['all', 'frontend', 'backend', 'fullstack'].map(category => <button key={category} onClick={() => setFilter(category)} className={`px-4 py-2 rounded-full text-sm ${filter === category ? 'bg-indigo-600 text-white' : 'bg-white text-slate-600 hover:bg-slate-100'} transition-colors`}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>)}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => <ProjectCard key={project.id} title={project.title} description={project.description} image={project.image} technologies={project.technologies} demoUrl={project.demoUrl} githubUrl={project.githubUrl} />)}
        </div>
      </div>
    </section>;
};
export default Projects;