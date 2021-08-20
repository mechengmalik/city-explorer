
import React from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherDay from "./WeatherDay.js"

class Weather extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (



            this.props.data.map((item, i) => <WeatherDay

                key={i}
                date={item.date}
                description={item.description} />

            )







        )



    }

}


export default Weather;


