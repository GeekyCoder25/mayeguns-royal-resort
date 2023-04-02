import React from 'react';
import styles from '../styles/CustomHeader.module.scss';

const CustomHeader = ({title, content}: {title: string; content: string}) => {
	return (
		<div className={styles.header}>
			<h2>{title}</h2>
			<p>{content}</p>
		</div>
	);
};

export default CustomHeader;
