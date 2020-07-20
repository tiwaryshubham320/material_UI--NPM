import React,{useState} from "react";
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import LocalAirportIcon from '@material-ui/icons/LocalAirport';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Clock from 'react-digital-clock';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const App = () => {
	const [itemVal, updateVal] = useState(0);
	
	const inc = () => {
		updateVal(itemVal+1);
	}
	
	const dec = () => {
		if (itemVal == 0)
		{
			alert("can't decrement beyond 0");
		}
		else
		updateVal(itemVal-1);
	}
	return(
		<>
			<div className="outer">
				<h1> {itemVal} </h1>
				<div className="inner">
					<Tooltip title="Increment" >
						<Button variant="contained"  className="b1" onClick={inc} color="secondary"> <DirectionsCarIcon /> </Button>
					</Tooltip>
					<Tooltip title="Decrement" >
						<Button variant="contained" className="b1" onClick={dec} color="secondary"> <LocalAirportIcon /> </Button>
					</Tooltip>
				</div>
				<Clock />
			
				<CountdownCircleTimer
					isPlaying
					duration={10}
					colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
				>
					{({ remainingTime }) => remainingTime}
				</CountdownCircleTimer>

			</div>
		</>
	);
}

export default App;