  
import React from 'react';

class AddBuilding extends React.Component {
    render() {
      return (
        <div>
            <h2>Add a building here</h2>
          <form id="newBuilding">
            <label>  Code: <input name="code" id = "buildingForm" ></input> </label>
            <label> Name: <input name="name" id = "buildingForm"></input> </label>
            <p>Address: <input name="address" id = "buildingForm" ></input></p>            
            <label> Latitude: <input name="lat" id = "buildingForm"></input> </label>
            <label> Longitude: <input name="long" id = "buildingForm" ></input> </label>
                 
          </form>


          <button className="addBtn" onClick={() => this.props.addBuilding( 
            document.getElementById("newBuilding").elements["code"].value,
            document.getElementById("newBuilding").elements["name"].value,
            document.getElementById("newBuilding").elements["lat"].value,
            document.getElementById("newBuilding").elements["long"].value,
            document.getElementById("newBuilding").elements["address"].value)}
            > Add Building </button>

         
        </div>  
        
      );
    }
  }

  export default AddBuilding;