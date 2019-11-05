import React from 'react';
import RemoveBuilding from './RemoveBuilding';

class BuilingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText} = this.props;

		const buildingList = data
		.filter(directory=>{
			//filter method returns -1 for elements(filtertext value) not in the data array
			return (directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 || directory.code.toLowerCase().indexOf(filterText.toLowerCase()) >= 0)
		})	
		.map(directory => {

			return (
				<tr 
					key={directory.id}					
					onClick={() => {
						this.props.selectedUpdate(directory.id);}}
						
				>		
					<td>{directory.code} </td>
					<td> {directory.name} </td>

				<td>
				<RemoveBuilding
					id={directory.id}
					removeBuilding={this.props.removeBuilding.bind(this)}
				/>
				</td>
					
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
