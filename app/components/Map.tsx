/* eslint-disable @next/next/no-img-element */
'use client';
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({text}: any) => <div>{text}</div>;

// export default function SimpleMap() {
// 	const defaultProps = {
// 		center: {
// 			lat: 10.99835602,
// 			lng: 77.01502627,
// 		},
// 		zoom: 11,
// 	};
// 	return (
// 		// Important! Always set the container height explicitly
// 		<div style={{height: '100vh', width: '100%'}}>
// 			<GoogleMapReact
// 				bootstrapURLKeys={{key: ''}}
// 				defaultCenter={defaultProps.center}
// 				defaultZoom={defaultProps.zoom}
// 				yesIWantToUseGoogleMapApiInternals
// 			>
// 				<AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
// 			</GoogleMapReact>
// 		</div>
// 	);
// }

export const LocalMap = () => {
	const mapUrl =
		'https://www.google.com/maps/place/Mayegun+Royal+Resort/@6.8232636,3.9373078,16.81z/data=!4m6!3m5!1s0x10396f021c6acc55:0xaf2247f21a179ce3!8m2!3d6.8234669!4d3.9379903!16s%2Fg%2F11spwzg167';
	return (
		<>
			<div
				onClick={() => {
					//@ts-ignore
					window.open(mapUrl);
				}}
			>
				<button>Get direction</button>
			</div>
			<img
				src="/images/map.png"
				alt=""
				onClick={() => {
					//@ts-ignore
					window.open(mapUrl);
				}}
			/>
		</>
	);
};
