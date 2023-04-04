'use client';
import {useEffect, useState} from 'react';
import Button from './Button';
import {useRouter, usePathname} from 'next/navigation';

const LegalPopup = () => {
	const [showModal, setShowModal] = useState(false);
	const pathname = usePathname();
	const navigation = useRouter();
	useEffect(() => {
		//@ts-ignore
		localStorage.getItem('popUpClosed')
			? setShowModal(true)
			: setShowModal(true);
	}, [pathname]);
	return showModal ? (
		<aside className="popup">
			<h2>Read about our legal and policies</h2>
			<Button
				title="Go to Legal & Policy"
				type="button"
				onClick={() => {
					navigation.push('/legal-policies');
				}}
			/>
			<i
				className="fas fa-xmark"
				onClick={() => {
					//@ts-ignore
					localStorage.setItem('popUpClosed', true);
					setShowModal(false);
					setTimeout(() => {
						//@ts-ignore
						localStorage.removeItem('popUpClosed');
					}, 18000000);
				}}
			></i>
		</aside>
	) : (
		<div></div>
	);
};

export default LegalPopup;
