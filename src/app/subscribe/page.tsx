import styles from '../styles/Subscribe.module.scss';
import Button from '../components/Button';

const Subscribe = () => {
	return (
		<main className={`${styles.subscribe} max-page-width `}>
			<h2>Hi! Tell us all the things</h2>
			<p>I&apos;m interested in...</p>
			<div>
				<span>Platinum</span>
				<span>Diamond</span>
				<span>Silver</span>
			</div>
			<form>
				<div>
					<label htmlFor="firstName">First Name</label>
					<input
						type="text"
						name="firstName"
						id="firstName"
						placeholder="Enter your first name here"
						required
					/>
				</div>
				<div>
					<label htmlFor="lastName">Surname</label>
					<input
						type="text"
						name="lastName"
						id="lastName"
						placeholder="Enter your surname here"
						required
					/>
				</div>
				<div>
					<label htmlFor="email">Email Address</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Enter your email address here"
						required
					/>
				</div>
				<div>
					<label htmlFor="age">Age</label>
					<input
						type="number"
						name="age"
						id="age"
						placeholder="Enter your age here"
						required
					/>
				</div>
				<div>
					<label htmlFor="occupation">Occupation</label>
					<input
						type="text"
						name="occupation"
						id="occupation"
						placeholder="Enter your occupation here"
						required
					/>
				</div>
				<div>
					<label htmlFor="homeAddress">Home Address</label>
					<input
						type="text"
						name="homeAddress"
						id="homeAddress"
						placeholder="Enter your home address here"
						required
					/>
				</div>
				<div>
					<label htmlFor="officeAddress">Office Address</label>
					<input
						type="text"
						name="officeAddress"
						id="officeAddress"
						placeholder="Enter your office address here"
						required
					/>
				</div>
				<div>
					<label htmlFor="accNo">Account Number</label>
					<input
						type="text"
						name="accNo"
						id="accNo"
						placeholder="Enter your account number here"
						required
					/>
				</div>
				<div>
					<label htmlFor="accName">Account Name</label>
					<input
						type="text"
						name="accName"
						id="accName"
						placeholder="Enter your account name here"
						required
					/>
				</div>
				<div>
					<label htmlFor="bankName">Bank Name</label>
					<input
						type="text"
						name="bankName"
						id="bankName"
						placeholder="Enter your bank name here"
						required
					/>
				</div>
				<Button title="Subscribe" type="submit" />
			</form>
		</main>
	);
};

export default Subscribe;
