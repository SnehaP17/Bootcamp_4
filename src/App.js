import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';


class App extends React.Component 
{
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      data: this.props.data,   //data keeps changing so it is a state
      numberOfListings: this.props.data.length + 1 //to change
    };
  }

  filterUpdate(value) 
  {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({filterText: value});
  }

  selectedUpdate(id) 
  {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({selectedBuilding: id});
  }

  addBuilding(code, name, lat, long, address)  
  {

    let building = {
      code: code,
      name: name,
      address: null,
      id: null,
      coordinates: {
        latitude: null,
        longitude: null
      }
     
    }

    console.log("data", this.state.data)

   
    //updating if coordinates and address were mentioned
    if (lat.length != 0) 
    building.coordinates.latitude = lat
    if (long.length != 0) 
    building.coordinates.longitude = long
    if (address.length != 0)
     building.address = address

    var lastElement = this.state.data[this.state.data.length - 1]
    var lastIndex = lastElement.id
    console.log("last index" ,lastIndex)
    var newList = this.state.data

    

     //name and code are mandatory fields to add a new listing
    
     if (building.code.length != 0 && building.name.length != 0) 
     {
       building.code = code
       building.name = name
       building.id = lastIndex+1
       //Update list
       newList.push(building)
       this.setState({
        data: newList
      })

      console.log("newlist length", newList.length)
     }
    
  }

  removeBuilding(removeId) 
  {
    var newList = this.state.data
    var index = newList.findIndex(listing => {
      return listing.id === removeId})
    newList.splice(index,1)
    this.setState({
      data: newList
    })
    console.log("delete newlist length", newList.length)

  }

  render() 
  {
    return (
      <div className="bg">        
        <div className="row">
          <h1>UF Directory App</h1>
        </div>
        <Search
         filterText={this.state.filterText}
         filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.data}
                    filterText = {this.state.filterText}
                    selectedBuilding={this.state.selectedBuilding}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    removeBuilding={this.removeBuilding.bind(this)}
                  />                  
                </table>
              </div>
            </div>

            <div className="column2">
              <ViewBuilding 
                data={this.state.data}
                selectedBuilding={this.state.selectedBuilding}
              />
              <AddBuilding 
                addBuilding={this.addBuilding.bind(this)}
               />
  
            </div>

          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
