'use client';
const Input = () => {
	return (
		<div className="test">
			<input type="date" name="fir" id="fir" />
			<input type="datetime" name="sec" id="sec" />
			<input type="date" name="thi" id="thi" />
			<label htmlFor="thi">label</label>
			<p
				onClick={(e: any) => {
					e.target.parentElement.firstChild.showPicker();
				}}
			>
				third party
			</p>
			<input type="date" name="five" id="five" className="four" />
			<p
				onClick={(e: any) => {
					e.target.previousElementSibling.showPicker();
				}}
			>
				vivibility
			</p>
			<p
				onClick={(e: any) => {
					e.target.parentElement.lastChild.showPicker();
				}}
			>
				last party
			</p>
			<input type="date" name="last" id="last" className="last" />
		</div>
	);
};

export default Input;
