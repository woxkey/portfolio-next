import Image, {StaticImageData} from 'next/image';
import React from 'react';
import Link from 'next/link';

const ProjectItem: React.FunctionComponent<{
	title: string;
	backgrondImg: StaticImageData;
	projectUrl: string;
	githubUrl: string;
	builtWith: string;
}> = ({
	title,
	projectUrl,
	backgrondImg,
	githubUrl,
	builtWith,
}): React.ReactElement => {
	return (
		<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
			<Image
				className="rounded-xl group-hover:opacity-10 w-[500px] h-[500px] object-contain"
				src={backgrondImg}
				alt="/"
			/>
			<div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
				<h3 className="text-2xl text-white tracking-wider text-center">
					{title}
				</h3>
				<p className="pb-4 pt-2 text-white text-center">{builtWith}</p>
				<div className="flex gap-6">
					<Link className="w-[200px]" href={githubUrl} target="_blank">
						<p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
							Github
						</p>
					</Link>
					<Link className="w-[200px]" href={projectUrl} target="_blank">
						<p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
							See Live
						</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProjectItem;
