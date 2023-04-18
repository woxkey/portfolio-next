import Image from 'next/image';
import React from 'react';
import ProjectItem from './ProjectItem';
import metamaskImg from '../public/assets/projects/metamask.png';
import calendarImg from '../public/assets/projects/myCalendar.png';

const Projects: React.FunctionComponent = (): React.ReactElement => {
	return (
		<div id="projects" className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">
					Projects
				</p>
				<h2 className="py-4">What I've Built</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<ProjectItem
						title="Crypto Wallet"
						backgrondImg={metamaskImg}
						projectUrl="https://transcendent-pudding-128b7c.netlify.app/"
						githubUrl="https://github.com/woxkey/metamaskProject"
						builtWith="React.Js / TypeScript / Tailwind"
					/>
					<ProjectItem
						title="Calendar App"
						backgrondImg={calendarImg}
						projectUrl="https://uchitest.onrender.com/"
						githubUrl="https://github.com/woxkey/uchiRuTestProject"
						builtWith="React.Js / TypeScript / Styled Components"
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
