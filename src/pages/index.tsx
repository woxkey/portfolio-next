import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Main from '../../components/Main';
import About from '../../components/About';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Alen | Frontend Developer</title>
			</Head>
			<Navbar />
			<Main />
			<About />
		</div>
	);
}
