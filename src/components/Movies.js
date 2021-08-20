import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './Movie';


class Movies extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (



            this.props.data.map((item, i) => <Movie

                key={i}
                
                movieData = {item} />

            )







        )



    }













}



export default Movies;