'use client';
import {useEffect} from 'react';
import styles from '../styles/Terms.module.scss';
import {policy} from '../utils/dataStorage';

const Privacy = () => {
	useEffect(() => {
		//@ts-ignore
		sessionStorage.setItem('popUpClosed', true);
	}, []);
	return (
		<section className={styles.Terms}>
			<section className={styles.termsHeaderBg}>
				<section className={styles.termsHeader}>LEGAL & POLICIES</section>
			</section>
			<section className={styles.termsContent}>
				{policy.map(term => (
					<div key={term.title} className={styles.legal}>
						<h2>{term.title}</h2>
						{term.content.map(index => (
							<p key={index}>{index}.</p>
						))}
					</div>
				))}
			</section>
		</section>
	);
};

export default Privacy;
