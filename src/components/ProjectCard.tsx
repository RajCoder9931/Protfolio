// import React from 'react';
// interface ProjectCardProps {
//   title: string;
//   description: string;
//   image: string;
//   technologies: string[];
//   demoUrl: string;
//   githubUrl: string;
// }
// const ProjectCard: React.FC<ProjectCardProps> = ({
//   title,
//   description,
//   image,
//   technologies,
//   demoUrl,
//   githubUrl
// }) => {
//   return <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
//       <div className="h-48 overflow-hidden">
//         <img src={image} alt={title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
//       </div>
//       <div className="p-6">
//         <h3 className="text-xl font-bold mb-2">{title}</h3>
//         <p className="text-slate-600 mb-4">{description}</p>
//         <div className="mb-4">
//           <div className="flex flex-wrap gap-2">
//             {technologies.map((tech, index) => <span key={index} className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">
//                 {tech}
//               </span>)}
//           </div>
//         </div>
//         <div className="flex space-x-3">
//           <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors text-sm flex items-center">
//             <span>✅ Live Demo</span>
//           </a>
//           <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-slate-300 rounded hover:bg-slate-50 transition-colors text-sm flex items-center">
//             <span>🧑‍💻 GitHub Repo</span>
//           </a>
//         </div>
//       </div>
//     </div>;
// };
// export default ProjectCard;


import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies?: string[]; // made optional
  demoUrl: string;
  githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies = [], // provide a default empty array
  demoUrl,
  githubUrl
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-slate-600 mb-4">{description}</p>
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex space-x-3">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors text-sm flex items-center"
          >
            <span>✅ Live Demo</span>
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-slate-300 rounded hover:bg-slate-50 transition-colors text-sm flex items-center"
          >
            <span>🧑‍💻 GitHub Repo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
