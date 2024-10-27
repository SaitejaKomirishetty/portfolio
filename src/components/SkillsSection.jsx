import {
    IconBrandAws,
    IconBrandBootstrap,
    IconBrandCss3,
    IconBrandCypress,
    IconBrandGit,
    IconBrandGithub,
    IconBrandGitlab,
    IconBrandHtml5,
    IconBrandJavascript,
    IconBrandMysql,
    IconBrandReact,
    IconBrandRedux,
    IconBrandTailwind,
    IconBrandTypescript,
} from '@tabler/icons-react';
import React from 'react';

const skills = [
    { icon: <IconBrandHtml5 size={80} stroke={1.5} />, title: 'HTML' },
    { icon: <IconBrandCss3 size={80} stroke={1.5} />, title: 'CSS' },
    {
        icon: <IconBrandJavascript size={80} stroke={1.5} />,
        title: 'JAVA SCRIPT',
    },
    { icon: <IconBrandReact size={80} stroke={1.5} />, title: 'REACT' },
    {
        icon: <IconBrandTailwind size={80} stroke={1.5} />,
        title: 'TAILWIND CSS',
    },
    { icon: <IconBrandRedux size={80} stroke={1.5} />, title: 'REDUX' },
    {
        icon: <IconBrandTypescript size={80} stroke={1.5} />,
        title: 'TYPE SCRIPT',
    },
    { icon: <IconBrandCypress size={80} stroke={1.5} />, title: 'CYPRESS' },
    { icon: <IconBrandBootstrap size={80} stroke={1.5} />, title: 'BOOTSTRAP' },
    { icon: <IconBrandGit size={80} stroke={1.5} />, title: 'GIT' },
    { icon: <IconBrandGithub size={80} stroke={1.5} />, title: 'GITHUB' },
    { icon: <IconBrandGitlab size={80} stroke={1.5} />, title: 'GITLAB' },
    { icon: <IconBrandMysql size={80} stroke={1.5} />, title: 'MY SQL' },
    { icon: <IconBrandAws size={80} stroke={1.5} />, title: 'AWS' },
];

const SkillsSection = () => {
    return (
        <div className='text-center space-y-5 '>
            <h1 className='text-3xl font-bold'>SKILLS & TOOLS </h1>
            <p>
                The skills, tools and technologies I use to bring ideas to life:
            </p>
            <div className='flex gap-2 lg:gap-6 justify-center flex-wrap'>
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className='flex flex-col justify-center items-center hover:scale-110'
                    >
                        <div className=''>{skill.icon}</div>
                        <p>{skill.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsSection;
