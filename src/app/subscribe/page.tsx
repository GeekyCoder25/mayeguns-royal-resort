'use client';
import styles from '../styles/Subscribe.module.scss';
import Button from '../components/Button';
import {useRef, useState} from 'react';

const Subscribe = () => {
	const [formData, setformData] = useState({
		level: '',
		firstName: '',
		lastName: '',
		email: '',
		phoneNo: '',
		age: '',
		occupation: '',
		homeAddress: '',
		officeAddress: '',
		accNo: '',
		accName: '',
		bankName: '',
	});
	const levelRef = useRef<any>('');
	const handleLevelClick = (e: any) => {
		//@ts-ignore
		const levelButton = document.querySelectorAll(
			`.${styles.subscribe} > div > span`
		);
		levelButton.forEach((element: any) =>
			element.classList.remove(styles.levelButtonError)
		);
		setformData(prev => {
			return {
				...prev,
				level: prev.level === e.target.textContent ? '' : e.target.textContent,
			};
		});
	};
	const handleSubmit = () => {
		console.log(formData);
		//@ts-ignore
		const levelButton = document.querySelectorAll(
			`.${styles.subscribe} > div > span`
		);
		levelRef.current.value.length <= 0 &&
			levelButton.forEach((element: any) =>
				element.classList.add(styles.levelButtonError)
			);
	};
	return (
		<main className={styles.subscribe}>
			<h2>Hi! Tell us all the things</h2>
			<p>I&apos;m interested in...</p>
			<div>
				<span
					style={
						formData.level === 'Platinum'
							? {
									backgroundColor: '#00a790',
									borderColor: '#00a790',
									color: '#fff',
							  }
							: undefined
					}
					onClick={(e: any) => handleLevelClick(e)}
				>
					Platinum
				</span>
				<span
					style={
						formData.level === 'Diamond'
							? {
									backgroundColor: 'blue',
									borderColor: 'blue',
									color: '#fff',
							  }
							: undefined
					}
					onClick={(e: any) => handleLevelClick(e)}
				>
					Diamond
				</span>
				<span
					style={
						formData.level === 'Silver'
							? {
									backgroundColor: 'silver',
									borderColor: 'silver',
									color: '#000',
							  }
							: undefined
					}
					onClick={(e: any) => handleLevelClick(e)}
				>
					Silver
				</span>
			</div>
			<form action="https://formsubmit.co/toyibe25@gmail.com" method="POST">
				<div>
					<input
						type="text"
						value={formData.level}
						required
						ref={levelRef}
						className={styles.level}
						onChange={(e: any) =>
							setformData(prev => {
								return {...prev, level: e.target.value};
							})
						}
						// readOnly
					/>
					<label htmlFor="firstName">First Name</label>
					<input
						type="text"
						name="firstName"
						id="firstName"
						placeholder="Enter your first name here"
						required
						onChange={(e: any) => {
							setformData(prev => {
								return {...prev, [e.target.name]: e.target.value};
							});
						}}
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
						onChange={(e: any) => {
							setformData(prev => {
								return {...prev, [e.target.name]: e.target.value};
							});
						}}
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
						onChange={(e: any) => {
							setformData(prev => {
								return {...prev, [e.target.name]: e.target.value};
							});
						}}
					/>
				</div>
				<div>
					<label htmlFor="tel">Phone No</label>
					<input
						type="tel"
						name="tel"
						id="tel"
						placeholder="Enter your phone number"
						required
						onChange={(e: any) => {
							setformData(prev => {
								return {...prev, [e.target.name]: e.target.value};
							});
						}}
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
						onChange={(e: any) => {
							setformData(prev => {
								return {...prev, [e.target.name]: e.target.value};
							});
						}}
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
						onChange={(e: any) => {
							setformData(prev => {
								return {...prev, [e.target.name]: e.target.value};
							});
						}}
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
						onChange={(e: any) => {
							setformData(prev => {
								return {...prev, [e.target.name]: e.target.value};
							});
						}}
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
						onChange={(e: any) => {
							setformData(prev => {
								return {...prev, [e.target.name]: e.target.value};
							});
						}}
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
						onChange={(e: any) => {
							setformData(prev => {
								return {...prev, [e.target.name]: e.target.value};
							});
						}}
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
						onChange={(e: any) => {
							setformData(prev => {
								return {...prev, [e.target.name]: e.target.value};
							});
						}}
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
						onChange={(e: any) => {
							setformData(prev => {
								return {...prev, [e.target.name]: e.target.value};
							});
						}}
					/>
				</div>
				<input
					type="hidden"
					name="_cc"
					value="Infomayegunroyalresort@gmail.com"
				/>
				<input
					type="hidden"
					name="_next"
					value={'https://mayegunsoryalresort.com/congrats'}
				/>
				<input type="hidden" name="_subject" value="Mayegun Royal Resorts" />
				<input type="hidden" name="_captcha" value="false" />
				<Button title="Subscribe" type="submit" onClick={handleSubmit} />
			</form>
		</main>
	);
};

export default Subscribe;
