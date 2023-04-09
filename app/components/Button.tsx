import React, {MouseEventHandler} from 'react';

const Button = ({
	type,
	title,
	width,
	height,
	onClick,
}: {
	type: 'button' | 'submit' | 'reset' | undefined;
	title: string;
	width?: number;
	height?: number;
	onClick?: MouseEventHandler;
}) => {
	return (
		<button
			type={type}
			className="button"
			style={{width, height}}
			onClick={onClick}
		>
			{title}
		</button>
	);
};

export default Button;
