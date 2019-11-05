import React from 'react';

class ViewBuilding extends React.Component {
	render() 
	{
		//selectedBuilding contains id of the selected building
		const {data,selectedBuilding} = this.props; 
		console.log({selectedBuilding})

		const building = data.filter(directory=>{
			//filter to find the building
			return (directory.id == selectedBuilding)
			
		});

		if(building[0])
		{
					if (building[0].hasOwnProperty('coordinates'))
					{			
						return(
						<div>
							
							<p>Additional Information</p>
							<p>Building: <b>{building[0].name}</b></p>
									<p>Coordinates:-</p>
									<p> Latitude: {building[0].coordinates.latitude} {' '} {','} {' '}
										Longitude: {building[0].coordinates.longitude}
									</p>
											
									<p>Address: {building[0].address}</p>
						
							
						</div>
						);

					}

					else if(building[0].hasOwnProperty('address'))
					{
						return(
							<div>
								
								<p>Additional Information</p>
								<p>Building: <b>{building[0].name}</b></p>
								<p>Address: {building[0].address}</p>
						
						</div>
						);

					}

					else
					{

						return(
							<div>					
								<p>Additional Information</p>
								<p>Building: <b>{building[0].name}</b></p>				  
						</div>
						);	
	
					}
					
		}
				
		return(<i>Click on a name to view more information</i>);	
				
			
	}

	
}
export default ViewBuilding; 
