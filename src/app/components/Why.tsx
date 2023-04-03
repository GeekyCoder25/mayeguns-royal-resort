'use client';
import styles from '../styles/Why.module.scss';
import CustomHeader from './CustomHeader';
import {gridData} from '../utils/dataStorage';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';
const Why = () => {
	useEffect(() => {
		AOS.init({
			offset: 150, // offset (in px) from the original trigger point
			delay: 0, // values from 0 to 3000, with step 50ms
			duration: 1000, // values from 0 to 3000, with step 50ms
			once: false, // whether animation should happen only once - while scrolling down
		});
	}, []);

	const pathname = usePathname();
	return (
		<section className={styles.why}>
			<div className={styles.whyHeader}>
				<CustomHeader
					title="Why Choose Us"
					content="Our luxurious and innovative solutions to relaxation is second to
						none, suitable for all our esteemed customer’s needs, we are also
						tailored to suit all refined individuals and corporate bodies."
				/>
			</div>
			<article className={styles.gridContainer}>
				{gridData.slice(0, pathname === '/' ? 4 : gridData.length).map(item => (
					<div key={item.id} data-aos={item.aos}>
						<div className={styles.img}>
							<img src={`/images/pic/grid${item.id}.jpg`} alt="" />
						</div>
						<div>
							<h4>{item.title}</h4>
							<p>{item.content}</p>
						</div>
					</div>
				))}
			</article>
			{pathname === '/' && <Link href={'/why-choose-us'}>See all</Link>}
		</section>
	);
};

export default Why;
