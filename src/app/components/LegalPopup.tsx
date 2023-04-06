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
		sessionStorage.getItem('popUpClosed')
			? setShowModal(false)
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
					sessionStorage.setItem('popUpClosed', true);
					setShowModal(false);
				}}
			></i>
		</aside>
	) : (
		<div></div>
	);
};

export default LegalPopup;
