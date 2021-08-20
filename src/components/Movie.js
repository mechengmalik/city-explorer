import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'

class Movie extends React.Component {


    render() {
        return (
            <div>
                {this.props.show &&
                    this.props.data.map((movieData, i) => {
                        return (
                            <>
                               
                                <Card key={i} style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={movieData.image_url} />
                                    <Card.Body>

                                        <Card.Text>Movie title:{movieData.title}</Card.Text>
                                        <Card.Text>Overview:{movieData.overview}</Card.Text>
                                        <Card.Text>AVG votes:{movieData.average_votes}</Card.Text>
                                        <Card.Text>Total Votes:{movieData.total_votes}</Card.Text>
                                        <Card.Text>Popularity:{movieData.popularity}</Card.Text>
                                        <Card.Text>Released On:{movieData.released_on}</Card.Text>

                                    </Card.Body>
                                </Card>
                            </>
                        )
                    })
                }
            </div>
        )
    }


}
export default Movie;