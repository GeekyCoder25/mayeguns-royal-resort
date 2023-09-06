'use client';
import styles from '../styles/Subscribe.module.scss';
import Button from '../components/Button';
import {useEffect, useRef, useState} from 'react';

const Subscribe = () => {
	const [formData, setformData] = useState({
		LEVEL: '',
		FIRST_NAME: '',
		LAST_NAME: '',
		EMAIL: '',
		PHONE_NO: '',
		AGE: '',
		OCCUPATION: '',
		HOME_ADDRESS: '',
		OFFICE_ADDRESS: '',
		ACC_NO: '',
		ACC_NAME: '',
		BANK_NAME: '',
		REFER_CODE: '',
	});
	const referCodeLength = 6;
	const referCode = Array.from(Array(20), () =>
		Math.floor(Math.random() * 36).toString(36)
	)
		.join('')
		.slice(0, referCodeLength)
		.toUpperCase();
	const levelRef = useRef<any>('');
	useEffect(() => {
		const result = sessionStorage.getItem('levelSelected');
		result &&
			setformData(prev => {
				return {
					...prev,
					LEVEL: result,
					REFER_CODE: referCode,
				};
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
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
				LEVEL: prev.LEVEL === e.target.textContent ? '' : e.target.textContent,
				REFER_CODE: referCode,
			};
		});
		sessionStorage.removeItem('levelSelected');
	};
	const handleSubmit = () => {
		// console.log(formData);
		!Object.values(formData).includes('') &&
			sessionStorage.removeItem('levelSelected');
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
						formData.LEVEL === 'Platinum'
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
						formData.LEVEL === 'Diamond'
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
						formData.LEVEL === 'Silver'
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
			<form
				action="https://formsubmit.co/Infomayegunsresort@gmail.com"
				method="POST"
			>
				<div>
					<input
						type="text"
						name="LEVEL"
						value={formData.LEVEL}
						required
						ref={levelRef}
						className={styles.level}
						onChange={(e: any) =>
							setformData(prev => {
								return {...prev, level: e.target.value};
							})
						}
					/>
					<label htmlFor="firstName">First Name</label>
					<input
						type="text"
						name="FIRST_NAME"
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
						name="LAST_NAME"
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
						name="EMAIL"
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
						name="PHONE_NO"
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
						name="AGE"
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
						name="OCCUPATION"
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
						name="HOME_ADDRESS"
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
						name="OFFICE_ADDRESS"
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
						name="ACC_NO"
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
						name="ACC_NAME"
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
						name="BANK_NAME"
						id="bankName"
						placeholder="Enter your bank name here"
						required
						onChange={(e: any) => {
							setformData(prev => {
								return {...prev, [e.target.name]: e.target.value};
							});
						}}
					/>
					{/* <label htmlFor="referCode">Refer Code</label> */}
					<input
						type="text"
						name="REFER_CODE"
						id="referCode"
						value={formData.REFER_CODE}
						readOnly
					/>
				</div>
				<input
					type="hidden"
					name="_next"
					value={'https://mayegunsroyalresort.com/congrats'}
				/>
				<input
					type="hidden"
					name="_subject"
					value="Mayegun Royal Resorts Member Reserve"
				/>
				<input type="hidden" name="_captcha" value="false" />
				<Button title="Subscribe" type="submit" onClick={handleSubmit} />
			</form>
		</main>
	);
};

export default Subscribe;
