'use client';
import Button from '../components/Button';
import {whatsappNo} from '../utils/dataStorage';

const Congrats = () => {
	return (
		<div className="congrats max-page-width">
			<h2>CONGRATULATIONS!!!</h2>
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
