import React from 'react';

import './InputComponent.css'

const InputComponent = (props) => {	

	return(
		<div className="inputComponent">
			<div className="input">
				Start Date: <input 
								type="date" 
								onChange={props.onStartDateChanged}/>
			</div>
			<div className="input">
				Number of days: <input 
								  type="number" 
								  onChange={props.onNumberOfDaysChanged}
								  min="1"
								  value={props.numberOfDays}/>
			</div>
			<div className="input">
				Country Code: <input 
								type="text" 
								onChange={props.changed} 
								value={props.name}/>
			</div>
		</div>
	) 
}

export default InputComponent;