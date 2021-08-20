
import React from 'react';
import { Card } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


class Weather extends React.Component{

    render(){
        return(
            <div>
                {this.props.show &&
                this.props.data.map((item,i)=>{
                    return(
                        <Card key={i} style= {{width :'20rem'}}>
                            <Card.Body>

                                <Card.Text>date: {item.date}</Card.Text>
                                <Card.Text>description: {item.description}</Card.Text>

                            </Card.Body>
                        </Card>
                    )
                })
            }
            </div>
        )
    }

}


export default Weather;


