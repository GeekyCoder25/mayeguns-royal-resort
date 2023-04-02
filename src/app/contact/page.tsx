import {LocalMap} from '../components/Map';
import Reserve from '../components/Reserve';
import styles from '../styles/Contact.module.scss';

const Conatct = () => {
	return (
		<main>
			<section className={styles.direction}>
				<div>
					<h2>Located in Ijebu Ode, Ogun State, Nigeria</h2>
				</div>
				<LocalMap />
				<section>
					<div>
						<h3>Our Address</h3>
						<p>Ijebu Ode, Ogun State, Nigeria</p>
					</div>
					<div>
						<h3>From Bus stop </h3>
						<p>
							Approximately 5 minutes drive from Ijebu Ode, International
							Airport
						</p>
					</div>
					<div>
						<h3>From Airport</h3>
						<p>
							Approximately 5 minutes drive from Ijebu Ode, International
							Airport
						</p>
					</div>
				</section>
				<h3>
					Contact us if you have any questions or if you want more information
					about the hotel, we will be happy to answer your questions.
				</h3>
			</section>
			<form className={styles.form}>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Enter your name here"
					required
				/>
				<label htmlFor="email">Email Address</label>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Enter your email here"
					required
				/>
				<label htmlFor="comment">Comment or Message</label>
				<textarea
					name="comment"
					id="comment"
					cols={30}
					rows={15}
					placeholder="Enter your message here"
					required
				></textarea>
				<button type="submit" className="button">
					Send us a message
				</button>
			</form>
			<Reserve />
		</main>
	);
};

export default Conatct;
