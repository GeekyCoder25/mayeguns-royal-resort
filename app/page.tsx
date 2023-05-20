/* eslint-disable @next/next/no-img-element */
import styles from './styles/page.module.scss';
import Button from './components/Button';
import CustomHeader from './components/CustomHeader';
import Member from './components/Member';
import Reserve from './components/Reserve';
import {exclusiveAdvantages} from './utils/dataStorage';
import Why from './components/Why';
import MainBg from './components/MainBg';
import Video from './components/Video';

export default function Home() {
	return (
		<main className={styles.main}>
			<MainBg
				modal={true}
				title="Experience the Magic of Mayegun Royal Resort"
				content="Your Gateway to a World of Fun and Relaxation"
			/>
			<section>
				<h2 className="max-page-width">Exclusive Advantages</h2>
				<div className={styles.exclusiveBg}>
					<div className={styles.exclusiveContent}>
						{exclusiveAdvantages.map(item => (
							<div key={item.title}>
								<div className={styles.exclusive}>
									<img src={`/images/${item.icon}.svg`} alt="" />
									<div>
										<h4>{item.title}</h4>
										<p>{item.content}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className={styles.about} id="about">
				<Video styles={styles} source="video.mp4" />
				<div>
					<h2>About Mayegun Royal Resort</h2>
					<p>
						Mayegun Royal Resort Limited, Ijebu Ode is strategically inclined to
						serve our distinguished clients/customer a highly private fitness
						and wellness relaxation center in an ultra modern, an exclusive and
						serene environment with various state of art facilities for both
						health and social services.
					</p>
				</div>
			</section>
			<Why />
			<Member />
			<Reserve />
			<CustomHeader
				title="Subscribe to our Newsletter"
				content="Never miss out on our most popular deals, news, promotions and events."
			/>
			<form className={styles.form}>
				<input
					type="email"
					name="emial"
					id="email"
					placeholder="Enter your email here"
					required
				/>
				<Button type="submit" title="Subscribe" />
			</form>
		</main>
	);
}
