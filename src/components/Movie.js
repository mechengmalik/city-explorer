import React from "react";
import {Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


class Movie extends React.Component{
    render(){
        return(
            <div>
                <Card.Img
                variant = "top"
                src={this.props.movieData.image_url}
                alt=""
                />
                <Card.Body>
                    <Card.Title>
                        {this.props.title}
                    </Card.Title>
                    <Card.Text>
                        {this.props.movieData.overview}
                    </Card.Text>
                    <Card.Text>
                        avg Votes :{this.props.movieData.average_votes}
                    </Card.Text>
                    <Card.Text>Total Votes : {this.props.movieData.total_votes}</Card.Text>
                    <Card.Text>Popularity : {this.props.movieData.popularity}</Card.Text>
                    <Card.Text>Released On: {this.props.movieData.released_on}</Card.Text>
                   


                
                </Card.Body>
            </div>
        )
    }
}

export default Movie;