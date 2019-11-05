import React from 'react';

class RemoveBuilding extends React.Component {
    render() {
        const {removeBuilding, id} = this.props
      
        return (
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                    <button className="btn" onClick={() => removeBuilding(id)}><i className="fa fa-trash"></i></button>
            </div>
        )
    }
  }

  export default RemoveBuilding;