import Image from 'next/image';
import React from 'react';

const mySkills = [
	{image: 'html.png', name: 'HTML'},
	{image: 'css.png', name: 'CSS'},
	{image: 'javascript.png', name: 'JavaScript'},
	{image: 'react.png', name: 'React'},
	{image: 'tailwind.png', name: 'Tailwind'},
	{image: 'node.png', name: 'Node.js'},
	{image: 'mongo.png', name: 'MongoDB'},
	{image: 'nextjs.png', name: 'Next.js'},
];

const Skills: React.FunctionComponent = (): React.ReactElement => {
	return (
		<div className="w-full lg:h-screen p-2">
			<div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">
					Skills
				</p>
				<h2 className="py-4">What I Can Do</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{mySkills.map((skill, i) => {
						return (
							<div
								key={i}
								className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
							>
								<div className="grid grid-cols-2 gap-4 justify-center items-center">
									<div className="m-auto">
										<Image
											src={`/../public/assets/skills/${skill.image}`}
											width="64"
											height="64"
											alt="/"
										/>
									</div>
									<div className="flex flex-col items-center justify-center">
										<h3>{skill.name}</h3>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Skills;
