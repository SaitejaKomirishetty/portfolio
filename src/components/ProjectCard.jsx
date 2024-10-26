import React from 'react';
const ProjectCard = ({ project, index }) => {
    const isEven = index % 2 === 0;
    return (
        <div
            key={index}
            className={`flex flex-col md:flex-row ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
            } items-center gap-4 p-4 rounded-lg shadow-sm mx-auto my-4`}
        >
            <div className='w-full md:w-2/5 flex-shrink-0'>
                {project.imageLink}
            </div>
            <div className='w-full md:w-3/5 flex flex-col items-start'>
                <h2 className='text-2xl md:text-3xl font-semibold'>
                    {project.title}
                </h2>
                <p className='text-sm md:text-base'>{project.description}</p>
                <div className='flex gap-2 my-2'>
                    {project.techStack.map((Icon, index) => (
                        <div key={index}>{Icon}</div>
                    ))}
                </div>
                <div className='flex gap-4'>
                    {project.codeLink && (
                        <a
                            href={project.codeLink}
                            className='px-4 py-2 bg-gray-300 text-black rounded'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            View Code
                        </a>
                    )}
                    {project.liveDemoLink && (
                        <a
                            href={project.liveDemoLink}
                            className='px-4 py-2 bg-gray-300 text-black rounded'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            View Live
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
export default ProjectCard;
