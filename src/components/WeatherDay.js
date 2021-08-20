import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class WeatherDay extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div>

                <p>Date: {this.props.data.date}</p>
               <p>Description : {this.props.data.description}</p>  

            </div>
        )
    }
}

export default WeatherDay;
