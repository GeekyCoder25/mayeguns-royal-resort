'use client';
import styles from '../styles/Gallery.module.scss';
import MainBg from '../components/MainBg';
import {useState, useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Video from '../components/Video';
import {spaMenu} from '../utils/dataStorage';
const galleryHeaders = [
	{title: 'all', images: ['grid1']},
	{
		title: 'resort',
		images: ['grid5', 'grid9', 'grid13', 'grid15', 'grid16', 'grid29'],
	},
	{
		title: 'bedrooms',
		images: ['grid40', 'grid41', 'grid42', 'grid43', 'grid44', 'grid45'],
	},
	{title: 'rooftop', images: ['grid5', 'grid9', 'grid13', 'grid22']},
	{title: 'reception', images: ['grid30', 'grid32']},
	{title: 'spa', images: ['grid4', 'grid26']},
	{title: 'gym', images: ['grid16']},
	{title: 'health care', images: ['grid3']},
];
const aosArray = [
	'up',
	'right',
	'left',
	'down',
	'up-right',
	'up-left',
	'down-right',
	'down-left',
];

interface subMenuType {
	title: string;
	content?: string;
	duration: string;
}
const Gallery = () => {
	const [selctedTab, setSelctedTab] = useState('all');
	for (let i = 2; i <= 45; i++) {
		!galleryHeaders[0].images.includes(`grid${i}`) &&
			galleryHeaders[0].images?.push(`grid${i}`);
	}
	useEffect(() => {
		AOS.init({
			offset: 150,
			delay: 0,
			duration: 1000,
			once: false,
		});
	}, []);

	return (
		<main>
			<MainBg title=" Mayegun Royal Resort Gallery" />
			<section className={styles.galleryGridConatiner}>
				<div className={styles.header}>
					{galleryHeaders.map(item => (
						<h3
							key={item.title}
							onClick={() => setSelctedTab(item.title)}
							className={item.title === selctedTab ? styles.active : undefined}
						>
							{item.title.toUpperCase()}
						</h3>
					))}
				</div>

				{selctedTab === 'spa' && (
					<div className={styles.spaMenu}>
						<h2>SPA MENU</h2>
						{spaMenu.map(spa => (
							<SpaMenu key={spa.id} spa={spa} />
						))}
					</div>
				)}
				<div className={styles.videoContainer}>
					<Video styles={styles} source="video2.mp4" />
				</div>
				<section>
					{galleryHeaders.map(
						item =>
							item.title === selctedTab &&
							item.images?.map(image => (
								<div
									key={image}
									data-aos={`fade-${aosArray[Math.floor(Math.random() * 8)]}`}
								>
									<img src={`/images/pic/${image}.jpg`} alt="" />
								</div>
							))
					)}
				</section>
			</section>
		</main>
	);
};

export default Gallery;

const SpaMenu = ({spa}: {spa: any}) => {
	const [expanded, setExpanded] = useState(false);

	useEffect(() => {
		spa.id === 1 && setExpanded(true);
	}, [spa.id]);
	return (
		<div>
			<span className={styles.spaHeader}>
				<i
					className={`fas ${expanded ? 'fa-minus-circle' : 'fa-plus-circle'}`}
					onClick={() => setExpanded(prev => !prev)}
				></i>
				<h4 key={spa.title}>{spa.title}</h4>
			</span>
			{spa.subTitle.map(
				(sub: subMenuType) =>
					expanded && (
						<div key={sub.title}>
							<h5 key={sub.title}>{sub.title}</h5>
							<p>{sub.content}</p>
							<span>
								Duration:
								<i> {sub.duration}</i>
							</span>
						</div>
					)
			)}
		</div>
	);
};
