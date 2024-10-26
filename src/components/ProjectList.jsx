import React from 'react';
import ProjectCard from './ProjectCard';
import { IconBrandCss3, IconBrandHtml5, IconBrandReact } from '@tabler/icons-react';

const ProjectList = () => {
    const projectList = [
        {
            title: 'testing 123',
            description: 'description for the project.',
            techStack: [
                <IconBrandReact />,
                <IconBrandHtml5 />,
                <IconBrandCss3 />,
            ],
            imageLink: (
                <img src='https://raw.githubusercontent.com/SaitejaKomirishetty/coffee-website/refs/heads/main/Images/home.png.png' />
            ),
            liveDemoLink:
                'https://saitejakomirishetty.github.io/coffee-website/',
            codeLink: 'https://github.com/SaitejaKomirishetty/coffee-website',
        },
        {
            title: 'testing 123',
            description: 'description for the project.',
            techStack: [
                <IconBrandReact />,
                <IconBrandHtml5 />,
                <IconBrandCss3 />,
            ],
            imageLink: (
                <img src='https://raw.githubusercontent.com/SaitejaKomirishetty/coffee-website/refs/heads/main/Images/home.png.png' />
            ),
            liveDemoLink:
                'https://saitejakomirishetty.github.io/coffee-website/',
            codeLink: 'https://github.com/SaitejaKomirishetty/coffee-website',
        },
        {
            title: 'testing 123',
            description: 'description for the project.',
            techStack: [
                <IconBrandReact />,
                <IconBrandHtml5 />,
                <IconBrandCss3 />,
            ],
            imageLink: (
                <img src='https://raw.githubusercontent.com/SaitejaKomirishetty/coffee-website/refs/heads/main/Images/home.png.png' />
            ),
            liveDemoLink:
                'https://saitejakomirishetty.github.io/coffee-website/',
            codeLink: 'https://github.com/SaitejaKomirishetty/coffee-website',
        },
        {
            title: 'testing 123',
            description:
                'description for the project.description for the project.description for the project.description for the project.description for the project.description for the project.description for the project.description for the project.description for the project.description for the project.description for the project.',
            techStack: [
                <IconBrandReact />,
                <IconBrandHtml5 />,
                <IconBrandCss3 />,
            ],
            imageLink: (
                <img src='https://raw.githubusercontent.com/SaitejaKomirishetty/coffee-website/refs/heads/main/Images/home.png.png' />
            ),
            liveDemoLink:
                'https://saitejakomirishetty.github.io/coffee-website/',
            codeLink: 'https://github.com/SaitejaKomirishetty/coffee-website',
        },
        {
            title: 'testing 123',
            description:
                'description for the project.description for the project.description for the project.description for the project.description for the project.description for the project.description for the project.description for the project.description for the project.description for the project.description for the project.',
            techStack: [
                <IconBrandReact />,
                <IconBrandHtml5 />,
                <IconBrandCss3 />,
            ],
            imageLink: (
                <img src='https://raw.githubusercontent.com/SaitejaKomirishetty/coffee-website/refs/heads/main/Images/home.png.png' />
            ),
            liveDemoLink:
                'https://saitejakomirishetty.github.io/coffee-website/',
            codeLink: 'https://github.com/SaitejaKomirishetty/coffee-website',
        },
        {
            title: 'testing 123',
            description: 'description for the project.',
            techStack: [
                <IconBrandReact />,
                <IconBrandHtml5 />,
                <IconBrandCss3 />,
            ],
            imageLink: (
                <img src='https://raw.githubusercontent.com/SaitejaKomirishetty/coffee-website/refs/heads/main/Images/home.png.png' />
            ),
            liveDemoLink:
                'https://saitejakomirishetty.github.io/coffee-website/',
            codeLink: 'https://github.com/SaitejaKomirishetty/coffee-website',
        },
    ];

    return (
        <div className='flex flex-col items-center'>
            {projectList.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
            ))}
        </div>
    );
};

export default ProjectList;
