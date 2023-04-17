import React from 'react';
import myImage from '../public/assets/myImage.jpg';
import Image from 'next/image';

const About: React.FunctionComponent = (): React.ReactElement => {
	return (
		<div className="w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<p className=" uppercase text-xl tracking-widest text-[#5651e5]">
						About
					</p>
					<h2 className="py-4">Who I am</h2>
					<p className="py-2 text-gray-600">I am not your normal developer</p>
					<p className="py-2 text-gray-600">
						I consider myself a strong junior developer. My main stack is
						React/Node.js I have experience with relational databases as well as
						NoSQL databases such as MongoDB. I exclusively use TypeScript in my
						projects. I am a dedicated, organized and methodical individual. I
						have good interpersonal skills, am an excellent team worker and am
						keen and very willing to learn and develop new skills. What I found
						fascinating about programming is that you always learn something
						new.
					</p>
					<p className="py-2 text-gray-600">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic nisi
						labore numquam eum dolorem adipisci eaque corrupti voluptatem
						voluptatum quia corporis voluptate perspiciatis sapiente, illum
						cumque soluta animi esse, nulla nesciunt voluptates, quibusdam
						eligendi. Ad vel assumenda eveniet error iste aliquam quae molestiae
						laboriosam ducimus obcaecati excepturi perferendis, placeat fugit?
					</p>
					<p className="py-2 text-gray-600 underline cursor-pointer">
						Check out some of my latest projects
					</p>
				</div>
				<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<Image className="rounded-xl" src={myImage} alt="/" />
				</div>
			</div>
		</div>
	);
};

export default About;
