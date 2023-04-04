'use client';
import Button from '../components/Button';

const Congrats = () => {
	const whatsappNo = '09043999871';
	return (
		<div className="congrats max-page-width">
			<h1>CONGRATULATIONS!!!</h1>
			<p>
				Thank you for subscribing to Mayegun Royal Resorts, kindly proceed to
				our whatsapp platform to make payment via one of our representative
			</p>
			<Button
				title="Send us a message"
				type="button"
				onClick={() => {
					//@ts-ignore
					window.open(`https://wa.me/${whatsappNo}`);
				}}
			/>
		</div>
	);
};

export default Congrats;
