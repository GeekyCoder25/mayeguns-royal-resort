'use client';
import styles from '../styles/Gallery.module.scss';
import MainBg from '../components/MainBg';
import {useState} from 'react';

const galleryHeaders = [
	{title: 'all', images: ['grid1']},
	{
		title: 'hotel',
		images: [
			'grid5',
			'grid9',
			'grid13',
			'grid15',
			'grid16',
			'grid22',
			'grid29',
		],
	},
	{
		title: 'bedrooms',
		images: ['grid40', 'grid42', 'grid43', 'grid44', 'grid45', 'grid50'],
	},
	{title: 'rooftop', images: ['grid5', 'grid9', 'grid13', 'grid22']},
	{title: 'restaurant', images: ['grid41']},
	{title: 'spa', images: ['grid4']},
	{title: 'gym', images: ['grid7']},
	{title: 'health care', images: ['grid3']},
];
const Gallery = () => {
	const [selctedTab, setSelctedTab] = useState('all');
	for (let i = 2; i < 50; i++) {
		galleryHeaders[0].images?.push(`grid${i}`);
	}
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
				<section>
					{galleryHeaders.map(
						item =>
							item.title === selctedTab &&
							item.images?.map(image => (
								<div key={image}>
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
