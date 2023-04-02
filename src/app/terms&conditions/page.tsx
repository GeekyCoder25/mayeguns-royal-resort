import styles from '../styles/Terms.module.scss';
import {termsData} from '../utils/dataStorage';

const Terms = () => {
	return (
		<section className={styles.Terms}>
			<section className={styles.termsHeaderBg}>
				<section className={styles.termsHeader}>
					TERMS & CONDITIONS FOR RESORT ACCOMMODATION
				</section>
			</section>
			<section className={styles.termsContent}>
				{termsData.map(term => (
					<div key={term.title}>
						<h2>{term.title}</h2>
						<ol>
							{term.content.map(index =>
								typeof index === 'string' ? (
									<li key={index}>{index}.</li>
								) : (
									<div key={index.title}>
										<li>{index.title}.</li>
										<ol type="a">
											{index.content.map(i => (
												<li key={i}>{i}.</li>
											))}
										</ol>
									</div>
								)
							)}
						</ol>
					</div>
				))}
			</section>
		</section>
	);
};

export default Terms;
