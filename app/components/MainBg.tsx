/* eslint-disable @next/next/no-img-element */
'use client';
import {useEffect, useState} from 'react';
import styles from '../styles/page.module.scss';
import {
	backgroundImagesUrl,
	homeModalValues,
	whatsappNo,
} from '../utils/dataStorage';
import Button from './Button';
const MainBg = ({modal, title, content}: any) => {
	const [imageIndex, setImageIndex] = useState(0);
	const [checkArray, setcheckArray] = useState<string[]>([]);
	const [ErrorMesaage, setErrorMesaage] = useState(false);
	useEffect(() => {
		//@ts-ignore
		const selectedImage = document.querySelectorAll(
			`.${styles.imageBgContainer} > div > img`
		);
		const bgTimeout = setTimeout(() => {
			imageIndex >= backgroundImagesUrl.length - 1
				? setImageIndex(0)
				: setImageIndex(prev => prev + 1);
			selectedImage.forEach((element: any) => {
				element.classList.remove(styles.img);
			});
			selectedImage[imageIndex].classList.add(styles.img);
		}, 3500);
		return () => {
			clearTimeout(bgTimeout);
		};
	}, [imageIndex]);

	const handlePicker = (e: any, item: any) => {
		item.title === 'Guests'
			? e.target.parentElement.parentElement.firstChild.classList.add(
					styles.input
			  )
			: e.target.parentElement.parentElement.firstChild.showPicker();
		e.target.parentElement.firstChild.focus();
	};

	const guestsNumber = Number(homeModalValues[2].value);

	return (
		<section
			className={`${styles.imageBgContainer} ${
				modal ? styles.imageBgModalShow : undefined
			}`}
		>
			<div>
				{backgroundImagesUrl.map(element => (
					<img src={`/images/${element}.jpg`} alt="" key={element} />
				))}
			</div>
			<div className={styles.imageBgText}>
				<div>{title}</div>
				<p>{content}</p>
			</div>
			{modal && (
				<>
					<div className={styles.imageBgModal}>
						{homeModalValues.map(item => (
							<div key={item.title}>
								<input
									type={item.title === 'Guests' ? 'number' : 'date'}
									name={item.title}
									id={item.title}
									defaultValue={
										item.title === 'Guests' ? item.value : undefined
									}
									onChange={e => {
										setErrorMesaage(false);
										item.value = e.target.value.split('-').reverse().join('-');
									}}
									onKeyUp={e => {
										item.title === 'Guests' &&
											e.key === 'Enter' &&
											//@ts-ignore
											e.target.parentElement.firstChild.classList.remove(
												styles.input
											);
									}}
									onBlur={e => {
										setErrorMesaage(false);
										item.title === 'Guests' &&
											//@ts-ignore
											e.target.parentElement.firstChild.classList.remove(
												styles.input
											);
										e.target.value !== '' &&
											!checkArray.includes(item.title) &&
											setcheckArray(prev => [...prev, item.title]);
									}}
								/>
								<div>
									<p>{item.title}</p>
									<span>{item.value}</span>
								</div>
								<label htmlFor={item.title}>
									<img
										src={`/images/${item.icon}.svg`}
										alt=""
										onClick={e => handlePicker(e, item)}
									/>
								</label>
							</div>
						))}
						<Button
							type="button"
							title="Reserve"
							height={80}
							onClick={() => {
								checkArray.length >= 3
									? //@ts-ignore
									  window.open(
											`https://wa.me/${whatsappNo}?text=Hi%2C%20I'm%20interested%20in%20making%20payment%20for%20reservation%20between%20${
												homeModalValues[0].value
											}%20to%20${homeModalValues[1].value}%20for%20${
												homeModalValues[2].value
											}%20guest${guestsNumber > 1 ? 's' : ''}`
									  )
									: setErrorMesaage(true);
							}}
						/>
						{ErrorMesaage && (
							<span className={styles.errorText}>
								Input all required fields first
							</span>
						)}
					</div>
				</>
			)}
		</section>
	);
};

export default MainBg;
