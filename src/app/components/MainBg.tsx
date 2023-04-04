/* eslint-disable @next/next/no-img-element */
'use client';
import {useEffect, useState} from 'react';
import styles from '../styles/page.module.scss';
import {backgroundImagesUrl, homeModalValues} from '../utils/dataStorage';
import Button from './Button';
const MainBg = ({modal, title, content}: any) => {
	const [imageIndex, setImageIndex] = useState(0);
	const [formData] = useState(homeModalValues);
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
		item.title === 'Guests' && e.target.parentElement.firstChild.focus();
	};

	const whatsappNo = '09043999871';

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
				<div className={styles.imageBgModal}>
					{homeModalValues.map(item => (
						<div key={item.title}>
							<input
								type={item.title === 'Guests' ? 'number' : 'date'}
								name={item.title}
								id={item.title}
								defaultValue={item.title === 'Guests' ? item.value : undefined}
								onChange={e => {
									//@ts-ignore
									item.value = e.target.value.split('-').reverse().join('/');
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
									//@ts-ignore
									e.target.parentElement.firstChild.classList.remove(
										styles.input
									);
								}}
							/>
							<div>
								<p>{item.title}</p>
								<span>
									{item.value
										//@ts-ignore
										.replaceAll('/', '-')}
								</span>
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
							console.log(formData);
							//@ts-ignore
							window.open(`https://wa.me/${whatsappNo}`);
						}}
					/>
				</div>
			)}
		</section>
	);
};

export default MainBg;
