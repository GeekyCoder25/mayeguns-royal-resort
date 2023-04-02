'use client';
import {useEffect, useState} from 'react';
import styles from '../styles/page.module.scss';
import {backgroundImagesUrl, homeModalValues} from '../utils/dataStorage';
import Button from './Button';
const MainBg = ({modal, title, content}: any) => {
	const [imageIndex, setImageIndex] = useState(0);
	useEffect(() => {
		setTimeout(() => {
			imageIndex >= 5 ? setImageIndex(0) : setImageIndex(prev => prev + 1);
		}, 3500);
	}, [imageIndex]);

	const whatsappNo = '09043999871';

	return (
		<section
			className={`${styles.imageBgContainer} ${
				modal ? styles.imageBgModalShow : undefined
			}`}
		>
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
							<div>
								<p>{item.title}</p>
								<span>
									{
										item.value
											?.toLocaleString()
											.replaceAll('/', '-')
											.split(',')[0]
									}
								</span>
							</div>
							<img src={`/images/${item.icon}.svg`} alt="" />
						</div>
					))}
					<Button
						type="button"
						title="Reserve"
						height={80}
						onClick={() => {
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
