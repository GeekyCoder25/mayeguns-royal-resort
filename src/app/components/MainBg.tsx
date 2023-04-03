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
		setTimeout(() => {
			imageIndex >= 5 ? setImageIndex(0) : setImageIndex(prev => prev + 1);
		}, 3500);
	}, [imageIndex]);
	const handlePicker = (e: any, item: any) => {
		item.title === 'Guests'
			? e.target.parentElement.firstChild.classList.add(styles.input)
			: e.target.parentElement.firstChild.showPicker();
	};

	const whatsappNo = '09043999871';

	return (
		<section
			className={`${styles.imageBgContainer} ${
				modal ? styles.imageBgModalShow : undefined
			}`}
		>
			{/* <img src="/images/homeBg2.jpg" alt="" />
			<img src="/images/homeBg1.jpg" alt="" />
			<img src="/images/homeBg3.jpg" alt="" />
			<img src="/images/homeBg4.jpg" alt="" />
			<img src="/images/homeBg6.jpg" alt="" />
			<img src="/images/homeBg5.jpg" alt="" /> */}
			<div>
				<div
					className={styles.imageBg}
					style={{
						backgroundImage: `url(/images/${backgroundImagesUrl[imageIndex]}.jpg)`,
					}}
				></div>
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
							<img
								src={`/images/${item.icon}.svg`}
								alt=""
								onClick={e => handlePicker(e, item)}
							/>
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
