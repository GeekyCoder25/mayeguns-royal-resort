'use client';
import React, {useRef, useState} from 'react';

const Video = ({styles}: any) => {
	const [playButton, setPlayButton] = useState(true);
	const videoRef = useRef<HTMLVideoElement>(null);

	return (
		<div className={styles.video}>
			{playButton && (
				<div
					className={styles.pause}
					onClick={() => {
						//@ts-ignore
						videoRef.current?.play();
					}}
				>
					<img src="/images/play.svg" alt="" />
				</div>
			)}
			<video
				controls
				ref={videoRef}
				onPause={() => setPlayButton(true)}
				onPlay={() => setPlayButton(false)}
			>
				<source src="/vid/video.mp4" type="video/mp4" />
			</video>
		</div>
	);
};

export default Video;
