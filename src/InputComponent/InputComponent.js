import React from 'react';

import './InputComponent.css'

const InputComponent = (props) => {	

	return(
		<div className="InputComponent">
			<div>
				Start Date: <input 
								type="date" 
								onChange={props.onStartDateChanged}/>
			</div>
			<div>
				Number of days: <input 
								  type="number" 
								  onChange={props.onNumberOfDaysChanged}
								  min="1"/>
			</div>
			<div>
				Country Code: <input 
								type="text" 
								onChange={props.changed} 
								value={props.name}/>
			</div>
		</div>
	) 
}

export default InputComponent;