import React from 'react';

const Reserve = () => {
	const whatsappNo = '+2349043999871';
	return (
		<section className="reserve">
			<div></div>
			<h2>For reservation and enquiries</h2>
			<h2>(WhatsApp only)</h2>
			<p>{whatsappNo}</p>
			<a href={`https://wa.me/${whatsappNo}`} target="_blank">
				Send us a message
			</a>
		</section>
	);
};

export default Reserve;
